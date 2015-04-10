<?php
session_start();

$vmid = $_SESSION["vmid"];
$psw = $_GET['q'];
require_once('connect.php');

$sql = "SELECT * FROM `student` WHERE vmid = '".$vmid."'";

$result = mysql_query($sql);
if($row = mysql_fetch_array($result))
{
$password= $row['password'];
if(md5($psw) == $password)
	{
	
    echo "true";
	}
	else
	 echo "false";
}
	session_write_close();

	?>