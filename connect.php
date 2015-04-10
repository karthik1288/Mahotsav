<?php
//require_once('config.php');
$connect = mysql_connect('localhost','root','tentimes') or die("Unable to Connect");
$database=mysql_select_db('db_vignan') or die("Unable to select database");
?>