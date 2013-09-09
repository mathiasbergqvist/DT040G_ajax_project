<!DOCTYPE HTML>

<html>
	<head>
		<title>Projekt DT040G</title>
		<meta charset="utf-8" />
		<script type="text/javascript" src="serverCommunication.js"></script> <!--JavaScript-fil som sköter all asynkron kommunikation mot servern-->
		<script type="text/javascript" src="js_functions.js"></script> <!--Jag har samlat alla JavaScript-funktioner på en extern fil-->
		<script type="text/javascript" src="jquery.js"></script> <!--Bifogar ramverket JQuery-->
		
		<link rel="stylesheet" type="text/css" href="stylesheet.css"/> <!--Min egen stilmall-->
		<link rel="shortcut icon" href="images/icon.png"/>
		
		<link href="visualize/css/basic.css" type="text/css" rel="stylesheet" /> <!--Stilmall till den JQuery-plugin jag använder för att visualisera stapeldiagramet--> 
		<script type="text/javascript" src="visualize/shared/EnhanceJS/enhance.js"></script> <!--Kod för den JQuery-plugin jag använder för att visualisera stapeldiagramet-->	
		
		<script type="text/javascript" src="tabs.js"></script> <!--Script med Query-kod som skapar en navigeringsmeny. Ej egenskriven kod. Credits nämns överst i filen.-->
	
	</head>
	
	<body>
		<div id="pagewrap">
			<div id="bodyshadow">
				<header>
					<div id="pagelink" onclick="getPageHome()"></div>
				</header>
				<div id="container">
					<div id="menubackground">
  					<ul class="menu">   
            			<li id="my_projects" class="active">Mina projekt</li>
            			<li id="new_project">Skapa nytt projekt</li>  
            			<li id="about" >Om oss</li>
            			<li id="contact" >Kontakt</li>  
       				</ul>
       				</div>
       				<span class="clear"></span>   				
       					<div class="content my_projects">
       						<h1>Mina projekt</h1>
       						<hr />
       						<?php 
       							include("my_projects.html"); 
       						?>
       					</div>
       					<div class="content new_project">
       						<h1>Skapa nytt projekt</h1>
       						<hr />
       						<?php
       							include("new_project.html");
       						?>
       					</div>
						<div class="content about">
							<h1>Om oss</h1>
							<hr />
							<?php
								include("about.html");
							?>
						</div>
						<div class="content contact">
							<h1>Kontakt</h1>
							<hr />
							<?php
								include("contact.html");
							?>
						</div>
				</div>
			</div>
			<div id="footer">
				<div id="footertext">
					<p>Copyright &copy; 2011, Project Manager. Immaterialrätt. Design av Mathias Bergqvist.</p>
				</div>
			</div>
		</div>
	</body>
</html>