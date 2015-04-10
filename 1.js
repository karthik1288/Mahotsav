///AJAX CODE -- > Start

var xmlhttp;
function validateid(obj,divid)
{
		var x=obj;
		var indx=divid.charAt(2);
		var teamheadid=teamrg.tmhead.value;
		xmlhttp=GetXmlHttpObject();
		if (xmlhttp==null)
		  {
		  alert ("Your browser does not support AJAX!");
		  return;
		  }
		var url="validateid.php?id="+x+"&teamheadid="+teamheadid+"&event="+teamrg.evnt.value;
		xmlhttp.onreadystatechange=function()
									{
									if (xmlhttp.readyState==4)
									  {
										var jk=xmlhttp.responseText;
										if(jk=="true")
										  {
											document.getElementById(divid).innerHTML="<img src='bigtick.jpg'></img>";
											document.getElementById("errmsg").innerHTML="";
											arr[indx]="true";
										  }
										else
										  {	
										   document.getElementById(divid).innerHTML="<img src='wrong.png'></img>";
										   document.getElementById("errmsg").innerHTML="<table><tr><td valign=center><img src='error.png'></img></td><td>"+jk+"</td></tr></table>";
										   arr[indx]="false";
										  }
									  }
									};
		xmlhttp.open("GET",url,true);
		document.getElementById(divid).innerHTML="<img src='loader.gif' width='20' height='20'></img>";
		xmlhttp.send(null);

}

function GetXmlHttpObject()
{
if (window.XMLHttpRequest)
  {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  return new XMLHttpRequest();
  }
if (window.ActiveXObject)
  {
  // code for IE6, IE5
  return new ActiveXObject("Microsoft.XMLHTTP");
  }
return null;
}

////AJAX CODE --> End