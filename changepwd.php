<?php
session_start();
if(isset($_SESSION['vmid']))
	$vmid=$_SESSION['vmid'];
else 
{
	session_write_close();
	$_SESSION['src']='';
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
<style type="text/css">
.float_left {
float:left;
}
.float_right {
float:right;
}
.container {
width:100px;
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
   <script language="javascript">
     var flag = 2;
			  function pcheck(cpsw)
					{  
					  var psw=document.pass.psw.value;
					   if(psw!=cpsw)
					   {
					   document.getElementById("pcheck").innerHTML="<img src='wrong.png'></img>";
					   return false;
					   }
					   else
						{
						document.getElementById("pcheck").innerHTML="<img src='bigtick.jpg'></img>";
						return true;
						}
					 }
		function checking()
		{
			//alert(pcheck(pass.id2.value));
			 if(document.pass.id3.value == "" || document.pass.id1.value == "" || document.pass.id2.value == "")
				 return false;
			p1=document.pass.id1.value ;
			 if(!(pcheck(pass.id2.value)))
				return false;
			
				if(p1.length<6) return false;
			  //alert(flag);
		if( flag == 1)
			{
				//alert("he555lo");
				return false;
			} 
			
			
			 return true;
		}

	function showPass(str)
	{
		//alert(str);
		var xmlhttp;    
		if (str=="")
		  {
		  document.getElementById("pswd").innerHTML="";
		  return false;
		  }
			if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			xmlhttp.onreadystatechange=function()
			 {
			 if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{

					var s = xmlhttp.responseText;
				//	alert("jee;"+s);
				
					if(s=="true")
						{
						   //alert("trueadssssssss "+s);
							document.getElementById("pswd").innerHTML="<img src='bigtick.jpg'></img>";
						 flag=0; 						}
					else
						{
						 // alert(s);
							document.getElementById("pswd").innerHTML="<img src='wrong.png'></img>";
						   flag =1;		
						}
				
                   }
			 }

		  
			xmlhttp.open("GET","pwdcheck.php?q="+str,true);
			xmlhttp.send();
     }
</script>
</head>
<body bgcolor="#E5E5E5">   
  <form name="pass" action="update-success.php" method="post" onSubmit="return checking()">
<div class="container_head">
<img src="images/sidebar_left.jpeg" alt="" class="float_left"/>
<img src="images/sidebar_right.jpeg" alt="" class="float_right"/>
<div class="container_head_text">
<font color="#333333"><center>Change Password</center></font>
</div>
</div>
<div class="container_content">Password Should be Minimum of six characters
  <table border="0" cellpadding="0" cellspacing="0" width="40%" align="center">
   <tr><td height="10"></td></tr><tr>
	 <td width="50%" height="30" align="center"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Enter Current Password </font></td>
     <td width="50%" height="30" align="center"><INPUT TYPE="password" id="id3"onBlur="showPass(this.value)"></td>
	 <td width="1%" align="center"><div id="pswd"></div></td>
    </tr>
	  <tr>
	    <td height="30" align="center"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Enter New Password</font></td>
	    <td height="30" align="center"><INPUT TYPE="password" id="id1"name="psw"></td>
	    <td></td>
	    </tr>
	  <tr>
	     <td height="30" align="center"><font size="2" style="font-family:Verdana, Arial, Helvetica, sans-serif">Confirm New Password</font></td>
	     <td height="30" align="center"><INPUT TYPE="password" id="id2" onBlur="return pcheck(this.value) "></td>
		 <td><div id="pcheck"></div></td>
	  </tr> 
    <tr>
	 <td height="35" colspan="3" align="center"><INPUT TYPE="submit" value="Submit"></td></tr>
  </table>
  </div>
  </form>
</body>
</html> 
