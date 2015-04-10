<?php

require_once('connect.php');
session_start();

?>
<html>
<head>
<title>Registered successfully</title>
</head>
<body>
<h5>
<p align="center"><b><font size="4" color="#820000" style="font-family:Verdana, Arial, Helvetica, sans-serif">Update SuccessFully<br/>YOUR VMID :&nbsp; </font></b><?php echo "<font size=4 color=#820000 style='font-family:Verdana, Arial, Helvetica, sans-serif'>".$_SESSION['vmid']."</font>";?>
</center>
</h5>
<table width="95%" height="106" border="0" cellpadding="0" cellspacing="0">
 <tr><td height="31"><b><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">&nbsp;&nbsp;To complete the Registration process :</font></b></td></tr>
 <tr><td height="25"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">&nbsp;&nbsp;&nbsp;<b>-</b>&nbsp;Use this VMID to login into your profile page.</font></td></tr>
 <tr>
   <td height="25"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">&nbsp;&nbsp;&nbsp;<b>-</b>&nbsp;Then click on Download details to download your registration information.</font></td>
 </tr>
  <tr><td height="25"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">&nbsp;&nbsp;&nbsp;<b>-</b>&nbsp;Take a print out of the <b>Student Registration Information</b>.
</font></td></tr>
<tr><td height="25"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">&nbsp;&nbsp;&nbsp;<b>-</b>&nbsp;Attest it with your college Principal and HOD.</font></td></tr>
<tr><td height="25"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">&nbsp;&nbsp;&nbsp;<b>-</b>&nbsp;Send back to Vignan University address on/before 23-02-2011.</font></td></tr>
<tr><td height="25"><font color="#820000" style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>-</b>&nbsp;Note:To login into your profile page use your VMID and password whcih was given at the time of event registration</b>.
</font></td></tr>
</table>
 <Br>
<br><center><div id=note2  style="width:600px; align;center;font-family:vardana;text-align:left;color:black;padding:4px;background-color: lightyellow;z-index: 100;font-size:14px;border: 2px solid black;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td height="42"><font size="2" color="red" style="font-family:Verdana, Arial, Helvetica, sans-serif">For contact details :</font> <font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">B.Premamayudu, Mobile No:9490006478 , Vignan University, Vadlamudi, Guntur, AP 522213.</font></td>
</tr><tr><td height="25">
     <font size="2" color="red" style="font-family:Verdana, Arial, Helvetica, sans-serif">For Print out:</font><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Login and Dowload PDF </font></td></tr></table> </div></center>
<br>
<br>
</body>
</html>
<?php session_write_close();?>