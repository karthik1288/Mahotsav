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
<body bgcolor="#E5E5E5">
 <table border="0" width="65%" cellspacing="0" cellpadding="0" align="center">
  <tr><td colspan="3" height="154">
      <img src="images/head.jpg" width="1000" height="150" border="0" alt="Vignan university">
  </td></tr>
 <tr><td colspan="3">
		 <div>
			<ul class="menu">
			  <li class="top"><a href="index.php" target="_self" class="top_link"><span>Home</span></a></li>
			  <li class="top"><a href="eventregistration.php" class="top_link"><span>Event Registration</span></a></li>
			  <li class="top"><a href="#" class="top_link"><span>Contact us</span></a></li>
		  </ul>
	   </div>
 </td></tr>
<tr><td height="150" align="center">
<div id="slideshow">
    <img src="images/cultural1.jpeg" alt="cultural Image-2" class="active" width="1000" height="150"/>
	<img src="images/cultural2.jpeg" alt="cultural Image-3" width="1000" height="150"/>
	<img src="images/cultural3.jpeg" alt="cultural Image-4" width="1000" height="150"/>
</div><br/></td>
</tr>
<tr><td>
<form action="registrationb.php"  method="post" name="registration" onSubmit="return all123()">
<div class="stm" id="stmts"></div>
<div class="stm" id="stmts"></div>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Personal Details</center></font>
</div>
</div>
<div class="container_content">
<table border="0" cellpadding="0" cellspacing="0" align="center" width="85%">
<tr><td width="140" height="35"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">First Name:</font></td>
    <td width="175"><input type="text" size="20" name="fname" id="fname1" onBlur="fval(this.value)"/></td>
    <td width="166"><div id="fname2"></div></td><td width="166"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">College&nbsp;ID:</font></td>
	<td width="257"><input type="text" name="cid"  onBlur="clgchk(this.value)"></td><td width="126"><div id="cid2"></div></td>
</tr>
<tr><td height="35"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Last&nbsp;Name:</font></td> 
    <td><input type="text" size="20" name="lname" id="lname1" onBlur="lval(this.value)"/></td>
	<td><div id="lname2"></div></td><td><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Branch&nbsp;ID:</font></td>
	<td><select name="branch" style="width: 147px"  onchange="br(this.value)">
	<option value="branch" selected="selected">Select one</option>
	<option value="IT">IT</option>
	<option value="CSE">CSE</option>
	<option value="ECE">ECE</option>
	<option value="EEE">EEE</option>
	<option value='CHEM'>Chem</option>
	<option value="MECH">MECH</option>
    <option value="bio">BIO-TECH</option>
    <option value="civ">CIVIL</option>
    <option value="mechtro">MECHATRONICS</option>
    <option value="eie">EIE</option>
    <option value="ecm">ECM</option>
	<option value="pharmacy">PHARMACY</option>
	</select></td>
	<td><div id="bid2"></div></td>
</tr>
<tr><td height="35"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Gender</font></td>
    <td><select name="gender" style="width: 147px" onChange="showhide(this.value)">
		<option value="gender" selected="selected">Select one</option>
		<option value='Male' >Male</option>
	    <option value="Female">Female</option>
		</select></td>
	<td><div id="gen"></div></td>
	<td><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">State:</font></td><td><select  style="width: 147px" name="state" onChange="setcity(this.value)">
		<option value="sl" selected="selected">Select one</option>
		<option value="Andhra Pradesh">Andhra Pradesh</option><!-- y -->
	    <option value="Arunachal pradesh">Arunachal pradesh</option>
		<option value="Assam">Assam</option>
		<option value="Bihar">Bihar</option>
		<option value="Delhi">Delhi</option>
		<option value="Gujarat">Gujarat</option>
		<option value="Haryana">Haryana</option>
		<option value="Himachal Pradesh">Himachal Pradesh</option>
		<option value="Jammu And Kashmir">Jammu And Kashmir</option>
		<option value="Jharkhand">Jharkhand</option>
		<option value="Kerala">Kerala</option>		<!-- y -->
	    <option value="karnataka">karnataka</option><!-- y -->
		<option value="Madhya Pradesh">Madhya Pradesh</option>
		<option value="Maharashtra">Maharashtra</option>
		<option value="Manipur">Manipur</option>
		<option value="Meghalaya">Meghalaya</option>
		<option value="Mizoram">Mizoram</option>
		<option value="Nagaland">Nagaland</option>
		<option value="Orissa">Orissa</option>
		<option value="Pondicherry">Pondicherry</option>
		<option value="Punjab">Punjab</option>
		<option value="Rajasthan">Rajasthan</option>
		<option value="Sikkim">Sikkim</option>
		<option value="Tamilnadu">Tamilnadu</option><!-- y -->
		<option value="Tripura">Tripura</option>
		<option value="Uttaranchal">Uttaranchal</option>
		<option value="West Bengal">West Bengal</option>
		</select></td>
	<td><div id="state1"> </div> </td>
</tr>
<tr><td height="51"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Phone&nbsp;No:&nbsp;&nbsp;+91</font></td>
    <td><input type="text" name="phno" onBlur="phcheck(this.value)"></td><td><div id="ph"></div></td>
	<td><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">City</font></td>
	<td><select style="width: 147px" name="city" onChange="setcol(this.value)"><option value="city" >Select one</option></select></td><td><div id="city1"></div></td>
</tr>
<tr><td valign="top"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Email&nbsp;Id</font></TD>
   	<td valign="top"><INPUT TYPE="text" id="emailid" NAME="email" onBlur="return validate_reg()"></td>
	<td valign="top"><div id="em"></div></td>
    <td valign="top" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">College</font> </td>
    <td valign="top" height="80"><!-- <div id="colleg"> --><select name="college">
	<option value="college" >Select one</option></select><!-- </div> --><br><br><input type="checkbox" name="newcollege" value="new col" onClick="newcol()"><font size="2">Check if college not present</font>
	<div id="newcol" style="visibility:hidden"><input type="text" name="ncol" onBlur = "return myfunction()"></div></td>
	<td valign="top"><div id="nc"></div></td>
</tr>
<tr><td height="35"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Password:</font></td>
    <td><input type="password" name="psw" onBlur="plength(this.value)"></td>
	<td><center style="color:red;"><font size="1" color="#820000" style="font-family:Verdana, Arial, Helvetica, sans-serif">(Minimum&nbsp;6&nbsp;chars)&nbsp;&nbsp;</font></center>    </td>
    <td><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Confirm&nbsp;Password:</font></td>
	<td><input type="password" name="cpsw" onBlur="pcheck(this.value)"></td><td><div id="pcheck"></div></td>
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
<tr><td height="30" align=left><input type="checkbox" name="speak" value="speakzone"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Speak Zone</font></td>
   <td ><input type="checkbox" name="ConnectdUnconnected" value="Connect 'd Unconnected"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Connect 'd Unconnected</font></td>
</tr>
<tr ><td height="25" colspan=2><font size="2" color="#820000" style="font-family:Verdana, Arial, Helvetica, sans-serif"><b>Quiz Club</b></font></td></tr>
<tr><td height="30" align=left><input type="checkbox" name="IncredibleIndia" value="Incredible India"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Incredible India</font></td>
	<td><input type="checkbox" name="Film-O-Mania" value="Film - O - Mania"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Film - O - Mania </font></td>
	<td ><input type="checkbox" name="howzzat" value="howzzat"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Howzzat</font></td> 
</tr>
<tr ><td height="25" colspan=2><font size="2" color="#820000" style="font-family:Verdana, Arial, Helvetica, sans-serif"><b>Informalz</b></font></td></tr>
<tr><td height="30" align=left><input type="checkbox" name="mummymakerz" value="Mummy Makerz"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Mummy Makerz</font></td>    <td><input type="checkbox" name="paperdance" value="Paper Dance"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Paper Dance'z</font></td>
    <td align=left><input type="checkbox" name="treasurehunt" value="Treasure Hunt"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Treasure Hunt</font></td>
</tr>
<tr><td height="30" ><input type="checkbox" name="rockon" value="Rock on"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Rock on</font></td></tr>
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
<tr><td height="30" ><input type="checkbox" name="cat" value="Mock cat Exam"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Mock CAT Exam</font></td>
    <td><input type="checkbox" name="techexhi" value="Technical Exhibition"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Spoorthi 11</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="tquiz" value="Technical Quiz"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Technical Quiz</font></td>
   <td><input type="checkbox" name="paper" value="Paper Presentation"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Paper Presentation (Department wise)</font></td></tr>
<tr><td height="30"><input type="checkbox" name="poster" value="poster presentation"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Poster Presentation</font></td><td><input type="checkbox" name="bug" value="bug detect" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Bug Detect</font></td></tr>
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
<tr><td height="30"><input type="checkbox" name="claymoulding" value="Clay Moulding"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Clay Moulding</font></td>
    <td><input type="checkbox" name="rangoli" value="Rangoli" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Rangoli</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="power" value="Power of Silence" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Power of Silence</font></td>
    <td><input type="checkbox" name="painting" value="Painting" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Painting</font></td>
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
<tr><td height="30"><input type="checkbox" name="srutilaya" value="Srutilaya"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Srutilaya</font></td>
    <td><input type="checkbox" name="srutilayag" value="Srutilayag" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Srutilaya</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="natraj" value="Natraj"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Natraj</font></td>
    <td><input type="checkbox" name="natrajg" value="Natrajg" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Natraj</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="roots" value="Roots"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Roots</font></td>
    <td><input type="checkbox" name="rootsg" value="Rootsg"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Roots</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="boltibands" value="Bolti Band" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Bolti Band</font></td>
    <td><input type="checkbox" name="boltibandg" value="Bolti Bandg" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Bolti Band</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="mrmsmahostav" value="Mr.&Ms.Mahostav"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Mr.&amp;Ms.Mahotsav</font></td>
    <td><input type="checkbox" name="spotlight" value="Spot Light" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Spot Light</font></td>
</tr>
<tr><td height="30"><input type="checkbox" name="mockpress" value="Mock Press" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Mock Press</font></td>
    <td><input type="checkbox" name="admaking" value="Ad making" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Ad making</font></td>
</tr>
<tr><td></td>
   <td height="30"><input type="checkbox" name="shortfilmarena" value="Short Film Arena" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Short Film Arena</font></td></tr>
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
<tr><td width=420 align="left" ><b>Men</b></td><td  align="left" ><b>Women</b></td></tr>
<tr><td height="30"><input type="checkbox" name="Basketball"  value="Basketball" id="1" disabled><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Basketball</font></td>    <td><input type="checkbox" name="Tennicoit(Doubles)g"   disabled value="Tennicoit(Doubles)" id="2"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Tennicoit(Doubles)</font></td>
</tr>
<tr><td height="30"><input type="checkbox" id="3"  disabled name="Volleyball" value="Volleyball" onClick="vollychk()"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Volleyball</font></td>
    <td><input type="checkbox" disabled name="Throwball" value="Throwball" id="4" onClick="throwchk()"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Throwball</font></td>
</tr>
<tr><td height="30"><input type="checkbox" id="5"  disabled name="Kabbadi" value="Kabbadi"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Kabbadi</font></td>
    <td><input type="checkbox" name="Throwball(ExclusiveforPharmacy)" disabled value="Throwball (Exclusive for Pharmacy)" id="6" onClick="throwchk()"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Throwball (Exclusive for Pharmacy)     </font></td>
</tr>
<tr><td height="30"><input type="checkbox" id="7" disabled name="Volleyball(ExclusiveforPharmacy)" value="Volleyball (Exclusive for Pharmacy)" onClick="vollychk()"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Volleyball (Exclusive for Pharmacy)    </font></td>
    <td><input type="checkbox" disabled id="8" name="Chessg" value="Chessg">
      <font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Chess</font></td>
</tr>
<tr><td height="30"><input type="checkbox" disabled id="9" name="Chess" value="Chess"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Chess</font></td>
    <td><input type="checkbox" id="10" disabled name="TableTennis(onlysingles)" value="Table Tennis(only singles)"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Table Tennis(only singles)</font></td>
</tr>
<tr><td height="30"><input type="checkbox" disabled name="TableTennis(Singles)" id="11" value="Table Tennis(Singles)"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Table Tennis(Singles)</font></td>
    <td><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif"><b>Athletics</b></font></td>
</tr>
<tr><td height="30"><input type="checkbox" id="12" disabled name="TableTennis(Doubles)" value="TableTennis(Doubles)" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Table Tennis(Doubles)</font></td>
    <td><input type="checkbox" id="13" name="100Mtsg" disabled value="100Mts" onClick="athchkg(this)" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">100Mts</font></td>
</tr>
<tr><td height="30"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">&nbsp;&nbsp;<b>Athletics</b></font></td>
    <td><input type="checkbox" id="14" name="400Mtsg" disabled value="400Mtsg" onClick="athchkg(this)" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">400Mts</font></td>
</tr>
<tr><td height="30"><input disabled type="checkbox" id="15" name="100Mts" value="100Mts" onClick="athchkb(this)"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">100Mts</font></td>
<td><input type="checkbox" id="16" name="Longjumpg" disabled value="Long jump" onClick="athchkg(this)" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Long jump</font></td></tr>
<tr><td height="30"><input type="checkbox" disabled id="17" name="800Mts" value="800Mts"  onClick="athchkb(this)"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">800Mts</font></td>
<td><input type="checkbox" id="18" disabled name="Shotputg" value="Shot put" onClick="athchkg(this)" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Shot put</font></td></tr>
<tr><td height="30"><input disabled type="checkbox" id="19" name="3KMts" value="3KMts"  onClick="athchkb(this)"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">3KMts</font></td><td><input type="checkbox" id="20" disabled name="4x100MtsRelay" value="4x100 Mts Relay" onClick="athchkg(this)" ><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">4x100 Mts Relay</font></td></tr>
<tr><td height="30"><input type="checkbox" disabled id="21" name="LongJump" value="Long Jump" onClick="athchkb(this)"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Long Jump</font></td><td></td></tr>
<tr><td height="30"><input type="checkbox" id="22" disabled name="ShotPut" value="Shot Put" onClick="athchkb(this)"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Shot Put</font></td><td></td></tr>
<tr><td height="30"><input type="checkbox" id="23" disabled name="4x100Relay" value="4x100 Relay" onClick="athchkb(this)"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">4x100 Relay</font></td><td></td></tr>
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
<tr><td height="30"><input type="checkbox" name="hospitality" value="hospitality" id="hospitality"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Hospitality&nbsp;(check here if you need Hospitality)</font></td></tr>
</table>
</div>
<table width="100%"><tr><td height="42" align="center"><INPUT TYPE="submit" name="submit" value="submit"></td></tr></table>
</form></td></tr></table>
</body></html>