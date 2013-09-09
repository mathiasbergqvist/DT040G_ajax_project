/**
 * @author Mathias
 */

function getPageHome() //funktionen använder JQuery för att aktivera klasser, css samt att gömma objekt och använda effekten "fadeIn".
{
	$("#my_projects").addClass("active");
	$("#new_project").removeClass("active");
	$("#about").removeClass("active");
	$("#contact").removeClass("active");
	//display selected division, hide others
	$("div.my_projects").fadeIn(600);
	$("div.new_project").css("display", "none");
	$("div.about").css("display", "none");
	$("div.contact").css("display", "none");
	
	$("#overviewAllProjects").hide();
	$("#projectInfo").hide();
	$("#overview").hide();
	$("#overviewAllProjects").fadeIn(800);
}

function showOverviewAllProjects() //funktionen använder JQuery för att gömma objekt och använda effekten "fadeIn".
{
	$("#overviewAllProjects").hide();
	$("#projectInfo").hide();
	$("#overview").hide();
	$("#overviewAllProjects").fadeIn(800);
}

function loadStartPage()
{
	getDataFromServer('get_projects.php', showProjects);
	getDataFromServer('get_statistics.php', showStatistics);
}

function showProjects(XHR)
{
	var showInformation = document.getElementById("allProjects");
	var allProjects = XHR.responseText;
	
	showInformation.innerHTML = allProjects;
}

function showProjectInfo(XHR)
{
	$("#overviewAllProjects").hide();
	$("#projectInfo").hide();
	$("#overview").hide();
	$("#projectInfo").fadeIn(800);

	var projectInfo = document.getElementById("projectInfo");
	var info =  XHR.responseText;
	
	projectInfo.innerHTML = info;
	
}

function getProjectFromDropDown()
{
	var projectName = document.getElementById("dropdown").value;
	var url = "get_project_info.php?project=" + projectName;
	getDataFromServer(url, showProjectInfo);
}

function createProject()
{
	var name = document.getElementById("name").value;
	var hours = document.getElementById("hours").value;
	var description = document.getElementById("description").value;
	
	var url = "create_new_project.php?name=" + name + "&hours=" + hours + "&description=" + description;
	
	getDataFromServer(url, confirmProject);
}

function confirmProject(XHR)
{
	var confirmation = document.getElementById("confirmation");
	confirmation.innerHTML = "Projektet skapat! <a href='index.php'>Tillbaka</a> till översikt.>";
}

function validate_name()
{
	var name = document.getElementById("name").value;
	var hours = document.getElementById("hours").value;
	var feedback = document.getElementById("namevalidation");
	var button = document.getElementById("submitbutton");
	var monster_namn = "^[a-öA-Ö0-9]{4,}$";
	var reg_namn = new RegExp(monster_namn);
	
	
	if(name.length > 2)
	{
		if(reg_namn.exec(name))
		{	
			feedback.innerHTML = "<img src='images/ok_img.jpg'/ alt='ok'>";
	
			if(hours.length != 0 && name.length !=0)
			{
				button.disabled = false;
			}	
		}
		else
		{
			feedback.innerHTML = "Namnet får inte innehålla blankslag eller specailtecken och måste innehålla minst fyra tecken."
			feedback.style.color = "red";
			button.disabled = true;
		}
	}
	else
	{
		button.disabled = true;
		feedback.innerHTML = "";	
	}
}

function validate_hours()
{
	var hours = document.getElementById("hours").value;
	var name = document.getElementById("name").value;
	var feedback = document.getElementById("hourvalidation");
	var button = document.getElementById("submitbutton");
	feedback.innerHTML = "test";
	
	var pattern_numbers = "^[0-9]{0,}$";
	var reg_numbers = new RegExp(pattern_numbers);

	
	if(hours.lenght != 0)
	{
		if(reg_numbers.exec(hours))
		{
			feedback.innerHTML = "<img src='images/ok_img.jpg'/ alt='ok'>";
			if(name.length != 0 && hours.length != 0)
			{
				button.disabled = false;
			}
		}
		else
		{
			feedback.innerHTML = "Fältet får bara bestå av siffror.";
			feedback.style.color = "red";
			button.disabled = true;
		}
	}
	else
	{
		button.disabled = true;
		feedback.innerHTML = "";	
	}
}

function validate_register_hours()
{
	var hours = document.getElementById("project_hours").value;
	var date = document.getElementById("project_date").value;
	var feedback = document.getElementById("hourvalidation_registration");
	var button = document.getElementById("submit_registration_button");
	
	var pattern_numbers = "^[0-9]{0,}$";
	var reg_numbers = new RegExp(pattern_numbers);

	
	if(hours.lenght != 0)
	{
		if(reg_numbers.exec(hours))
		{
			feedback.innerHTML = "<img src='images/ok_img.jpg'/ alt='ok'>";
			if(date.length != 0 && hours.length != 0)
			{
				button.disabled = false;
			}
		}
		else
		{
			feedback.innerHTML = "Fältet får bara bestå av siffror.";
			feedback.style.color = "red";
			button.disabled = true;
		}
	}
	else
	{
		button.disabled = true;
		feedback.innerHTML = "";	
	}
}

function validate_date()
{
	var hours = document.getElementById("project_hours").value;
	var date = document.getElementById("project_date").value;
	var feedback = document.getElementById("date_validation");
	var button = document.getElementById("submit_registration_button");
	
	var pattern_date = "^[0-9]{4}-[0-9]{2}-[0-9]{2}$";
	var reg_date = new RegExp(pattern_date);
	
	if(date.length > 8)
	{
		if(reg_date.exec(date))
		{
			feedback.innerHTML = "<img src='images/ok_img.jpg'/ alt='ok'>";
			if(date.length != 0 && hours.length != 0)
			{
				button.disabled = false;
			}
		}
		else
		{
			feedback.innerHTML = "Datumet måste skrivas in på formatet: ÅÅÅÅ-MM-DD.";
			feedback.style.color = "red";
			button.disabled = true;
		}
	}
	else
	{
		button.disabled = true;
		feedback.innerHTML = "";	
	}
}

function countTotalPrice(hours)
{
	var hourPrice = document.getElementById("hour_price").value;
	var result = document.getElementById("total_price");
	var visualise = document.getElementById("show_total_price");
	
	if(hourPrice.length > 1)
	{
		visualise.style.visibility = "visible";
		var totalPrice = hourPrice*hours;
		result.innerHTML = totalPrice;
			
	}
	if(hourPrice.length <= 1)
	{
		visualise.style.visibility = "hidden";
		result.innerHTML = "";
	}
}

function countTotalPriceAllProjects(hours)
{
	
	var hourPrice = document.getElementById("hour_price_all_projects").value;
	var result = document.getElementById("total_price_all_projects");
	var showResult = document.getElementById("show_total_price_all_projects");
	
	if(hourPrice.length > 1)
	{
		var totalPrice = hourPrice*hours;
		result.innerHTML = totalPrice;
		showResult.style.visibility = "visible";	
	}
	if(hourPrice.length <= 1)
	{
		result.innerHTML = "";
		showResult.style.visibility = "hidden";
	}
}


function createOverview() //funktionen använder JQuery att gömma objekt och använda effekten "fadeIn".
{
	
	$("#overview").hide();
	$("#overview").fadeIn(800);
	var project = document.getElementById("project_name").innerHTML;
	var url = "get_registration_overview.php?project=" + project;
	
	getDataFromServer(url, showOverview);
}

function showOverview(XHR)
{
	var overview = document.getElementById("overview");
	var info =  XHR.responseText;
	overview.innerHTML = info;
}

function getRegisterValues()
{
	var project = document.getElementById("heading_name").innerHTML;
	var hours = document.getElementById("project_hours").value;
	var date = document.getElementById("project_date").value;
	
	url = "insert_table_values.php?project=" + project + "&hours=" + hours + "&date=" + date;
	getDataFromServer(url, updateTable);
}

function updateTable(XHR)
{
	var table = document.getElementById("overview_registrations");
	var new_row = XHR.responseText;
	
	$("#overview_registrations").hide();
	table.innerHTML += new_row;
	$("#overview_registrations").fadeIn(600);
}

function showStatistics(XHR) //funktionen använder JQuery för att skapa ett stapeldiagram med hjälp av en plug in till JQuery som kallas "visualize".
{
	var goal = document.getElementById("overviewAllProjects");
	var info = XHR.responseText;
	
	goal.innerHTML = info;
	
			enhance({
			loadScripts: [
				{src: 'visualize/js/excanvas.js', iecondition: 'all'},
				'visualize/shared/jquery.min.js',
				'visualize/js/visualize.jQuery.js',
				'visualize/js/loadchart.js'
			],
			loadStyles: [
				'visualize/css/visualize.css',
				'visualize/css/visualize-dark.css'
			]	
		}); 
}


