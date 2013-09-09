<?php
	
	include("connect.php");	
		
	$result = mysql_query("SELECT name FROM project");
	
	echo "<div class='header2'>Detaljerad projektinfo</div>";
	echo "<select name='projectDropDownMenu' id='dropdown' onchange='getProjectFromDropDown()'>";
	echo "<option value='preselect'>--Välj projekt--</option>";
	while($row = mysql_fetch_array($result))
		{
			$name = $row['name'];	
			echo "<option value=";
			echo $name;
			echo ">";
			echo $name;
			echo "</option>";
		}
	echo "</select>";
?>