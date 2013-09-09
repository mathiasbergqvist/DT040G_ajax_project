<?php

	include("connect.php");
	 
	echo "<table id='overview_table'>";
	echo "<caption>Projektöversikt</caption>";
	echo "<tr><th class='th_overview_table'>Totalt antal registrerade timmar</th></tr>";
	 
	$sql1 = "SELECT name FROM project";
	$projects = mysql_query($sql1);
	$hours_in_total = 0;
	$hours_all_projects = 0;
	
	while($row1 = mysql_fetch_array($projects))
		{
			$this_project = $row1['name']; 
			$sql2 = "SELECT hours FROM registration WHERE name='$this_project'";
			$hours = mysql_query($sql2);
			$total_hours = 0;
			
			while($row2 = mysql_fetch_array($hours))
				{
					$total_hours += $row2['hours'];
				}
			
			echo "<tr><th class='th_overview_table'>";
			echo $this_project;
			echo "</th><td class='td_overview_table'>";
			echo $total_hours;
			echo "</td></tr>";
			
			$hours_all_projects += $total_hours;
		}
		
	echo "<div style='float:left'>Totalt antal arbetade timmar för alla projekt: </div><div class='strong'>";
	echo $hours_all_projects;
	echo "</div><br />";	
	echo "<div class='header2'>Beräkna totalkostnad för alla projekt</div>";
	echo "Ange timpris: ";
	echo "<input type='text' id='hour_price_all_projects' onkeyup='countTotalPriceAllProjects($hours_all_projects)' />";
	echo "<br /><div style='float:left' id='show_total_price_all_projects'>Totalpris: </div><div class='strong'><div id='total_price_all_projects'></div></div>";
?>