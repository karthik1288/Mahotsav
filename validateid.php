<?php
require_once('connect.php');

function EventValidation($evntname,$rw)
{
	$temp1=$rw[1];
	$pos=strpos($temp1,$evntname);
	if($pos === false) 
		return false;
	else
		return true;
}


$teamid=$_GET['teamheadid'];
$id=$_GET['id'];
$event=$_GET['event'];
$tableatt=substr($event,3,3);
   
	switch($tableatt)
	{
		case 'cul':$evnt="cultural_group_events";
					break;
		case 'lit':$evnt="literary_events";
					break;
		case 'tec':$evnt="technical_events";
					break;
		case 'spm':$evnt="sports_boys_events";
					break;
		case 'spw':$evnt="sports_girls_events";
					break;
		case 'fna':$evnt="fine_art_events";
					break;
	}
$eventname=substr($event,6,50);
$stlen=strlen($eventname);
$quer="select college,".$evnt." from student where vmid='".$teamid."'";
$result=mysql_query($quer);
$num=mysql_num_rows($result);
if($num==1)
{
	$row=mysql_fetch_row($result);
	if(EventValidation($eventname,$row))
	{
		$college=$row[0];
		$quer="select college,".$evnt." from student where vmid='".$id."'";
		$result=mysql_query($quer);
		$num=mysql_num_rows($result);
		if($num==1)
		{
			$row=mysql_fetch_row($result);
				if(EventValidation($eventname,$row))
					{
						$col=$row[0];
						if($college==$col)
								print "true";
						else print "Team Members Should be of Same College";
					}
				else print "Team Member Not Registered For This Event";
		}
		else print "Team Member Not Yet Registered";
	}
	else print "Team Head Not Registered For This Event";
}
else print "Team Head Not Yet Registered";


?>