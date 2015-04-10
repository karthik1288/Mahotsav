<?php
session_start();
if(isset($_SESSION['vmid']))
	$vmid=$_SESSION['vmid'];
else 
{
	session_write_close();
	header("location:logo.php");
	exit();
}
if($vmid=='')
{
	session_write_close();
		header("location:logo.php");
	exit();
}
?>
<html>
<head>
<link rel="shortcut icon" href="images/favicon.ico">
<link rel="icon" type="image/gif" href="images/animated_favicon1.gif">
<link href="css/menu_style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
<script type="text/javascript">
function slideSwitch() {
	var $active = $('#slideshow img.active');
	if ( $active.length == 0 ) 
	  $active = $('#slideshow img:last');
	var $next = $active.next().length ? $active.next() : $('#slideshow img:first');
	$active.addClass('last-active');
	$next.css({opacity: 0.0}) .addClass('active') .animate({opacity: 1.0}, 1000, function() { $active.removeClass('active last-active'); }); }
	$(function() { setInterval( "slideSwitch()", 5000 ); });
</script>
<style type="text/css">
.stm
{
	color:red;
}
.float_left {
float:left;
}
.float_right {
float:right;
}
.container {
width:150px;
}
.container_head {
height:30px;
background-image:url(images/sidebar_center.jpeg);
}
.container_head_text {
height:23px;
padding:7px 0 0 0;
font-family:Arial, Helvetica, sans-serif;
color:#FFFFFF;
font-size:16px;
font-weight:bold;
}
.container_content {
font-family:Arial, Helvetica, sans-serif;
font-size:12px;
padding:5px;
color:#666666;
border-width: 1px 1px 1px 1px;
border-spacing: 0px;
border-style: none solid solid solid;
border-color: #74AB05;
}
#sliding-navigation3 { width:200px}

#sliding-navigation3 ul {
	list-style: none;
}
#sliding-navigation3 a {
	width: 130px;
	display: block;
	padding: 3px 5px 3px 40px;
	background: #A7C520 center right no-repeat;
	margin: 2px 0;
	text-decoration: none;
}
#sliding-navigation3 a {
	color: #000;
}

#slideshow {
    position:relative;
    height:150px;
	padding:0px;
}
#slideshow img {
    position:absolute;
    top:0;
    left:0;
    z-index:8;
    opacity:0.0;
}
#slideshow img.active {
    z-index:10;
    opacity:1.0;
}
#slideshow img.last-active {
    z-index:9;
}
</style>  
<script type="text/javascript" src="validation.js"></script>
<script type="text/javascript" src="ajax1.js"></script>
</head>
<?php
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
$getvmid=$_SESSION['vmid'];
$query="select * from student where vmid='".$getvmid."'";
$result=mysql_query($query);
$row=mysql_fetch_array($result);
$gend=$row['gender'];
$branch=$row['branch'];
$state=$row['state'];
$city=$row['city'];
$college=$row['college'];
$spcount=0;
$lit= $row['literary_events'] ;
$litchck=explode(',',$lit,9);

$tec= $row['technical_events'] ;
$tecchck=explode(',',$tec,6);

$sb= $row['sports_boys_events'] ;
$sbchck=explode(',',$sb,13);

$sg= $row['sports_girls_events'] ;
$sgchck=explode(',',$sg,10);

$fa= $row['fine_art_events'] ;
$fachck=explode(',',$fa,4);

$cs= $row['cultural_solo_events'] ;
$cschck=explode(',',$cs,6);

$cg= $row['cultural_group_events'] ;
$cgchck=explode(',',$cg,7);

$acc= $row['accomodation'] ;
$accchck=explode(',',$acc,1);

$ref2=$ref1=$ref3=$ref4=0;

if( $gend=="Male") {
for($i=0;$i<=12;$i+=1)
{
if( $sbchck[$i]=="Volleyball (Exclusive for Pharmacy)") 
$ref2=1;

}}
if( $gend=="Female") {

	for($i=0;$i<=9;$i+=1)
		{
		if( $sgchck[$i]=="Throwball (Exclusive for Pharmacy)") 
			$ref4=1;
		}
}
?>
<body bgcolor="#E5E5E5" onload="athckeckall()">
 <table border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
 
<tr><td>
<form action="regupdate.php" method="post" name="registration" onSubmit="return all123()">
<div class="stm" id="stmts"></div>
<div class="stm" id="stmts"></div>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Personal Details </center></font>
</div>
</div>
<div class="container_content">
<table border="0" cellpadding="0" cellspacing="0" align="center" width="85%">
<tr><td width="140" height="35"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">First Name:</font></td>
    <td width="175"><input type="text" size="20" name="fname" id="fname1" onBlur="fval(this.value)" value="<?php echo $row['fname'];?>"/></td>
    <td width="166"><div id="fname2"></div></td><td width="166"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">College&nbsp;ID:</font></td>
	<td width="257"><input type="text" name="cid"  value="<?php echo $row['regdno'];?>" readonly></td><td width="126"><div id="cid2"></div></td>
</tr>
<tr><td height="35"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Last&nbsp;Name:</font></td> 
    <td><input type="text" size="20" name="lname" id="lname1" onBlur="lval(this.value)" value="<?php echo $row['lname'];?>"/></td>
	<td><div id="lname2"></div></td><td><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Branch&nbsp;ID:</font></td>
<td><input type="text" name="branch" style="width: 147px"  onchange="br(this.value)" value="<?php echo $row['branch'];?>" readonly>
	
		</td>
	<td><div id="bid2"></div></td></tr>
<tr><td height="35"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Gender</font></td>
    <td><input type="text" name="gen"  value="<?php echo $row['gender'];?>" readonly></td>
	<td><div id="gen"></div></td>
<td><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">State:</font></td><td><input type="text" name="state" style="width: 147px"  value="<?php echo $row['state'];?>" readonly>
	<td>&nbsp;</td>
	<td><div id="state1"> </div> </td>
</tr>
<tr><td height="51"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Phone&nbsp;No:&nbsp;&nbsp;+91</font></td>
    <td><input type="text" name="phno" onBlur="phcheck(this.value)" value="<?php echo $row['phoneno'];?>"></td><td><div id="ph"></div></td>
	<td><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">City</font></td>
	<td><input type="text" name="city" style="width: 147px"  value="<?php echo $row['city'];?>" readonly></td>
</tr>

<tr><td valign="top"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Email&nbsp;Id</font></TD>
   	<td valign="top"><INPUT TYPE="text" id="emailid" NAME="email" onBlur="return validate_reg()" value="<?php echo $row['email'];?>"></td>
	<td valign="top"><div id="em"></div></td>
    <td valign="top" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">College</font> </td>
    <td valign="top" height="25"><input type="text" name="college" style="width: 250px"  value="<?php echo $row['college'];?>" readonly>
			<br></td>
</tr>
</table>
</div><BR><BR>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Literary Rendezvous</center></font>
</div>
</div>
<div class="container_content">
<table width="85%" align="center">
<tr><td height="30" align=left><input type="checkbox" name="speak" value="speakzone" <?php for($i=0;$i<=8;$i+=1){if( $litchck[$i]=="speakzone")  echo 'checked';   }  ?> ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Speak Zone </font></td>
   <td ><input type="checkbox" name="ConnectdUnconnected" value="Connect 'd Unconnected" <?php for($i=0;$i<=8;$i+=1){if( $litchck[$i]=="Connect 'd Unconnected") echo 'checked';  }?> ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Connect 'd Unconnected</font></td>
</tr>
<tr ><td height="25" colspan=2><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif"><b>Quiz Club</b></font></td></tr>
<tr><td height="30" align=left><input type="checkbox" name="IncredibleIndia" value="Incredible India" <?php for($i=0;$i<=8;$i+=1){if( $litchck[$i]=="Incredible India") echo 'checked'; }?>   ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Incredible India</font></td>
	<td><input type="checkbox" name="Film-O-Mania" value="Film - O - Mania" <?php for($i=0;$i<=8;$i+=1){if( $litchck[$i]=="Film - O - Mania") echo 'checked';  }?> ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Film - O - Mania </font></td>
	<td ><input type="checkbox" name="howzzat" value="howzzat" <?php for($i=0;$i<=8;$i+=1){if( $litchck[$i]=="howzzat") echo 'checked';  }?> ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Howzzat</font></td> 
</tr>
<tr ><td height="25" colspan=2><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif"><b>Informalz</b></font></td></tr>
<tr><td height="30" align=left><input type="checkbox" name="mummymakerz" value="Mummy Makerz" <?php for($i=0;$i<=8;$i+=1){if( $litchck[$i]=="Mummy Makerz") echo 'checked'; }?>   ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Mummy Makerz</font></td>    <td><input type="checkbox" name="paperdance" value="Paper Dance" <?php for($i=0;$i<=8;$i+=1){if( $litchck[$i]=="Paper Dance") echo 'checked'; }?>  ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Paper Dance'z</font></td>
    <td align=left><input type="checkbox" name="treasurehunt" value="Treasure Hunt" <?php for($i=0;$i<=8;$i+=1){if( $litchck[$i]=="Treasure Hunt") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Treasure Hunt</font></td>
</tr>
<tr><td height="30" ><input type="checkbox" name="rockon" value="Rock on" <?php for($i=0;$i<=8;$i+=1){if( $litchck[$i]=="Rock on") echo 'checked';  }?>   ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Rock on</font></td></tr>
</table>
</div><BR><BR>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Techincal Tryst</center></font>
</div>
</div>
<div class="container_content">
<table width="85%" cellpadding="0" cellspacing="0" align="center">
<tr><td height="30" ><input type="checkbox" name="cat" value="Mock cat Exam" <?php for($i=0;$i<=5;$i+=1){if( $tecchck[$i]=="Mock cat Exam") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Mock CAT Exam</font></td>
    <td><input type="checkbox" name="techexhi" value="Technical Exhibition" <?php for($i=0;$i<=5;$i+=1){if( $tecchck[$i]=="Technical Exhibition") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Spoorthi 11</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="tquiz" value="Technical Quiz" <?php for($i=0;$i<=5;$i+=1){if( $tecchck[$i]=="Technical Quiz") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Technical Quiz</font></td>
   <td><input type="checkbox" name="paper" value="Paper Presentation" <?php for($i=0;$i<=5;$i+=1){if( $tecchck[$i]=="Paper Presentation") echo 'checked'; }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Paper Presentation (Department wise)</font></td></tr>
<tr><td height="30"><input type="checkbox" name="poster" value="poster presentation" <?php for($i=0;$i<=5;$i+=1){if( $tecchck[$i]=="poster presentation") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Poster Presentation</font></td><td><input type="checkbox" name="bug" value="bug detect" <?php for($i=0;$i<=5;$i+=1){if( $tecchck[$i]=="bug detect") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Bug Detect</font></td></tr>
</table>
</div><BR><BR>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Fine Arts</center></font>
</div>
</div>
<div class="container_content">
<table width="85%" cellpadding="0" cellspacing="0" align="center">
<tr><td height="30"><input type="checkbox" name="claymoulding" value="Clay Moulding" <?php for($i=0;$i<=3;$i+=1){if( $fachck[$i]=="Clay Moulding") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Clay Moulding</font></td>
    <td><input type="checkbox" name="rangoli" value="Rangoli" <?php for($i=0;$i<=3;$i+=1){if( $fachck[$i]=="Rangoli") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Rangoli</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="power" value="Power of Silence" <?php for($i=0;$i<=3;$i+=1){if( $fachck[$i]=="Power of Silence") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Power of Silence</font></td>
    <td><input type="checkbox" name="painting" value="Painting" <?php for($i=0;$i<=3;$i+=1){if( $fachck[$i]=="Painting") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Painting</font></td>
</tr>
</table>
</div><BR><BR>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Cultural Masti</center></font>
</div>
</div>
<div class="container_content">
<table width="85%" cellpadding="0" cellspacing="0" align="center">
<tr><td width=420 align="left" ><b>Solo</b></td><td  align="left" ><b>Group</b></td></tr>
<tr><td height="30"><input type="checkbox" name="srutilaya" value="Srutilaya" <?php for($i=0;$i<=5;$i+=1){if( $cschck[$i]=="Srutilaya") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Srutilaya</font></td>
    <td><input type="checkbox" name="srutilayag" value="Srutilayag" <?php for($i=0;$i<=6;$i+=1){if( $cgchck[$i]=="Srutilayag") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Srutilaya</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="natraj" value="Natraj" <?php for($i=0;$i<=5;$i+=1){if( $cschck[$i]=="Natraj") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Natraj</font></td>
    <td><input type="checkbox" name="natrajg" value="Natrajg" <?php for($i=0;$i<=6;$i+=1){if( $cgchck[$i]=="Natrajg") echo 'checked';  }?> ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Natraj</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="roots" value="Roots" <?php for($i=0;$i<=5;$i+=1){if( $cschck[$i]=="Roots") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Roots</font></td>
    <td><input type="checkbox" name="rootsg" value="Rootsg" <?php for($i=0;$i<=6;$i+=1){if( $cgchck[$i]=="Rootsg") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Roots</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="boltibands" value="Bolti Band" <?php for($i=0;$i<=5;$i+=1){if( $cschck[$i]=="Bolti Band") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Bolti Band</font></td>
    <td><input type="checkbox" name="boltibandg" value="Bolti Band" <?php for($i=0;$i<=6;$i+=1){if( $cgchck[$i]=="Bolti Bandg") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Bolti Band</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="mrmsmahostav" value="Mr.&Ms.Mahostav" <?php for($i=0;$i<=5;$i+=1){if( $cschck[$i]=="Mr.&Ms.Mahostav") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Mr.&amp;Ms.Mahotsav</font></td>
    <td><input type="checkbox" name="spotlight" value="Spot Light" <?php for($i=0;$i<=6;$i+=1){if( $cgchck[$i]=="Spot Light") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Spot Light</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="mockpress" value="Mock Press" <?php for($i=0;$i<=5;$i+=1){if( $cschck[$i]=="Mock Press") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Mock Press</font></td>
    <td><input type="checkbox" name="admaking" value="Ad making" <?php for($i=0;$i<=6;$i+=1){if( $cgchck[$i]=="Ad making") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Ad making</font></td>
</tr>
<tr><td></td>
   <td height="30"><input type="checkbox" name="shortfilmarena" value="Short Film Arena" <?php for($i=0;$i<=6;$i+=1){if( $cgchck[$i]=="Short Film Arena") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Short Film Arena</font></td></tr>
</table>
</div><br><br/>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Games&amp;Sports</center></font>
</div>
</div>
<div class="container_content">
<table width="85%" cellpadding="0" cellspacing="0" align="center">
<tr><td width=420 align="left" ><b>Men </b></td><td  align="left" ><b>Women</b></td></tr>
<tr><td height="30"><input type="checkbox" name="Basketball" value="Basketball" id="basketball" <?php if( $gend=="Male") { for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="Basketball") echo 'checked'; } }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Basketball</font></td>    <td><input type="checkbox" name="Tennicoit(Doubles)g" value="Tennicoit(Doubles)" id="Tennicoit" <?php if( $gend=="Female") { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="Tennicoit(Doubles)") echo 'checked'; } }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Tennicoit(Doubles) </font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="Volleyball" id="3" onClick="vollychk()" value="Volleyball" <?php if( $gend=="Male") { if($ref2==1){ echo 'disabled'; } else { for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="Volleyball") { $ref1=1; echo 'checked'; }}} }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Volleyball</font></td>
    <td><input type="checkbox" name="Throwball" value="Throwball" id="4"  onClick="throwchk()" <?php if( $gend=="Female") { if($ref4==1){ echo 'disabled'; } else { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="Throwball"){ $ref3=1; echo 'checked'; }}} }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Throwball</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="Kabbadi" value="Kabbadi" <?php if( $gend=="Male") { for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="Kabbadi") echo 'checked';  }}else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Kabbadi</font></td>
    <td><input type="checkbox" name="Throwball(ExclusiveforPharmacy)" value="Throwball (Exclusive for Pharmacy)" id="6" onClick="throwchk()" <?php if( $gend=="Female") {  if($ref3==1){ echo 'disabled'; } else { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="Throwball (Exclusive for Pharmacy)") {  echo 'checked'; }}} }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Throwball (Exclusive for Pharmacy)     </font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="Volleyball(ExclusiveforPharmacy)" value="Volleyball (Exclusive for Pharmacy)" id="7" onClick="vollychk()" <?php if( $gend=="Male") { if($ref1==1){ echo 'disabled'; } else { for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="Volleyball (Exclusive for Pharmacy)"){  echo 'checked'; } }} } else echo 'disabled';  ?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Volleyball (Exclusive for Pharmacy)    </font></td>
    <td><input type="checkbox" name="Chessg" value="Chessg" <?php if( $gend=="Female") { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="Chessg") echo 'checked'; } }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Chess</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="Chess" value="Chess" <?php if( $gend=="Male") {  for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="Chess") echo 'checked'; } }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Chess</font></td>
    <td><input type="checkbox" name="TableTennis(onlysingles)" value="Table Tennis(only singles)" <?php if( $gend=="Female") { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="Table Tennis(only singles)") echo 'checked';  }}else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Table Tennis(only singles)</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="TableTennis(Singles)" value="Table Tennis(Singles)" <?php if( $gend=="Male") {  for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="Table Tennis(Singles)") echo 'checked'; } }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Table Tennis(Singles)</font></td>
    <td><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif"><b>Athletics </b></font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="TableTennis(Doubles)" value="TableTennis(Doubles)" <?php if( $gend=="Male") {  for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="TableTennis(Doubles)") echo 'checked'; } }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Table Tennis(Doubles)</font></td><td><input type="checkbox" name="100Mtsg" value="100Mts" id="13"  <?php if( $gend=="Female") { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="100Mts") { $spcount+=1; echo 'checked'; } }}else echo 'disabled';?>  onClick="athchkg(this)"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">100Mts</font></td>
</tr><tr><td height="30"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">&nbsp;&nbsp;<b>Athletics</b></font></td>
    <td><input type="checkbox" name="400Mtsg" value="400Mtsg" id="14" onClick="athchkg(this)" <?php if( $gend=="Female") { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="400Mtsg") { $spcount+=1; echo 'checked'; } }}else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">400Mts</font></td>
</tr><tr><td height="30"><input type="checkbox" name="100Mts" value="100Mts" id="15" onClick="athchkb(this)" <?php if( $gend=="Male") {  for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="100Mts"){ $spcount+=1; echo 'checked'; }} }else echo 'disabled'; ?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">100Mts</font></td>
<td><input type="checkbox" name="Longjumpg" value="Long jump" id="16" onClick="athchkg(this)" <?php if( $gend=="Female") { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="Long jump"){ $spcount+=1; echo 'checked';} } }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Long jump</font></td></tr>
<tr><td height="30"><input type="checkbox" name="800Mts" value="800Mts" id="17" onClick="athchkb(this)" <?php if( $gend=="Male") {  for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="800Mts") { $spcount+=1; echo 'checked'; }} }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">800Mts</font></td>
<td><input type="checkbox" name="Shotputg" value="Shot put" id="18" onClick="athchkg(this)" <?php if( $gend=="Female") { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="Shot put"){ $spcount+=1; echo 'checked'; }} }else echo 'disabled';?> ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Shot put</font></td></tr>
<tr><td height="30"><input type="checkbox" name="3KMts" value="3KMts" id="19" onClick="athchkb(this)" <?php if( $gend=="Male") {  for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="3KMts"){ $spcount+=1; echo 'checked';} } }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">3KMts</font></td><td><input type="checkbox" name="4x100MtsRelay" value="4x100 Mts Relay" id="20" onClick="athchkg(this)" <?php if( $gend=="Female") { for($i=0;$i<=9;$i+=1){if( $sgchck[$i]=="4x100 Mts Relay"){ $spcount+=1; echo 'checked'; }} }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">4x100 Mts Relay</font></td></tr>
<tr><td height="30"><input type="checkbox" name="LongJump" value="Long Jump" id="21" onClick="athchkb(this)" <?php if( $gend=="Male") {  for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="Long Jump"){ $spcount+=1; echo 'checked'; }} }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Long Jump</font></td><td></td></tr>
<tr><td height="30"><input type="checkbox" name="ShotPut" value="Shot Put" id="22" onClick="athchkb(this)" <?php if( $gend=="Male") {  for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="Shot Put"){ $spcount+=1; echo 'checked'; }} }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Shot Put</font></td><td></td></tr>
<tr><td height="30"><input type="checkbox" name="4x100Relay" value="4x100 Relay" id="23" onClick="athchkb(this)" <?php if( $gend=="Male") {  for($i=0;$i<=12;$i+=1){if( $sbchck[$i]=="4x100 Relay"){ $spcount+=1; echo 'checked'; }} }else echo 'disabled';?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">4x100 Relay</font></td><td></td></tr>
<tr><td></td><td align="center"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif"><div id="note" class="stm"></div></font></td></tr>
</table>
</div><br><br />
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Hospitality</center></font>
</div>
</div>
<div class="container_content">
<table width="85%" cellpadding="0" cellspacing="0" align="center">
<tr><td height="30"><input type="checkbox" name="hospitality" value="hospitality" id="hospitality" <?php for($i=0;$i<=0;$i+=1){if( $accchck[$i]=="hospitality") echo 'checked';  }?>><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Hospitality&nbsp;(check here if you need Hospitality)</font></td></tr>
</table>
</div>
<table width="100%"><tr><td height="42" align="center"><INPUT TYPE="submit" name="submit" value="Update"></td></tr></table>
</form></td></tr></table>
</body></html>

<?php
session_write_close();
?>