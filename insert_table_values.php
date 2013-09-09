<?php

	include("connect.php");	
	
	$project = $_GET['project'];
	$hours = $_GET['hours'];
	$date = $_GET['date'];

	$insert = mysql_query("INSERT INTO registration (name, hours, date)
	VALUES ('$project', '$hours', '$date')");
	
	echo "<tr>";
	echo "<td>";
	echo $date;
	echo "</td>";
	echo "<td>";
	echo $hours;
	echo "</td>";
	echo "</tr>";

?>