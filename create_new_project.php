<?php

include("connect.php");

$name = $_GET["name"];
$description = $_GET["description"];
$date = date("Y-m-d");
$hours = $_GET["hours"];

$insert = mysql_query("INSERT INTO project (name, date, description)
VALUES ('$name', '$date', '$description')");

$insert_hours = mysql_query("INSERT INTO registration (name, hours, date)
	VALUES ('$name', '$hours', '$date')");

?>