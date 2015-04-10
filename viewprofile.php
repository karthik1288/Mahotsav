<?php
session_start();
$msglit="null";
$msglit1="null";
$msglit2="null";
$msgtec1="null";
$msgspb1="null";
$msgspg1="null";
$msgfineart1="null";
$msgculsolo1="null";
$msgculgro1="null";
$collid="null";
$phno="null";
$events="";$collid="";$name="";$phno="";$email="";$collname="";$branch="";$literary_events="";$technical_events="";
$sports_boys_events="";$sports_girls_events="";
$fine_art_events="";$cultural_solo_events="";$cultural_group_events="";$accomdation="";$transport="";$field2="";


$eventsli=array(array($literary_events),$technical_events);


function listofreg($str)
{	

	$events=array();
	$events1="";
	$c=0;
	$ret="";
	$events=explode(',',$str);
	$s=sizeof($events);
	for($i=0;$i<=$s-1;$i++)
	{
	if($events[$i]!="")
		{
		
			$j=strlen($events[$i]);
			$sub=substr($events[$i],$j-1);
			$rem=substr($events[$i],0,$j-1);
			if($sub=='g')
			$events1.=$rem."(group),";
			else
			$events1.=$events[$i].",";
			
		
			$ret=$ret.$events1;
		
			$events1="";


			
		}
		
	}
	return $ret;
	}

?>
<html>
<head>
<link rel="shortcut icon" href="images/favicon.ico">
<link rel="icon" type="image/gif" href="images/animated_favicon1.gif">
<link href="css/menu_style.css" rel="stylesheet" type="text/css" />
<style type="text/css">
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
</style>  
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

?>




<body bgcolor="#E5E5E5">
 <table border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
 
<tr><td>
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Profile of <?php echo $getvmid ?></center></font>
</div>
</div>
<div class="container_content">
<table border="0" cellpadding="0" cellspacing="0" align="center" width="85%">
  <tr>
	<td width="166" height="35"><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Name:</font></td>
    <td width="275"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $row['fname']."  ".$row['lname'];?></font></td>
   
	<td width="191"><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">College&nbsp;ID:</font></td>
	<td width="286"> <font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $row['regdno'];?> </font> </td>
	 </tr>
<tr>
<td width="166" height="35"><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Mahotsav ID</font></td>
    <td width="275"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $getvmid ?></font></td>

	<td><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Branch&nbsp;ID:</font></td>
	<td><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $row['branch'];?></font></td>
	
	</tr>
<tr><td height="35"><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Gender</font></td>
    <td><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $row['gender'];?> </font></td>

<td><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">State:</font></td>
  <td><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $row['state'];?></font></td>

	
</tr>
<tr><td height="35"><font color="#820000" style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Phone&nbsp;No:&nbsp;&nbsp;</font></td>
    <td><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php  echo "+91".$row['phoneno'];?></font></td>
	<td><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">City</font></td>
	<td><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $row['city'];?></font></td>
</tr>

<tr><td height="35"><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Email&nbsp;Id</font></TD>
   	<td ><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $row['email'];?></font></td>
	
    <td ><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">College</font> </td>
    <td height="35"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $row['college'];?></font></td>
</tr></table>
<table border="0" cellpadding="0" cellspacing="0" align="center" width="85%">
   <tr>
     <td height="35" colspan="4">
	    <?php
	     $msg="";
	     $msglit="";$msgtec="";$msgspb="";$msgfineart="";$msgspg="";$msgculsolo="";$msgculgro="";$msgacom="";
            
			$msglit.=listofreg($lit); 
			$msgtec.=listofreg($tec); 
			$msgspb.=listofreg($sb);
			$msgspg.=listofreg($sg);
			$msgfineart.=listofreg($fa);
			$msgculsolo.=listofreg($cs);
			$msgculgro.=listofreg($cg);
			$msgacom.=listofreg($acc);
       ?>
	   	   <font color="#820000" style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Literary&nbsp;Events </font></td>
		   <?php
             if($msglit!="")
			 {  ?>
		       <td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px">	
			<?php echo $msglit;}else
 { ?>
<td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo "-";
 }?> </font> </td>
   </tr> 

           
  <tr> <td height="35" colspan="4">
  <font color="#820000" style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Technical&nbsp;Events</font></td>    	 
      <?php if($msgtec!="") { ?>
<td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo $msgtec;
 } 
 else
 {?>
<td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo "-";
 }?></font></td>
</tr>
		   
		   
<tr> <td height="35" colspan="4">
<font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Sports</font></td>
	<?php if($msgspb!="") { ?>
	<td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px">
			 <?php echo $msgspb; }?></font></td>
        <?php if ($msgspg != "") { ?> <td width="0%"></font>
		<td width="2%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px">	<?php echo $msgspg; }

		?></font></td>
	    </tr>
	    
		
		   <tr> <td height="35" colspan="4">	
		      <font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Fine&nbsp;Arts</font></td> 
		  <?php
		   if($msgfineart!="")
			{
			?>
			   
		     <td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px">	
		  <?php
		   	 echo $msgfineart;
			}
			else
 { ?>
<td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo "-";
 }?>
			</font></td>
	    </tr>
			
		 <tr> <td height="35" colspan="4">
		  <font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px"> Cultural&nbsp;Events (Solo)</font>
				  </td>
		 
		  <?php
		 if($msgculsolo!="")
			{
			   ?>
			 <td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px">	
				<?php
				   echo $msgculsolo;
			}
			else
 {?>
<td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo "-";}?>
			</font></td>
		 </tr>
			
		 <tr><td height="35" colspan="4"><font color="#820000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px">Cultural&nbsp;Events (group)</font></td>
		   <?php
		     if($msgculgro!="")
			{
			  ?>
			 <td width="80%">	
			  <font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px">
			  <?php echo $msgculgro; }else
 {?>
<td width="80%"><font color="#000000"style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px"><?php echo "-";
 }?> 	  </font></td>
		 </tr>  
		  
</table>
</div>

</body></html>

