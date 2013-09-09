<?php
 include("connect.php");
 
 $project_name = $_GET["project"];
 $sql = "SELECT * FROM project WHERE name='$project_name'";
 $result = mysql_query($sql);
 $hours = 0;
 
 $all_hours_sql = "SELECT hours FROM registration WHERE name='$project_name'";
 $all_hours_result = mysql_query($all_hours_sql);
 
 while($result_row = mysql_fetch_array($all_hours_result))
 	{
		$hours += $result_row['hours']; 
 	} 

 while($row = mysql_fetch_array($result))
 	{
 		echo "<br /><div style='float:left'>Namn: </div>";
		echo "<div id='project_name' class='strong'>";
		echo $row['name'];
		echo "</div>";
		echo "<div style='float:left'>Totalt antal arbetstimmar: </div><div class='strong'>";
		echo $hours;
		echo "</div><div style='float:left'>Projektet skapades: </div><div class='strong'>";
		echo $row['date'];
		echo "</div><div style='float:left'>Beskrivning: </div><div class='strong'>";
		echo $row['description'];
		echo "</div>";
 	}
	
	echo "<br /><div class='header2'>Beräkna totalkostnad för projektet</div>";
	echo "Ange timpris: ";
	echo "<input type='text' id='hour_price' onkeyup='countTotalPrice($hours)' />";
	echo "<br /><div style='float:left' id='show_total_price'>Totalpris: </div><div id='total_price'></div>";
	echo "<br /><br /><button type='button' id='get_overview_btn' onclick='showOverviewAllProjects()'>Tillbaka till projektöversiken -></button>";
	echo "<br /><br /><button type='button' id='get_overview_btn' onclick='createOverview()'>Se mer/Registrera arbetstimmar -></button>";
?>