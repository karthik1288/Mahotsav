<?php
	//Start session
	session_start();
			
	//Include database connection details
	require_once('connect.php');
	

	
	//Function to sanitize values received from the form. Prevents SQL injection
	function clean($str) {
		$str = @trim($str);
		if(get_magic_quotes_gpc()) {
			$str = stripslashes($str);
		}
		return mysql_real_escape_string($str);
	}
	
	//Sanitize the POST values
	$vmid = clean($_POST['vmid']);
	$password = clean($_POST['password']);
	
	//Input Validations
	if($vmid == '') {
		$errmsg_arr[0] = 'VM ID missing';
		$errflag = true;
	}
	if($password == '') {
		$errmsg_arr[1] = 'Password missing';
		$errflag = true;
	}
	//If there are input validations, redirect back to the login form
	if($errflag) {
		$_SESSION['ERRMSG_ARR'] = $errmsg_arr[0]."".$errmsg_arr[0];
		session_write_close();
		header("location: login-failed.php");
		exit();
	}
	
	//Create query
	$qry="SELECT * FROM student WHERE vmid='".$vmid."' AND password='".md5($_POST['password'])."'";
	$result=mysql_query($qry);
	
	//Check whether the query was successful or not
	if($result) {
		if(mysql_num_rows($result) == 1) {
			//Login Successful
			session_regenerate_id(false);
			$member = mysql_fetch_assoc($result);
			$_SESSION['vmid'] = $member['vmid'];
			$name=$member['fname'] ." ".$member['lname'] ;
			$_SESSION['name']=$name;
			session_write_close();
			header("location: home.php");
			exit();
		}else {
			//Login failed
			$_SESSION['vmid']='';
			$_SESSION['src']='login-failed.php';
			session_write_close();
			header("location: login-failed.php");
			exit();
		}
	}else {
		die("Query failed");
	}
?>