function list(str)
{
	if(str==1)
        {
        var output="<select name='date'><OPTION value='00'>dd</OPTION><OPTION value='01'>01</OPTION><OPTION value='02'>02</OPTION><OPTION value='03'>03</OPTION><OPTION value='04'>04</OPTION><OPTION value='05'>05</OPTION><OPTION value='06'>06</OPTION><OPTION value='07'>07</OPTION><OPTION value='08'>08</OPTION><OPTION value='09'>09</OPTION><OPTION value='10'>10</OPTION><OPTION value='11>11</OPTION><OPTION value='12'>12</OPTION><OPTION value='13'>13</OPTION><OPTION value='14'>14</OPTION><OPTION value='15'>15</OPTION><OPTION value='16'>16</OPTION><OPTION value='17'>17</OPTION><OPTION value='18'>18</OPTION><OPTION value='19'>19</OPTION><OPTION value='20'>20</OPTION><OPTION value='21'>21</OPTION><OPTION value='22'>22</OPTION><OPTION value='23'>23</OPTION><OPTION value='24'>24</OPTION><OPTION value='25'>25</OPTION><OPTION value='26'>26</OPTION><OPTION value='27'>27</OPTION><OPTION value='28'>28</OPTION><OPTION value='29'>29</OPTION><OPTION value='30'>30</OPTION></SELECT>"
         document.getElementById("cityDIV").innerHTML=output;
        }

	
	if(str==2)
        {
        var output="<select name='date'><OPTION value='00'>dd</OPTION><OPTION value='01'>01</OPTION><OPTION value='02'>02</OPTION><OPTION value='03'>03</OPTION><OPTION value='04'>04</OPTION><OPTION value='05'>05</OPTION><OPTION value='06'>06</OPTION><OPTION value='07'>07</OPTION><OPTION value='08'>08</OPTION><OPTION value='09'>09</OPTION><OPTION value='10'>10</OPTION><OPTION value='11>11</OPTION><OPTION value='12'>12</OPTION><OPTION value='13'>13</OPTION><OPTION value='14'>14</OPTION><OPTION value='15'>15</OPTION><OPTION value='16'>16</OPTION><OPTION value='17'>17</OPTION><OPTION value='18'>18</OPTION><OPTION value='19'>19</OPTION><OPTION value='20'>20</OPTION><OPTION value='21'>21</OPTION><OPTION value='22'>22</OPTION><OPTION value='23'>23</OPTION><OPTION value='24'>24</OPTION><OPTION value='25'>25</OPTION><OPTION value='26'>26</OPTION><OPTION value='27'>27</OPTION><OPTION value='28'>28</OPTION><OPTION value='29'>29</OPTION><OPTION value='30'>30</OPTION></SELECT>"
         document.getElementById("cityDIV").innerHTML=str;
        }
if(str==3)
        {
          document.getElementById("cityDIV").innerHTML=str;
        }


 
}


//cities script

function setcity(chosen) {

//alert("asdfasdfd");
if (chosen=="sl") {
	//alert("okkkkkkkkkkslllllllll");
  document.getElementById("state1").innerHTML="<img src='wrong.png'></img>";
  document.getElementById("city1").innerHTML="<img src='wrong.png'></img>";
  document.getElementById("stmts").innerHTML="Please select any state";
  //selbox.options[selbox.options.length] = new Option('Please select one of the options above first',' ');
 
}
else
	{
		document.getElementById("state1").innerHTML="<img src='bigtick.jpg'></img>";
		document.getElementById("stmts").innerHTML="";
	}

var selbox = document.registration.city;
 
selbox.options.length = 0;
if (chosen == " ") {
  selbox.options[selbox.options.length] = new Option('Please select one of the options above first',' ');
 
}
if (chosen == "Andhra Pradesh")
 {
  selbox.options[selbox.options.length] = new Option('select one','select one');
  selbox.options[selbox.options.length] = new Option('Adilabad','Adilabad');
  selbox.options[selbox.options.length] = new Option('Anantapur','Anantapur');
  selbox.options[selbox.options.length] = new Option('Chittoor','Chittoor');
  selbox.options[selbox.options.length] = new Option('Cuddapah','Cuddapah');
  selbox.options[selbox.options.length] = new Option('East Godavari','East Godavari');
  selbox.options[selbox.options.length] = new Option('Guntur','Guntur');
  selbox.options[selbox.options.length] = new Option('Hyderabad','Hyderabad');
  selbox.options[selbox.options.length] = new Option('Karimnagar','Karimnagar');
  selbox.options[selbox.options.length] = new Option('Khammam','Khammam');
  selbox.options[selbox.options.length] = new Option('Krishna','Krishna');
  selbox.options[selbox.options.length] = new Option('Kurnool','Kurnool');
  selbox.options[selbox.options.length] = new Option('Machilipatnam','Machilipatnam');
  selbox.options[selbox.options.length] = new Option('Medak','Medak');
  selbox.options[selbox.options.length] = new Option('Mehaboobnagar','Mehaboobnagar');
  selbox.options[selbox.options.length] = new Option('Nalgonda','Nalgonda');
  selbox.options[selbox.options.length] = new Option('Nellore','Nellore');
  selbox.options[selbox.options.length] = new Option('Nizamabad','Nizamabad');
  selbox.options[selbox.options.length] = new Option('Prakasam','Prakasam');
  selbox.options[selbox.options.length] = new Option('Rangareddi','Rangareddi');
  selbox.options[selbox.options.length] = new Option('Srikakulam','Srikakulam');
  selbox.options[selbox.options.length] = new Option('Vizianagaram','Vizianagaram');
  selbox.options[selbox.options.length] = new Option('Visahakhapatnam','Visakhapatnam');
  selbox.options[selbox.options.length] = new Option('Warangal','Warangal');
  selbox.options[selbox.options.length] = new Option('West Godavari','West Godavari');
 }

if (chosen == "Arunachal pradesh") 
{


selbox.options[selbox.options.length] = new Option('Changlang','Changlang');
//selbox.options[selbox.options.length] = new Option('Dibang Valley','Dibang Valley');
selbox.options[selbox.options.length] = new Option('East Kameng','East Kameng');
selbox.options[selbox.options.length] = new Option('East Siang','East Siang');
selbox.options[selbox.options.length] = new Option('Lohit','Lohit');
selbox.options[selbox.options.length] = new Option('Lower Subansiri','Lower Subansiri');
selbox.options[selbox.options.length] = new Option('Tawang','Tawang');
selbox.options[selbox.options.length] = new Option('TIRAP','TIRAP');
selbox.options[selbox.options.length] = new Option('Upper Subansiri','Upper Subansiri');
selbox.options[selbox.options.length] = new Option('West Kameng','West Kameng');
selbox.options[selbox.options.length] = new Option('West Siang','West Siang');
selbox.options[selbox.options.length] = new Option('Papumpare','Papumpare');


}

if (chosen == "Assam") 
{

selbox.options[selbox.options.length] = new Option('Barpeta','Barpeta');
selbox.options[selbox.options.length] = new Option('Bongaigaon','Bongaigaon');
selbox.options[selbox.options.length] = new Option('Cachar ','Cachar');
selbox.options[selbox.options.length] = new Option('Darrang','Darrang ');
selbox.options[selbox.options.length] = new Option('Dhemaji ','Dhemaji ');
selbox.options[selbox.options.length] = new Option('Dhuburi ','Dhuburi ');
selbox.options[selbox.options.length] = new Option('Dibrugarh','Dibrugarh ');
selbox.options[selbox.options.length] = new Option('Goalpara ','Goalpara ');
selbox.options[selbox.options.length] = new Option('Golaghat ','Golaghat ');
selbox.options[selbox.options.length] = new Option('Hailakandi ','Hailakandi');
selbox.options[selbox.options.length] = new Option('Jorhat ','Jorhat ');
selbox.options[selbox.options.length] = new Option('Kamrup ','Kamrup ');
selbox.options[selbox.options.length] = new Option('Karbi Anglong ','Karbi Anglong ');
selbox.options[selbox.options.length] = new Option('Karimganj ','Karimganj ');
selbox.options[selbox.options.length] = new Option('Kokrajhar ','Kokrajhar ');
selbox.options[selbox.options.length] = new Option('Marigaon ','Marigaon ');
selbox.options[selbox.options.length] = new Option('Lakhimpur ','Lakhimpur ');
selbox.options[selbox.options.length] = new Option('Nagaon ','Nagaon ');
selbox.options[selbox.options.length] = new Option('Nalbari ','Nalbari ');
selbox.options[selbox.options.length] = new Option('North Cachar Hills ','North Cachar Hills ');
selbox.options[selbox.options.length] = new Option('Sibsagar ','Sibsagar ');
selbox.options[selbox.options.length] = new Option('Tinsukia ','Tinsukia ');

}

if (chosen == "Bihar") 
{

selbox.options[selbox.options.length] = new Option('Araria','Araria');
selbox.options[selbox.options.length] = new Option('Aurangabad','Aurangabad');
selbox.options[selbox.options.length] = new Option('Banka','Banka');
selbox.options[selbox.options.length] = new Option('Begusarai','Begusarai');
selbox.options[selbox.options.length] = new Option('Bhagalpur','Bhagalpur');
selbox.options[selbox.options.length] = new Option('Bhojpur','Bhojpur');
selbox.options[selbox.options.length] = new Option('Buxar','Buxar');
selbox.options[selbox.options.length] = new Option('Darbhanga','Darbhanga');
selbox.options[selbox.options.length] = new Option('Purba Champaran','Purba Champaran');
selbox.options[selbox.options.length] = new Option('Gaya','Gaya');
selbox.options[selbox.options.length] = new Option('Gopalganj','Gopalganj');
selbox.options[selbox.options.length] = new Option('Jamui','Jamui');
selbox.options[selbox.options.length] = new Option('Jehanabad','Jehanabad');
selbox.options[selbox.options.length] = new Option('Khagaria','Khagaria');
selbox.options[selbox.options.length] = new Option('Kishanganj','Kishanganj');
selbox.options[selbox.options.length] = new Option('Kaimur','Kaimur');
selbox.options[selbox.options.length] = new Option('Katihar','Katihar');
selbox.options[selbox.options.length] = new Option('Lakhisarai','Lakhisarai');
selbox.options[selbox.options.length] = new Option('Madhubani','Madhubani');
selbox.options[selbox.options.length] = new Option('Munger','Munger');
selbox.options[selbox.options.length] = new Option('Madhepura','Madhepura');
selbox.options[selbox.options.length] = new Option('Muzaffarpur','Muzaffarpur');
selbox.options[selbox.options.length] = new Option('Nalanda','Nalanda');
selbox.options[selbox.options.length] = new Option('Nawada','Nawada');
selbox.options[selbox.options.length] = new Option('Patna','Patna');
selbox.options[selbox.options.length] = new Option('Purnia','Purnia');
selbox.options[selbox.options.length] = new Option('Rohtas','Rohtas');
selbox.options[selbox.options.length] = new Option('Saharsa','Saharsa');
selbox.options[selbox.options.length] = new Option('Samastipur','Samastipur');
selbox.options[selbox.options.length] = new Option('Sheohar','Sheohar');
selbox.options[selbox.options.length] = new Option('Sheikhpura','Sheikhpura');
selbox.options[selbox.options.length] = new Option('Saran','Saran');
selbox.options[selbox.options.length] = new Option('Sitamarhi','Sitamarhi');
selbox.options[selbox.options.length] = new Option('Supaul','Supaul');
selbox.options[selbox.options.length] = new Option('Siwan','Siwan');
selbox.options[selbox.options.length] = new Option('Vaishali','Vaishali');
selbox.options[selbox.options.length] = new Option('Pashchim Champaran','Pashchim Champaran');

}

if (chosen == "Delhi") 
{

selbox.options[selbox.options.length] = new Option('Darya Ganj','Darya Ganj');
selbox.options[selbox.options.length] = new Option('Pahar Ganj ','Pahar Ganj ');
selbox.options[selbox.options.length] = new Option('Karol Bagh','Karol Bagh');
selbox.options[selbox.options.length] = new Option('Sadar Bazar ','Sadar Bazar ');
selbox.options[selbox.options.length] = new Option('Kotwali ','Kotwali ');
selbox.options[selbox.options.length] = new Option('Sabzi Mandi ','Sabzi Mandi ');
selbox.options[selbox.options.length] = new Option('Kalkaji ','Kalkaji ');
selbox.options[selbox.options.length] = new Option('Defence Colony ','Defence Colony ');
selbox.options[selbox.options.length] = new Option('Hauz Khas','Hauz Khas');
selbox.options[selbox.options.length] = new Option('Gandhi Nagar','Gandhi Nagar');
selbox.options[selbox.options.length] = new Option('Preet Vihar ','Preet Vihar ');
selbox.options[selbox.options.length] = new Option('Vivek Vihar ','Vivek Vihar ');
selbox.options[selbox.options.length] = new Option('Seelampur ','Seelampur ');
selbox.options[selbox.options.length] = new Option('Shahdara ','Shahdara ');
selbox.options[selbox.options.length] = new Option('Seema Puri ','Seema Puri ');
selbox.options[selbox.options.length] = new Option('Vasant Vihar','Vasant Vihar');
selbox.options[selbox.options.length] = new Option('Najafgarh ','Najafgarh ');
selbox.options[selbox.options.length] = new Option('Delhi Cantt ','Delhi Cantt ');
selbox.options[selbox.options.length] = new Option('Connaught Place ','Connaught Place ');
selbox.options[selbox.options.length] = new Option('Parliament Street','Parliament Street');
selbox.options[selbox.options.length] = new Option('Chanakya Puri ','Chanakya Puri ');
selbox.options[selbox.options.length] = new Option('Saraswati Vihar ','Saraswati Vihar ');
selbox.options[selbox.options.length] = new Option('Narela ','Narela ');
selbox.options[selbox.options.length] = new Option('Model Town ','Model Town ');
selbox.options[selbox.options.length] = new Option('Patel Nagar ','Patel Nagar ');
selbox.options[selbox.options.length] = new Option('Rajouri Garden ','Rajouri Garden ');
selbox.options[selbox.options.length] = new Option('Punjabi Bagh ','Punjabi Bagh ');

}

if (chosen =="karnataka") 
{
selbox.options[selbox.options.length] = new Option('select one','select one');
//selbox.options[selbox.options.length] = new Option('Bangalore Urban ','Bangalore Urban ');
//selbox.options[selbox.options.length] = new Option('Bangalore Rural',' Bangalore Rural ');
//selbox.options[selbox.options.length] = new Option('Bagalakot','Bagalakot');
selbox.options[selbox.options.length] = new Option('Belgaum','Belgaum');
selbox.options[selbox.options.length] = new Option('Bellary','Bellary');
selbox.options[selbox.options.length] = new Option('Bidar','Bidar');
selbox.options[selbox.options.length] = new Option('Bijapur','Bijapur');
//selbox.options[selbox.options.length] = new Option('Chamarajanagar ','Chamarajanagar ');
/*selbox.options[selbox.options.length] = new Option('Chikballapur','Chikballapur');
selbox.options[selbox.options.length] = new Option('Chikkamaglur ','Chikkamaglur ');
selbox.options[selbox.options.length] = new Option('Chitiradurga ','Chitiradurga ');
selbox.options[selbox.options.length] = new Option('Coorg','Coorg');
selbox.options[selbox.options.length] = new Option('Davanagere','Davanagere');*/
selbox.options[selbox.options.length] = new Option('Dharwad','Dharwad');
selbox.options[selbox.options.length] = new Option('Gulbarga','Gulbarga');
//selbox.options[selbox.options.length] = new Option('Gadag ','Gadag ');
//selbox.options[selbox.options.length] = new Option('Hassan ','Hassan ');
selbox.options[selbox.options.length] = new Option('Haveri','Haveri');
//selbox.options[selbox.options.length] = new Option('Kolar ','Kolar ');
//selbox.options[selbox.options.length] = new Option('Koppal ','Koppal ');
selbox.options[selbox.options.length] = new Option('Mandya','Mandya');
//selbox.options[selbox.options.length] = new Option('Mangalore ','Mangalore ');
selbox.options[selbox.options.length] = new Option('Mysore','Mysore');
/*selbox.options[selbox.options.length] = new Option('Raichur ','Raichur ');
selbox.options[selbox.options.length] = new Option('Ramanagram','Ramanagram');
selbox.options[selbox.options.length] = new Option('Shimoga ','Shimoga ');
selbox.options[selbox.options.length] = new Option('Tumkur ','Tumkur ');
selbox.options[selbox.options.length] = new Option('Udupi ','Udupi ');*/
selbox.options[selbox.options.length] = new Option('Uttara Kannada','Uttara Kannada');

}



if (chosen == "Gujarat") 
{

selbox.options[selbox.options.length] = new Option('Ahmedabad','Ahmedabad');
selbox.options[selbox.options.length] = new Option('Amreli District','Amreli District');
selbox.options[selbox.options.length] = new Option('Anand','Anand');
selbox.options[selbox.options.length] = new Option('Banaskantha','Banaskantha');
selbox.options[selbox.options.length] = new Option('Bharuch','Bharuch');
selbox.options[selbox.options.length] = new Option('Bhavnagar','Bhavnagar');
selbox.options[selbox.options.length] = new Option('Dahod','Dahod');
selbox.options[selbox.options.length] = new Option('The Dangs','The Dangs');
selbox.options[selbox.options.length] = new Option('Gandhinagar','Gandhinagar');
selbox.options[selbox.options.length] = new Option('Jamnagar','Jamnagar');
selbox.options[selbox.options.length] = new Option('Junagadh','Junagadh');
selbox.options[selbox.options.length] = new Option('Kutch','Kutch');
selbox.options[selbox.options.length] = new Option('Kheda','Kheda');
selbox.options[selbox.options.length] = new Option('Mehsana','Mehsana');
selbox.options[selbox.options.length] = new Option('Narmada','Narmada');
selbox.options[selbox.options.length] = new Option('Navsari','Navsari');
selbox.options[selbox.options.length] = new Option('Patan','Patan');
selbox.options[selbox.options.length] = new Option('Panchmahal','Panchmahal');
selbox.options[selbox.options.length] = new Option('Porbandar','Porbandar');
selbox.options[selbox.options.length] = new Option('Rajkot','Rajkot');
selbox.options[selbox.options.length] = new Option('Sabarkantha','Sabarkantha');
selbox.options[selbox.options.length] = new Option('Surendranagar','Surendranagar');
selbox.options[selbox.options.length] = new Option('Surat','Surat');
selbox.options[selbox.options.length] = new Option('Tapi','Tapi');
selbox.options[selbox.options.length] = new Option('Vadodara','Vadodara');
selbox.options[selbox.options.length] = new Option('Valsad','Valsad');
selbox.options[selbox.options.length] = new Option('','');
selbox.options[selbox.options.length] = new Option('','');
selbox.options[selbox.options.length] = new Option('','');
selbox.options[selbox.options.length] = new Option('','');

}


if (chosen == "Haryana") 
{

selbox.options[selbox.options.length] = new Option('Ambala','Ambala');
selbox.options[selbox.options.length] = new Option('Kurukshetra ','Kurukshetra ');
selbox.options[selbox.options.length] = new Option('Karnal ','Karnal ');
selbox.options[selbox.options.length] = new Option('Jind ','Jind ');
selbox.options[selbox.options.length] = new Option('Sonipat ','Sonipat ');
selbox.options[selbox.options.length] = new Option('Panipat ','Panipat ');
selbox.options[selbox.options.length] = new Option('Rohtak ','Rohtak ');
selbox.options[selbox.options.length] = new Option('Faridabad ','Faridabad ');
selbox.options[selbox.options.length] = new Option('Gurgaon ','Gurgaon ');
selbox.options[selbox.options.length] = new Option('Mahendergarh ','Mahendergarh ');
selbox.options[selbox.options.length] = new Option('Bhiwani ','Bhiwani ');
selbox.options[selbox.options.length] = new Option('Hissar ','Hissar ');
selbox.options[selbox.options.length] = new Option('Sirsa ','Sirsa ');
selbox.options[selbox.options.length] = new Option('Rewari ','Rewari ');
selbox.options[selbox.options.length] = new Option('Kaithal ','Kaithal ');
selbox.options[selbox.options.length] = new Option('Yamunanagar ','Yamunanagar ');
selbox.options[selbox.options.length] = new Option('Panchkula ','Panchkula ');
selbox.options[selbox.options.length] = new Option('Fatehbad ','Fatehbad ');
selbox.options[selbox.options.length] = new Option('Jhajjar ','Jhajjar ');

}


if (chosen == "Himachal Pradesh") 
{

selbox.options[selbox.options.length] = new Option('Bilaspur','Bilaspur');
selbox.options[selbox.options.length] = new Option('Chamba','Chamba');
selbox.options[selbox.options.length] = new Option('Hamirpur ','Hamirpur');
selbox.options[selbox.options.length] = new Option('Kangra ','Kangra ');
selbox.options[selbox.options.length] = new Option('Kinnaur','Kinnaur');
selbox.options[selbox.options.length] = new Option('kullu','kullu');
selbox.options[selbox.options.length] = new Option('Lahul & Spiti','Lahul & Spiti');
selbox.options[selbox.options.length] = new Option('Mandi','Mandi');
selbox.options[selbox.options.length] = new Option('Shimla','Shimla');
selbox.options[selbox.options.length] = new Option('Sirmaur','Sirmaur');
selbox.options[selbox.options.length] = new Option('Solan','Solan');
selbox.options[selbox.options.length] = new Option('Una','Una');

}


if (chosen == "Jammu And Kashmir") 
{

selbox.options[selbox.options.length] = new Option('Kathua ','Kathua ');
selbox.options[selbox.options.length] = new Option('Jammu ','Jammu ');
selbox.options[selbox.options.length] = new Option('Samba ','Samba ');
selbox.options[selbox.options.length] = new Option('Udhampur ','Udhampur ');
selbox.options[selbox.options.length] = new Option('Reasi ','Reasi ');
selbox.options[selbox.options.length] = new Option('Rajouri ','Rajouri ');
selbox.options[selbox.options.length] = new Option('Poonch ','Poonch ');
selbox.options[selbox.options.length] = new Option('Doda ','Doda ');
selbox.options[selbox.options.length] = new Option('Ramban','Ramban');
selbox.options[selbox.options.length] = new Option('Kishtwar ','Kishtwar ');
selbox.options[selbox.options.length] = new Option('Anantnag ','Anantnag ');
selbox.options[selbox.options.length] = new Option('Kulgam ','Kulgam ');
selbox.options[selbox.options.length] = new Option('Pulwama ','Pulwama ');
selbox.options[selbox.options.length] = new Option('Shopian ','Shopian ');
selbox.options[selbox.options.length] = new Option('Budgam ','Budgam ');
selbox.options[selbox.options.length] = new Option('Srinagar ','Srinagar ');
selbox.options[selbox.options.length] = new Option('Ganderbal ','Ganderbal ');
selbox.options[selbox.options.length] = new Option('Bandipora ','Bandipora ');
selbox.options[selbox.options.length] = new Option('Baramulla ','Baramulla ');
selbox.options[selbox.options.length] = new Option('Kupwara','Kupwara ');
selbox.options[selbox.options.length] = new Option('Kargil ','Kargil ');
selbox.options[selbox.options.length] = new Option('Leh ','Leh ');

}

if (chosen == "Jharkhand") 
{

selbox.options[selbox.options.length] = new Option('Ranchi ','Ranchi ');
selbox.options[selbox.options.length] = new Option('Lohardaga ','Lohardaga ');
selbox.options[selbox.options.length] = new Option('Gumla ','Gumla ');
selbox.options[selbox.options.length] = new Option('Simdega ','Simdega ');
selbox.options[selbox.options.length] = new Option('Palamu','Palamu');
selbox.options[selbox.options.length] = new Option('Latehar','Latehar');
selbox.options[selbox.options.length] = new Option('Garhwa ','Garhwa ');
selbox.options[selbox.options.length] = new Option('West Singhbhum ','West Singhbhum ');
selbox.options[selbox.options.length] = new Option('Saraikela Kharsawan','Saraikela Kharsawan');
selbox.options[selbox.options.length] = new Option('East Singhbhum ','East Singhbhum ');
selbox.options[selbox.options.length] = new Option('Dumka ','Dumka ');
selbox.options[selbox.options.length] = new Option('Jamtara','Jamtara');
selbox.options[selbox.options.length] = new Option('Sahebganj ','Sahebganj ');
selbox.options[selbox.options.length] = new Option('Pakur ','Pakur ');
selbox.options[selbox.options.length] = new Option('Godda ','Godda ');
selbox.options[selbox.options.length] = new Option('Hazaribagh ','Hazaribagh ');
selbox.options[selbox.options.length] = new Option('Chatra ','Chatra ');
selbox.options[selbox.options.length] = new Option('Koderma ','Koderma ');
selbox.options[selbox.options.length] = new Option('Giridih ','Giridih ');
selbox.options[selbox.options.length] = new Option('Dhanbad','Dhanbad'); 
selbox.options[selbox.options.length] = new Option('Bokaro','Bokaro');
selbox.options[selbox.options.length] = new Option('Deoghar','Deoghar');
selbox.options[selbox.options.length] = new Option('Khunti ','Khunti ');
selbox.options[selbox.options.length] = new Option('Ramgarh ','Ramgarh ');


}

if (chosen == "Kerala") 
{
selbox.options[selbox.options.length] = new Option('select one','select one');
selbox.options[selbox.options.length] = new Option('Alappuzha','Alappuzha');
selbox.options[selbox.options.length] = new Option('Ernakulam','Ernakulam');
selbox.options[selbox.options.length] = new Option('Idukki','Idukki');
selbox.options[selbox.options.length] = new Option('Kollam','Kollam');
selbox.options[selbox.options.length] = new Option('Kannur','Kannur');
selbox.options[selbox.options.length] = new Option('Kasaragod','Kasaragod');
selbox.options[selbox.options.length] = new Option('Kottayam','Kottayam');
selbox.options[selbox.options.length] = new Option('Kozhikode','Kozhikode');
selbox.options[selbox.options.length] = new Option('Malappuram','Malappuram');
selbox.options[selbox.options.length] = new Option('Palakkad','Palakkad');
selbox.options[selbox.options.length] = new Option('Pathanamthitta','Pathanamthitta');
selbox.options[selbox.options.length] = new Option('Thrissur','Thrissur');
selbox.options[selbox.options.length] = new Option('Thiruvananthapuram','Thiruvananthapuram');
selbox.options[selbox.options.length] = new Option('Wayanad','Wayanad');

}

if (chosen == "Madhya Pradesh") 
{

selbox.options[selbox.options.length] = new Option('Bhopal ','Bhopal ');
selbox.options[selbox.options.length] = new Option('Raisen ','Raisen ');
selbox.options[selbox.options.length] = new Option('Vidisha  ','Vidisha ');
selbox.options[selbox.options.length] = new Option('Datia ','Datia ');
selbox.options[selbox.options.length] = new Option('Guna','Guna');
selbox.options[selbox.options.length] = new Option('Gwalior','Gwalior');
selbox.options[selbox.options.length] = new Option('Burhanpur','Burhanpur');
selbox.options[selbox.options.length] = new Option('Khargone','Khargone');
selbox.options[selbox.options.length] = new Option('Chhindwara','Chhindwara');
selbox.options[selbox.options.length] = new Option('Mandla','Mandla');
selbox.options[selbox.options.length] = new Option('Seoni','Seoni');
selbox.options[selbox.options.length] = new Option('Chhatarpur ','Chhatarpur ');
selbox.options[selbox.options.length] = new Option('Tikamgarh ','Tikamgarh ');
selbox.options[selbox.options.length] = new Option('Shahdol','Shahdol');
selbox.options[selbox.options.length] = new Option('Neemuch','Neemuch');
selbox.options[selbox.options.length] = new Option('Ujjain','Ujjain');
selbox.options[selbox.options.length] = new Option('Neemuch ','Neemuch ');


}

if (chosen == "Maharashtra") 
{

selbox.options[selbox.options.length] = new Option('Ahmadnagar ','Ahmadnagar ');
selbox.options[selbox.options.length] = new Option('Akola ','Akola ');
selbox.options[selbox.options.length] = new Option('Yavatmal ','Buldhana ');
selbox.options[selbox.options.length] = new Option('Chandrapur ','Chandrapur ');
selbox.options[selbox.options.length] = new Option('Usmanabad ','Usmanabad ');
selbox.options[selbox.options.length] = new Option('Dhule ','Dhule ');
selbox.options[selbox.options.length] = new Option('Gadchiroli ','Gadchiroli ');
selbox.options[selbox.options.length] = new Option('Greater Mumbai ','Greater Mumbai ');
selbox.options[selbox.options.length] = new Option('Jalgaon ','Jalgaon ');
selbox.options[selbox.options.length] = new Option('Solapur ','Solapur ');
selbox.options[selbox.options.length] = new Option('Thane ','Thane ');
selbox.options[selbox.options.length] = new Option('Parbhani ','Parbhani ');
selbox.options[selbox.options.length] = new Option('Nanded ','Nanded ');
selbox.options[selbox.options.length] = new Option('Pune ','Pune ');
selbox.options[selbox.options.length] = new Option('Amravati  ','Amravati  ');
selbox.options[selbox.options.length] = new Option('Bhandara  ',' Bhandara ');
selbox.options[selbox.options.length] = new Option('Bid  ',' Bid ');
selbox.options[selbox.options.length] = new Option(' Buldhana ',' Buldhana ');
selbox.options[selbox.options.length] = new Option('Gondia ','Gondia ');
selbox.options[selbox.options.length] = new Option('Hingoli  ','Hingoli  ');
selbox.options[selbox.options.length] = new Option('Jalna  ','Jalna  ');
selbox.options[selbox.options.length] = new Option(' Kolhapur ','Kolhapur  ');
selbox.options[selbox.options.length] = new Option('Latur  ','Latur  ');

}

if (chosen == "Manipur") 
{

selbox.options[selbox.options.length] = new Option('Bishnupur ','Bishnupur ');
selbox.options[selbox.options.length] = new Option('Churachandpur ','Churachandpur ');
selbox.options[selbox.options.length] = new Option('Chandel ','Chandel ');
selbox.options[selbox.options.length] = new Option('Imphal East ','Imphal East ');
selbox.options[selbox.options.length] = new Option('Imphal West ','Imphal West ');
selbox.options[selbox.options.length] = new Option('Senapati ','Senapati ');
selbox.options[selbox.options.length] = new Option('Tamenglong ','Tamenglong ');
selbox.options[selbox.options.length] = new Option('Thoubal ','Thoubal ');
selbox.options[selbox.options.length] = new Option('Ukhrul ','Ukhrul ');

}

if (chosen == "Meghalaya" )
{

selbox.options[selbox.options.length] = new Option('East Garo Hills ','East Garo Hills ');
selbox.options[selbox.options.length] = new Option('East Khasi Hills ','East Khasi Hills ');
selbox.options[selbox.options.length] = new Option('Jaintia Hills ','Jaintia Hills ');
selbox.options[selbox.options.length] = new Option('Ri-Bhoi ','Ri-Bhoi ');
selbox.options[selbox.options.length] = new Option('South Garo Hills ','South Garo Hills ');
selbox.options[selbox.options.length] = new Option('West Garo Hills ','West Garo Hills ');
selbox.options[selbox.options.length] = new Option('West Khasi Hills ','West Khasi Hills ');

}


if ( chosen == "Mizoram" )
{

selbox.options[selbox.options.length] = new Option('Aizawl ','Aizawl ');
selbox.options[selbox.options.length] = new Option('Champhai ','Champhai ');
selbox.options[selbox.options.length] = new Option('Kolasib ','Kolasib ');
selbox.options[selbox.options.length] = new Option('Lawngtlai ','Lawngtlai ');
selbox.options[selbox.options.length] = new Option('Lunglei ','Lunglei ');
selbox.options[selbox.options.length] = new Option('Mamit ','Mamit ');
selbox.options[selbox.options.length] = new Option('Saiha ','Saiha ');
selbox.options[selbox.options.length] = new Option('Serchhip ','Serchhip ');

}


if ( chosen == "Nagaland" )
{

selbox.options[selbox.options.length] = new Option('Dimapur  ','Dimapur  ');
selbox.options[selbox.options.length] = new Option('Kiphire  ','Kiphire  ');
selbox.options[selbox.options.length] = new Option('Kohima ','Kohima ');
selbox.options[selbox.options.length] = new Option('Longleng ','Longleng ');
selbox.options[selbox.options.length] = new Option('Mokokchung  ','Mokokchung  ');
selbox.options[selbox.options.length] = new Option('Mon  ','Mon  ');
selbox.options[selbox.options.length] = new Option('Peren ','Peren ');
selbox.options[selbox.options.length] = new Option('Phek  ','Phek  ');
selbox.options[selbox.options.length] = new Option('Tuensang  ','Tuensang  ');
selbox.options[selbox.options.length] = new Option('Wokha ','Wokha ');
selbox.options[selbox.options.length] = new Option('Zunheboto  ','Zunheboto  ');

}


if ( chosen == "Orissa" )
{

selbox.options[selbox.options.length] = new Option('Angul ','Angul ');
selbox.options[selbox.options.length] = new Option('Boudh ','Boudh ');
selbox.options[selbox.options.length] = new Option('Bhadrak ','Bhadrak ');
selbox.options[selbox.options.length] = new Option('Bolangir  ','Bolangir  ');
selbox.options[selbox.options.length] = new Option('Bargarh  ','Bargarh  ');
selbox.options[selbox.options.length] = new Option('Baleswar  ','Baleswar  ');
selbox.options[selbox.options.length] = new Option('Cuttack ','Cuttack ');
selbox.options[selbox.options.length] = new Option('Dhenkanal ','Dhenkanal ');
selbox.options[selbox.options.length] = new Option('Ganjam ','Ganjam ');
selbox.options[selbox.options.length] = new Option('Gajapati ','Gajapati ');
selbox.options[selbox.options.length] = new Option('Jharsuguda ','Jharsuguda ');
selbox.options[selbox.options.length] = new Option('Jajapur  ','Jajapur  ');
selbox.options[selbox.options.length] = new Option('Jagatsinghpur ','Jagatsinghpur ');
selbox.options[selbox.options.length] = new Option('Khordha ','Khordha ');
selbox.options[selbox.options.length] = new Option('Kendujhar ','Kendujhar ');
selbox.options[selbox.options.length] = new Option('Kalahandi ',' Kalahandi');
selbox.options[selbox.options.length] = new Option('Kandhamal ','Kandhamal ');
selbox.options[selbox.options.length] = new Option('Koraput ','Koraput ');
selbox.options[selbox.options.length] = new Option('Kendrapara ',' Kendrapara');
selbox.options[selbox.options.length] = new Option('Malkangiri ','Malkangiri ');
selbox.options[selbox.options.length] = new Option('Mayurbhanj ','Mayurbhanj ');
selbox.options[selbox.options.length] = new Option('Nabarangpur ','Nabarangpur ');
selbox.options[selbox.options.length] = new Option('Nuapada ','Nuapada ');
selbox.options[selbox.options.length] = new Option('Nayagarh ','Nayagarh ');
selbox.options[selbox.options.length] = new Option('Puri ','Puri ');
selbox.options[selbox.options.length] = new Option('Rayagada ','Rayagada ');
selbox.options[selbox.options.length] = new Option('Sambalpur ','Sambalpur ');
selbox.options[selbox.options.length] = new Option('Subarnapur','Subarnapur ');
selbox.options[selbox.options.length] = new Option('Sundargarh ','Sundargarh ');

}



if ( chosen == "Pondicherry" )
{

selbox.options[selbox.options.length] = new Option('Puducherry  ','Puducherry  ');
selbox.options[selbox.options.length] = new Option('Karaikal  ',' Karaikal ');
selbox.options[selbox.options.length] = new Option('Mahe  ','Mahe  ');
selbox.options[selbox.options.length] = new Option('Yanam  ','Yanam  ');

}


if ( chosen == "Punjab")
{

selbox.options[selbox.options.length] = new Option('Amritsar  ','Amritsar  ');
selbox.options[selbox.options.length] = new Option('Barnala ','Barnala ');
selbox.options[selbox.options.length] = new Option('Bathinda  ',' Bathinda ');
selbox.options[selbox.options.length] = new Option('Firozpur  ','Firozpur  ');
selbox.options[selbox.options.length] = new Option('Faridkot  ','Faridkot  ');
selbox.options[selbox.options.length] = new Option('Fatehgarh Sahib  ','Fatehgarh Sahib  ');
selbox.options[selbox.options.length] = new Option('Gurudaspur  ','Gurudaspur  ');
selbox.options[selbox.options.length] = new Option('Hoshiarpur  ','Hoshiarpur  ');
selbox.options[selbox.options.length] = new Option('Jalandhar  ','Jalandhar  ');
selbox.options[selbox.options.length] = new Option('Kapurthala  ','Kapurthala  ');
selbox.options[selbox.options.length] = new Option('Ludhiana  ','Ludhiana  ');
selbox.options[selbox.options.length] = new Option('Mansa  ','Mansa  ');
selbox.options[selbox.options.length] = new Option('Moga  ','Moga  ');
selbox.options[selbox.options.length] = new Option('Mohali  ','Mohali  ');
selbox.options[selbox.options.length] = new Option('Muktsar  ','Muktsar  ');
selbox.options[selbox.options.length] = new Option('Nawan Shahr  ','Nawan Shahr  ');
selbox.options[selbox.options.length] = new Option('Patiala  ','Patiala  ');
selbox.options[selbox.options.length] = new Option('Rupnagar  ','Rupnagar  ');
selbox.options[selbox.options.length] = new Option('Sangrur  ','Sangrur  ');
selbox.options[selbox.options.length] = new Option('Tarn Taran  ','Tarn Taran  ');

}


if ( chosen == "Rajasthan" )
{

selbox.options[selbox.options.length] = new Option('Bhilwara ',' Bhilwara');
selbox.options[selbox.options.length] = new Option('Tonk ',' Tonk');
selbox.options[selbox.options.length] = new Option('Nagaur  ','Nagaur  ');
selbox.options[selbox.options.length] = new Option('Sawai Madhopur ','Sawai Madhopur ');
selbox.options[selbox.options.length] = new Option('Hanumangarh ','Hanumangarh ');
selbox.options[selbox.options.length] = new Option('Sikar ','Sikar ');
selbox.options[selbox.options.length] = new Option('Sirohi ','Sirohi ');
selbox.options[selbox.options.length] = new Option('Pali  ','Pali  ');
selbox.options[selbox.options.length] = new Option('Jodhpur ','Jodhpur ');
selbox.options[selbox.options.length] = new Option('Kota ','Kota ');
selbox.options[selbox.options.length] = new Option('Udaipur ','Udaipur ');
selbox.options[selbox.options.length] = new Option('Rajsamand ','Rajsamand ');
selbox.options[selbox.options.length] = new Option('Pratapgarh ','Pratapgarh ');
selbox.options[selbox.options.length] = new Option('Dungarpur  ','Dungarpur  ');
selbox.options[selbox.options.length] = new Option('Chittorgarh  ','Chittorgarh  ');
selbox.options[selbox.options.length] = new Option('Banswara  ','Banswara  ');
selbox.options[selbox.options.length] = new Option('Jhalawar ','Jhalawar ');
selbox.options[selbox.options.length] = new Option('Bundi  ','Bundi  ');
selbox.options[selbox.options.length] = new Option('Baran  ','Baran  ');
selbox.options[selbox.options.length] = new Option('Jalore  ','Jalore  ');
selbox.options[selbox.options.length] = new Option('Jaisalmer  ','Jaisalmer  ');
selbox.options[selbox.options.length] = new Option('Barmer ','Barmer ');
selbox.options[selbox.options.length] = new Option('Jhunjhunu ','Jhunjhunu ');
selbox.options[selbox.options.length] = new Option('Sri Ganganagar ','Sri Ganganagar ');
selbox.options[selbox.options.length] = new Option('Churu ','Churu ');
selbox.options[selbox.options.length] = new Option('Alwar  ','Alwar  ');
selbox.options[selbox.options.length] = new Option('Bikaner  ','Bikaner  ');
selbox.options[selbox.options.length] = new Option('Bharatpur ','Bharatpur ');
selbox.options[selbox.options.length] = new Option('Ajmer ','Ajmer ');

}

if ( chosen == "Sikkim")
{

selbox.options[selbox.options.length] = new Option('Namchi  ','Namchi  ');
selbox.options[selbox.options.length] = new Option('Mangan ','Mangan ');
selbox.options[selbox.options.length] = new Option('Geyzing ','Geyzing ');
selbox.options[selbox.options.length] = new Option('Gangtok ','Gangtok ');

}

if ( chosen == "Tripura" ) 
{

selbox.options[selbox.options.length] = new Option('Dhalai ','Dhalai ');
selbox.options[selbox.options.length] = new Option('North Tripura ','North Tripura ');
selbox.options[selbox.options.length] = new Option('South Tripura ','South Tripura ');
selbox.options[selbox.options.length] = new Option('West Tripura ','West Tripura ');

}

if ( chosen == "Uttaranchal")
{

selbox.options[selbox.options.length] = new Option('ALMORA ','ALMORA ');
selbox.options[selbox.options.length] = new Option('BAGESWAR ','BAGESWAR ');
selbox.options[selbox.options.length] = new Option('CHAMOLI  ','CHAMOLI  ');
selbox.options[selbox.options.length] = new Option('CHAMPAWAT ','CHAMPAWAT ');
selbox.options[selbox.options.length] = new Option('DEHRADUN ','DEHRADUN ');
selbox.options[selbox.options.length] = new Option('HARIDWAR    ','HARIDWAR    ');
selbox.options[selbox.options.length] = new Option('NAINITAL  ','NAINITAL  ');
selbox.options[selbox.options.length] = new Option('PAURI GARHWAL  ','PAURI GARHWAL  ');
selbox.options[selbox.options.length] = new Option('PITHORAGARH  ','PITHORAGARH  ');
selbox.options[selbox.options.length] = new Option('RUDRAPRAYAG  ','RUDRAPRAYAG  ');
selbox.options[selbox.options.length] = new Option('TEHRI GARHWAL  ','TEHRI GARHWAL  ');
selbox.options[selbox.options.length] = new Option('UDHAM SINGH NAGAR  ','UDHAM SINGH NAGAR  ');
selbox.options[selbox.options.length] = new Option('UTTARKASHI   ','UTTARKASHI   ');

}

if ( chosen == "West Bengal" )
{

selbox.options[selbox.options.length] = new Option('Bankura ','Bankura ');
selbox.options[selbox.options.length] = new Option('Barddhaman ',' Barddhaman');
selbox.options[selbox.options.length] = new Option('Birbhum ','Birbhum ');
selbox.options[selbox.options.length] = new Option('Darjiling ','Darjiling ');
selbox.options[selbox.options.length] = new Option('Haora ','Haora ');
selbox.options[selbox.options.length] = new Option('Hugli ','Hugli ');
selbox.options[selbox.options.length] = new Option('Uttar Dinajpur ','Uttar Dinajpur ');
selbox.options[selbox.options.length] = new Option('Jalpaiguri ','Jalpaiguri ');
selbox.options[selbox.options.length] = new Option('Koch Bihar ','Koch Bihar ');
selbox.options[selbox.options.length] = new Option('Kolkata City Map ','Kolkata City Map ');
selbox.options[selbox.options.length] = new Option('Maldah ','Maldah ');
selbox.options[selbox.options.length] = new Option('Medinipur ','Medinipur ');
selbox.options[selbox.options.length] = new Option('Murshidabad ','Murshidabad ');
selbox.options[selbox.options.length] = new Option('Nadia ','Nadia ');
selbox.options[selbox.options.length] = new Option('North24-parganas ','North24-parganas ');
selbox.options[selbox.options.length] = new Option('Puruliya ','Puruliya ');
selbox.options[selbox.options.length] = new Option('SOUTH24-PARGANAS ','SOUTH24-PARGANAS ');
selbox.options[selbox.options.length] = new Option('Dakshin DINAJPUR ','Dakshin DINAJPUR ');

}


if (chosen == "Tamilnadu") {
  selbox.options[selbox.options.length] = new Option('select one','select one');
  //selbox.options[selbox.options.length] = new Option('ARIYALUR','ARIYALUR');
  selbox.options[selbox.options.length] = new Option('CHENNAI','CHENNAI');
  selbox.options[selbox.options.length] = new Option('COIMBATORE','COIMBATORE');
  selbox.options[selbox.options.length] = new Option('CUDDALORE','CUDDALORE');
  //selbox.options[selbox.options.length] = new Option('DINDIGUL','DINDIGUL');
  selbox.options[selbox.options.length] = new Option('DHARMAPURI','DHARMAPURI');
  selbox.options[selbox.options.length] = new Option('ERODE','ERODE');
  selbox.options[selbox.options.length] = new Option('KANNIYAKUMARI','KANNIYAKUMARI');
  selbox.options[selbox.options.length] = new Option('KANCHIPURAM','KANCHIPURAM');
  selbox.options[selbox.options.length] = new Option('KARUR','KARUR');
  selbox.options[selbox.options.length] = new Option('MADURAI','MADURAI');
  selbox.options[selbox.options.length] = new Option('NAGAPATTINAM','NAGAPATTINAM');
  selbox.options[selbox.options.length] = new Option('NAMAKKAL','NAMAKKAL');
  //selbox.options[selbox.options.length] = new Option('NILGIRIS','NILGIRIS');
   selbox.options[selbox.options.length] = new Option('Pondicherry','Pondicherry');
  //selbox.options[selbox.options.length] = new Option('PERAMBALUR','PERAMBALUR');
  selbox.options[selbox.options.length] = new Option('PUDUKKOTTAI','PUDUKKOTTAI');
  //selbox.options[selbox.options.length] = new Option('RAMANATHAPURAM','RAMANATHAPURAM');
  selbox.options[selbox.options.length] = new Option('SALEM','SALEM');
  selbox.options[selbox.options.length] = new Option('SIVAGANGA','SIVAGANGA');
  //selbox.options[selbox.options.length] = new Option('TENI','TENI');
  selbox.options[selbox.options.length] = new Option('THANJAVUR','THANJAVUR');
  selbox.options[selbox.options.length] = new Option('TIRUCHCHIRAPPALLI','TIRUCHCHIRAPPALLI');
  selbox.options[selbox.options.length] = new Option('TIRUNELVELI','TIRUNELVELI');
  selbox.options[selbox.options.length] = new Option('TIRUVALLUR','TIRUVALLUR');
  selbox.options[selbox.options.length] = new Option('TIRUVANNAMALAI','TIRUVANNAMALAI');
  selbox.options[selbox.options.length] = new Option('TUTICORIN','TUTICORIN');
  selbox.options[selbox.options.length] = new Option('VELLORE','VELLORE');
  selbox.options[selbox.options.length] = new Option('VILUPPURAM','VILUPPURAM');
  selbox.options[selbox.options.length] = new Option('VIRUDUNAGAR','VIRUDUNAGAR');
  
}





}


//coleges script

function setcol(chosen) {
	if (chosen=="select one") {
	//alert("okkkkkkkkkkslllllllll");
  document.getElementById("city1").innerHTML="<img src='wrong.png'></img>";
  //document.getElementById("colleg").innerHTML="<select name='college'><option value='select one'>select one</option></select>";
  document.getElementById("nc").innerHTML="<img src='wrong.png'></img>"; 
  document.getElementById("stmts").innerHTML="Please select any city";
  //selbox.options[selbox.options.length] = new Option('Please select one of the options above first',' ');
 
}
else
	{
		document.getElementById("city1").innerHTML="<img src='bigtick.jpg'></img>";
		document.getElementById("nc").innerHTML="<img src='bigtick.jpg'></img>"; 
		document.getElementById("stmts").innerHTML="";
	}

var selbox = document.registration.college;
 
selbox.options.length = 0;
if (chosen == " ") 
{
  selbox.options[selbox.options.length] = new Option('Please select one of the options above first',' ');
 
}

if (chosen == "Adilabad") 
{
  
  selbox.options[selbox.options.length] = new Option('Aiza College of Engineering and Technology','Aiza College of Engineering and Technology');
  selbox.options[selbox.options.length] = new Option('AMR Inst. of Technology','AMR Inst. of Technology');
  selbox.options[selbox.options.length] = new Option('Bapuji Engineering College','Bapuji Engineering College');
  selbox.options[selbox.options.length] = new Option('Jaatipita College of Engineering','Jaatipita College of Engineering');
  selbox.options[selbox.options.length] = new Option('JSN College of Engineering and Technology','JSN College of Engineering and Technology');
  
}

if (chosen == "Anantapur") 
{

selbox.options[selbox.options.length] = new Option('Anantha Lakshmi Inst. of Tech. & Sciences','Anantha Lakshmi Inst. of Tech. & Sciences');
selbox.options[selbox.options.length] = new Option('BIT Institute of Tech','BIT Institute of Tech');
selbox.options[selbox.options.length] = new Option('Chiranjeevi Reddy Inst. of Engg. & Technology','Chiranjeevi Reddy Inst. of Engg. & Technology');
selbox.options[selbox.options.length] = new Option('College of Agricultural Engineering','College of Agricultural Engineering');
selbox.options[selbox.options.length] = new Option('Gates Institute of Tech','Gates Institute of Tech');
selbox.options[selbox.options.length] = new Option('Intell Engineering College','Intell Engineering College');
selbox.options[selbox.options.length] = new Option('JNTU College of Engg','JNTU,Anantapur');
selbox.options[selbox.options.length] = new Option('PVKK Inst. of Tech','PVKK Inst. of Tech');
selbox.options[selbox.options.length] = new Option('Shri Sai Institute of Engg. & Tech','Shri Sai Institute of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Sri Krishnadeveraya Engg. College','Sri Krishnadeveraya Engg. College');
selbox.options[selbox.options.length] = new Option('Sri Sai College of Engg. & Tech.','Sri Sai College of Engg. & Tech.');
selbox.options[selbox.options.length] = new Option('Srinivasa Ramanujan Inst. of Tech.','Srinivasa Ramanujan Inst. of Tech.');
selbox.options[selbox.options.length] = new Option('University College of Engg.','University College of Engg.');

}

if(chosen == "East Godavari")
{

selbox.options[selbox.options.length] = new Option('Adarsh College of Engg. Chebrolu','Adarsh College of Engg. Chebrolu' );
selbox.options[selbox.options.length] = new Option('Aditya Engineering College','Aditya Engineering College' );
selbox.options[selbox.options.length] = new Option('Bonam Venkata Chalamaiah Engg. College','Bonam Venkata Chalamaiah Engg. College' );
selbox.options[selbox.options.length] = new Option('Bonam Venkata Chalamaiah Inst. of Tech. & Sci.','Bonam Venkata Chalamaiah Inst. of Tech. & Sci.' );
selbox.options[selbox.options.length] = new Option('Chaitanya Inst. of Engg. & Tech.','Chaitanya Inst. of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Chaitanya Inst. of Sci. & Tech.','Chaitanya Inst. of Sci. & Tech. ' );
selbox.options[selbox.options.length] = new Option('Godavari Institute of Engg. & Tech','Godavari Institute of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Kakinada Inst. of Engg. & Tech. for Women','Kakinada Inst. of Engg. & Tech. for Women' );
selbox.options[selbox.options.length] = new Option('Kakinada Inst. of Tech. & Science','Kakinada Inst. of Tech. & Science' );
selbox.options[selbox.options.length] = new Option('Kakinada Inst. of Tech. & Sciences','Kakinada Inst. of Tech. & Sciences' );
selbox.options[selbox.options.length] = new Option('Kakinada Institute of Engg. & Tech','Kakinada Institute of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Konaseema Inst. of Mgt. Sciences & College of Engg. ','Konaseema Inst. of Mgt. Sciences & College of Engg' );
selbox.options[selbox.options.length] = new Option('Konaseema Inst. of Mgt. Sciences & College of Engg','Konaseema Inst. of Mgt. Sciences & College of Engg' );
selbox.options[selbox.options.length] = new Option('Lenora College of Engineering','Lenora College of Engineering' );
selbox.options[selbox.options.length] = new Option('Pragati Engineering College','Pragati Engineering College' );
selbox.options[selbox.options.length] = new Option('Rajamahendri Inst. of Engg. & Tech.','Rajamahendri Inst. of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Sri Aditya Engg. College','Sri Aditya Engg. College ');
selbox.options[selbox.options.length] = new Option('Sri Prakash College of Engg','Sri Prakash' );
selbox.options[selbox.options.length] = new Option('Sri Sai Aditya Institute of Sci. & Tech.','Sri Sai Aditya Institute of Sci. & Tech.' );
selbox.options[selbox.options.length] = new Option('Sri Sai Madhavi Inst. of Science & Tech.','Sri Sai Madhavi Inst. of Science & Tech.' );
selbox.options[selbox.options.length] = new Option('VS Lakshmi Engg. College for Women','VS Lakshmi Engg. College for Women' );


}

if (chosen == "Guntur") 
{

selbox.options[selbox.options.length] = new Option('AM Reddy Memorial College of Engineering and Technology','AM Reddy Memorial College');
  selbox.options[selbox.options.length] = new Option('Amara Institute of Engineering and Technology','mara Institute of Engineering and Technology ');
  selbox.options[selbox.options.length] = new Option('Bapatla Engineering College','Bapatla Engineering College');
selbox.options[selbox.options.length] = new Option('chalapathi instite engg & Tech','chalapathi instite engg & Tech');
selbox.options[selbox.options.length] = new Option('Chalapathi Inst. of Tech','Chalapathi Inst. of Tech ');
selbox.options[selbox.options.length] = new Option('Chebrolu engg.college','Chebrolu engg.college');
selbox.options[selbox.options.length] = new Option('Don Bosco Inst. of Tech. & Science','Don Bosco Inst. of Tech. & Science');
selbox.options[selbox.options.length] = new Option('Eswar College of Engg','Eswar College of Engg');
selbox.options[selbox.options.length] = new Option('EVM College of Engineering and Technology','EVM College of Engineering and Technology');
selbox.options[selbox.options.length] = new Option('Guntur Engineering College','Guntur Engineering College');
selbox.options[selbox.options.length] = new Option('GVR & S College of Eng. & Tech.','GVR & S College of Eng. & Tech.');
selbox.options[selbox.options.length] = new Option('KKR & KSR Inst. of Tech. & Sciences','KKR & KSR Inst. of Tech. & Sciences');
selbox.options[selbox.options.length] = new Option('Koneru Lakshmaiah University','Koneru Lakshmaiah University');
selbox.options[selbox.options.length] = new Option('Kothamasu Saraswathamma & Subbaratnam Womens Engg. College','Kothamasu Saraswathamma & Subbaratnam Womens Engg. College');
selbox.options[selbox.options.length] = new Option('Krishnaveni Engg. College for Women','Krishnaveni Engg. College for Women');
selbox.options[selbox.options.length] = new Option('LOyola Institute of Technology and Management','LOyola Institute of Technology and Management');
selbox.options[selbox.options.length] = new Option('Malineni Lakshmaiah Womens Engg. College','Malineni Lakshmaiah Womens Engg. College');
selbox.options[selbox.options.length] = new Option('Nalanda Inst. of Engg. & Tech','Nalanda Inst. of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Narasaraopet Inst. of Tech','Narasaraopet Inst. of Tech');
selbox.options[selbox.options.length] = new Option('Newtons Institute of Engg','Newtons Institute of Engg');
selbox.options[selbox.options.length] = new Option('NRI Inst. of Tech.','NRI Inst. of Tech.');
selbox.options[selbox.options.length] = new Option('Paladugu Nagaiah Chowdary & Vijai Inst. of Engg. & Tech.','Paladugu Nagaiah Chowdary & Vijai Inst. of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Priyadarshini Institute of Technology and Science for women','Priyadarshini Institute of Technology and Science for women');
selbox.options[selbox.options.length] = new Option('RVR and JC College of Engineering','RVR and JC College of Engineering');
selbox.options[selbox.options.length] = new Option('Sri Chundi Ranganayakulu Engg','Sri Chundi Ranganayakulu Engg');
selbox.options[selbox.options.length] = new Option('Sri Mittapalli College of Engg., ','Sri Mittapalli');
selbox.options[selbox.options.length] = new Option('Sri Mittapalli Inst. of Tech. for Women','Sri Mittapalli Inst. of Tech. for Women');
selbox.options[selbox.options.length] = new Option('St Marys Engineering College','St Marys Engineering College');
selbox.options[selbox.options.length] = new Option('Tenali Engineering College','Tenali Engineering College');
selbox.options[selbox.options.length] = new Option('Tirumala Engg. College','Tirumala Engg. College');
selbox.options[selbox.options.length] = new Option('Universal College of Engg. & Tech.','Universal College of Engg. & Tech.');
selbox.options[selbox.options.length] = new Option('Vasireddy Venkatadri Institute of Technology','Vasireddy Venkatadri Institute of Technology');
selbox.options[selbox.options.length] = new Option('Velaga Nageswara Rao College of Engg','Velaga Nageswara Rao College of Engg');
//selbox.options[selbox.options.length] = new Option('Vignans Engineering College','Vignans Engineering College');
selbox.options[selbox.options.length] = new Option('Vignan Lara Institute of Technology and Science','Vignan Lara Institute of Technology and Science');
selbox.options[selbox.options.length] = new Option('Vignans Nirula Inst. of Tech. & Science for Women','Vignans Nirula Inst. of Tech. & Science for Women');
}


if (chosen == "Hyderabad")
{


selbox.options[selbox.options.length] = new Option('Aurora Scientific and Tech. Research Academy','Aurora Scientific and Tech. Research Academy');
selbox.options[selbox.options.length] = new Option('Bhaskar Engineering College','Bhaskar Engineering College');
selbox.options[selbox.options.length] = new Option('Bhoj Reddy Engg. College for Women','Bhoj Reddy Engg. College for Women');
selbox.options[selbox.options.length] = new Option('Chaitanya Bharathi Institute of Tech.','Chaitanya Bharathi Institute of Tech.');
selbox.options[selbox.options.length] = new Option('Chilkur Balaji Institute of Tech','Chilkur Balaji Institute of Tech');
selbox.options[selbox.options.length] = new Option('CM Engg. College','CM Engg. College');
selbox.options[selbox.options.length] = new Option('Deccan College of Engg. &Tech','Deccan College of Engg. &Tech');
selbox.options[selbox.options.length] = new Option('G.Narayanamma Institute of Tech. & Sci. for Women','G.Narayanamma Institute of Tech. & Sci. for Women');
selbox.options[selbox.options.length] = new Option('Gokaraju Rangaraju Institute of Engg. & Tech','Gokaraju Rangaraju Institute of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Greenfort Engg. College','Greenfort Engg. College');
selbox.options[selbox.options.length] = new Option('Hi-Tech College of Engg. & Tech','Hi-Tech College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Inst. of Aeronautical Engineering','Inst. of Aeronautical Engineering');
selbox.options[selbox.options.length] = new Option('Islamia College of Engg. & Tech. for Women','Islamia College of Engg. & Tech. for Women');
selbox.options[selbox.options.length] = new Option('JNTU College of Engg.','JNTU,hyderabad ');
selbox.options[selbox.options.length] = new Option('Keshav Memorial Inst. of Tech.','Keshav Memorial Inst. of Tech.');
selbox.options[selbox.options.length] = new Option('Lords Institute of Engg. & Tech','Lords Institute of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Mahatma Gandhi Institute of Tech','Mahatma Gandhi Institute of Tech');
selbox.options[selbox.options.length] = new Option('Mahaveer Institute of Sci. & Tech.','Mahaveer Institute of Sci. & Tech.');
selbox.options[selbox.options.length] = new Option('Methodist College of Engg. & Tech','Methodist College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('MLR Institute of Technology','MLR Institute of Technology');
selbox.options[selbox.options.length] = new Option('Moghal College of Engg. & Tech','Moghal College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Muffakham Jah (MJ) College of Engg. & Tech','Muffakham Jah (MJ) College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('MVSR (Maturi Venkata Subba Rao) Engg. College','MVSR (Maturi Venkata Subba Rao) Engg. College');
selbox.options[selbox.options.length] = new Option('Nawab Shah Alam Khan College of Engg. & Tech','Nawab Shah Alam Khan College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('OU College of Engg.','OU College of Engg.');
selbox.options[selbox.options.length] = new Option('OU College of Tech','OU College of Tech');
selbox.options[selbox.options.length] = new Option('Pujya Shri Madhavanji College of Engg. & Tech','Pujya Shri Madhavanji College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Shadan College of Engg. & Tech','Shadan College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Shadan Womens College of Engg. & Tech','Shadan Womens College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Sridevi Womens Engg. College','Sridevi Womens Engg. College');
selbox.options[selbox.options.length] = new Option('Stanley College of Engg. & Tech. for Women','Stanley College of Engg. & Tech. for Women');
selbox.options[selbox.options.length] = new Option('Teegala Krishna Reddy Engg. College','Teegala Krishna Reddy Engg. College');
selbox.options[selbox.options.length] = new Option('TKR College of Engg. & Tech','TKR College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Vanjari Seetaiah Memorial Engg. College','Vanjari Seetaiah Memorial Engg. College');
selbox.options[selbox.options.length] = new Option('Vasavi College of Engineering','Vasavi College of Engineering');
selbox.options[selbox.options.length] = new Option('Vidya Jyothi Inst. of Tech.','Vidya Jyothi Inst. of Tech. ');
selbox.options[selbox.options.length] = new Option('Viswa Bharathi College of Engg.','Viswa Bharathi College of Engg.');
selbox.options[selbox.options.length] = new Option('VNR Vignan Jyothi Institute of Engg. & Tech.','VNR Vignan Jyothi Institute of Engg. & Tech.');
selbox.options[selbox.options.length] = new Option('Malla Reddy Engineering College for Women','Malla Reddy Engineering College for Women');
selbox.options[selbox.options.length] = new Option('Malla Reddy Inst. of Engg. & Tech.','Malla Reddy Inst. of Engg. & Tech.');
selbox.options[selbox.options.length] = new Option('Swami Vivekananda Inst.of Tech','Swami Vivekananda Inst.of Tech');

}
if (chosen == "Chittoor") 
{

selbox.options[selbox.options.length] = new Option('Annamacharya Institute of Technology and Sciences','Annamacharya Institute of Technology and Sciences' );
selbox.options[selbox.options.length] = new Option('Chadalawada Ramanamma Engg. College','Chadalawada Ramanamma Engg. College' );
selbox.options[selbox.options.length] = new Option('Chadalawada Venkata Subbaiah College of Engg','Chadalawada Venkata Subbaiah College of Engg' );
selbox.options[selbox.options.length] = new Option('Dairy Tecnology Program','Dairy Tecnology Program' );
selbox.options[selbox.options.length] = new Option('JB Womens Engg. College','JB Womens Engg. College' );
selbox.options[selbox.options.length] = new Option('KKC Inst. of Tech. & Engg. For Women','KKC Inst. of Tech. & Engg. For Women' );
selbox.options[selbox.options.length] = new Option('KMM Inst. of Tech. & Science','KMM Inst. of Tech. & Science' );
selbox.options[selbox.options.length] = new Option('Kuppam Engineering College','Kuppam Engineering College' );
selbox.options[selbox.options.length] = new Option('Madanapalle Institute of Technology and Science','Madanapalle Institute of Technology and Science' );
selbox.options[selbox.options.length] = new Option('Priyadarshini Inst. of Tech.','Priyadarshini Inst. of Tech.' );
selbox.options[selbox.options.length] = new Option('Sri Padmavathi Mahila (Womens) (SPMVV)','Sri Padmavathi Mahila college' );
selbox.options[selbox.options.length] = new Option('Seshachala Inst. of Tech.','Seshachala Inst. of Tech.' );
selbox.options[selbox.options.length] = new Option('Shree Inst. of Tech. Education','Shree Inst. of Tech. Education' );
selbox.options[selbox.options.length] = new Option('Siddardha Institute of Engineering and Technology','Siddardha Institute of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Siddhartha Inst. of Science & Tech','Siddhartha Inst. of Science & Tech' );
selbox.options[selbox.options.length] = new Option('Sir Vishveshwaraiah Inst. of Science & Tech','Sir Vishveshwaraiah Inst. of Science & Tech' );
selbox.options[selbox.options.length] = new Option('Sree Rama Engg. College','Sree Rama Engg. College' );
selbox.options[selbox.options.length] = new Option('Sri Kalahasteswara Institute of Technology','Sri Kalahasteswaran' );
selbox.options[selbox.options.length] = new Option('Sri Venkateswara Coll. of Engg. & Tech.','Sri Venkateswara Coll. of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Sri Venkatesa Perumal College of Engg. and Tech','Sri Venkatesa Perumal' );
selbox.options[selbox.options.length] = new Option('Sri Venkateswara College of Engineering','Sri Venkateswara College of Engineering' );
selbox.options[selbox.options.length] = new Option('Sri Venkateswara University College of Engineering','Sri Venkateswara University College of Engineering' );
selbox.options[selbox.options.length] = new Option('Sree Vidyanikethan Engineering College','Sree Vidyanikethan' );
selbox.options[selbox.options.length] = new Option('Srinivasa Institute of Technology and Management Studies','Srinivasa Institute of Technology and Management Studies' );
selbox.options[selbox.options.length] = new Option('Swetha Inst. of Tech. & Science for Women','Swetha Inst. of Tech. & Science for Women' );
selbox.options[selbox.options.length] = new Option('Vaishnavi Institute of Technology','Vaishnavi Institute of Technology' );
selbox.options[selbox.options.length] = new Option('Vemu Inst. of Tech.','Vemu Inst. of Tech.,' );
selbox.options[selbox.options.length] = new Option('Yogananda Inst. of Tech. & Science','Yogananda Inst. of Tech. & Science' );

}

if (chosen == "Cuddapah") 
{

 selbox.options[selbox.options.length] = new Option('Madina Engineering College','Madina Engineering College');
 selbox.options[selbox.options.length] = new Option('Aizza College of Engg. & Tech., Mulkalla','Aizza College of Engg. & Tech., Mulkalla');
 selbox.options[selbox.options.length] = new Option('Sri Venkateswara Institute of Science and Technology','Sri Venkateswara Institute of Science and Technology');
 selbox.options[selbox.options.length] = new Option('KSRM College of Engineering','KSRM College of Engineering');
  selbox.options[selbox.options.length] = new Option('Kandula Obul Reddy Memorial College of Engineering','Kandula Obul Reddy Memorial College of Engineering');
  selbox.options[selbox.options.length] = new Option('Sri Sai Institute of Technology and Science','Sri Sai Institute of Technology and Science');
  selbox.options[selbox.options.length] = new Option('Sri Vagdevi Institute of Technology and Science','Sri Vagdevi Institute of Technology and Science');
  selbox.options[selbox.options.length] = new Option('Akshaya Bharathi Inst. of Tech.','Akshaya Bharathi Inst. of Tech.');
selbox.options[selbox.options.length] = new Option('Annamacharya Inst. of Tech. & Science','Annamacharya Inst. of Tech. & Science');
selbox.options[selbox.options.length] = new Option('Bharat College of Engg & Tech., for Women','Bharat College of Engg & Tech., for Women');
selbox.options[selbox.options.length] = new Option('Chaitanya Bharati Inst. of Tech.','Chaitanya Bharati Inst. of Tech');
selbox.options[selbox.options.length] = new Option('College of Food Science & Tech.','College of Food Science & Tech.');
selbox.options[selbox.options.length] = new Option('Fathima Inst. of Tech. & Mngt.','Fathima Inst. of Tech. & Mngt.');
selbox.options[selbox.options.length] = new Option('Global College of Engg. & Tech','Global College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('JNTU College of Engg.','JNTU,Cuddapah');
selbox.options[selbox.options.length] = new Option('Kandula Lakshumma Memorial College of Engg. For Women','Kandula Lakshumma Memorial College of Engg. For Women');
selbox.options[selbox.options.length] = new Option('Modugula Kalavathama Inst. of Tech. for Women','Modugula Kalavathama Inst. of Tech. for Women');
selbox.options[selbox.options.length] = new Option('Rajoli Veera Reddy Padmaja Engg. College for Women','Rajoli Veera Reddy Padmaja Engg. College for Women');
selbox.options[selbox.options.length] = new Option('Yogi Vemana University College of Engg.','Yogi Vemana University College of Engg.');

}


if (chosen == "Karimnagar") 
{
selbox.options[selbox.options.length] = new Option('Dr VRK College of Engineering and Technology','Dr VRK College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('JNTU College of Engineering','JNTU,Karimnagar' );
selbox.options[selbox.options.length] = new Option('Jyothismathi Inst. of Tech. Sciences','Jyothismathi Inst. of Tech. Sciences' );
selbox.options[selbox.options.length] = new Option('Kamala Institute of Tech. and Sciences','Kamala Institute of Tech. and Sciences' );
selbox.options[selbox.options.length] = new Option('Mother Theresa College of Engg. & Tech.','Mother Theresa College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Nigama Engg. College','Nigama Engg. College' );
selbox.options[selbox.options.length] = new Option('Sahaja Inst. of Tech. Sciences for Women','Sahaja Inst. of Tech. Sciences for Women' );
selbox.options[selbox.options.length] = new Option('Sindhura College of Engg. and Tech.','Sindhura College of Engg. and Tech.' );
selbox.options[selbox.options.length] = new Option('Sree Chaitanya College of Engg.','Sree Chaitanya College of Engg.' );
selbox.options[selbox.options.length] = new Option('Trinity College of Engg. & Tech.','Trinity College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Vaageshwari College of Engg.','Vaageshwari College of Engg.' );
selbox.options[selbox.options.length] = new Option('Vivekananda Institute of Tech. & Sci.','Vivekananda Institute of Tech. & Sci.' );

}

if(chosen == "Khammam")
{

selbox.options[selbox.options.length] = new Option('Abdul Kalam Iinst. of Tech. & Science','Abdul Kalam Iinst. of Tech. & Science' );
selbox.options[selbox.options.length] = new Option('Adams  Engineering College.','Adams  Engineering College.' );
selbox.options[selbox.options.length] = new Option('ANU Bose Inst. of Tech.','ANU Bose Inst. of Tech.' );
selbox.options[selbox.options.length] = new Option('Bomma Inst. of Tech & Science','Bomma Inst. of Tech & Science' );
selbox.options[selbox.options.length] = new Option('Daripally Anantharamulu College of Engg.& Tech.','Daripally Anantharamulu College of Engg.& Tech.' );
selbox.options[selbox.options.length] = new Option('Dr.Paul Rajs Engg. College','Dr.Paul Rajs Engg. College' );
selbox.options[selbox.options.length] = new Option('Khammam Inst. of Tech. & Science','Khammam Inst. of Tech. & Science' );
selbox.options[selbox.options.length] = new Option('KLR College of Engg. & Tech.','KLR College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Laqshya Inst. of Tech. & Sciences','Laqshya Inst. of Tech. & Sciences' );
selbox.options[selbox.options.length] = new Option('Mother Theresa Institute of Sci. and Tech','Mother Theresa Institute of Sci. and Tech' );
selbox.options[selbox.options.length] = new Option('Pulipati Prasad Inst. of Tech. & Science','Pulipati Prasad Inst. of Tech. & Science' );
selbox.options[selbox.options.length] = new Option('Sai Spurty Institute of Tech.','Sai Spurty Institute of Tech.' );
selbox.options[selbox.options.length] = new Option('Sarada Institute of Tech. & Sci.','Sarada Institute of Tech. & Sci.' );
selbox.options[selbox.options.length] = new Option('Sree Rama Instt. of Tech & Sci.','Sree Rama Instt. of Tech & Sci.' );
selbox.options[selbox.options.length] = new Option('Sri Kavitha Engg. College','Sri Kavitha Engg. College' );
selbox.options[selbox.options.length] = new Option('SRR Engineering College','SRR Engineering College' );
selbox.options[selbox.options.length] = new Option('Swarna Bharathi College of Engg','Swarna Bharathi College of Engg' );
selbox.options[selbox.options.length] = new Option('Swarna Bharathi Institute of Sci. & Tech.','Swarna Bharathi Institute of Sci. & Tech.' );
selbox.options[selbox.options.length] = new Option('University (KU) College of Engg.','University (KU) College of Engg.' );
selbox.options[selbox.options.length] = new Option('Vazir Sultan College of Engg','Vazir Sultan College of Engg' );
selbox.options[selbox.options.length] = new Option('Vijaya Engineering College','Vijaya Engineering College' );
}

if (chosen == "Machilipatnam") 
{

selbox.options[selbox.options.length] = new Option('Andhra Loyola Inst. of Engg. & Tech.','Andhra Loyola Inst. of Engg. & Tech.' );

}


if (chosen == "Krishna") 
{
selbox.options[selbox.options.length] = new Option('Amrita Sai Institute of Science and Technology','Amrita Sai Institute of Science and Technology' );
selbox.options[selbox.options.length] = new Option('Devineni Venkata Ramana & Dr.Himasekhar MIC Coll.of Tech','Devineni Venkata Ramana & Dr.Himasekhar MIC Coll.of Tech' );
selbox.options[selbox.options.length] = new Option('DJR Inst. of Engg. & Tech.','DJR Inst. of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Gandhiji Inst. of Science & Tech.','Gandhiji Inst. of Science & Tech.' );
selbox.options[selbox.options.length] = new Option('Gudlavalleru Engineering College','Gudlavalleru Engineering College' );
selbox.options[selbox.options.length] = new Option('Lakkireddy Balireddy Engineering College','Lakkireddy Balireddy Engineering College' );
selbox.options[selbox.options.length] = new Option('Gurindapalli Devananda Mary Memorial (GDMM) College for Women','GDMM College for women' );
selbox.options[selbox.options.length] = new Option('Nimra College of Engineering and Technology','Nimra College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Montessori Siva Sivani Inst. of Science & Tech.','Montessori Siva Sivani Inst. of Science & Tech.' );
selbox.options[selbox.options.length] = new Option('MVR College of Engg. & Tech.','MVR College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Nimra Inst. of Science & Tech.','Nimra Inst. of Science & Tech.' );
selbox.options[selbox.options.length] = new Option('Nimra Womens College of Engg.','Nimra Womens College of Engg' );
selbox.options[selbox.options.length] = new Option('Nova College of Engg & Tech for Women','Nova College of Engg & Tech for Women' );
selbox.options[selbox.options.length] = new Option('Nova College of Engg. & Tech.','Nova College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('NRI Inst. of Tech.','NRI Inst. of Tech.' );
selbox.options[selbox.options.length] = new Option('Paladugu Parvathidevi College of Engg. & Tech.','Paladugu Parvathidevi College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Potti Sriramulu College of Engg. & Tech.','Potti Sriramulu College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Prasad Institute of Technology and Sciences','Prasad Institute of Technology and Sciences' );
selbox.options[selbox.options.length] = new Option('Prasad V Potluri Siddhartha Institute of Tech.','Prasad V Potluri Siddhartha Institute of Tech.' );
selbox.options[selbox.options.length] = new Option('RK College of Engg.','RK College of Engg.' );
selbox.options[selbox.options.length] = new Option('Sarojini Inst. of Tech.','Sarojini Inst. of Tech.' );
selbox.options[selbox.options.length] = new Option('Sree Vahini Inst. of Science & Tech.','Sree Vahini Inst. of Science & Tech.' );
selbox.options[selbox.options.length] = new Option('Sri Sarathi Institute of Engg. & Tech.','Sri Sarathi Institute of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Sri Sunflower College of Engg & Tech.',' Sri Sunflower College of Engg & Tech.' );
selbox.options[selbox.options.length] = new Option('Sri Vasavi Inst. of Engg. & Tech., ','Sri Vasavi Inst. of Engg. & Tech.,' );
selbox.options[selbox.options.length] = new Option('Sri Viveka Inst. of Tech','Sri Viveka Inst. of Tech' );
selbox.options[selbox.options.length] = new Option('SRK Institute of Technology','SRK Institute of Technology' );
selbox.options[selbox.options.length] = new Option('Usha Rama College of Engg. & Tech.','Usha Rama College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Vijaya Inst. of Tech. for Women','Vijaya Inst. of Tech. for Women' );
selbox.options[selbox.options.length] = new Option('Vikas College of Engg. & Tech.','Vikas College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('VKR & VNB Engg. College','VKR & VNB Engg. College' );
selbox.options[selbox.options.length] = new Option('VR Siddardha Engineering College','VR Siddardha Engineering College ' );
selbox.options[selbox.options.length] = new Option('Dr. Paul Raj Engg College','Dr. Paul Raj Engg College' );
selbox.options[selbox.options.length] = new Option('SRA College of Architecture','Dr. Paul Raj Engg College' );
selbox.options[selbox.options.length] = new Option('SVH College of Engineering','SVH College of Engineering' );

}

if (chosen == "Kurnool") 
{

selbox.options[selbox.options.length] = new Option('Alfa College of Engg. and Tech.','Alfa College of Engg. and Tech.' );
selbox.options[selbox.options.length] = new Option('AVR & SVR Coll. of Engg. & Tech.','AVR & SVR Coll. of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('AVR & SVR Engg. College','AVR & SVR Engg. College' );
selbox.options[selbox.options.length] = new Option('Bheema Inst. of Tech. & Science','AVR & SVR Engg. College' );
selbox.options[selbox.options.length] = new Option('Brindavan Inst. of Tech. & Science','AVR & SVR Engg. College ' );
selbox.options[selbox.options.length] = new Option('Dr. K.V. Subba Reddy College of Engg. For Women','Dr. K.V. Subba Reddy College of Engg. For Women ' );
selbox.options[selbox.options.length] = new Option('Dr.KV Subba Reddy Inst. of Tech','Dr.KV Subba Reddy Inst. of Tech' );
selbox.options[selbox.options.length] = new Option('G.Pulla Reddy Engg. College','G.Pulla Reddy Engg. College' );
selbox.options[selbox.options.length] = new Option('G.Pullaiah Coll. of Engg.& Tech.','G.Pullaiah Coll. of Engg.& Tech.' );
selbox.options[selbox.options.length] = new Option('Indira Priyadarshini College of Engg. & Tech.','Indira Priyadarshini College of Engg. & Tech. ' );
selbox.options[selbox.options.length] = new Option('Kottam College of Engg.','Kottam College of Engg.' );
selbox.options[selbox.options.length] = new Option('Kottam Karunakara Reddy Inst. of Tech.','Kottam Karunakara Reddy Inst. of Tech. ' );
selbox.options[selbox.options.length] = new Option('Ravindra College of Engg. For Women','Ravindra College of Engg. For Women' );
selbox.options[selbox.options.length] = new Option('Safa College of Engg.& Tech.','Safa College of Engg.& Tech. ' );
selbox.options[selbox.options.length] = new Option('Santhiram Engg. College','Santhiram Engg. College' );
selbox.options[selbox.options.length] = new Option('St.Johns College of Engg & Tech ','St.Johns College of Engg & Tech  ' );
selbox.options[selbox.options.length] = new Option('Stanley Stephen College of Engg. & Tech.','Stanley Stephen College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Syamaladevi Inst. of Tech. for Women','Syamaladevi Inst. of Tech. for Women' );
}

if (chosen == "Mehaboobnagar") 
{

selbox.options[selbox.options.length] = new Option('Jayaprakash Narayan College of Engg. and Tech. ',' Jayaprakash Narayan College of Engg. and Tech.' );
selbox.options[selbox.options.length] = new Option('Noor College of Engg., & Tech.','Noor College of Engg., & Tech.' );
selbox.options[selbox.options.length] = new Option('Sri Kottam Tulasi Reddy Memorial College of Engineering','Sri Kottam Tulasi Reddy Memorial College of Engineering' );
selbox.options[selbox.options.length] = new Option('Sri Visvesvaraya Institute of Technology and Sciences',' Sri Visvesvaraya Institute of Technology and Sciences' );
selbox.options[selbox.options.length] = new Option('Vivekananda Inst. of Science & Info. Tech.',' Vivekananda Inst. of Science & Info. Tech.' );
selbox.options[selbox.options.length] = new Option('Jayaprakash College of Engineering','Jayaprakash College of Engineering ' );
selbox.options[selbox.options.length] = new Option('Narayanpeta Institute of Technology and Science College of Engineering','Narayanpeta Institute of Technology and Science College of Engineering ' );
selbox.options[selbox.options.length] = new Option('Noor College of Engineering Technology','Noor College of Engineering Technology' );
selbox.options[selbox.options.length] = new Option('Sri Sai Jyothi Engineering College','Sri Sai Jyothi Engineering College' );
selbox.options[selbox.options.length] = new Option('Vardhaman College of Engineerin','Vardhaman College of Engineerin ' );
}

if(chosen == "Medak")
{

selbox.options[selbox.options.length] = new Option('DVR College of Engg. and Tech.','DVR College of Engg. and Tech. ' );
selbox.options[selbox.options.length] = new Option('Ellenki College of Engg. & Tech.','Ellenki College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Gopal Reddy College of Engg. & Tech.','Gopal Reddy College of Engg. & Tech. ' );
selbox.options[selbox.options.length] = new Option('Hyderabad Inst. of Technology & Mngt.','Hyderabad Inst. of Technology & Mngt. ' );
selbox.options[selbox.options.length] = new Option('Indur Institute of Engg. and Tech.','Indur Institute of Engg. and Tech. ' );
selbox.options[selbox.options.length] = new Option('Maheshwara Engg. College','Maheshwara Engg. College ' );
selbox.options[selbox.options.length] = new Option('Medak College of Engg. & Tech.','Medak College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('MNR College of Engg. & Tech.','MNR College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Padmasri Dr.B.V.Raju Institute of Tech',' Padmasri Dr.B.V.Raju Institute of Tech' );
selbox.options[selbox.options.length] = new Option('Prof. Rama Reddy College of Engg. & Tech','Prof. Rama Reddy College of Engg. & Tech');
selbox.options[selbox.options.length] = new Option('Pulla Reddy Inst. of Tech.','Pulla Reddy Inst. of Tech.');
selbox.options[selbox.options.length] = new Option('RRS College of Engineering & Tech.','RRS College of Engineering & Tech.');
selbox.options[selbox.options.length] = new Option('Sri YPR College of Engg. and Tech.','Sri YPR College of Engg. and Tech.' );
selbox.options[selbox.options.length] = new Option('SSR Engineering College','SSR Engineering College' );
selbox.options[selbox.options.length] = new Option('SSR Inst. of Engg. & Tech.','SSR Inst. of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Syed Hashim College of Science& Tech','Syed Hashim College of Science& Tech' );
selbox.options[selbox.options.length] = new Option('TRR College of Engg. & Tech.','TRR College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Turbomachinary Inst. of Tech. & Sciences','Turbomachinary Inst. of Tech. & Sciences' );

}

if(chosen == "Nalgonda")
{

selbox.options[selbox.options.length] = new Option('Adusumalli Vijaya Coll. of Engg. & Res. Centre','Adusumalli Vijaya Coll. of Engg. & Res. Centre' );
selbox.options[selbox.options.length] = new Option('Anurag Engineering Collge','Anurag Engineering Collge' );
selbox.options[selbox.options.length] = new Option('Auroras Engineering College','Auroras Engineering College' );
selbox.options[selbox.options.length] = new Option('Gandhi Academy of Tech. Education','Gandhi Academy of Tech. Education' );
selbox.options[selbox.options.length] = new Option('KBR Engg. College','KBR Engg. College' );
selbox.options[selbox.options.length] = new Option('Khader Memorial College of Engg., & Tech.','Khader Memorial College of Engg., & Tech.' );
selbox.options[selbox.options.length] = new Option('Kodada Inst. of Tech. & Science for Women','Kodada Inst. of Tech. & Science for Women' );
selbox.options[selbox.options.length] = new Option('Madhira College of Engg','Madhira College of Engg' );
selbox.options[selbox.options.length] = new Option('Matrix Inst. of Tech','Matrix Inst. of Tech' );
selbox.options[selbox.options.length] = new Option('Medha College of Engg.','Medha College of Engg. ' );
selbox.options[selbox.options.length] = new Option('Mina Inst. of Engg. & Tech. for Women','Mina Inst. of Engg. & Tech. for Women' );
selbox.options[selbox.options.length] = new Option('Mona College of Engg. & Tech., .','Mona College of Engg. & Tech., .' );
selbox.options[selbox.options.length] = new Option('Nagarjuna Institute of Tech. & Sci','Nagarjuna Institute of Tech. & Sci' );
selbox.options[selbox.options.length] = new Option('Nalgonda Inst. of Tech. & Sciences','Nalgonda Inst. of Tech. & Sciences' );
selbox.options[selbox.options.length] = new Option('Netaji Institute of Engg. & Tech.','Netaji Institute of Engg. & Tech. ' );
selbox.options[selbox.options.length] = new Option('New Netaji Inst. of Tech.','New Netaji Inst. of Tech.' );
selbox.options[selbox.options.length] = new Option('Nizam Inst. of Engg. & Tech','Nizam Inst. of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Progressive Engg. College','Progressive Engg. College' );
selbox.options[selbox.options.length] = new Option('Ramanandatirtha Engg. College','Ramanandatirtha Engg. College' );
selbox.options[selbox.options.length] = new Option('Sana College of Engg. Tech. & Research Inst.','Sana College of Engg. Tech. & Research Inst. ' );
selbox.options[selbox.options.length] = new Option('Sri Sarada Inst. of Sci. & Tech.','Sri Sarada Inst. of Sci. & Tech.' );
selbox.options[selbox.options.length] = new Option('Sri Venkateswara Engg. College','Sri Venkateswara Engg. College' );
selbox.options[selbox.options.length] = new Option('St.Mary’s College of Engg. & Tech','St.Mary’s College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Swami Ramanandha Thirtha Institute of Scince & Tech','Swami Ramanandha Thirtha Institute of Scince & Tech' );
selbox.options[selbox.options.length] = new Option('Tudi Narsimha Reddy Inst. of Tech. & Sciences','Tudi Narsimha Reddy Inst. of Tech. & Sciences ' );
selbox.options[selbox.options.length] = new Option('Tudi Ram Reddy Inst. of Tech. & Sciences','Tudi Ram Reddy Inst. of Tech. & Sciences ' );
selbox.options[selbox.options.length] = new Option('Vathsalya Institute of Sci. & Tech','Vathsalya Institute of Sci. & Tech' );
selbox.options[selbox.options.length] = new Option('Vignan Inst. of Tech. & Sci','Vignan Inst. of Tech. & Sci' );
selbox.options[selbox.options.length] = new Option('Vignans Inst. of Tech. & Aeronautical Engg','Vignans Inst. of Tech. & Aeronautical Engg' );
selbox.options[selbox.options.length] = new Option('Vishnusree Inst. of Tech.','Vishnusree Inst. of Tech.' );

}


if(chosen == "Nellore")
{

selbox.options[selbox.options.length] = new Option('Audisankara College of Engg. & Tech.','Audisankara College of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('AVS College of Engg. & Tech','AVS College of Engg. & Tech ' );
selbox.options[selbox.options.length] = new Option('Brahmaiah College of Engg.','Brahmaiah College of Engg.' );
selbox.options[selbox.options.length] = new Option('Geethanjali Inst. of Science & Tech.','Geethanjali Inst. of Science & Tech.' );
selbox.options[selbox.options.length] = new Option('Gokula Krishna College of Engg.','Gokula Krishna College of Engg.' );
selbox.options[selbox.options.length] = new Option('Jagans College of Engg. & Tech','Jagans College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Malineni Lakshmaiah Inst. of Engg. & Tech.','Malineni Lakshmaiah Inst. of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Mekapati Rajamohan Reddy Institute','Mekapati Rajamohan Reddy Institute' );
selbox.options[selbox.options.length] = new Option('Narayana Engineering College,gudur','Narayana Engineering College,gudur' );
selbox.options[selbox.options.length] = new Option('Narayana Engineering College,Narayana Avenue','Narayana Engineering College,Narayana Avenue' );
selbox.options[selbox.options.length] = new Option('NBKR Institute of Sci. and Tech','NBKR Institute of Sci. and Tech' );
selbox.options[selbox.options.length] = new Option('Parvathareddy Babul Reddy','Parvathareddy Babul Reddy' );
selbox.options[selbox.options.length] = new Option('Priyadarshini Coll of Engg. & Tech','Priyadarshini Coll of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Priyadarshini College of Engineering','Priyadarshini College of Engineering' );
selbox.options[selbox.options.length] = new Option('Quba College of Engg. & Tech','Quba College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Rami Reddy Subbarami Reddy Engg','Rami Reddy Subbarami Reddy Engg' );
selbox.options[selbox.options.length] = new Option('Sri Raghavendra Inst. of Science & Tech','Sri Raghavendra Inst. of Science & Tech' );
selbox.options[selbox.options.length] = new Option('Visvodaya Engg. College','Visvodaya Engg. College' );


}




if (chosen == "Nizamabad") 
{

selbox.options[selbox.options.length] = new Option('Arkay College of Engineering and Technology','Arkay College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Gnyana Saraswati College of Engineering and Technology',' Gnyana Saraswati College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('RK College of Engineering Technology','RK College of Engineering Technology ' );
selbox.options[selbox.options.length] = new Option('Karshak Engineering College',' Karshak Engineering College ' );
selbox.options[selbox.options.length] = new Option('Kshatriya College of Engineering','Kshatriya College of Engineering' );
selbox.options[selbox.options.length] = new Option('Srinivasareddy Institute of Technology','Srinivasareddy Institute of Technology' );
selbox.options[selbox.options.length] = new Option('Srinivas Engineering College','Srinivas Engineering College' );
selbox.options[selbox.options.length] = new Option('Vijay Rural Engineering College','Vijay Rural Engineering College ' );

}

if (chosen == "Prakasam") 
{

selbox.options[selbox.options.length] = new Option('ABR College of Engg. & Tech','ABR College of Engg. & Tech ' );
selbox.options[selbox.options.length] = new Option('Buchepalli Venkayamma Subbareddy Engg. College','Buchepalli Venkayamma Subbareddy Engg. College' );
selbox.options[selbox.options.length] = new Option('Chirala Engineering College','Chirala Engineering College' );
selbox.options[selbox.options.length] = new Option('Dr.Samuel George Institute of Engg. & Tech.','Dr.Samuel George Institute of Engg. & Tech.' );
selbox.options[selbox.options.length] = new Option('Krishna Chaitanya Inst. of Technology & Sciences','Krishna Chaitanya Inst. of Technology & Sciences' );
selbox.options[selbox.options.length] = new Option('Malineni Lakshmaiah Engineering College','Malineni Lakshmaiah Engineering College' );
selbox.options[selbox.options.length] = new Option('Nimra College (Inst.) of Engg. & Tech','Nimra College (Inst.) of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('PACE Inst. of Tech. & Sciences','PACE Inst. of Tech. & Sciences' );
selbox.options[selbox.options.length] = new Option('Prakasam Engineering College','Prakasam Engineering College' );
selbox.options[selbox.options.length] = new Option('QIS College of Engg. & Tech','QIS College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Rao & Naidu Engg. College','Rao & Naidu Engg. College' );
selbox.options[selbox.options.length] = new Option('Sri Satya Narayana (SSN) Engg','Sri Satya Narayana (SSN) Engg' );
selbox.options[selbox.options.length] = new Option('Sri Veeravenkata Satyanarayana (SVVSN) Engg. Coll','Sri Veeravenkata Satyanarayana (SVVSN) Engg. Coll' );
selbox.options[selbox.options.length] = new Option('St.Anns College of Engg & Tech','St.Anns College of Engg & Tech' );
selbox.options[selbox.options.length] = new Option('St.Anns Engg. College','St.Anns Engg. College' );
selbox.options[selbox.options.length] = new Option('VRS & YRN College of Engg. & Tech','VRS & YRN College of Engg. & Tech' );


}


if (chosen == "Rangareddi") 
{
selbox.options[selbox.options.length] = new Option('M L R Institute of Technology','M L R Institute of Technology ' );
selbox.options[selbox.options.length] = new Option('Azad College of Engineering and Technology',' Azad College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Ayaan College of Engineering and Technology',' Ayaan College of Engineering and Technology ' );
selbox.options[selbox.options.length] = new Option('Auroras Technological and Research Institute',' Ayaan College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Arjun College of Technology and Science','Arjun College of Technology and Science ' );
selbox.options[selbox.options.length] = new Option('Amina Institute of Technology','Amina Institute of Technology ' );
selbox.options[selbox.options.length] = new Option('RVR Institute of Engineering and Technology','Amina Institute of Technology' );
selbox.options[selbox.options.length] = new Option('Narasimha Reddy Engineering College',' Narasimha Reddy Engineering College' );
selbox.options[selbox.options.length] = new Option('Visvesvaraya College of Engineering and Technology','Visvesvaraya College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Krishna Murthy Institute of Technology and Engineering','Krishna Murthy Institute of Technology and Engineering' );
selbox.options[selbox.options.length] = new Option('Jawaharlal Nehru Institute of Technology','Jawaharlal Nehru Institute of Technology' );
selbox.options[selbox.options.length] = new Option('ACE Engineering College','ACE Engineering College ' );
selbox.options[selbox.options.length] = new Option('Al Habeeb College of Engineering and Technology','Al Habeeb College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Annamacharya Institute of Technology and Sciences','Annamacharya Institute of Technology and Sciences' );
selbox.options[selbox.options.length] = new Option('Anwar Ul Ullem College of Engineering and Technology','Anwar Ul Ullem College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Asifia College of Engineering and Technology','Asifia College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Barath Institute of Engineering and Technology','Barath Institute of Engineering and Technology ' );
selbox.options[selbox.options.length] = new Option('Bandari Srinivas Institute Of Technology','Bandari Srinivas Institute Of Technology' );
selbox.options[selbox.options.length] = new Option('Church Institute of Technology','Church Institute of Technology' );
selbox.options[selbox.options.length] = new Option('CMR College of Engineering and Technology','CMR College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('CVR College of Engineering','CVR College of Engineering' );
selbox.options[selbox.options.length] = new Option('CVSR College of Engineering','CVSR College of Engineering' );
selbox.options[selbox.options.length] = new Option('Chilkur Balaji Institute of Technology','Chilkur Balaji Institute of Technology' );
selbox.options[selbox.options.length] = new Option('Dr VRK Womens College of Engineering and Technology','Dr VRK Womens College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Farah College of Engineering and Technology','Farah College of Engineering and Technology ' );
selbox.options[selbox.options.length] = new Option('Hi-Point College of Engineering and Technology','Hi-Point College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('JB Institute of Engineering and Technology','JB Institute of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('St Peters Engineering College','St Peters Engineering College' );
selbox.options[selbox.options.length] = new Option('Sri K S Raju Inst. of Technology and Sciences','Sri K S Raju Inst. of Technology and Sciences' );
selbox.options[selbox.options.length] = new Option('Shaaz College of Engineering and Technology','Shaaz College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Shahjehan College of Engg.& Tech','Shahjehan College of Engg.& Tech' );
selbox.options[selbox.options.length] = new Option('Siddhartha Inst. of Engg. & Tech','Siddhartha Inst. of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Siddhartha Inst. of Tech. & Sciences','Siddhartha Inst. of Tech. & Sciences' );
selbox.options[selbox.options.length] = new Option('SLCs Inst. of Engg. & Tech','SLCs Inst. of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('SPR College of Engg. & Tech','SPR College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Sri Datta Inst. of Engg.& Science','Sri Datta Inst. of Engg.& Science' );
selbox.options[selbox.options.length] = new Option('Sri Indu College of Engg. & Tech','Sri Indu College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Sri K.S.Raju Inst. of Tech. and Sci','Sri K.S.Raju Inst. of Tech. and Sci' );
selbox.options[selbox.options.length] = new Option('Srinidhi Institute of Sci. and Tech','Srinidhi Institute of Sci. and Tech' );
selbox.options[selbox.options.length] = new Option('SS Institute of Tech','SS Institute of Tech' );
selbox.options[selbox.options.length] = new Option('St.Martins Engg. College','St.Martins Engg. College' );
selbox.options[selbox.options.length] = new Option('St.Peters Engineering College','St.Peters Engineering College' );
selbox.options[selbox.options.length] = new Option('SV College of Engg. & Tech','SV College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('The Younis Sultan College of Engg','The Younis Sultan College of Engg' );
selbox.options[selbox.options.length] = new Option('Tirumala Engineering College','Tirumala Engineering College' );
selbox.options[selbox.options.length] = new Option('Vardhaman College of Engg','Vardhaman College of Engg' );
selbox.options[selbox.options.length] = new Option('Vignana Bharati Institute of Tech','Vignana Bharati Institute of Tech' );
selbox.options[selbox.options.length] = new Option('Vignans Inst. of Management & Technology for Women','Vignans Inst. of Management & Technology for Women' );
selbox.options[selbox.options.length] = new Option('Vijaya Krishna Inst. of Tech. & Science','Vijaya Krishna Inst. of Tech. & Science' );
selbox.options[selbox.options.length] = new Option('Visvesvaraya College of Engg. & Tech','Visvesvaraya College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Vivekanandas Inst. of Engg. & Tech','Vivekanandas Inst. of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('VMR Inst. of Tech. & Mgt. Sciences','VMR Inst. of Tech. & Mgt. Sciences' );


}

if (chosen == "Srikakulam") 
{

selbox.options[selbox.options.length] = new Option('Sri Sivani College of Engineering','Sri Sivani College of Engineering' );
selbox.options[selbox.options.length] = new Option('Prajna Institute of Technology and Management','Sri Sivani College of Engineering' );
selbox.options[selbox.options.length] = new Option('Aditya Institute of Technology and Management','Aditya Institute of Technology and Management' );
selbox.options[selbox.options.length] = new Option('GMR Institute of Technology','GMR Institute of Technology' );
selbox.options[selbox.options.length] = new Option('Sarada Institute of Science and Technology and Management','Sarada Institute of Science and Technology and Management' );
selbox.options[selbox.options.length] = new Option('Sri Sivani College of Engg','Sri Sivani College of Engg' );
selbox.options[selbox.options.length] = new Option('Sri Vaishnavi College of Engg','Sri Vaishnavi College of Engg' );
selbox.options[selbox.options.length] = new Option('Sri Venkateswara College of Engg. & Tech.','Sri Venkateswara College of Engg. & Tech.' );


}


if (chosen == "Visakhapatnam") 
{

selbox.options[selbox.options.length] = new Option('Al-Aman College of Engineering','Al-Aman College of Engineering' );
selbox.options[selbox.options.length] = new Option('Al Ameer College of Engineering and Technology','Al Ameer College of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Anil Neerukonda Institute of Technology and Sciences','Anil Neerukonda Institute of Technology and Sciences ' );
selbox.options[selbox.options.length] = new Option('Avanthi Institute of Engineering and Technology','Avanthi Institute of Engineering and Technology' );
selbox.options[selbox.options.length] = new Option('Chaitanya Engineering College','Chaitanya Engineering College' );
selbox.options[selbox.options.length] = new Option('Gayatri Vidya Parishad College of Engineering','Gayatri Vidya Parishad College of Engineering' );
selbox.options[selbox.options.length] = new Option('GITAM University','GITAM University' );
selbox.options[selbox.options.length] = new Option('Pydah College of Engineering and Technology','Pydah College of Engineering and Technology ' );
selbox.options[selbox.options.length] = new Option('Raghu Engineering College','Raghu Engineering College' );
selbox.options[selbox.options.length] = new Option('Raghu Institute of Technology','Raghu Institute of Technology' );
selbox.options[selbox.options.length] = new Option('Sanketikha Vidya Engineering College','Sanketikha Vidya Engineering College' );
selbox.options[selbox.options.length] = new Option('Vignans Inst. of Engg. For Women','Vignans Inst. of Engg. For Women' );
selbox.options[selbox.options.length] = new Option('Vignan Institute of Information Technology','Vignan Institute of Information Technology' );
selbox.options[selbox.options.length] = new Option('Visakha Inst. of Engg. & Tech','Visakha Inst. of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Visakha Inst. of Tech. & Science ','Visakha Inst. of Tech. & Science ' );
selbox.options[selbox.options.length] = new Option('Viswanadha Institute of Tech. & Mngt','Viswanadha Institute of Tech. & Mngt' );
selbox.options[selbox.options.length] = new Option('Vizag Inst. of Tech.','Vizag Inst. of Tech.' );
selbox.options[selbox.options.length] = new Option('VITAM College of Engineering','VITAM College of Engineering' );

}


if (chosen == "Vizianagaram") 
{

selbox.options[selbox.options.length] = new Option('Avanthi Inst. of Engg and Tech','Avanthi Inst. of Engg and Tech' );
selbox.options[selbox.options.length] = new Option('Avanthis Research & Technological Academy','Avanthis Research & Technological Academy' );
selbox.options[selbox.options.length] = new Option('Coastal Inst. of Tech., & Mngt','Coastal Inst. of Tech., & Mngt' );
selbox.options[selbox.options.length] = new Option('Gokul Institute of Tech. & Sci','Gokul Institute of Tech. & Sci' );
selbox.options[selbox.options.length] = new Option('JNTU College of Engineering','JNTU College of Engineering' );
selbox.options[selbox.options.length] = new Option('Maharaj Vijayaram Gajapathiraj (MVGR) College of Engineerng','Maharaj Vijayaram Gajapathiraj (MVGR) College of Engineerng' );
selbox.options[selbox.options.length] = new Option('Praveenya Inst. of Marine Engg','Praveenya Inst. of Marine Engg' );
selbox.options[selbox.options.length] = new Option('Sri Gnaneswari Research & Technological Academy for Women','Sri Gnaneswari Research & Technological Academy for Women' );
selbox.options[selbox.options.length] = new Option('St.Theresa Inst. of Engg & Tech','St.Theresa Inst. of Engg & Tech' );
selbox.options[selbox.options.length] = new Option('Thandra Paparaya Inst. of Sci. & Tech','Thandra Paparaya Inst. of Sci. & Tech' );

}

if (chosen == "Warangal") 
{

selbox.options[selbox.options.length] = new Option('Aditya Institute of Technology and Management','Aditya Institute of Technology and Management' );
selbox.options[selbox.options.length] = new Option('kits warangal','kits warangal' );
selbox.options[selbox.options.length] = new Option('Balaji Institute of Technology and Science','Balaji Institute of Technology and Science' );
selbox.options[selbox.options.length] = new Option('Christ Jyoti Institue of Technology and Science','Christ Jyoti Institue of Technology and Science' );
selbox.options[selbox.options.length] = new Option('Kakatiya Institute of Technology and Science','Kakatiya Institute of Technology and Science' );
selbox.options[selbox.options.length] = new Option('National Institute of Technology','National Institute of Technology' );
selbox.options[selbox.options.length] = new Option('Vaagdevi College of Engineering','Vaagdevi College of Engineering' );
selbox.options[selbox.options.length] = new Option('SR Engineering College','SR Engineering College' );
selbox.options[selbox.options.length] = new Option('Ramappa Engineering College','Ramappa Engineering College' );
selbox.options[selbox.options.length] = new Option('Vidhya Bharathi Institute of Technology','Vidhya Bharathi Institute of Technology' );
selbox.options[selbox.options.length] = new Option('Jayamukhi Institute of Technology and Science','Jayamukhi Institute of Technology and Science' );
selbox.options[selbox.options.length] = new Option('Kakatiya Institute of Tech. & Sci','Kakatiya Institute of Tech. & Sci' );
selbox.options[selbox.options.length] = new Option('Ramappa Engineering College','Ramappa Engineering College' );
selbox.options[selbox.options.length] = new Option('SR Engineering College','SR Engineering College' );
selbox.options[selbox.options.length] = new Option('SVS Inst. of Tech','SVS Inst. of Tech' );
selbox.options[selbox.options.length] = new Option('Talla Padmavathi College of Engg','Talla Padmavathi College of Engg' );
selbox.options[selbox.options.length] = new Option('Vaagdevi College of Engineering','Vaagdevi College of Engineering' );
selbox.options[selbox.options.length] = new Option('Varadha Reddy College of Engg','Varadha Reddy College of Engg' );
selbox.options[selbox.options.length] = new Option('Vidya Bharathi Institute of Tech.','Vidya Bharathi Institute of Tech.' );



}


if (chosen == "West Godavari") 
{

selbox.options[selbox.options.length] = new Option('AKRG College of Engg. & Tech','AKRG College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Akula Sreeramulu (ASR) College of Engg','Akula Sreeramulu (ASR) College of Engg' );
selbox.options[selbox.options.length] = new Option('Bhimavaram Inst. of Engg. & Tech','Bhimavaram Inst. of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Eluru College of Engg. & Tech','Eluru College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Grandhi Varalakshmi Venkatarao Inst. of Tech','Grandhi Varalakshmi Venkatarao Inst. of Tech' );
selbox.options[selbox.options.length] = new Option('Jogaiah Institute of Tech. and Science','Jogaiah Institute of Tech. and Science' );
selbox.options[selbox.options.length] = new Option('Mentey Pedmanabham College of Engg. & Tech','Mentey Pedmanabham College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Nova College of Engg & Tech ','Nova College of Engg & Tech ' );
selbox.options[selbox.options.length] = new Option('Novas Inst. of Tech. for Women','Novas Inst. of Tech. for Women' );
selbox.options[selbox.options.length] = new Option('Ramachandra College of Engg','Ramachandra College of Engg' );
selbox.options[selbox.options.length] = new Option('Sagi Ramakrishna Raju (SRKR) Engg','Sagi Ramakrishna Raju (SRKR) Engg' );
selbox.options[selbox.options.length] = new Option('Sasi Institute of Tech. & Engg','Sasi Institute of Tech. & Engg' );
selbox.options[selbox.options.length] = new Option('Sir CR Reddy College of Engg','Sir CR Reddy College of Engg' );
selbox.options[selbox.options.length] = new Option('Sri Vasavi Engineering College','Sri Vasavi Engineering College' );
selbox.options[selbox.options.length] = new Option('Sri Vasavi Inst. of Engg. & Tech','Sri Vasavi Inst. of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Sri Vatsavi Krishnam Raju College of Engg. & Tech','Sri Vatsavi Krishnam Raju College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Sri Venkateswara Inst. of Science & Information Tech','Sri Venkateswara Inst. of Science & Information Tech' );
selbox.options[selbox.options.length] = new Option('Sri Vishnu Engg. College for Women','Sri Vishnu Engg. College for Women' );
selbox.options[selbox.options.length] = new Option('Swarnandhra College of Engg. & Tech','Swarnandhra College of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Swarnandhra Instt. of Engg. & Tech','Swarnandhra Instt. of Engg. & Tech' );
selbox.options[selbox.options.length] = new Option('Vishnu Inst. of Tech','Vishnu Inst. of Tech' );
selbox.options[selbox.options.length] = new Option('West Godavari Inst. of Science & Engg','West Godavari Inst. of Science & Engg' );


}

//Tamil Nadu

if (chosen == "COIMBATORE") 
{
  
  selbox.options[selbox.options.length] = new Option('Kumaraguru College Of Technology','Kumaraguru College Of Technology');
  selbox.options[selbox.options.length] = new Option('P.S.G. College Of Technology','P.S.G. College Of Technology ');
  selbox.options[selbox.options.length] = new Option('Park College Of Engg. & Tech','Park College Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('Prithvi Engineering College','Prithvi Engineering College ');
  selbox.options[selbox.options.length] = new Option('Sri Ramakrishna Institute Of Technology','Sri Ramakrishna Institute Of Technology');
  selbox.options[selbox.options.length] = new Option('Amrita Institute Of Tech. & Science','Amrita Institute Of Tech. & Science');
  selbox.options[selbox.options.length] = new Option('Karunya Institute Of Tech','Karunya Institute Of Tech');
  selbox.options[selbox.options.length] = new Option('Coimbatore Institute Of Engg. & Information Tech','Coimbatore Institute Of Engg. & Information Tech');
  selbox.options[selbox.options.length] = new Option('Government College Of Tech','Government College Of Tech');
  selbox.options[selbox.options.length] = new Option('Maharaja Engineering College','Maharaja Engineering College');
  selbox.options[selbox.options.length] = new Option('Sri Krishna College Of Engg. & Tech','Sri Krishna College Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('St. Marys Engineering College','St. Marys Engineering College');
  selbox.options[selbox.options.length] = new Option('c Institute For Home Science & Higher Education For Women','c Institute For Home Science & Higher Education For Women');
  selbox.options[selbox.options.length] = new Option('Bannari Amman Institute Of Tech','Bannari Amman Institute Of Tech');

 }
if (chosen == "KANCHIPURAM")  
{
  selbox.options[selbox.options.length] = new Option('Lord Venkateswara Engg. College','Lord Venkateswara Engg. College');
  selbox.options[selbox.options.length] = new Option('Madras Institute Of Technology','Madras Institute Of Technology');
  selbox.options[selbox.options.length] = new Option('Maruthi Institute Of Engg. & Tech','Maruthi Institute Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('Pallavan College Of Engineering','Pallavan College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Rajalakshmi Engineering College','Rajalakshmi Engineering College');
  selbox.options[selbox.options.length] = new Option('Ranipettai Engineering College','Ranipettai Engineering College');
  selbox.options[selbox.options.length] = new Option('Royal College Of Engg. & Tech','Royal College Of Engg. & Tech ');
  selbox.options[selbox.options.length] = new Option('Sakthi Mariamman Engg. College','Sakthi Mariamman Engg. College ');
  selbox.options[selbox.options.length] = new Option('Shree Motilal Kanhaiyalal Fomra Institute Of Tech','Shree Motilal Kanhaiyalal Fomra Institute Of Tech');
  selbox.options[selbox.options.length] = new Option('Sri Sivasubramaniya Nadar College Of EnggNadar College Of Engg','Sri Sivasubramaniya Nadar College Of EnggNadar College Of Engg');
  selbox.options[selbox.options.length] = new Option('Thangavelu Engineering College',' Thangavelu Engineering College');
  selbox.options[selbox.options.length] = new Option('Balaji College Of Engg','Balaji College Of Engg');
  selbox.options[selbox.options.length] = new Option('Bharat Institute Of Science & Tech','Bharat Institute Of Science & Tech');
  selbox.options[selbox.options.length] = new Option('Dhanalakshmi College Of Engg','Dhanalakshmi College Of Engg');
  selbox.options[selbox.options.length] = new Option('Hindustan College Of Engineering','Hindustan College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Jeppiar Engineering College','Jeppiar Engineering College');
  selbox.options[selbox.options.length] = new Option('K.C.G. College Of Technology','K.C.G. College Of Technology');
  selbox.options[selbox.options.length] = new Option('M.N.M. Jain Engineering College','M.N.M. Jain Engineering College');
  selbox.options[selbox.options.length] = new Option('Maamallan Institute Of Tech','Maamallan Institute Of Tech');
  selbox.options[selbox.options.length] = new Option('Meenakshi College Of Engg','Meenakshi College Of Engg');
  selbox.options[selbox.options.length] = new Option('Mohammed Sathak A.J. College Of Engg','Mohammed Sathak A.J. College Of Engg');
  selbox.options[selbox.options.length] = new Option('P.T. Lee Chengalvaraya Naicker College Of Engg. & Tech','P.T. Lee Chengalvaraya Naicker College Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('Perumal Sami Rishi Engg. College','Perumal Sami Rishi Engg. College');
  selbox.options[selbox.options.length] = new Option('S.R.M. Engineering College','S.R.M. Engineering College');
  selbox.options[selbox.options.length] = new Option('Sathyabhama Engineering College ','Sathyabhama Engineering College');
  selbox.options[selbox.options.length] = new Option('Shri Andal Alagar College Of Engg','Shri Andal Alagar College Of Engg');
  selbox.options[selbox.options.length] = new Option('Sri Lakshmi Ammal Engg. College','Sri Lakshmi Ammal Engg. College');
  selbox.options[selbox.options.length] = new Option('Sri Padmavathi College Of Engineeering','Sri Padmavathi College Of Engineeering')
  selbox.options[selbox.options.length] = new Option('Sri Ramanujar Engineering College','Sri Ramanujar Engineering College');
  selbox.options[selbox.options.length] = new Option('St. Josephs College Of Engineering','St. Josephs College Of Engineering')
  selbox.options[selbox.options.length] = new Option('Tagore Engineering College','Tagore Engineering College');
  selbox.options[selbox.options.length] = new Option('Thirumalai Engineering College','Thirumalai Engineering College ');
  selbox.options[selbox.options.length] = new Option('Valliammai Engineering College','Valliammai Engineering College');
  selbox.options[selbox.options.length] = new Option('Adhiparasakthi Engineering College','Adhiparasakthi Engineering College');
  selbox.options[selbox.options.length] = new Option('Anand Institute Of Higher Technology','Anand Institute Of Higher Technology');
  selbox.options[selbox.options.length] = new Option('Kalsar College Of Engineering','Kalsar College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Karpaga Vinayaga College Of Engg. & Tech','Karpaga Vinayaga College Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('Mariana Engg. College','Mariana Engg. College');
  selbox.options[selbox.options.length] = new Option('P.B. College Of Engineering','P.B. College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Panimalar Engineering College','Panimalar Engineering College ');
  selbox.options[selbox.options.length] = new Option('Prince Shri Venkateswara Padmavathy Engg. College','Prince Shri Venkateswara Padmavathy Engg. College');
  selbox.options[selbox.options.length] = new Option('Rajiv Gandhi College Of Engg','Rajiv Gandhi College Of Engg');   
  selbox.options[selbox.options.length] = new Option('S.M. Khader Engineering College','S.M. Khader Engineering College');
  selbox.options[selbox.options.length] = new Option('S.R.R. Engineering College','S.R.R. Engineering College');
  selbox.options[selbox.options.length] = new Option('Sakthi Engg. College','Sakthi Engg. College ');
  selbox.options[selbox.options.length] = new Option('Saveetha Engg. College','Saveetha Engg. College');
  selbox.options[selbox.options.length] = new Option('Sri Sairam Engineering College','Sri Sairam Engineering College');
  selbox.options[selbox.options.length] = new Option('Sri Venkateswara College Of Engg','Sri Venkateswara College Of Engg');
  selbox.options[selbox.options.length] = new Option('Srinivasa Institute Of Engg. & Tech','Srinivasa Institute Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('Udayam Engineering College','Udayam Engineering College');
}  

if (chosen == "TIRUCHCHIRAPPALLI") 
{
  
  selbox.options[selbox.options.length] = new Option('M.I.E.T. Engineering College','M.I.E.T. Engineering College');
  selbox.options[selbox.options.length] = new Option('Mookambigai College Of Engineering','Mookambigai College Of Engineering ');
  selbox.options[selbox.options.length] = new Option('Saranathan College Of Engineering','Saranathan College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Trichy Engineering College','Trichy Engineering College');
  selbox.options[selbox.options.length] = new Option('Bharathidasan Institute Of Engg. & Tech','Bharathidasan Institute Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('J.J College Of Engg. & Tech','J.J College Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('National Institute Of Technology','National Institute Of Technology');
  selbox.options[selbox.options.length] = new Option('Oxford Engineering College','Oxford Engineering College');
  selbox.options[selbox.options.length] = new Option('M.A.M. College Of Engineering','M.A.M. College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Shri Angala Amman College Of Engg. & Tech','Shri Angala Amman College Of Engg. & Tech');
}

if (chosen == "ERODE") 
{  
  selbox.options[selbox.options.length] = new Option('M.P. Nachimuthu M. Jaganathan Engg. College','M.P. Nachimuthu M. Jaganathan Engg. College');
  selbox.options[selbox.options.length] = new Option('Sasurie College Of Engineering','Sasurie College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Kongu Engineering College','Kongu Engineering College');
}

if (chosen == "SIVAGANGA") 
{  
  selbox.options[selbox.options.length] = new Option('Mepco Schlenk Engineering College','Mepco Schlenk Engineering College');
  selbox.options[selbox.options.length] = new Option('St. Michael College Of Engg. & Tech','St. Michael College Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('Alagappa Chettiar College Of Engg. & Tech','Alagappa Chettiar College Of Engg. & Tech');
}
 
if (chosen == "TIRUNELVELI") 
{ 
  selbox.options[selbox.options.length] = new Option('National Engineering College','National Engineering College');
  selbox.options[selbox.options.length] = new Option('P.S.N. College Of Engg. & Tech','P.S.N. College Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('S.Veeraswamy Chettiar College Of Engg','S.Veeraswamy Chettiar College Of Engg');
  selbox.options[selbox.options.length] = new Option('Pet College Of Engineering','Pet College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Sardar Raja College Of Engineering','Sardar Raja College Of Engineering');
}

if (chosen == "TIRUVALLUR") 
{
  selbox.options[selbox.options.length] = new Option('R.M.K. Engineering College','R.M.K. Engineering College');
  selbox.options[selbox.options.length] = new Option('Sri Venkateswara College Of Engg. & Tech','Sri Venkateswara College Of Engg. & Tech');
  selbox.options[selbox.options.length] = new Option('Sriram Engineering College','Sriram Engineering College');
  selbox.options[selbox.options.length] = new Option('E.V.P. Engineering College','E.V.P. Engineering College');
  selbox.options[selbox.options.length] = new Option('Magna College Of Engineering','Magna College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Prathyusha Engineering College','Prathyusha Engineering College');
  selbox.options[selbox.options.length] = new Option('Rajarajeswari Engineering College','Rajarajeswari Engineering College');
  selbox.options[selbox.options.length] = new Option('S.K.R. Engineering College','S.K.R. Engineering College');
  selbox.options[selbox.options.length] = new Option('Santhosha Engg. College','Santhosha Engg. College');
  selbox.options[selbox.options.length] = new Option('Sri Venkateswara Instt. Of Science & Tech','Sri Venkateswara Instt. Of Science & Tech');
  selbox.options[selbox.options.length] = new Option('St. Peters Engineering College','St. Peters Engineering College');
  selbox.options[selbox.options.length] = new Option('Velammal Engineering College','Velammal Engineering College ');
  selbox.options[selbox.options.length] = new Option('Jaya Engineering College','Jaya Engineering College');
  selbox.options[selbox.options.length] = new Option('Madha Engineering College','Madha Engineering College');
  selbox.options[selbox.options.length] = new Option('R.M.D. Engineering College','R.M.D. Engineering College');
  selbox.options[selbox.options.length] = new Option('S.A. Engineering College','S.A. Engineering College');
  selbox.options[selbox.options.length] = new Option('Sri Muthukumaran Institute Of Tech','Sri Muthukumaran Institute Of Tech');
  selbox.options[selbox.options.length] = new Option('Sri Rangarajan Sakunthala College Of Multimedia','Sri Rangarajan Sakunthala College Of Multimedia');
  selbox.options[selbox.options.length] = new Option('Vel Tech','Vel Tech');
}
 
if (chosen == "TIRUVANNAMALAI") 
{
  selbox.options[selbox.options.length] = new Option('S.K.P. Engineering College','S.K.P. Engineering College');
  selbox.options[selbox.options.length] = new Option('Kamban Engg. College','Kamban Engg. College');
  selbox.options[selbox.options.length] = new Option('Thiruvalluvar College Of Engg. & Tech','Thiruvalluvar College Of Engg. & Tech');
}

  if (chosen == "VIRUDUNAGAR") 
{
  selbox.options[selbox.options.length] = new Option('V.P. Muthiah Pillai Meenakshi Ammal Engg. College For Women','V.P. Muthiah Pillai Meenakshi Ammal Engg. College For Women');
  selbox.options[selbox.options.length] = new Option('Sree Sowdambika College Of Engineering','Sree Sowdambika College Of Engineering ');
  selbox.options[selbox.options.length] = new Option('P.S.R. Engineering College','P.S.R. Engineering College');
}

  if (chosen == "VELLORE") 
{
  selbox.options[selbox.options.length] = new Option('Ranipettai Engineering College','Ranipettai Engineering College ');
  selbox.options[selbox.options.length] = new Option('Sri Balaji Chockalingam Engg. College','Sri Balaji Chockalingam Engg. College');
  selbox.options[selbox.options.length] = new Option('Sri Nandanam College Of Engg.& Tech','Sri Nandanam College Of Engg.& Tech');
  selbox.options[selbox.options.length] = new Option('Adhiparasakthi College Of Engineering','Adhiparasakthi College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Ganadipatty Tulsis Engineering College','Ganadipatty Tulsis Engineering College ');
  selbox.options[selbox.options.length] = new Option('Thanthai Periyar Govt. Institute ','Thanthai Periyar Govt. Institute ');
  selbox.options[selbox.options.length] = new Option('C. Abdul Hakeem College Of Engg. & ','C. Abdul Hakeem College Of Engg. &  ');
  selbox.options[selbox.options.length] = new Option('G.G.R. College Of Engg.','G.G.R. College Of Engg.');
  selbox.options[selbox.options.length] = new Option('Vellore Institute Of Tech.','Vellore Institute Of Tech.');
 }

if (chosen == "SALEM")
{
  selbox.options[selbox.options.length] = new Option('Sona College Of Tech',' Sona College Of Tech');
  selbox.options[selbox.options.length] = new Option('Vinayaka Missions Kirupanandha ','Vinayaka Missions Kirupanandha');
}


if(chosen == "Pondicherry")
{
  selbox.options[selbox.options.length] = new Option('Bharathiyar College Of Engg. & Tech','Bharathiyar College Of Engg. & Tech')
  selbox.options[selbox.options.length] = new Option('Shri Rajiv Gandhi Institute Of Tech','Shri Rajiv Gandhi Institute Of Tech')
  selbox.options[selbox.options.length] = new Option('Pondicherry Engg. College','Pondicherry Engg. College')
  selbox.options[selbox.options.length] = new Option('Regency Institute Of Technology','Regency Institute Of Technology')
}
if(chosen == "CHENNAI")
{
  selbox.options[selbox.options.length] = new Option('T.J. Institute Of Tech','T.J. Institute Of Tech');
  selbox.options[selbox.options.length] = new Option('Vel Sri Rangarajan Sakunthala High Tech., College','Vel Sri Rangarajan Sakunthala High Tech., College');
  selbox.options[selbox.options.length] = new Option('College Of Engineering Anna University','College Of Engineering Anna University,');
  selbox.options[selbox.options.length] = new Option('Aalim Mohammed Salegh College Of Engg','Aalim Mohammed Salegh College Of Engg');
  selbox.options[selbox.options.length] = new Option('Meenakshi Sundararajan Engg','Meenakshi Sundararajan Engg');
}

if(chosen =="MADURAI")
{
  selbox.options[selbox.options.length] = new Option('K.L.N. College Of Engineering','K.L.N. College Of Engineering');
  selbox.options[selbox.options.length] = new Option('P.T.R. College Of Engg. & Tech.,','P.T.R. College Of Engg. & Tech.,');
}
if(chosen == "PUDUKKOTTAI")
{
  selbox.options[selbox.options.length] = new Option('Kings College Of Engg.,','Kings College Of Engg.,');
  selbox.options[selbox.options.length] = new Option('Sudharsan Engineering College','Sudharsan Engineering College');
}
if(chosen == "NAGAPATTINAM")
{
  selbox.options[selbox.options.length] = new Option('Mohammed Sathak Engineering ','Mohammed Sathak Engineering ');
}

if(chosen == "TIRUNELVELI")
{
  selbox.options[selbox.options.length] = new Option('National College Of Engineering','National College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Pet College Of Engineering','Pet College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Sardar Raja College Of Engineering','Sardar Raja College Of Engineering');
  selbox.options[selbox.options.length] = new Option('P.S.N. College Of Engg. & Tech.,','P.S.N. College Of Engg. & Tech.,');
  selbox.options[selbox.options.length] = new Option('S. Veeraswamy Chettiar College Of Engg','S. Veeraswamy Chettiar College Of Engg');
  selbox.options[selbox.options.length] = new Option('Government College Of Engg.','Government College Of Engg. ');
}
if(chosen == "NAMAKKAL")
{
  selbox.options[selbox.options.length] = new Option('S.S.M. College Of Engineering','S.S.M. College Of Engineering');
  selbox.options[selbox.options.length] = new Option('K.S. Rangaswamy College Of Tech','K.S. Rangaswamy College Of Tech');
  selbox.options[selbox.options.length] = new Option('R.R. Engineering College','R.R. Engineering College');
}
if(chosen == "CUDDALORE")
{
  selbox.options[selbox.options.length] = new Option('Annamalai University','Annamalai University');
}
if(chosen == "KARUR")
{
  selbox.options[selbox.options.length] = new Option('M. Kumarasamy College Of Engg','M. Kumarasamy College Of Engg');
}
if(chosen == "THANJAVUR")
{
  selbox.options[selbox.options.length] = new Option('Shanmuga Arts, Science, Tech ','Shanmuga Arts, Science, Tech ');
  selbox.options[selbox.options.length] = new Option('P.R. Engineering College','P.R. Engineering College');
}
if(chosen ==" DINDIGUL")
{
  selbox.options[selbox.options.length] = new Option('Sri Subramanya College Of Engg','Sri Subramanya College Of Engg');
  selbox.options[selbox.options.length] = new Option('P.S.N.A. College Of Engg. & Tech.,','P.S.N.A. College Of Engg. & Tech.,');
}

if(chosen == "KANNIYAKUMARI")
{
  selbox.options[selbox.options.length] = new Option('Udaya School Of Engineering','Udaya School Of Engineering');
  selbox.options[selbox.options.length] = new Option('St. Xaviers Catholic College Of Engineering,','St. Xaviers Catholic College Of Engineering,');
}
if(chosen == "DHARMAPURI")
{

  selbox.options[selbox.options.length] = new Option('Er. Perumal Manimekalai College Of Engineering','Er. Perumal Manimekalai College Of Engineering');
  selbox.options[selbox.options.length] = new Option('Sapthagiri College Of Engineering,','Sapthagiri College Of Engineering,');
}
  
//karnataka



if (chosen == "Belgaum") 
{

selbox.options[selbox.options.length] = new Option('Hira Sugar Institute Of Technology','Hira Sugar Institute Of Technology');
selbox.options[selbox.options.length] = new Option('K.L.E.S College Of Engineering & Technology ','K.L.E.S College Of Engineering & Technology');
selbox.options[selbox.options.length] = new Option('Maratha Mandals Engineering College','Maratha Mandals Engineering College');


}

if (chosen == "Bellary") 
{

selbox.options[selbox.options.length] = new Option('Bellary Engineering College','Bellary Engineering College');
selbox.options[selbox.options.length] = new Option('Vijayanagar Engineering College ','Vijayanagar Engineering College');


}

if (chosen == "Bidar") 
{

selbox.options[selbox.options.length] = new Option('Basavakalyana Engineering College','Basavakalyana Engineering College');
selbox.options[selbox.options.length] = new Option('Guru Nanak Dev Engineering College','Guru Nanak Dev Engineering College');
selbox.options[selbox.options.length] = new Option('Rural Engineering College','Rural Engineering College');



}
if (chosen == "Bijapur") 
{

selbox.options[selbox.options.length] = new Option('B.L.D.E.A Vachana Pitamaha Dr. P.G.Halakatti College Of Engineering & Technology','B.L.D.E.A Vachana Pitamaha Dr. P.G.Halakatti College');
selbox.options[selbox.options.length] = new Option('Secab Institute Of Engineering & Technology','Secab Institute Of Engineering & Technology');




}

if (chosen == "Dharwad") 
{

selbox.options[selbox.options.length] = new Option('B.V.B College Of Engineering & Technology','B.V.B College Of Engineering & Technology');
selbox.options[selbox.options.length] = new Option('Rural College Of Engineering & Technology','Rural College Of Engineering & Technology');
selbox.options[selbox.options.length] = new Option('S.D.M College Of Engineering & Technology','S.D.M College Of Engineering & Technology');

}

if (chosen == "Gulbarga") 
{

selbox.options[selbox.options.length] = new Option('K.C.T. Engineering College','K.C.T. Engineering College');
selbox.options[selbox.options.length] = new Option('Khaja Banda Nawaz College Of Engineering','Khaja Banda Nawaz College Of Engineering');
selbox.options[selbox.options.length] = new Option('P.D.A College Of Engineering','P.D.A College Of Engineering');
selbox.options[selbox.options.length] = new Option('Appa Institute Of Engineering & Technology','Appa Institute Of Engineering & Technology');

}

if (chosen == "Hassan") 
{

selbox.options[selbox.options.length] = new Option('Bahubali College Of Engineering','Bahubali College Of Engineering');
selbox.options[selbox.options.length] = new Option('Malnad College Of Engineering','Malnad College Of Engineering');

}


if (chosen == "Haveri") 
{

selbox.options[selbox.options.length] = new Option('S.T.J Institute Of Technology','S.T.J Institute Of Technology');


}

if (chosen == "Kolar") 
{

selbox.options[selbox.options.length] = new Option('S.J.C Institute Of Technology','S.J.C Institute Of Technology');


}

if (chosen == "Mandya") 
{

selbox.options[selbox.options.length] = new Option('P.E.S College Of Engineering','P.E.S College Of Engineering');


}
if (chosen == "Mangalore") 
{

selbox.options[selbox.options.length] = new Option('P.A. College Of Engineering','P.A. College Of Engineering');
selbox.options[selbox.options.length] = new Option('St. Joseph Engineering College','St. Joseph Engineering College');

}

if (chosen == "Mysore") 
{

selbox.options[selbox.options.length] = new Option('G.S.S.S Institute Of Engineering & Technology','G.S.S.S Institute Of Engineering & Technology');
selbox.options[selbox.options.length] = new Option('R.V.College Of Engineering','R.V.College Of Engineering');
selbox.options[selbox.options.length] = new Option('The National Institute Of Engineering','The National Institute Of Engineering');
selbox.options[selbox.options.length] = new Option('Vidya Vikas Institute Of Engineering & Technology','Vidya Vikas Institute Of Engineering & Technology');
selbox.options[selbox.options.length] = new Option('Sir Jayachamarajendra College Of Engineering ','Sir Jayachamarajendra College Of Engineering ');
selbox.options[selbox.options.length] = new Option('The National Institute Of Engineering','The National Institute Of Engineering');

}



if (chosen == "Shimoga") 
{

selbox.options[selbox.options.length] = new Option('J.N.N. College Of Engineering','J.N.N. College Of Engineering');

}

if (chosen == "Tumkur") 
{

selbox.options[selbox.options.length] = new Option('Channa Basaveshwara Institute Of Technology','Channa Basaveshwara Institute Of Technology');
selbox.options[selbox.options.length] = new Option('H.M.S Institute Of Technology ','H.M.S Institute Of Technology');
selbox.options[selbox.options.length] = new Option('Shridevi Institute Of Engineering & Technology','Shridevi Institute Of Engineering & Technology');
selbox.options[selbox.options.length] = new Option('Siddaganga Institute Of Technology ','Siddaganga Institute Of Technology');
selbox.options[selbox.options.length] = new Option('Sri Siddhartha Institute Of Technology','Sri Siddhartha Institute Of Technology');


}

if (chosen == "Udupi") 
{

selbox.options[selbox.options.length] = new Option('Manipal Institute Of Technology','Manipal Institute Of Technology');
selbox.options[selbox.options.length] = new Option('Moodalakatte Institute Of Technology ','Moodalakatte Institute Of Technology');
selbox.options[selbox.options.length] = new Option('Nmam Institute Of Technology','Nmam Institute Of Technology');


}

if (chosen == "Uttara Kannada") 
{

selbox.options[selbox.options.length] = new Option("Karnataka Law Society's Viswanathrao","Karnataka Law Society's Viswanathrao");


}
if (chosen == "Raichur") 
{

selbox.options[selbox.options.length] = new Option("Hke's Sln College Of Engineering","Hke's Sln College Of Engineering");

}


}