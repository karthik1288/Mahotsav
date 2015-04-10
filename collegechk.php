<?php
require_once('connect.php');
$clgid=$_GET["clgid"];
//echo $clgid;
$query="select regdno from student where regdno='".$clgid."'";
$result = mysql_query($query) or die("Unable to GET Your Details");
$num=mysql_num_rows($result);
//echo $num;
		if($num==1)
		{
			print "true";
		}
		else
			print "false";
?>