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
session_write_close();
?><html>
<head>
<SCRIPT type="text/javascript" src="1.js"></SCRIPT>
<script type="text/javascript" src="dyngen.js"></script>
<style type="text/css">
.style1 {
	font-family: "Courier New", Courier, monospace;
	font-weight: bold;
	font-size: 18px;
		}

 .style2 {
			color:'#FF0000'; 
			font-family: "Courier New", Courier, monospace;
			font-weight:'bold'; 
			font-size:'small';
		}
.float_left {
float:left;
}
.float_right {
float:right;
}
.container {
width:212px;
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
-->
</style>
</head>
<body oncontextmenu="return false;" bgcolor="#e5e5e5">
<br>
<form name="teamrg" method="post" action="teamidgen.php" onSubmit="return chkfrm(teamrg.evnt.value)">
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><img src="images/icon.jpeg" width="15" height="15" border="0" alt="">&nbsp;Team Registration</font>
</div>
</div>
<div class="container_content">
<table width="90%">
<tr>
<td height="33" align="center">
<font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Event&nbsp;:</font></td>
<td>
<select id="evnt" name="evnt" onChange="chkmemmsg(this.value);abc(this.value)">
<option selected disabled value="no">Select One</option>
<option value="3-2tecTechnical Exhibition">Spoorthi 11(Technical Project Exhibition)</option>
<option value="6-4culSrutilaya">Srutilaya - Cultural</option>
<option value="6-4culNatraj">Natraj - Cultural</option>
<option value="6-4culRoots">Roots - Cultural</option>
<option value="6-4culBolti Band">Bolti Band - Cultural</option>
<option value="6-4culSpot Light">Spot Light - Cultural</option>
<option value="2-2culAd making">Ad Making - Cultural</option>
<!--<option value="2-1culShort Film Arena">Short Film Arena - Cultural</option>
<option value="fnapai">Painting - FineArts</option>
<option value="2-1fnaRangoli">Rangoli - FineArts</option>-->
<option value="4-2fnaclm">Clay Moulding - FineArts</option>
<option value="2-2fnaPower of Silence">Power of Silence - FineArts</option>
<!--<option value="litspz">Speak Zone - Literary</option>
<option value="litssw">Short Story Writing - Literary</option>-->
<option value="4-2litIncredible India">Incredible India(India Quiz) - Literary</option>
<option value="4-2litFilm - O - Mania">Film - O - Mania(Entertainment Quiz) - Literary</option>
<option value="4-2lithowzzat">Howzzat(Cricket Quiz) - Literary</option>
<!--<option value="litmmi">Mummy Makerz(Informalz) - Literary</option>
<option value="litpdi">Paper Dance'z(Informalz) - Literary</option>
<option value="litthi">Treasure Hunt(Informalz) - Literary</option>
<option value="litroi">Rock On(Informalz) - Literary</option>
<option value="tecmce">Mock CAT Exam - Technical</option>-->
<option value="2-2tecposter presentation">Poster Presentation - Technical(Department Wise)</option>
<option value="4-4tecTechnical Quiz">Technical Quiz - Technical</option>
<option value="2-2tecbug detect">Bug Detect - Technical</option>
<option value="2-2tecPaper Presentation">Vignan Quest(Paper Presentation) - Technical(Department Wise)</option>
<option value="8-8spmBasketball">Basketball(Men) - Sports</option>
<option value="9-9spmVolleyball">volleyball(Men) - Sports</option>
<option value="9-9spmVolleyball (Exclusive for Pharmacy)">volleyball(Men) - Sports(Exclusive For Pharmacy)</option>
<option value="0-0spmKabbadi">Kabbadi(Men) - Sports</option>
<option value="4-4spm4x100 Relay">4x100 Mts Relay(Men) - Sports</option>
<option value="2-2spmTableTennis(Doubles)">TableTennis(Men) - Sports</option>
<!--<option value="spm100">Athletics 100M(Men) - Sports</option>
<option value="spm800">Athletics 800M(Men) - Sports</option>
<option value="spm3km">Athletics 3Km(Men) - Sports</option>
<option value="spmlnj">Long Jump(Men) - Sports</option>
<option value="spmshp">Short Put(Men) - Sports</option>
<option value="spwshp">Short Put(Women) - Sports</option>
<option value="spwttn">Table Tennis(Women) - Sports</option>
<option value="spw100">Athletics 100M(Women) - Sports</option>
<option value="spw400">Athletics 400M(Women) - Sports</option>
<option value="spwljp">Long Jump(Women) - Sports</option>-->
<option value="4-4spw4x100 Mts Relay">4x100 Mts Relay(Women) - Sports</option>
<option value="2-2spwTennicoit(Doubles)">Tennicoit(Women) - Sports</option>
<option value="0-0spwThrowball">Throwball(Women) - Sports</option>
<option value="0-0spwThrowball (Exclusive for Pharmacy)">Throwball(Women) - Sports(Exclusive For Pharmacy)</option>
</select>
</td>
<td><div id="evntmsg" style="font-family: 'Courier New', 'Courier', 'monospace';	font-weight: 'bold'; font-size: '16px'; color: '#FF0000';"></div></td>
</tr>
</table>
<table width="90%"><tr><td height="32" align="center"><div id="errmsg" class="style2"></div></td></tr></table>
<div id="reg"></div>
<table width="90%"><tr><td height="32" align="center"><input type="submit" value="submit"/></td></tr></table>
</div>
</form>
</body>
</html>