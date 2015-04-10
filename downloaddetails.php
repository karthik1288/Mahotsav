<?php
session_start();
if(isset($_SESSION['vmid']))
	$vmid=$_SESSION['vmid'];
else header("location:index.html");
if($vmid=='')
	exit();
?>
<?php
require('fpdf.php');
require_once('connect.php');
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
/*class PDF extends FPDF
{
//Page header
function Header()
{
	//Logo
	$this->Image('head.png',5,10,200);
	//Arial bold 15
	$this->SetFont('Arial','B',25);
	//Move to the right
	//$this->Cell(100);
	//Title
	$this->Cell(0,100,'Registration Details',0,0,'C');
	//Line break
	$this->Ln(60);
}

//Page footer
function Footer()
{
	//Position at 1.5 cm from bottom
	$this->SetY(-15);
	//Arial italic 8
	$this->SetFont('Arial','I',8);
	//Page number
	$this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}

//Instanciation of inherited class
$pdf=new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);
 

//$msg="mohan";
	//$pdf->Cell(0,10,$msg,0,1,'C');
	*/
	$_SESSION['vmid']=$vmid;

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
			//print $c."<br>";
			$j=strlen($events[$i]);
			$sub=substr($events[$i],$j-1);
			$rem=substr($events[$i],0,$j-1);
			if($sub=='g')
			$events1.=$rem."(group),";
			else
			$events1.=$events[$i].",";
			
			//print "1".$events1."<br/>";
			//$k=strlen($events1);
			//$events1=substr($events1,0,$k-1);
			//print $events1."<br/>"; 
			$ret=$ret.$events1;
			//print $ret;
			//for($k=0;)
			$events1="";


			 //$events1+=$events[$i];//"yes";
		}
		
	}
	return $ret;
	}








		$vmid=$_SESSION['vmid'];
$que="select * from student where vmid='".$vmid."'";
$resu=mysql_query($que);
$nu=mysql_num_rows($resu);
if($nu==1)
{
	$row=mysql_fetch_row($resu);
	$collid=$row[2];
	$fname=$row[3];
	$lname=$row[4];
	$name=$fname." ".$lname;
	$phno=$row[6];
	$email=$row[7];
	$collname=$row[10];
	$branch=$row[11];
	$literary_events=$row[12];
	$technical_events=$row[13];
	$sports_boys_events=$row[14];
	$sports_girls_events=$row[15];
	$fine_art_events=$row[16];
	$cultural_solo_events=$row[17];
	$cultural_group_events=$row[18];
	$accomdation=$row[19];
	$transport=$row[20];
	$feild2=$row[21];

	//$evensiz=sizeof($eventsli);
//	print $evensiz;
	$msg="";
	$msglit="";$msgtec="";$msgspb="";$msgfineart="";$msgspg="";$msgculsolo="";$msgculgro="";$msgacom="";
	//for($i=0;$i<$evensiz;$i++)
//	{
		//print $eventsli[$i];
		//$a=//$eventsli[$i];
			//print $a;
			$msglit=listofreg($literary_events);
			//$m=strlen($msglit);
			//print $m;
			//$qwe=substr($msglit,0,$m-1);
			//print $qwe;
			//$rty=explode(",",$qwe);
			//$srty=sizeof($rty);
			//for($s=0;$s<$srty;$s++)
			//	print $rty[$s].".";
			//print $msgli[$z]."";
			
			$msgtec.=listofreg($technical_events);
			$msgspb.=listofreg($sports_boys_events);
			$msgspg.=listofreg($sports_girls_events);
			$msgfineart.=listofreg($fine_art_events);
			$msgculsolo.=listofreg($cultural_solo_events);
			$msgculgro.=listofreg($cultural_group_events);
			$msgacom.=listofreg($accomdation);
			if($msglit!="")
			{
				$msglit1="    Literary Events                   :  ".$msglit;
			}
			else
			{
				$msglit1=$msglit;
			}		
			if($msgtec!="")
			{
				$msgtec1="    Technical Events                :  ".$msgtec;
			}
			else
			{
				$msgtec1=$msgtec;
			}
			if($msgspb!="")
			{
				$msgspb1="    Sports                                 :  ".$msgspb;
			}
			else
			{
				$msgspb1=$msgspb;
			}
			if($msgspg!="")
			{
				$msgspg1="    Sports Events                   :  ".$msgspg;
			} 
			else
			{
				$msgspg1=$msgspg;
			}

			if($msgfineart!="")
			{
				$msgfineart1="    Fine Art Events                  :  ".$msgfineart;
			}
			else
			{
				$msgfineart1=$msgfineart;
			}
			if($msgculsolo!="")
			{
				$msgculsolo1="    Cultural Events (Solo)       :  ".$msgculsolo;
			}
			else
			{
				$msgculsolo1=$msgculsolo;
			}
			if($msgculgro!="")
			{
				$msgculgro1="    Cultural Events (group)     :  ".$msgculgro;
			}
			else
			{
				$msgculgro1=$msgculgro;
			}

			$msg=$msglit1.$msgtec1.$msgspb1.$msgfineart1.$msgculsolo1.$msgspg1.$msgculgro1;
			

//	}

	
}



/*
	$pdf->Cell(0,10,"VMID        :-".$vmid,0,1,'C');
	
$pdf->Cell(0,10,"Name       :-".$name,0,1,'C');
$pdf->Cell(0,10,"College ID         :- ".$collid,0,1,'C');
$pdf->Cell(0,10,"Phone NO        :-".$phno,0,1,'C');

$pdf->Cell(0,10,$msglit1,0,1,'C');
$pdf->Cell(0,10,$msgtec1,0,1,'C');
$pdf->Cell(0,10,$msgspb1,0,1,'C');

$pdf->Cell(0,10,$msgfineart1,0,1,'C');
$pdf->Cell(0,10,$msgculsolo1,0,1,'C');
$pdf->Cell(0,10,$msgculgro1,0,1,'C');
$pdf->Cell(0,10,$msgspg1,0,1,'C');


$pdf->Output();
*/
$_SESSION['name']=$name;
$_SESSION['collid']=$collid;
$_SESSION['phno']=$phno;
$_SESSION['msglit2']=$msglit2;

$_SESSION['msglit1']=$msglit1;
$_SESSION['msgtec1']=$msgtec1;
$_SESSION['msgfineart1']=$msgfineart1;
$_SESSION['msgculsolo1']=$msgculsolo1;
$_SESSION['msgculgro1']=$msgculgro1;
$_SESSION['msgspg1']=$msgspg1;
$_SESSION['msgspb1']=$msgspb1;





header("location:dvignan.php");
exit();
?>



<!--<center>
<table border=0>
<tr><td  colspan="2" align="center"><b>VIGNAN UNIVERSITY</b><BR>MAHOSTAV</td></tr>
<TR><td colspan="2" align="center"><b>Candidate Registred Events<BR><BR><BR></td></tr>
<tr><td width="100"><b>vmid</td><td><?php print $vmid ?></td></tr>
<tr><td ><b>Name</td><td><?php print $name ?></td></tr>
<tr><td><b>College&nbsp;Id</td><td><?php print $collid ?></td></tr>
<tr><td><b>Phno</td><td><?php print $phno ?></td></tr>
<tr><td valign="top"><b>Events&nbsp;Registred</td><?php print $msg ?>
</table>
</center>-->















