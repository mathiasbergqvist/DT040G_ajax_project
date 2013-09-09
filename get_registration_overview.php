<?php

	include("connect.php");
	
	$project = $_GET['project'];
	
	$sql = "SELECT hours, date FROM registration WHERE name='$project'";
	$result = mysql_query($sql);
	
	
	
	echo "<table id='overview_registrations' border='1'>";
	echo "<tr>";
	echo "<th>Datum</th>";
	echo "<th>Arbetade timmar</th>";
	echo "</tr>";
	
	while($row = mysql_fetch_array($result))
		{
			echo "<tr>";
			echo "<td>";
			echo $row['date'];
			echo "</td>";
			echo "<td>";
			echo $row['hours'];
			echo "</td>";
			echo "</tr>";
		}
	
	echo "<br  /><hr style='margin-left: 0px'/><br  />";
	echo "<div class='header2'><div id='heading_name'>";
	echo $project;
	echo "</div></div>";
	echo "<br  /><div class='header2'>Ny registrering</div>";
	echo "<div id='new_registration_form'><form>";
	echo "Arbetede timmar: <input type='text' style='float:right' onkeyup='validate_register_hours()' id='project_hours'><div id='hourvalidation_registration'></div><br  />";
	echo "Datum: <input type='text' style='float:right' id='project_date' onkeyup='validate_date()' ><div id='date_validation' ></div><br  />";
	echo "<button type='button' onclick='getRegisterValues()' id='submit_registration_button' disabled='disabled'>Registrera</button>";
	echo "</form></div><br  /><hr style='margin-left: 0px'/>";
	echo "<br  /><div class='header2'>Registrerade timmar</div> <br  />";
?>
