<?php
session_start();
if(isset($_SESSION['vmid']))
	$vmid=$_SESSION['vmid'];
else 
{
	session_write_close();
	header("location:logout.php");
	exit();
}
if($vmid=='')
{
	session_write_close();
	header("location:logout.php");
	exit();
}
$vmid=$_SESSION['vmid'];
$psw = $_POST["psw"];

require_once('connect.php');

$sq = "UPDATE student SET password='".md5($psw)."' WHERE vmid='".$vmid."'";
$result =@mysql_query($sq);
if($result)
{
		$_SESSION['value']="update-success2.php";
	session_write_close();
	header("location:update-success2.php");
}
else
{
	$_SESSION['value']="update-failed.php";
session_write_close();
	header("location:update-failed.php");
}
?>
