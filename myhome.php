<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>Vignan Mahotsav 2011</title>
<link rel="shortcut icon" href="images/favicon.ico">
<link rel="icon" type="image/gif" href="images/animated_favicon1.gif">
<link rel="stylesheet" href="css/structure.css" type="text/css" />
<link rel="stylesheet" href="css/theme.css" type="text/css" />
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
	
	function slideSwitch1() {
	var $active = $('#slideshow1 img.active');
	if ( $active.length == 0 ) 
	  $active = $('#slideshow1 img:last');
	var $next = $active.next().length ? $active.next() : $('#slideshow1 img:first');
	$active.addClass('last-active');
	$next.css({opacity: 0.0}) .addClass('active') .animate({opacity: 1.0}, 1000, function() { $active.removeClass('active last-active'); }); }
	$(function() { setInterval( "slideSwitch1()", 3000 ); });

	$(document).ready(function () {
	$("#sliding-navigation3 ul li a").mouseover(function(){$(this).stop().animate({paddingLeft: '20px'},50); $(this).css({'background-color' : '#868A08'}); });
	$("#sliding-navigation3 ul li a").mouseout(function(){ $(this).stop().animate({paddingLeft: '40px'},50); $(this).css({'background-color' : '#A7C520'}); });
	});
</script>

<style type="text/css">
dt{
    margin-top: 1em;
    padding-top: 1em;
    border-top: thin dotted;
	color:#A7C530}

ul, li{
	margin: 0;
	padding: 0;
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
#slideshow1 {
    position:relative;
    height:120px;
	padding:0px;
}
#slideshow1 img {
    position:absolute;
    top:1px;
    left:16px;
    z-index:8;
    opacity:0.0;
}
#slideshow1 img.active {
    z-index:10;
    opacity:1.0;
}
#slideshow1 img.last-active {
    z-index:9;
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
</HEAD>
 <body bgcolor="#E5E5E5">
 <table border="0" width="65%" cellspacing="0" cellpadding="0" align="center">
  <tr><td colspan="2">
   <img src="images/head.jpg" width="1000" height="150" border="0" alt="Vignan university"></td>
  </td></tr>
  <tr><td colspan="2">
		
		 <div>
			<ul class="menu">
			  <li class="top"><a href="loginpage.html" target="_self" class="top_link"><span>Home</span></a></li>
			  <li class="top"><a href="#" class="top_link"><span>Cultural</span></a>
				<ul class="sub">
				<li><a href="admaking.html" target="vign">Ad Making</a></li>
				<li><a href="bolthiband.html" target="vign">Bolti Band (solo)</a></li>
				<li><a href="mockpress.html" target="vign" >Mock Press (solo)</a></li>
				<!-- <li><a href="Mr&MsMahotsav.html" target="vign">Mr&Ms Mahotsav (solo)</a></li> -->
				<li><a href="nataraj.html" target="vign">Nataraj (solo&group)</a></li>
				<li><a href="roots.html" target="vign">Roots (solo&group)</a></li>
				<!-- <li><a href="Shortfilm.html" target="vign">Short Film Arena</a></li> -->
				<li><a href="shrutilaya.html" target="vign">Shruti Laya (solo&group) </a></li>
				<li><a href="spotlight.html" target="vign">Spot Light</a></li>
			    </ul>
			 </li>
			 <li class="top"><a href="#" class="top_link"><span>Literary</span></a>
				<ul class="sub">
				<li><a href="cricketquiz.html" target="vign">Cricket Quiz</a></li>
				<li><a href="entertainmentquiz.html" target="vign">Entertainment Quiz</a></li>
				<li><a href="indiaquiz.html" target="vign">Indian Quiz</a></li>
				<li><a href="informalz.html" target="vign">Informalz</a></li>				
				<li><a href="storywriting.html" target="vign">Short story writing</a></li>
				<li><a href="speakzone.html" target="vign">Speak Zone</a></li>
				</ul>
			 </li>
			<li class="top"><a href="#" class="top_link"><span>Technical</span></a>
				<ul class="sub">
				<li><a href="bugdetect.html" target="vign">Bug Detect</a></li>
				<li><a href="mockcat.html" target="vign">Mock CAT Exam</a></li>
				<li><a href="paper&poster.html" target="vign">Paper Presentation(Department wise)</a></li>
				<!-- <li><a href="poster.html" target="vign">Poster Presentation</a></li> -->
				<li><a href="spoorthi.html" target="_self">Spoorthi 11</a></li>
				<li><a href="technicalquiz.html" target="vign">Technical Quiz</a></li>
				</ul>
			</li>
			<li class="top"><a href="#" class="top_link"><span>Fine Arts</span></a>
				<ul class="sub">
				<li><a href="claymoulding.html" target="vign">Clay Moulding</a></li>
				<li><a href="rangdebasanthi.html" target="vign">Painting</a></li>
				<li><a href="powerofsilence.html" target="vign">Power of Silence</a></li>
				<li><a href="rangoli.html" target="vign">Rangoli </a></li>
				</ul>
			</li>
			<li class="top"><a href="sportslist.html" class="top_link" target="vign"><span>Sports</span></a>
			</li>
		  </ul>
	   </div>
 </td></tr>
<tr><td colspan="2">
    <div id="slideshow">
    <img src="images/cultural1.jpeg" alt="cultural Image-2" class="active" width="1000" height="150"/>
	<img src="images/cultural2.jpeg" alt="cultural Image-3" width="1000" height="150"/>
	<img src="images/cultural3.jpeg" alt="cultural Image-4" width="1000" height="150"/>
    </div>
</td></tr>
<tr>
  <td height="12" colspan="3">&nbsp;</td>
</tr>
<tr><td align="left" width="22%">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td>
<div id="sliding-navigation3">
	<ul>
		<li><a href="update.php" target="vign">Change Profile</a></li>
		<li><a href="changepwd.php" target="vign">Change Password</a></li>
		<li><a href="teamregistration.html" target="_blank">Team Registration</a></li>
		<li><a href="viewdetails.php" target="_blank">View Details</a></li>
		<li><a href="downloaddetails.php" target="vign">Download Details</a></li>
		<li><a href="registrationsteps.html" target="vign">Registration Steps</a></li>
		<li><a href="#" target="vign">Contact Us</a></li>
		<li><a href="#" target="vign">About Us</a></li>
	</ul>
</div></td></tr><tr><td height="15"></td></tr><tr><td height="380"><table>
<tr><td>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><img src="images/icon.jpeg" width="15" height="15" border="0" alt="">&nbsp;Contact Details</font>
</div>
</div>
<div class="container_content">
<table width="100%" height="71" border="0" cellpadding="0" cellspacing="0">
  <tr><td height="26">
	<b><font size="2" color="#820000">Convenor:</font></b></td>
   </tr>
	<tr><td height="24"><font color="#000000"><img src="images/arrow.png" width="15" height="15" border="0" alt="">&nbsp;Prof.&nbsp;K.V.K. KISHORE</font></td>
	</tr>
	<tr><td align="right"><font color="#669900">- 9490647678</font></td></tr>
	<tr><td><b><font size="2" color="#820000">Co-convenor:</font></b></td></tr>
	<tr><td  height="24"><font color="#000000"><img src="images/arrow.png" width="15" height="15" border="0" alt="">&nbsp;Prof.&nbsp;A.RAGHUNATH</font></td></tr>
	<tr><td align="right"><font color="#669900">- 9493487074</font></td></tr>
</table>
</div>
</td></tr><tr><td height="15"></td>
</tr><tr><td width="175">
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><img src="images/icon.jpeg" width="15" height="15" border="0" alt="">&nbsp;Our Sponsors</font>
</div>
</div>
<div class="container_content" align="center">
<div id="slideshow1">
<IMG SRC="images/hai.jpg" WIDTH="130" HEIGHT="110" class="active" BORDER="0" ALT="">
<img src="images/UCO-Bank.jpeg" alt="UCO-Bank" width="130" height="120"/>
<img src="images/honda-logo.jpeg" alt="honda-logo" width="130" height="120"/></div>
</div>
</td>
</tr><tr><td height="50"></td>
</tr></table>
</td>
</tr></table>
</td><td width="55%" align="left" bgcolor="#E5E5E5">
<iframe src ="logo.html" name="vign" width="770" height="650" scrolling="no" frameborder="0" align="left">
  <p>Your browser does not support iframes.</p>
</iframe>
</td>
</tr></table></div></td>
</tr>
<tr>
  <td height="12" colspan="2" align="center"><dt><font color="#666600" size="2">Copyright &copy; Vignan University, designed by IT Deptartment.</font></dt></dt></td>
</tr>
</table>
</body></html>
