<?php
require('/fpdf.php');
session_start();
$vm="null";

class PDF extends FPDF
{
//Page header
function Header()
{
	//Logo
	$this->Image('head.png',10,10,280,40);
	
	//Arial bold 15
	$this->SetFont('Arial','B',25);
	//Move to the right
		$this->Ln(20);
		
	//Title
	$this->Cell(0,60,'Registration Details',0,0,'C');
	//Line break
		$this->Ln(60);

}

//Page footer
function Footer()
{
	//Logo
	$this->Image('foot.png',10,170,280,30);
	
	
}
}

//Instanciation of inherited class
$pdf=new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);
 
//for($i=1;$i<=10;$i++)
	//$pdf->Cell(0,10,'hi this is -------->>>>>>>>>>>>>>>>---Mohan Rao Alladi'.$i,0,1,'C');
			//$pdf->Cell(0,10,"VMID",1,1,'C');
			$pdf->SetXY(10,65);
		$pdf->Cell(0,10,"        VMID                                 :   ".$_SESSION['vmid'],0,1,'L');
		$pdf->Cell(0,10,"        Name                                  :   ".$_SESSION['name'],0,1,'L');
		$pdf->Cell(0,10,"        college ID                           :   ".$_SESSION['collid'],0,1,'L');
		$pdf->Cell(0,10,"        Phone no                             :  ".$_SESSION['phno'],0,1,'L');
		if($_SESSION['msglit1']){
		$pdf->Cell(0,10,"    ".$_SESSION['msglit1'],0,1,'L');
		}
		/*if($_SESSION['msglit2']){
		$pdf->Cell(0,10,"                                       ".$_SESSION['msglit2'],0,1,'L');
		}*/
		if($_SESSION['msgtec1']){
			$pdf->Cell(0,10,"    ".$_SESSION['msgtec1'],0,1,'L');
		}if($_SESSION['msgfineart1']){$pdf->Cell(0,10,"    ".$_SESSION['msgfineart1'],0,1,'L');
		}if($_SESSION['msgculsolo1']){$pdf->Cell(0,10,"    ".$_SESSION['msgculsolo1'],0,1,'L');
		}if($_SESSION['msgculgro1']){$pdf->Cell(0,10,"    ".$_SESSION['msgculgro1'],0,1,'L');
		}if($_SESSION['msgspg1']){$pdf->Cell(0,10,"    ".$_SESSION['msgspg1'],0,1,'L');
		}
		if($_SESSION['msgspb1']){$pdf->Cell(0,10,"    ".$_SESSION['msgspb1'],0,1,'L');
		}
		
		
		$vm=$_SESSION['vmid'].".pdf";
		//$vm,'D'
$pdf->Output();
session_write_close();
?>
