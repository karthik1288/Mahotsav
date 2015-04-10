<?php
function clean($str) {
		$str = @trim($str);
		if(get_magic_quotes_gpc()) {
			$str = stripslashes($str);
		}
		return mysql_real_escape_string($str);
	}
	session_start();
	//Include database connection details
	require_once('connect.php');
	$name=clean($_POST['stu_name']);
	$comment=clean($_POST['stu_com']);
	$qry="insert into feedback values('".$name."','".$comment."')";
	//print $qry;
	//mysql_query($qry) or die("Unable to Insert Your Details");
	if (!mysql_query($qry))
	{
	die('Error: ' . mysql_error());
	}
	$value="true";
	$_SESSION['value']=$value;
	header("location:index.php");
//	echo "thnq for ur feedback".$name;
session_write_close();
?>