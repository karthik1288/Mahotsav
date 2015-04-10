function fval(str)
{	var str1=str;
	//alert(str1);
	var su="";
	//alert("lhadskf");
	if(str1=="")
	{	
		//stmt="First name should not be empty";
		document.getElementById("stmts").innerHTML="First name should not be empty";
		su="error";
		registration.fname.focus();
		registration.fname.select();
		document.getElementById("fname2").innerHTML="<img src='wrong.png'></img>";
		return false;
	}
	if(isonlyCharacters(str1))
	{
		document.getElementById("stmts").innerHTML="First name should contain only characters";
		su="error";
		registration.fname.focus();
		registration.fname.select();
		document.getElementById("fname2").innerHTML="<img src='wrong.png'></img>";	
		return false ;
	}
	if(su=="")
	{
		//registration.fname.focus();
		//registration.fname.select();
		document.getElementById("fname2").innerHTML="<img src='bigtick.jpg'></img>";	
		document.getElementById("stmts").innerHTML="";
		return true;
	}
	if(str1!="")
	{
		document.getElementById("fname2").innerHTML="<img src='bigtick.jpg'></img>";
		document.getElementById("stmts").innerHTML="";
		return true;
	}
	
}

function lval(str)
{	var str1=str;
	//alert(str1);
	//alert("lhadskf");
	var su="";
	if(str1=="")
	{
		document.getElementById("stmts").innerHTML="Last name should not be empty";
		su="error";
		registration.lname.focus();
		registration.lname.select();
		document.getElementById("lname2").innerHTML="<img src='wrong.png'></img>";
		return false;
	}
	if(isonlyCharacters(str1))
	{
		document.getElementById("stmts").innerHTML="Last name should contain only characters";
		su=="error";
		registration.lname.focus();
		registration.lname.select();
		document.getElementById("lname2").innerHTML="<img src='wrong.png'></img>";	
		return false;
	}
	if(su=="")
	{
		document.getElementById("lname2").innerHTML="<img src='bigtick.jpg'></img>";	
		document.getElementById("stmts").innerHTML="";
		return true;
	}
	if(str1!="")
	{
		
		document.getElementById("lname2").innerHTML="<img src='bigtick.jpg'></img>";
		document.getElementById("stmts").innerHTML="";
		return true;
	}
	
}
function br(str)
{	
	
	if(str=="branch")
	{
		//alert(""+str);
		
		
		document.getElementById("bid2").innerHTML="<img src='wrong.png'></img>";
		document.getElementById("stmts").innerHTML="Please select branch";
		return false;
	}
	else
	{
		document.getElementById("bid2").innerHTML="<img src='bigtick.jpg'></img>";
		document.getElementById("stmts").innerHTML="";
		return true;
	}
}
function isconchar(p)
	{
		 var ph=p;
		// alert(p);
		 for(var i=0;i<ph.length;i++)
		 {
		  if(!isNaN(ph.charAt(i)))
				return false;
		 }
		 return true;
	}
	function showhide(str) 
{
if(str=="Male")
 {
		document.getElementById("gen").innerHTML="<img src='bigtick.jpg'></img>";
		document.getElementById("stmts").innerHTML="";
	document.getElementById("2").disabled=true;
	document.getElementById("4").disabled=true;
	document.getElementById("6").disabled=true;
	document.getElementById("8").disabled=true;
	document.getElementById("10").disabled=true;
	document.getElementById("13").disabled=true;
	document.getElementById("14").disabled=true;
	document.getElementById("16").disabled=true;
	document.getElementById("18").disabled=true;
	document.getElementById("20").disabled=true;
	
	
	document.getElementById("1").disabled=false;
	document.getElementById("3").disabled=false;
	document.getElementById("5").disabled=false;
	document.getElementById("7").disabled=false;
	document.getElementById("9").disabled=false;
	document.getElementById("11").disabled=false;
	document.getElementById("12").disabled=false;
	document.getElementById("15").disabled=false;
	document.getElementById("17").disabled=false;
	document.getElementById("19").disabled=false;
	document.getElementById("21").disabled=false;
	document.getElementById("22").disabled=false;
	document.getElementById("23").disabled=false;
	return true;
//	alert("okadsfasd");
 
 }
if(str=="Female")
 {
	document.getElementById("gen").innerHTML="<img src='bigtick.jpg'></img>";
	document.getElementById("stmts").innerHTML="";
	document.getElementById("1").disabled=true;
	document.getElementById("3").disabled=true;
	document.getElementById("5").disabled=true;
	document.getElementById("7").disabled=true;
	document.getElementById("9").disabled=true;
	document.getElementById("11").disabled=true;
	document.getElementById("12").disabled=true;
	document.getElementById("15").disabled=true;
	document.getElementById("17").disabled=true;
	document.getElementById("19").disabled=true;
	document.getElementById("21").disabled=true;
	document.getElementById("22").disabled=true;
	document.getElementById("23").disabled=true;
	
	document.getElementById("2").disabled=false;
	document.getElementById("4").disabled=false;
	document.getElementById("6").disabled=false;
	document.getElementById("8").disabled=false;
	document.getElementById("10").disabled=false;
	document.getElementById("13").disabled=false;
	document.getElementById("14").disabled=false;
	document.getElementById("16").disabled=false;
	document.getElementById("18").disabled=false;
	document.getElementById("20").disabled=false;
	
return true;

 }
 if(str=="gender")
	{
		document.getElementById("1").disabled=false;
	document.getElementById("3").disabled=false;
	document.getElementById("5").disabled=false;
	document.getElementById("7").disabled=false;
	document.getElementById("9").disabled=false;
	document.getElementById("11").disabled=false;
	document.getElementById("12").disabled=false;
	document.getElementById("15").disabled=false;
	document.getElementById("17").disabled=false;
	document.getElementById("19").disabled=false;
	document.getElementById("21").disabled=false;
	document.getElementById("22").disabled=false;
	document.getElementById("23").disabled=false;
	
	document.getElementById("2").disabled=false;
	document.getElementById("4").disabled=false;
	document.getElementById("6").disabled=false;
	document.getElementById("8").disabled=false;
	document.getElementById("10").disabled=false;
	document.getElementById("13").disabled=false;
	document.getElementById("14").disabled=false;
	document.getElementById("16").disabled=false;
	document.getElementById("18").disabled=false;
	document.getElementById("20").disabled=false;
	
	 //alert(str+ "     "+document.getElementById("gen"));
	 document.getElementById("stmts").innerHTML="Please select gender";
	 document.getElementById("gen").innerHTML="<img src='wrong.png'></img>";
	
	
	 return false;
	}
}
function phcheck(str)
{
	//alert(str);
	var ch="";

if(str=="")	
{
	document.getElementById("stmts").innerHTML="please enter phone number";
	ch="error";
document.getElementById("ph").innerHTML="<img src='wrong.png'></img>";//alert("please enter phno number"); 
document.registration.phno.focus();	

return false;	
}

if ((str.length < 10) || (str.length > 10)) 
{
	ch="error";
	document.getElementById("stmts").innerHTML="Phone Number should be 10 digits";
document.getElementById("ph").innerHTML="<img src='wrong.png'></img>";		//alert("phone number too small");
		document.registration.phno.focus();
		return false;
}
if(isphone(str))
{
		document.getElementById("stmts").innerHTML="Phone Number Wrong Format";
		ch="error";
document.getElementById("ph").innerHTML="<img src='wrong.png'></img>";//alert("Phone Number Wrong Format"); 
document.registration.phno.focus();
document.registration.phno.select();	
return false;
//return false;
}
if(ch=="")
	{
document.getElementById("ph").innerHTML="<img src='bigtick.jpg'></img>";
document.getElementById("stmts").innerHTML="";
return true;
	}
}

function isphone(str)
{
	for(var i=0;i<str.length;i++)
	{
		if(isNaN(str.charAt(i)))
			return true;
	}
	return false;
 }

 function validate_reg()
{


	if((document.registration.email.value)=="")	
	{	
		//alert("Validating Email");
	document.getElementById("em").innerHTML="<img src='wrong.png'></img>"; 
		document.registration.email.focus();
	 return false;			
	}
  if(!isemail(document.registration.email.value))
	{
	        
		document.getElementById("em").innerHTML="<img src='wrong.png'></img>"; 
		document.registration.email.focus();
		document.registration.email.select();	
   return false;
	}
		document.getElementById("em").innerHTML="<img src='bigtick.jpg'></img>"; 
		document.getElementById("stmts").innerHTML="";
		return true;
}
function myfunction()
{
if(Trim(document.registration.ncol.value)=="")	
{	
	
document.getElementById("nc").innerHTML="<img src='wrong.png'></img>"; 
document.getElementById("stmts").innerHTML="College name should not be empty";
document.registration.ncol.focus();	
return false;
}

	if((isonlyCharacters(document.registration.ncol.value)))
	{
      document.getElementById("nc").innerHTML="<img src='wrong.png'></img>"; 
	  document.getElementById("stmts").innerHTML="College name contains only characters";
        return false;
	}
	else
	{
	document.getElementById("nc").innerHTML="<img src='bigtick.jpg'></img>"; 
	document.getElementById("stmts").innerHTML="";
	return true;
	}
}



function Trim(str)
{
	
	return str=str.replace(/^ +/,"").replace(/ +$/,"");
}
function isonlyCharacters(str)
{

	for(var i=0;i<str.length;i++)
	{
		if((isNaN(str.charAt(i))))
		return false;
	}
 return true;
}



function isemail(parEmailId)
{
	var state=true;
	var count=0;
	var counta=0;
	var ErrMsg="";

	//no successive two dots
	for(var i=0; i<parEmailId.length-1; i++)
		if((parEmailId.charAt(i)==".")&&(parEmailId.charAt(i+1)=="."))
			state=false;                               
	//no successive two '@'
	for(var i=0; i<parEmailId.length-1; i++)
		if((parEmailId.charAt(i)=="@")&&(parEmailId.charAt(i+1)=="@"))
			state=false;                               


	//no successive '.'and'@'
	for(var i=0; i<parEmailId.length-1; i++)
		if((parEmailId.charAt(i)==".")&&(parEmailId.charAt(i+1)=="@"))
			state=false;

	//no successive'@' and '.'
	for(var i=0; i<parEmailId.length-1; i++)
		if((parEmailId.charAt(i)=="@")&&(parEmailId.charAt(i+1)=="."))
			state=false;

	//the number of "." should be atleast one
	for(i=0; i<parEmailId.length;i++)
	{
		if(parEmailId.charAt(i)==".")
			count=count+1;
	}
	
	if(count<1)
		state=false;

	//the first and last char cannot be "."
	var l= parEmailId.length;
		if((parEmailId.charAt(0)==".")||(parEmailId.charAt(l-1)=="."))
			state=false;
	
	//the first and last char cannot be "@"
	var l= parEmailId.length;
		if((parEmailId.charAt(0)=="@")||(parEmailId.charAt(l-1)=="@"))
			state=false;
	
	//aleast one "@"
	for(i=0; i<parEmailId.length;i++)
	{
		if(parEmailId.charAt(i)=="@")
			counta=counta+1;
	}
	if(counta<1)
		state=false;

//alert(state);
	return state;

}






function newcol()
	{ 
		//alert(registration.newcollege.checked);
		if(document.registration.newcollege.checked)
		{
			registration.college.disabled=true;
			document.getElementById("nc").innerHTML="";
			document.getElementById("newcol").style.visibility = "visible";
		}
		if(!document.registration.newcollege.checked)
		{
			registration.college.disabled=false;
			document.getElementById("nc").innerHTML="<img src='bigtick.jpg'></img>";
			document.getElementById("newcol").style.visibility = "hidden";
		}
}


function pcheck(cpsw)
{
	//alert(cpsw);
	var psw=document.registration.psw.value;
	/*if(psw.length<6)
	{
		document.getElementById("pcheck").innerHTML="<img src='wrong.png'></img>"; 
		return false;
	}*/
	if(!plength(psw))
	{
		registration.psw.focus();
		registration.psw.select();
		document.getElementById("pcheck").innerHTML="<img src='wrong.png'></img>"; 
		document.getElementById("stmts").innerHTML="Password length should be more than 6";
		return false;
	}
	if(cpsw=="")
	{
		registration.cpsw.focus();
		registration.cpsw.select();
		document.getElementById("pcheck").innerHTML="<img src='wrong.png'></img>"; 
		document.getElementById("stmts").innerHTML="Confirm Password should not be empty";
		return false;
	}
	if(psw!=cpsw)
	{
		registration.cpsw.focus();
		registration.cpsw.select();
		document.getElementById("pcheck").innerHTML="<img src='wrong.png'></img>"; 
		document.getElementById("stmts").innerHTML="Password and confirm password should be match";
		return false;
	}
	else{
		document.getElementById("pcheck").innerHTML="<img src='bigtick.jpg'></img>"; 
		//document.getElementById("stmts").innerHTML="";
		document.getElementById("stmts").innerHTML="";
		return true;
	}

}

function plength(psw)
{
	var psw1=registration.psw.value;
	//alert(psw1);
	if(psw=="")
	{
		registration.psw.focus();
		registration.psw.select();
		document.getElementById("pcheck").innerHTML="<img src='wrong.png'></img>"; 
		document.getElementById("stmts").innerHTML="Password should not be empty";
		return false;
	}
	else if(psw.length<6)
	{
		registration.psw.focus();
		registration.psw.select();
		document.getElementById("pcheck").innerHTML="<img src='wrong.png'></img>"; 
		document.getElementById("stmts").innerHTML="Password length should be more than 6";
		return false;
	}
	else
	{
		document.getElementById("pcheck").innerHTML="";
		document.getElementById("stmts").innerHTML="";
		return true;
	}
}



function stcheck(chosen)
{
if (chosen=="sl") {
	document.getElementById("stmts").innerHTML="Please select any state";
	//alert("okkkkkkkkkkslllllllll");
//	registration.psw.focus();
  document.getElementById("state1").innerHTML="<img src='wrong.png'></img>";
  
  return false;
  //selbox.options[selbox.options.length] = new Option('Please select one of the options above first',' ');
 
}
else
	{
		document.getElementById("state1").innerHTML="<img src='bigtick.jpg'></img>";
		document.getElementById("stmts").innerHTML="";
		  return true;
	}
}









function all123()
 {
	 var s="";
	 //alert("asdfasdfasdf");
	 //alert("asdfasd"+" "+document.getElementById("fname1").value);
	 var fname=registration.fname.value;
	 //alert(fname);
	 var lname=registration.lname.value;
 	 var cid=registration.cid.value;
	 //alert(cid);
	 var bid=registration.branch.value;
	 
	 var gender=registration.gender.value;
	 var state=registration.state.value;
	 var phno=registration.phno.value;
	 var email=registration.email.value;
	// alert(email);
	 var psw=registration.psw.value;
	 //alert(psw+"asdfffffffffffffffffffffffffffffffffffffffffffff");
	 var cpsw=registration.cpsw.value;

//alert(cpsw);

 
	 if(!fval(fname))
	 {
		 s="f";
		 //alert("hjlkhjl,f");
		 return false;
	 }
	 /*else if(!lval(fname))
	 {
		 alert("ghmkojrtfon;lomkvcln");
		 return false;
	 }*/
	 //alert(clgchk(cid));
	  else if(!clgchk(cid))
	 {
		return false;
	 }
	 else if(!lval(lname))
	 {
		 //alert("gaetjytkon;lomkvcln");
		 return false;
	 }
	 else if(!br(bid))
	 {
		return false;
	 }
	 else if(!showhide(gender))
	 {
		return false;
	 }
	 else if(!stcheck(state))
	 {
		return false;
	 }
	 else if(!phcheck(phno))
	 {
		return false;
	 }
	 else if(!validate_reg(email))
	 {
		 //alert("Hello");
		return false;
	 }
	else if (registration.newcollege.checked)
	 {
		 if(!myfunction())
			return false;
	 }else if(!pcheck(cpsw))
	 {
		return false;
	 }
	 else
		 return true;
 }







/*function ival(str)
{
	var str1=str;
	//alert(str1);
	if(str1=="")
	{
		document.getElementById("cid2").innerHTML="<img src='wrong.png'></img>";
		return false;
	}
	else
	{
		document.getElementById("cid2").innerHTML="<img src='bigtick.jpg'></img>";
		return true;
	}
}*/


var xmlhttp;
 function clgchk(str)
{
	  //alert("asdfasdf"+str);
	  if(str!="")
	  {
	  document.getElementById("stmts").innerHTML="";
	  xmlhttp=GetXmlHttpObject();
		if (xmlhttp==null)
		  {
		  alert ("Your browser does not support AJAX!");
		  return;
		  }
		  var clgid=registration.cid.value;
		var url="collegechk.php?clgid="+clgid;
		xmlhttp.onreadystatechange=fun1;
		xmlhttp.open("GET",url,true);
		document.getElementById("cid2").innerHTML="<img src='loader.gif'></img>";
		xmlhttp.send(null);
		return true;
	  }
	  else 
	{
		  registration.cid.focus();
		registration.cid.select();
		  document.getElementById("cid2").innerHTML="<img src='wrong.png'></img>";
		  document.getElementById("stmts").innerHTML="College ID should not be empty";
		return false;
	}
//alert("ok");
}
function fun1()
{
//	alert("asdfasdfasdfgasdfasdfasdfasdfasdfasdfasdf");
if (xmlhttp.readyState==4)
	{
	var msg=xmlhttp.responseText;
	//alert(msg);
	if(msg=="true")
		{//alert("NOOOOOOOOOOOOOO");
		document.getElementById("cid2").innerHTML="<img src='wrong.png' alt=''></img>";
		document.getElementById("stmts").innerHTML="Already some one is registered with this College ID";
		}
	else
		{
		//alert("okkkkkkkkkkkk");
		document.getElementById("cid2").innerHTML="<img src='bigtick.jpg' alt=''></img>";
		document.getElementById("stmts").innerHTML="";
		}	
	}
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



function vollychk()
{
	if(document.getElementById("3").checked)
	{
		document.getElementById("7").disabled=true;
	}
	else if(document.getElementById("7").checked)
	{
		document.getElementById("3").disabled=true;
	}
	else
	{
		document.getElementById("3").disabled=false;
		document.getElementById("7").disabled=false;
	}
}


function throwchk()
{
	if(document.getElementById("4").checked)
	{
		document.getElementById("6").disabled=true;
	}
	else if(document.getElementById("6").checked)
	{
		document.getElementById("4").disabled=true;
	}
	else
	{
		document.getElementById("4").disabled=false;
		document.getElementById("6").disabled=false;
	}
}



var cntb=0;
var cntg=0;
function athchkb(str)
{
	if(document.getElementById(str.id).checked)
	{
		cntb++;
		if(cntb==3)
		{
			document.getElementById(str.id).checked=false;
			document.getElementById("note").innerHTML="Only 2 events can select for Athletics";
			cntb--;
		}
	}
	else
	{
		cntb--;
		document.getElementById("note").innerHTML="";
	}
		
}
function athchkg(str)
{
	if(document.getElementById(str.id).checked)
	{
		cntg++;
		if(cntg==3)
		{
			document.getElementById(str.id).checked=false;
			document.getElementById("note").innerHTML="Only 2 events can select for Athletics";
			cntg--;
		}
	}
	else
	{
		cntg--;
		document.getElementById("note").innerHTML="";
	}
			
}





function athckeckall()
{
	//alert("hai ra");
	//alert("asdf"+registration.gen.value);
	var str=registration.gen.value;
	if(str=="Male")
	{
		if(document.getElementById("15").checked)
			cntb++;
		if(document.getElementById("17").checked)
			cntb++;
		if(document.getElementById("19").checked)
			cntb++;
		if(document.getElementById("21").checked)
			cntb++;
		if(document.getElementById("22").checked)
			cntb++;
		if(document.getElementById("23").checked)
			cntb++;
		//alert(cntb);
	}
	else if(str=="Female")
	{
		if(document.getElementById("13").checked)
			cntg++;
		if(document.getElementById("14").checked)
			cntg++;
		if(document.getElementById("16").checked)
			cntg++;
		if(document.getElementById("18").checked)
			cntg++;
		if(document.getElementById("20").checked)
			cntg++;
		//alert(cntg);
	}
}







