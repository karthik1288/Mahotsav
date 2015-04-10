var arr=new Array();
var ids=new Array();

function abc(indx)
{
	document.getElementById("errmsg").innerHTML="";
	var val=indx.charAt(0);
switch(val)
{
 case '2':funembed("2");
			break;
 case '3':funembed("3");
			break;
 case '4':funembed("4");
			break;
 case '5':funembed("5");
			break;
 case '6':funembed("6");
			break;
 case '7':funembed("7");
			break;
 case '8':funembed("8");
			break;
 case '9':funembed("9");
			break;
 case '0':funembed("10");
			val=10;
			break;
default :var x="<font size='1' color='#820000' style='font-family:Verdana, Arial, Helvetica, sans-serif'>No need of Team Registration</font>";
		document.getElementById('reg').innerHTML=x;
		break;
}
	for(var i=1;i<val;i++)
		arr[i]=null;
	for(var i=1;i<val;i++)
		ids[i]="";
}
 
function funembed(val)
{
 switch(val)
 {
 case '2':str1="<table width='75%'><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Head&nbsp;(ID)&nbsp;:&nbsp;</font><span class='style1' style='color:#FF0000;'>*</span></td><td><input type='text' name='tmhead'></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-1&nbsp;(ID)&nbsp;:</font></td><td align='center'><input type='text' name='tm1' id='tm1' onblur=chkmem(this.value,'tm1id')></td><td><div id='tm1id'></div></td></tr></table>";
		  break;
 case '3':str1="<table width='100%'><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Head&nbsp;(ID)&nbsp;:&nbsp;</font><span class='style1' style='color:#FF0000;'>*</span></td><td><input type='text' name='tmhead'></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-1&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm1' onblur=chkmem(this.value,'tm1id') ></td><td><div id='tm1id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-2&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm2' onblur=chkmem(this.value,'tm2id') ></td><td><div id='tm2id'></div></td></tr></table>";
		  break;
 case '4':str1="<table width='100%'><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Head&nbsp;(ID)&nbsp;:&nbsp;</font><span class='style1' style='color:#FF0000;'>*</span></td><td><input type='text' name='tmhead'></td><td colspan='7'></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-1&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm1' onblur=chkmem(this.value,'tm1id') ></td><td><div id='tm1id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-2&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm2' onblur=chkmem(this.value,'tm2id') ></td><td><div id='tm2id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-3&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm3' onblur=chkmem(this.value,'tm3id') ></td><td><div id='tm3id'></div></td></tr></table>";
		  break;
 case '5':str1="<table width='100%'><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Head&nbsp;(ID)&nbsp;:&nbsp;</font><span class='style1' style='color:#FF0000;'>*</span></td><td><input type='text' name='tmhead'></td><td></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-1&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm1' onblur=chkmem(this.value,'tm1id') ></td><td><div id='tm1id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-2&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm2' onblur=chkmem(this.value,'tm2id') ></td><td><div id='tm2id'></div></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-3&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm3' onblur=chkmem(this.value,'tm3id') ></td><td><div id='tm3id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-4&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm4' onblur=chkmem(this.value,'tm4id') ></td><td><div id='tm4id'></div></td><td colspan='3'></td></tr></table>";
		  break;
  case '6':str1="<table width='100%'><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Head&nbsp;(ID)&nbsp;:&nbsp;</font><span class='style1' style='color:#FF0000;'>*</span></td><td><input type='text' name='tmhead'></td><td></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-1&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm1'onblur=chkmem(this.value,'tm1id') ></td><td><div id='tm1id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-2&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm2'onblur=chkmem(this.value,'tm2id') ></td><td><div id='tm2id'></div></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-3&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm3' onblur=chkmem(this.value,'tm3id') ></td><td><div id='tm3id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-4&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm4' onblur=chkmem(this.value,'tm4id') ></td><td><div id='tm4id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-5&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm5' onblur=chkmem(this.value,'tm5id') ></td><td><div id='tm5id'></div></td></tr></table>";
		  break;
  case '7':str1="<table width='100%'><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Head&nbsp;(ID)&nbsp;:&nbsp;</font><span class='style1' style='color:#FF0000;'>*</span></td><td><input type='text' name='tmhead'></td><td colspan='7'></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-1&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm1' onblur=chkmem(this.value,'tm1id') ></td><td><div id='tm1id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-2&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm2' onblur=chkmem(this.value,'tm2id') ></td><td><div id='tm2id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-3&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm3' onblur=chkmem(this.value,'tm3id') ></td><td><div id='tm3id'></div></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-4&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm4' onblur=chkmem(this.value,'tm4id') ></td><td><div id='tm4id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-5&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm5' onblur=chkmem(this.value,'tm5id') ></td><td><div id='tm5id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-6&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm6' onblur=chkmem(this.value,'tm6id') ></td><td><div id='tm6id'></div></td></tr></table>";
		  break;
  case '8':str1="<table width='100%'><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Head&nbsp;(ID)&nbsp;:&nbsp;</font><span class='style1' style='color:#FF0000;'>*</span></td><td><input type='text' name='tmhead'></td><td></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-1&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm1' onblur=chkmem(this.value,'tm1id') ></td><td><div id='tm1id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-2&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm2' onblur=chkmem(this.value,'tm2id') ></td><td><div id='tm2id'></div></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-3&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm3' onblur=chkmem(this.value,'tm3id') ></td><td><div id='tm3id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-4&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm4' onblur=chkmem(this.value,'tm4id') ></td><td><div id='tm4id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-5&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm5' onblur=chkmem(this.value,'tm5id') ></td><td><div id='tm5id'></div></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-6&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm6' onblur=chkmem(this.value,'tm6id') ></td><td><div id='tm6id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-7&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm7' onblur=chkmem(this.value,'tm7id') ></td><td><div id='tm7id'></div></td><td colspan='3'></td></tr></table>";
		  break;
  case '9':str1="<table width='100%'><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Head&nbsp;(ID)&nbsp;:&nbsp;</font><span class='style1' style='color:#FF0000;'>*</span></td><td><input type='text' name='tmhead'></td><td></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-1&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm1' onblur=chkmem(this.value,'tm1id') ></td><td><div id='tm1id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-2&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm2' onblur=chkmem(this.value,'tm2id') ></td><td><div id='tm2id'></div></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-3&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm3' onblur=chkmem(this.value,'tm3id') ></td><td><div id='tm3id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-4&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm4' onblur=chkmem(this.value,'tm4id') ></td><td><div id='tm4id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-5&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm5' onblur=chkmem(this.value,'tm5id') ></td><td><div id='tm5id'></div></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-6&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm6' onblur=chkmem(this.value,'tm6id') ></td><td><div id='tm6id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-7&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm7' onblur=chkmem(this.value,'tm7id') ></td><td><div id='tm7id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-8&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm8' onblur=chkmem(this.value,'tm8id') ></td><td><div id='tm8id'></div></td></tr></table>";
		  break;
  case '10':str1="<table width='100%'><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Head&nbsp;(ID)&nbsp;:&nbsp;</font><span class='style1' style='color:#FF0000;'>*</span></td><td><input type='text' name='tmhead'></td><td colspan='7'></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-1&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm1' onblur=chkmem(this.value,'tm1id') ></td><td><div id='tm1id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-2&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm2' onblur=chkmem(this.value,'tm2id') ></td><td><div id='tm2id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-3&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm3' onblur=chkmem(this.value,'tm3id') ></td><td><div id='tm3id'></div></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-4&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm4' onblur=chkmem(this.value,'tm4id') ></td><td><div id='tm4id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-5&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm5' onblur=chkmem(this.value,'tm5id') ></td><td><div id='tm5id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-6&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm6' onblur=chkmem(this.value,'tm6id') ></td><td><div id='tm6id'></div></td></tr><tr height='40'><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-7&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm7' onblur=chkmem(this.value,'tm7id') ></td><td><div id='tm7id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-8&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm8' onblur=chkmem(this.value,'tm8id') ></td><td><div id='tm8id'></div></td><td><font size='2' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Team&nbsp;Member-9&nbsp;(ID)&nbsp;:</font></td><td><input type='text' name='tm9' onblur=chkmem(this.value,'tm9id') ></td><td><div id='tm9id'></div></td></tr></table>";
		  break;
 }
 document.getElementById('reg').innerHTML=str1;
}




function chkmem(val,str)
{
	var ind=Number(str.charAt(2));
	if(teamrg.tmhead.value=="")
	{
		document.getElementById("errmsg").innerHTML="<table><tr><td valign=center><img src='error.png'></img></td><td><font size='1' color='#820000' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Please Enter Team Head ID</font></td></tr></table>";
		teamrg.tmhead.focus();
	}
	else
	{	
		ids[0]=teamrg.tmhead.value;
		if(val=="")
		{
			document.getElementById(str).innerHTML="";
			arr[ind]=null;
			ids[ind]="";
		}
		else
		{
			var i;
			ids[ind]=val;
			var temp=(teamrg.evnt.value.charAt(0)==0)?9:teamrg.evnt.value.charAt(0)-1;
			for(i=temp;i>0;i--)
				if(ind!=i)
					if(val==ids[i])
						break;
			if(val==ids[i])
			{
			arr[ind]="false";
			document.getElementById("errmsg").innerHTML="<table><tr><td valign=center><img src='error.png'></img></td><td><font size='1' color='#820000' style='font-family:Verdana, Arial, Helvetica, sans-serif'>IDS Must Be Different</font></td></tr></table>";
			document.getElementById(str).innerHTML="<img src='wrong.png'></img>";
			return;
			}
			else
			validateid(val,str);
		}
	}
}

function chkfrm(indx)
{
   if(indx=="no")
   {
		document.getElementById("errmsg").innerHTML="<table><tr><td valign=center><img src='error.png'></img></td><td><font size='1' color='#820000' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Please Select The Event</font></td></tr></table>";
		return false;
   }
   else
   {
	var val=indx.charAt(0);
	var val1=indx.charAt(2);
	val=(val==0)?10:val;
	val1=(val1==0)?9:val1-1;
	ids[0]=teamrg.tmhead.value;
	for(var i=1;i<val;i++)
		if(arr[i]=="false")
				return false;
	for(var i=1,cnt=0;i<val;i++)
	{
		if(arr[i]=="true")
			cnt++;
	}
	if(cnt!=0)
	{
		if(cnt>=val1)
		{
			for(var i=1;i<val;i++)
			{
					if(ids[0]==ids[i])
					{
						document.getElementById("errmsg").innerHTML="<table><tr><td valign=center><img src='error.png'></img></td><td><font size='1' color='#820000' style='font-family:Verdana, Arial, Helvetica, sans-serif'>IDS Must Be Different</font></td></tr></table>";
						return false;
					}
			}
			return true;
		}
		else
		{
			document.getElementById("errmsg").innerHTML="<table><tr><td valign=center><img src='error.png'></img></td><td><font size='1' color='#820000' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Please Check Team Constraint</font></td></tr></table>";
			return false;
		}
	}
	else
	{	
	document.getElementById("errmsg").innerHTML="<table><tr><td valign=center><img src='error.png'></img></td><td><font size='1' color='#820000' style='font-family:Verdana, Arial, Helvetica, sans-serif'>Please Fill The Required Details</font></td></tr></table>";
	return false;
	}
   }
}


function chkmemmsg(indx)
{
	var val=indx.charAt(0);
	var val1=indx.charAt(2);
	if(val!=val1)
		document.getElementById("evntmsg").innerHTML="<font size='1' color='#820000' style='font-family:Verdana, Arial, Helvetica, sans-serif'>For Team Registration Team Must Be Minimum Of "+val1+" Members</font>";
	else
		document.getElementById("evntmsg").innerHTML="<font size='1' color='#820000' style='font-family:Verdana, Arial, Helvetica, sans-serif'>For Team Registration All Members are Manditory</font>";
}