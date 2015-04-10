<?php
session_start();
if(isset($_SESSION['vmid']))
	$vmid=$_SESSION['vmid'];
else 
{
	session_write_close();
	header("location:index.php");
	exit();
}
if($vmid=='')
{
	session_write_close();
	header("location:index.php");
	exit();
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title> Vignan Mahotsav 2011 </title>
<link rel="stylesheet" href="css/structure.css" type="text/css" />
<link rel="stylesheet" href="css/theme.css" type="text/css" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
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
 <body bgcolor="#E5E5E5" >
 <table border="0" width="65%" cellspacing="0" cellpadding="0" align="center">
  <tr><td colspan="3">
   <img src="images/head.jpg" width="1000" height="150" border="0" alt="Vignan university"></td>
  </td></tr>
  <tr><td colspan="3">
		
		 <div>
			<ul class="menu">
			  <li class="top"><a href="home.php" target="_self" class="top_link"><span>Home</span></a></li>
			    <li class="top"><a href="update.php" target="vign2" class="top_link"><span>Change Profile</span></a></li>
				<li class="top"><a href="changepwd.php" target="vign2" class="top_link"><span>Change Password</span></a></li>
				<li class="top"><a href="teamregistration.php" target="vign2" class="top_link"><span>Team Registration</span></a></li>
				<!-- <li class="top"><a href="viewdetails.php" target="vign2" class="top_link"><span>View Details</span></a></li> -->
				<li class="top"><a href="downloaddetails.php" target="vign2" class="top_link"><span>Download Details</span></a></li>
				<!-- <li class="top"><a href="registrationsteps.html" target="vign2" class="top_link"><span>Registration Steps</span></a></li> -->
				<li class="top"><a href="logout.php" target="_self" class="top_link"><span>Log Out</span></a></li>
				
		  </ul>
	   </div>
 </td></tr>

<tr>
  <td height="12" colspan="3" align="center"><font style="text-align:justify;font-size:11px;font-family:Verdana, Arial, Helvetica, sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;Welcome &nbsp; <?php echo $_SESSION['name'];?></font></td>
</tr>
<tr><td align="left" width="22%">
<iframe src ="viewprofile.php" name="vign2" width="1000" height="1800" scrolling="no" frameborder="0" align="left">
  <p>Your browser does not support iframes.</p>
</iframe>
</td>
</tr>
</table>
<?php
session_write_close();
?>