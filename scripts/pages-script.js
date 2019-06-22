
var foldername=new Array("from-new-works-2013","Fashion-Design-Autumn-2012","La-Turo-de-Babel-Sweden-2012","The-body-of-my-city(2)-2012","The-unique-day-2011","Rumi-collection-2011","Syahmashq-2008-09","The-body-of-my-city(1)-2008","graphic-design","Persian-lyriv-for-the-PACE","Calligrapher-at-Works(1)-Ultimate-Situationl","Calligrapher-at-Works(2)-Modern-Jail-Ballads","Jail-ballads-Emadolkotab");

var pic=new Array("FN","AF","AE","AP","AA","AR","AS","AB","G","PS","CAW","CAM","J");
var x=0;
var number;

function initial(e)
{
	number=e;
	document.getElementById("artwork-span-holder").innerHTML="1/"+number;
}

function changepic(e,num)
{
	e=e*(number-2)+1;
	x=((x+e)%number);
	
	if(num==8)
	 document.getElementById("picture-artwork-holder").innerHTML="<img border='0' src='../images/"+foldername[num]+"/"+pic[num]+""+x+".jpg'>";
    else
	document.getElementById("picture-artwork-holder").innerHTML="<img border='0' src='../images/"+foldername[num]+"/"+pic[num]+""+x+".jpg'>";
	document.getElementById("artwork-span-holder").innerHTML=(x+1)+"/"+number;
}