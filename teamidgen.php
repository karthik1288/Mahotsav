<?php
	
	//Include database connection details
	require_once('connect.php');

	//vmid generation
	$table="null";
	function generateid($tab)
	{
		$vmid="VM11T";
		$start=5123;
		$query = "select * from ".$tab;
		$result = mysql_query($query) or die("Unable To Retrieve Details");
		$num=mysql_num_rows($result);
		if($num==0)
		{
			//print "enterd in if";
			return $vmid.$start;
		}
		else
		{
			$num+=$start;
			$num++;
			return $vmid.$num;
		}

	}

	//Function to sanitize values received from the form. Prevents SQL injection
	function clean($str) {
		$str = @trim($str);
		if(get_magic_quotes_gpc()) {
			$str = stripslashes($str);
		}
		return mysql_real_escape_string($str);
	}

	//Personal Details
	$evntname=clean($_POST['evnt']);
	$team1=substr($evntname,0,1);
	$team1=($team1==0)?10:$team1;
	$teamhead=clean($_POST['tmhead']);
	$teamids=$teamhead;
	for($i=1;$i<$team1;$i++)
	{
		$arr[$i]=clean($_POST['tm'.$i]);
		$teamids.=",".$arr[$i];
	}

   $tableid=substr($evntname,3,3);
   
	switch($tableid)
	{
		case 'cul':$table="cultural";
					break;
		case 'lit':$table="literary";
					break;
		case 'tec':$table="technical";
					break;
		case 'spm':$table="sports";
					break;
		case 'spw':$table="sports";
					break;
		case 'fna':$table="fine_arts";
					break;
	}

	$vmid=generateid($table);
	$evnt=substr($evntname,6,50);
	$quer="select college from student where vmid='".$teamhead."'";
	$result1 = mysql_query($quer) or die("Unable To Retrieve Details");
	$row1=mysql_fetch_row($result1);
	$col=$row1[0];
	$quer ="insert into ".$table." values('".$vmid."','".$teamids."','".$evnt."','".$col."',NOW())";
	mysql_query($quer) or die("Unable to Insert Your Details");
	mysql_close($connect);
	?>
	<html>
	<body bgcolor="e5e5e5">
	<font size='3' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Your Team Has Successfully Registered for the Event - <?php echo $evnt;?>(<?php echo $table;?>)</font>
	</body>
	</html>
