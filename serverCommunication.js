/**
 * @author Mathias
 */
function getDataFromServer(url, eventHandler)
{
	var XHRobject = null;
	
	try
	{
		XHRobject = new XMLHttpRequest();
	}
	catch(err1)
	{
		try 
		{
        	XHRobject = new ActiveXObject("Microsoft.XMLHTTP");
     	}
      	catch(err2) 
      	{
        	try 
        	{
          		XHRobject = new ActiveXObject("Msxml2.XMLHTTP");
        	}
        	catch(err3) 
        	{
         	 	XHRobject = false;
	    	}
	  	}
	}
	
	if(XHRobject)
	{
		XHRobject.onreadystatechange = function()
		{
			if(XHRobject.readyState == 4)
			{
				eventHandler(XHRobject);
				delete XHRobject;
				XHRobject = null;
			}
		}
		XHRobject.open("GET", url);
		XHRobject.send(null);
	}
}


