/***************************/
//@Author: Adrian "yEnS" Mato Gondelle &amp;amp;amp; Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!
/***************************/

$(document).ready(function(){
	$(".menu > li").click(function(e){
		switch(e.target.id){
			case "new_project":
				//change status &amp;amp;amp; style menu
				$("#new_project").addClass("active");
				$("#my_projects").removeClass("active");
				$("#about").removeClass("active");
				$("#contact").removeClass("active");
				//display selected division, hide others
				$("div.new_project").fadeIn(600);
				$("div.my_projects").css("display", "none");
				$("div.about").css("display", "none");
				$("div.contact").css("display", "none");
			break;
			case "my_projects":
				//change status &amp;amp;amp; style menu
				$("#my_projects").addClass("active");
				$("#new_project").removeClass("active");
				$("#about").removeClass("active");
				$("#contact").removeClass("active");
				//display selected division, hide others
				$("div.my_projects").fadeIn(600);
				$("div.new_project").css("display", "none");
				$("div.about").css("display", "none");
				$("div.contact").css("display", "none");
			break;
			case "about":
				//change status &amp;amp;amp; style menu
				$("#about").addClass("active");
				$("#my_projects").removeClass("active");
				$("#new_project").removeClass("active");
				$("#contact").removeClass("active");
				//display selected division, hide others
				$("div.about").fadeIn(600);
				$("div.new_project").css("display", "none");
				$("div.my_projects").css("display", "none");
				$("div.contact").css("display", "none");
			break;
				case "contact":
				//change status &amp;amp;amp; style menu
				$("#contact").addClass("active");
				$("#my_projects").removeClass("active");
				$("#about").removeClass("active");
				$("#new_project").removeClass("active");
				//display selected division, hide others
				$("div.contact").fadeIn(600);
				$("div.new_project").css("display", "none");
				$("div.my_projects").css("display", "none");
				$("div.about").css("display", "none");
			break;
		}
		//alert(e.target.id);
		return false;
	});
});
