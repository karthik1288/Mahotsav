<?php
	//Start session
	session_start();
	
	//Include database connection details
	
	require_once('connect.php');
	//vmid generation
	function generateid()
	{
		$vmid="VM11";
		$start=51234;
		$query = "select * from student";
		$result = mysql_query($query) or die("Unable to Insert Your Details");
		$num=mysql_num_rows($result);
		if($num==0)
		{
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

	$fname=clean($_POST['fname']);
	$cid=clean($_POST['cid']);
	$lname=clean($_POST['lname']);
	$branch=clean($_POST['branch']);
	$gender= clean($_POST['gender']);
	$state=clean($_POST['state']);
	$phno='';
	$phno=clean($_POST['phno']);


	
	
	$city=clean($_POST['city']);
	$email=clean($_POST['email']);
	$college='';
	if(isset($_POST['college']))
		$college=clean($_POST['college']);
	$password=md5(clean($_POST['psw']));
	$newcollege='';
	if(isset($_POST['newcollege']))
	{
		$college=clean($_POST['ncol']);
		$ncolq="insert into new_college_details values('".$state."','".$city."','".$college."')";
		$res=@mysql_query($ncolq);


		


	}
	
	
	$speak=$shortstory=$indiaQuiz=$entertainmentquiz=$cricketQuiz=$mummymakerz=$paperdance=$treasurehunt=$rockon=$cat=$techexhi=$tquiz=$paper=$poster=$bug=$claymoulding=$rangoli=$power=$painting=$srutilaya=$natraj=$roots=$boltiband=$mrmsmahostav=$mockpress=$srutilayag=$natrajg=$rootg=$boltibandg=$spotlightg=$admakingg=$shortfilmarena=$basketball=$volleyball=$pvolleyball=$bchess=$tts=$ttd=$bathletics100=$bathletics400=$bathletics800=$athletics3km=$blongjump=$shortput=$a4x100=$Kabbadi=$gTennicoit=$gthrowball=$pthrowball=$gchess=$gathletics100=$gathletics400=$glongjump=$shortrelay=$hospitality=$a4100g=$Kabbadig='';
	if(isset($_POST['speak']))
	{
	$speak=clean($_POST['speak']);
	}
	if(isset($_POST['ConnectdUnconnected']))
	{
	$shortstory=clean($_POST['ConnectdUnconnected']);}
	if(isset($_POST['IncredibleIndia']))
	{
	$indiaQuiz=clean($_POST['IncredibleIndia']);}
	if(isset($_POST['Film-O-Mania']))
	{
	$entertainmentquiz=clean($_POST['Film-O-Mania']);}
	if(isset($_POST['howzzat']))
	{
	$cricketQuiz=clean($_POST['howzzat']);}
	if(isset($_POST['mummymakerz']))
	{
	$mummymakerz=clean($_POST['mummymakerz']);}
	if(isset($_POST['paperdance']))
	{
	$paperdance=clean($_POST['paperdance']);}
	if(isset($_POST['treasurehunt']))
	{
	$treasurehunt=clean($_POST['treasurehunt']);}
	if(isset($_POST['rockon']))
	{
	$rockon=clean($_POST['rockon']);}
	
	$literary="$speak,$shortstory,$indiaQuiz,$entertainmentquiz,$cricketQuiz,$mummymakerz,$paperdance,$treasurehunt,$rockon";
	


	//Technical Events

	if(isset($_POST['cat']))
	{
	$cat=clean($_POST['cat']);}
	if(isset($_POST['techexhi']))
	{
	$techexhi=clean($_POST['techexhi']);}
	if(isset($_POST['tquiz']))
	{
	$tquiz=clean($_POST['tquiz']);}
	if(isset($_POST['paper']))
	{
	$paper=clean($_POST['paper']);}
	if(isset($_POST['poster']))
	{
	$poster=clean($_POST['poster']);}
	if(isset($_POST['bug']))
	{
	$bug=clean($_POST['bug']);}
	
	$technical="$cat,$techexhi,$tquiz,$paper,$poster,$bug";

	
	//Fine Arts
	if(isset($_POST['claymoulding']))
	{
	$claymoulding=clean($_POST['claymoulding']);}
	if(isset($_POST['rangoli']))
	{
	$rangoli=clean($_POST['rangoli']);}
	if(isset($_POST['power']))
	{
	$power=clean($_POST['power']);}
	if(isset($_POST['painting']))
	{
	$painting=clean($_POST['painting']);}


	$finearts="$claymoulding,$rangoli,$power,$painting";

	//cultural solo
	if(isset($_POST['srutilaya']))
	{
	$srutilaya=clean($_POST['srutilaya']);}
	if(isset($_POST['natraj']))
	{
	$natraj=clean($_POST['natraj']);}
	if(isset($_POST['roots']))
	{
	$roots=clean($_POST['roots']);}
	if(isset($_POST['boltibands']))
	{
	$boltiband=clean($_POST['boltibands']);}
	if(isset($_POST['mrmsmahostav']))
	{
	$mrmsmahostav=clean($_POST['mrmsmahostav']);}
	if(isset($_POST['mockpress']))
	{
	$mockpress=clean($_POST['mockpress']);}


	$cultural_solo="$srutilaya,$natraj,$roots,$boltiband,$mrmsmahostav,$mockpress";


	
	//cultural group
	if(isset($_POST['srutilayag']))
	{
	$srutilayag=clean($_POST['srutilayag']);}
	if(isset($_POST['natrajg']))
	{
	$natrajg=clean($_POST['natrajg']);}
	if(isset($_POST['rootsg']))
	{
	$rootg=clean($_POST['rootsg']);}
	if(isset($_POST['boltibandg']))
	{

	$boltibandg=clean($_POST['boltibandg']);}
	if(isset($_POST['spotlight']))
	{
	$spotlightg=clean($_POST['spotlight']);}
	if(isset($_POST['admaking']))
	{
	$admakingg=clean($_POST['admaking']);}
	if(isset($_POST['shortfilmarena']))
	{
	$shortfilmarena=clean($_POST['shortfilmarena']);}
	
	$cultural_group="$srutilayag,$natrajg,$rootg,$boltibandg,$spotlightg,$admakingg,$shortfilmarena";


	
	

	






// games and sports
			if(isset($_POST['Basketball']))
	{
			$basketball=clean($_POST['Basketball']);}
			if(isset($_POST['Volleyball']))
	{
			$volleyball=clean($_POST['Volleyball']);}

			if(isset($_POST['Kabbadi']))
	{
			$pvolleyball=clean($_POST['Kabbadi']);}

			if(isset($_POST['Volleyball(ExclusiveforPharmacy)']))
	{
			$bchess=clean($_POST['Volleyball(ExclusiveforPharmacy)']);}

			if(isset($_POST['Chess']))
	{
			$tts=clean($_POST['Chess']);}

			if(isset($_POST['TableTennis(Singles)']))
	{
			$ttd=clean($_POST['TableTennis(Singles)']);}

			if(isset($_POST['TableTennis(Doubles)']))
	{
			$bathletics100=clean($_POST['TableTennis(Doubles)']);}

			if(isset($_POST['100Mts']))
	{
			$bathletics400=clean($_POST['100Mts']);}

			if(isset($_POST['800Mts']))
	{
			$bathletics800=clean($_POST['800Mts']);}

			if(isset($_POST['3KMts']))
	{
			$athletics3km=clean($_POST['3KMts']);}

			if(isset($_POST['LongJump']))
	{
			$blongjump=clean($_POST['LongJump']);}
			if(isset($_POST['ShotPut']))
	{
			$shortput=clean($_POST['ShotPut']);}
			if(isset($_POST['4x100Relay']))
	{
			$a4x100=clean($_POST['4x100Relay']);}

			
			$sports_men="$basketball,$volleyball,$pvolleyball,$bchess,$tts,$ttd,$bathletics100,$bathletics400,$bathletics800,$athletics3km,$blongjump,$shortput,$a4x100";


///girls sports
		if(isset($_POST['Tennicoit(Doubles)g']))
	{
		$gTennicoit=clean($_POST['Tennicoit(Doubles)g']);}
		if(isset($_POST['Throwball']))
	{
		$gthrowball=clean($_POST['Throwball']);}
		if(isset($_POST['Throwball(ExclusiveforPharmacy)']))
	{
		$pthrowball=clean($_POST['Throwball(ExclusiveforPharmacy)']);}
		if(isset($_POST['Chessg']))
	{
		$gchess=clean($_POST['Chessg']);}


		if(isset($_POST['TableTennis(onlysingles)']))
	{
		$gathletics100=clean($_POST['TableTennis(onlysingles)']);}
		if(isset($_POST['100Mtsg']))
	{
		$gathletics400=clean($_POST['100Mtsg']);}
		if(isset($_POST['400Mtsg']))
	{
		$glongjump=clean($_POST['400Mtsg']);}
		if(isset($_POST['Longjumpg']))
	{
		$shortrelay=clean($_POST['Longjumpg']);}
			if(isset($_POST['Shotputg']))
	{
			$a4100g=clean($_POST['Shotputg']);}
			if(isset($_POST['4x100MtsRelay']))
	{
			$Kabbadig=clean($_POST['4x100MtsRelay']);}

		$sports_women="$gTennicoit,$gthrowball,$pthrowball,$gchess,$gathletics100,$gathletics400,$glongjump,$shortrelay,$a4100g,$Kabbadig";


	$vmid=generateid();

	$_SESSION['vmid'] =$vmid;

	if($gender=='Male')
	{
		$sports_women='';	
	}
	if($gender=='Female')
	{
			
		$sports_men='';
	}
	

if(isset($_POST['hospitality']))
	{
$hospitality=clean($_POST['hospitality']);
	}
	$transport='';
	$field2='';



	$query="insert into student(vmid,password,regdno,fname,lname,gender,phoneno,email,state,city,college,branch,literary_events,technical_events,sports_boys_events,sports_girls_events,fine_art_events,cultural_solo_events,cultural_group_events,accomodation,transport,date) values('".$vmid."','".$password."','".$cid."','".$fname."','".$lname."','".$gender."','".$phno."','".$email.
	"','".$state."','".$city."','".$college."','".$branch."','".$literary."','".$technical."','".$sports_men."','".$sports_women."','".$finearts."','".$cultural_solo."','".$cultural_group."','".$hospitality."','".$transport."',now())";

$result=@mysql_query($query);  


//Check whether the query was successful or not
	if($result) {
	$_SESSION['src']='register-success.php';
			session_write_close();
		header("location: register-success.php");
		exit();
		
	}else {
		$_SESSION['src']='register-failed.html';
		session_write_close();
		header("location: register-failed.html");
		exit();
	}

?>