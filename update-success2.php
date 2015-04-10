<?php
session_start();
if(isset($_SESSION['vmid']))
	$vmid=$_SESSION['vmid'];
else 
{
	session_write_close();
	header("location:logout.php");
	exit();
}
if($vmid=='')
{
	session_write_close();
	header("location:logout.php");
	exit();
}?>
<html>
<head>
<title>Update successfull</title>
</head>
<body>
<b>		Update Successfull</b>
  <ol type='a'>
      <li style='font-family:vardana;text-align:left;padding-left:2px;padding-right:2px;font-size:12px'> Your VMID: <?php echo $_SESSION['vmid']; ?> Password Updated</li>
      <!-- <li style='font-family:vardana;text-align:left;padding-left:2px;padding-right:2px;font-size:12px'>Instead of that you can even send your study certificate through post/mail.</li>--><br>

      </ol>
 <!-- <br><br>Note1:<br><div id=note1   style='width:600px; font-family:vardana;text-align:left;color:black;padding:4px;background-color: lightyellow; z-index: 100;font-size:14px;border: 2px solid black;'>    To confirm your participation, You have to take print out of your details and take your principal's signature and send back to us via mail or post (otherwise)
     <br> you have to submit your study certificate to vignan university via mail or post. </div>-->
 <Br>
<br>   <center><div id=note2   style='width:600px; align;center;font-family:vardana;text-align:left;color:black;padding:4px;background-color: lightyellow;z-index: 100;font-size:14px;border: 2px solid black;'>  <font color='red'> For contact details :</font></font>K.Praveen Kumar, Mobile No:9290263544, Vignan University, Vadlamudi, Guntur, AP 522213.
      <br><font color='red'> </font> <br> </div></center>


<br>
<br>
</body>
</html>