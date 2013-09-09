<?php
    $dbName = "project_db";
	$connection = mysql_connect("localhost", "root", "localhost_pwd");
	if (!$connection)
		{
			die('Kunde inte ansluta med MySQL: ' . mysql_error());
		}
	mysql_select_db($dbName, $connection) or die ("Kunde inte ansluta till databasen");;		
?>