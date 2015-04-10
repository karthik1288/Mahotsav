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
<!--
	var slideimages=new Array()
	var slidelinks=new Array()
	function slideshowimages(){
	for (i=0;i<slideshowimages.arguments.length;i++){
	slideimages[i]=new Image()
	slideimages[i].src=slideshowimages.arguments[i]
	}
	}

	function slideshowlinks(){
	for (i=0;i<slideshowlinks.arguments.length;i++)
	slidelinks[i]=slideshowlinks.arguments[i]
	}

	function gotoshow(){
	if (!window.winslide||winslide.closed)
	winslide=window.open(slidelinks[whichlink])
	else
	winslide.location=slidelinks[whichlink]
	winslide.focus()
	}

//-->
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
	$(document).ready(function() {
			var feed = $("#feedback"),
				img = feed.children("img"),
				formElems = feed.children("form, h3");
			
			feed.css("display","block").data("showing", false);
			formElems.hide();
			
			img.click(function() {
				if(feed.data("showing") == true) {
					feed.data("showing", false)
						.animate({
							marginLeft: "-315px",
							height: "80px",
							padding: "6px"
						});
					formElems.fadeOut("normal");
					/*$(this).attr("src", "feedback-logo.jpg").css("top", "0px");*/
				} 
				else {
					feed.data("showing", true)
						.animate({
							marginLeft: "445",
							height: "200px",
							padding: "10px"
						});
					formElems.fadeIn("normal");
					/*$(this).attr("src", "feedback-logo.jpg").css("top", "50px");*/
				}
			})
		}); //end document read
		$(document).ready(function() {
			var feed1 = $("#feedback1"),
				img = feed1.children("img"),
				formElems1 = feed1.children("form, h3");
			
			feed1.css("display", "block").data("showing", false);
			formElems1.hide();
			
			img.click(function() {
				if(feed1.data("showing") == true) {
					feed1.data("showing", false)
						.animate({
							marginLeft: "-305px",
							height: "80px",
							padding: "0"
						});
					formElems1.fadeOut("normal");
				/*	$(this).attr("src", "search.png").css("top", "0px");*/
				} else {
					feed1.data("showing", true)
						.animate({
							marginLeft: "445",
							height: "130px",
							padding: "10px"
						});
					formElems1.fadeIn("normal");
				/*	$(this).attr("src", "hide.png").css("top", "100px");*/
				}
			})
		}); //end document ready
	function loadframe(str)
	{
							document.getElementById("vign").src=str;

	}
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
#wrapper {
  width: 600px;
  margin: 0 auto;
}
#feedback {
  display: none;
  position: fixed;
  top: 350px;
  left: -20px;
  background-color:#59595b;
  height: 100px;
  width: 360px;
  margin: 0 0 0 -300px;
  z-index:100;
}
#feedback img {
  position: absolute;
  top: 0; 
  right: 0;
  height:50;
  width:50;
}
form input, textarea {
  display: block;
}
#wrapper1 {
width: 600px;
margin: 0 auto;
}	
#feedback1 {
display: none;
position: absolute;
top: 150px;
left: -18px;
background-color: #59595b;
height: 80px;
width: 360px;
margin: 0 0 0 -300px;
z-index:100;
}
#feedback1 img {
position: absolute;
top: 0; 
right: 0;
}
#followTab {

  list-style: none;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 130px;
  width: 24px;
  padding: 6px 5px;
  border: 3px solid #fff;
  border-right: none;
  -moz-border-radius: 10px 0 0 10px;
  -webkit-border-radius: 10px 0 0 10px;
  border-radius: 10px 0 0 10px;
  -moz-box-shadow: 0 0 7px rgba(0, 0, 0, .6);
  -webkit-box-shadow: 0 0 7px rgba(0, 0, 0, .6);
  box-shadow: 0 0 7px rgba(0, 0, 0, .6);
  background: rgba(239, 91, 10, .75);
  background: -moz-linear-gradient(top, rgba(243, 52, 8, .75), rgba(239, 91, 10, .75));
  background: -webkit-gradient( linear, left top, left bottom, from( rgba(243, 52, 8, .75) ), to( rgba(239, 91, 10, .75) ) );
  background: linear-gradient(top, rgba(243, 52, 8, .75), rgba(239, 91, 10, .75));
  filter: progid:DXImageTransform.Microsoft.Gradient( startColorStr='#59595B', endColorStr='#59595B', GradientType=0 );
}
#followTab li {
  margin: 9px 0 0 0;
  line-height: 0;
}
#followTab li:first-child {
  margin-top: 0;
}
#followTab a {
  display: block;
  width: 24px;
  background-image: url("images/follow-tab-buttons.png");
}
#followTab a span {
  display: none;
}
#followTab a.orkut {
  height: 24px;
  background-position: 0 -32px;
}
#followTab a.orkut:hover {
  background-position: 0 -56px;
}
#followTab a.twitter {
  height: 15px;
  background-position: 0 -80px;
}
#followTab a.twitter:hover {
  background-position: 0 -95px;
}
#followTab a.facebook {
  height: 24px;
  background-position: 0 -110px;
}
#followTab a.facebook:hover {
  background-position: 0 -134px;
}
#content {
  width: 800px;
  padding: 50px;
  margin: 0 auto;
  display: block;
  font-size: 1.2em;
}
#content h2 {
  line-height: 1.5em;
}
img.inline {
  position: relative;
  display: block;
  border: 1px solid #333;
  margin: 5px 0 10px 0;
}
</style>
</head>
<?php

if(isset($_SESSION['src']))
{
	if($_SESSION['src']!='')
	{
		$x=$_SESSION['src'];
	}
	else $x='logo.php';
	echo $x;
}
else 
	$x='logo.php';

?>
 <body bgcolor="#E5E5E5" onload="loadframe('<?php echo $x;?>')">
 
 <table border="0" width="65%" cellspacing="0" cellpadding="0" align="center">
  <tr><td colspan="3">
   <img src="images/head.jpg" width="1000" height="150" border="0" alt="Vignan university"></td>
  </td></tr>
  <tr><td colspan="3">
		
		 <div>
			<ul class="menu">
			  <li class="top"><a href="index.php" target="_self" class="top_link"><span>Home</span></a></li>
			   <li class="top"><a href="eventregistration.php" class="top_link" target="_blank"><span>Event Registration</span></a></li>
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
				<li><a href="cricketquiz.html" target="vign">Howzzat - The CricketQuiz </a></li>
				<li><a href="entertainmentquiz.html" target="vign">Film-O-Mania  - The Entertainment Quiz </a></li>
				<li><a href="indiaquiz.html" target="vign">Incredible India  - The India Quiz</a></li>
				<li><a href="storywriting.html" target="vign">Connect 'd UnConnect</a></li>
				<li><a href="speakzone.html" target="vign">Speak Zone</a></li>
				</ul>
			 </li>
			<li class="top"><a href="#" class="top_link"><span>Technical</span></a>
				<ul class="sub">
				<li><a href="bugdetect.html" target="vign">Bug Detect</a></li>
				<li><a href="mockcat.html" target="vign">Mock CAT Exam</a></li>
				<li><a href="paper&poster.html" target="vign">Paper Presentation(Department wise)</a></li>
				<!-- <li><a href="poster.html" target="vign">Poster Presentation</a></li> -->
				<li><a href="spoorthi.html" target="vign">Spoorthi 11</a></li>
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
			<li class="top"><a href="sportslist.html" class="top_link" target="vign"><span>Sports</span></a></li>
							<li class="top"><a href="informalz.html" target="vign" class="top_link"><span>Informalz</span></a></li> 
							<li class="top"><a href="mrnmrs.html" target="vign" class="top_link"><span>Mr & Mrs Mahotsav</span></a></li> 
		  </ul>
	   </div>
 </td></tr>
<tr><td colspan="3">
<div id="example1"></div>
<script type="text/javascript">
if(!(navigator.appName=="Microsoft Internet Explorer"))
{
document.getElementById("example1").innerHTML="<div id='slideshow'><img src='images/cultural1.jpeg' alt='cultural Image-2' class='active' width='1000' height='150'/> 	<img src='images/cultural2.jpeg' alt='cultural Image-3' width='1000' height='150'/><img src='images/cultural3.jpeg' alt='cultural Image-4' width='1000' height='150'/></div>";
}
else
{
document.getElementById("example1").innerHTML="<a href='javascript:gotoshow()'><img src='images/cultural1.jpeg' name='slide' border='0' width='1000' height='150'></a>";
slideshowimages("images/cultural1.jpeg","images/cultural2.jpeg")
slideshowlinks("../images/","../images/")
var slideshowspeed=4000
var whichlink=0
var whichimage=0
function slideit(){
if (!document.images)
return
document.images.slide.src=slideimages[whichimage].src
whichlink=whichimage
if (whichimage<slideimages.length-1)
whichimage++
else
whichimage=0
setTimeout("slideit()",slideshowspeed)
}
slideit()
}
</script>
</td></tr>
<tr>
<td height="12" colspan="3">&nbsp;</td>
</tr>
<tr><td align="left" width="22%">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td>
<div id="sliding-navigation3">
	<ul>
		<li><a href="generalrules.html" target="vign">General Rules</a></li>
		<li><a href="eventsschedule.html" target="vign">Events Schedule</a></li>
		<li><a href="registrationsteps.html" target="vign">Registration Steps</a></li>
		<!-- <li><a href="">Transport Registration</a></li> -->
		<li><a href="transport.html" target="vign">Transport & Accomodation</a></li>
		<li><a href="howtoreach.html" target="vign" >How To Reach</a></li>		
		<li><a href="contact.html" target="vign">Contact Us</a></li>
		<li><a href="aboutus.html" target="vign">About Us</a></li>
	</ul>
</div></td></tr><tr><td height="10" width="5"></td></tr><tr><td height="300"><table>
<tr><td>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><img src="images/icon.jpeg" width="15" height="15" border="0" alt="">&nbsp;Contact Details</font>
</div>
</div>
<div class="container_content">
<table width="100%" height="162" border="0" cellpadding="0" cellspacing="0">
  <tr><td height="26">
	<b><font size="2" color="#820000">Convenor:</font></b></td>
   </tr>
	<tr><td height="24"><font color="#000000" style="font:Verdana, Arial, Helvetica, sans-serif; font-size:12px"><img src="images/arrow.png" width="15" height="15" border="0" alt="">&nbsp;Prof.&nbsp;K.V.K.KISHORE</font></td>
	</tr>
	<tr><td height="20" align="right"><font color="#669900" style="font:Verdana, Arial, Helvetica, sans-serif; font-size:12px">- 9490647678</font></td>
	</tr>
	<tr><td height="24"><b><font size="2" color="#820000">Co-convenor:</font></b></td></tr>
	<tr><td  height="24"><font color="#000000" style="font:Verdana, Arial, Helvetica, sans-serif; font-size:12px"><img src="images/arrow.png" width="15" height="15" border="0" alt="">&nbsp;Prof.&nbsp;D.VIJAY KRISHNA </font></td></tr>
	<tr><td align="right" height="20"><font color="#669900" style="font:Verdana, Arial, Helvetica, sans-serif; font-size:12px">- 9963636699</font></td></tr>
	<tr><td  height="24"><font color="#000000" style="font:Verdana, Arial, Helvetica, sans-serif; font-size:12px"><img src="images/arrow.png" width="15" height="15" border="0" alt="">&nbsp;Prof.&nbsp;K.PHANEENDRA</font></td></tr>
	<tr><td align="right" height="20"><font color="#669900" style="font:Verdana, Arial, Helvetica, sans-serif; font-size:12px">- 9441063389</font></td></tr>
</table>
</div>
</td></tr><tr><td height="10"></td>
</tr><tr><td width="175">
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><img src="images/icon.jpeg" width="15" height="15" border="0" alt="">&nbsp;Our Team</font>
</div>
</div>
<div class="container_content" align="center">
<div id="slideshow1">
<IMG SRC="images/chairman.jpg" WIDTH="130" HEIGHT="120" class="active" BORDER="0" ALT="">
<img src="images/2.png" alt="vignan" width="130" height="120"/>
</div>
</div>
</td>
</tr><tr><td height="50"></td>
</tr></table>
</td>
</tr></table>
</td><td width="55%" align="left" bgcolor="#E5E5E5">
<iframe src ="logo.php" name="vign" id="vign" width="570" height="650" scrolling="no" frameborder="0" align="left">
  <p>Your browser does not support iframes.</p>
</iframe>
</td>
<td width="23%">
<table>
<tr><td width="6"></td><td>
<table width="100%" height="520" border="0" cellpadding="0" cellspacing="0">
<tr><td width="212">
<!-- Container Head -->
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><img src="images/icon.jpeg" width="15" height="15" border="0" alt="">&nbsp;What's New</font>
</div>
</div>
<div class="container_content">
	 <marquee behavior="scroll" direction="up" height="250" scrollamount="5" onmouseover="this.stop();" onmouseout="this.start();"><ul><li><img src="images/arrow.png" alt="arrow" width="15" height="15"/>&nbsp;&nbsp;<font size="3" style="font-family:Calibri">Vignan Mahotsav on 27 & 28 FEB <img src="images/new.gif" width="28" height="11" border="0" alt="new"></font><br /><br /></li>
<li><img src="images/arrow.png" alt="arrow" width="15" height="15"/>&nbsp;&nbsp;<font size="3" style="font-family:Calibri">Registrations starts from 1 FEB<img src="images/new.gif" width="28" height="11" border="0" alt="new"></font><br /><br /></li>
<li><img src="images/arrow.png" alt="arrow" width="15" height="15"/>&nbsp;&nbsp;<font size="3" style="font-family:Calibri">Register for Transport and hospitality individually</font><br /><br /></li>
<li><img src="images/arrow.png" alt="arrow" width="15" height="15"/>&nbsp;&nbsp;<font size="3" style="font-family:Calibri">For Basket Ball, Volley Ball, Kabbadi, Table Tennis & Chess team should report by 10AM on 26-02-2011</font><br /><br /></li>
<li><img src="images/arrow.png" alt="arrow" width="15" height="15"/>&nbsp;&nbsp;<font size="3" style="font-family:Calibri">Spot registrations are not allowed</font></li>
</ul></marquee></div></td></tr>
<tr><td height="350"> 
<div id="container">
<h1 id="logo"><a></a></h1>
<form name="Login" class="wufoo topLabel page" method="post" action="login-exec.php">
    <div class="info">
	 <h4 style="color:#669900">&nbsp;Sign In</h4>
    </div>

      <table border="0" cellpadding="0" cellspacing="0" width="100%">
	  <tr><td height="27" colspan="2">&nbsp;
		<font size="2" color="#669900">Vmid</font></td>
	  </tr><tr><td height="27" align="center"  colspan="2">
			<input id="Field1" name="vmid" type="text" class="field text small" value="" maxlength="255" size="20" tabindex="1" onkeyup="validateRange(1, 'character');" /></td></tr>
	   <tr><td height="27"  colspan="2">&nbsp;
		<font size="2" color="#669900">Password</font></td>
	   </tr><tr><td height="35" align="center"  colspan="2">
		<input id="Field2" name="password" type="password" class="field text small" value="" maxlength="255" size="20" tabindex="2" onkeyup="validateRange(2, 'character');" />
        </td></tr><tr><td width="80%" height="36" align="right">
         <input name="saveForm" type="submit" value="Login"/></td><td width="6%">
	</td>
        </tr></table>
</form>
</div>
</td>
</tr><tr><td>
<ul id="followTab">
    <li><a class="orkut" href="http://www.orkut.co.in/Main#Community?cmm=110872617" title="Join Mahotsav 2011 on Orkut"><span>Follow Mahotsav on Twitter</span></a></li>
  <li><a class="twitter" href="http://twitter.com/mahotsav2011" title="Follow Mahotsav 2011 on Twitter"><span>Follow Mahotsav on Twitter</span></a></li>
  <li><a class="facebook" href="http://www.facebook.com/pages/Mahotsav2011/137978246265335" title="Follow Mahotsav 2011 on Facebook"><span>Follow Mahotsav on Facebook</span></a></li>
</ul></td></tr></table></td></tr></table></td>
</tr>
<tr>
<td height="12" colspan="3" align="center"><dt><font color="#666600" size="2">Copyright &copy; Vignan University, designed by IT Deptartment.</font></dt></dt>
<div style="display: block; margin-left: -300px; height: 100px; padding: 0px;" id="feedback">
	<h3 style="font-family:verdana;font-size:11px;"><font color="white">Please help us improve by giving us feedback</font></h3>
	<div id="here"></div>
	<form  method="post" name="feed" action="feedback.php">
	<table><tr><td height="20" align="left">
	<B><FONT COLOR="white" style="font-family:verdana;font-size:11px;">Name:</FONT></B></td></tr><tr><td height="20"><input type="text" name="stu_name" value=""></td></tr>
	<tr><td height="20" align="left"><B><FONT COLOR="white" style="font-family:verdana;font-size:11px;">Your Comment:</FONT></B></td></tr><tr><td height="20"><textarea name="stu_com"></textarea></td></tr>
	<tr><td height="20" align="center"><input value="Submit" type="submit" ></td></tr></table>
	</form>
	<img height="100" width="36" style="top: 0px;" src="images/feedback-logo.jpg">
</div>
<div id="wrapper"></div>
<div style="display: block; margin-left: -300px; height: 80px; padding: 0px;" id="feedback1">
	<h3 style="font-family:verdana;font-size:11px;"><FONT SIZE="" COLOR="white">Search this site</FONT></h3>
<div id="cse" style="width: 100%;">Loading</div>
<script src="http://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript">
  google.load('search', '1', {language : 'en', style : google.loader.themes.GREENSKY});
  google.setOnLoadCallback(function() {
    var customSearchControl = new google.search.CustomSearchControl('006621380640012156886:oydkzuega-i');
    customSearchControl.setResultSetSize(google.search.Search.SMALL_RESULTSET);
    customSearchControl.draw('cse');
  }, true);
</script>

   
	<img height="80" width="40" style="top: 0px;" src="images/search.png">
</div> 
<div id="wrapper1"></div>
</td>
</tr>
</table>
</body></html>
