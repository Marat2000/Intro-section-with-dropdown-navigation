var features=document.getElementsByClassName('featuresbutton')[0];
var company=document.getElementsByClassName('companybutton')[0];
var nav=document.getElementsByTagName('ul');
var arrow=document.getElementsByClassName('arrow');
var main=document.getElementsByTagName('main')[0];
var menuopen=document.getElementById('menubutton');
var menuclose=document.getElementById('menuclose');
var menu=document.getElementById('menubar');
var screenWidth=screen.width;


window.onresize=function(){
	if(screenWidth!=screen.width)
	location.reload()};




nav[0].style.display="none";
nav[1].style.display="none";

	if(screen.width<=800){
menu.style.transform="translateY(10%)";
				menu.style.height="0%";
				menu.style.marginTop="-100%";}


{
	
	main.onclick=()=>
	{
		nav[0].style.display="none";
		arrow[0].style.transform="rotate(0deg)";
		nav[1].style.display="none";
		arrow[1].style.transform="rotate(0deg)";
		if(screen.width<=800){
				menu.style.transform="translateY(10%)";
				menu.style.height="0%";
				menu.style.marginTop="-100%";
				menu.style.transform="translateX(10rem)";
				menuopen.style.display="inline";
				menuclose.style.display="none";
				}
	}
	
	
	
	
	company.addEventListener('click', function a(){
	
	if(nav[1].style.display=="none")
	{
		console.log(nav[1]);
		nav[1].style.display="inline-block";
if(screen.width>800)
		nav[1].style.position="absolute";
else
		nav[1].style.position="relative";
		arrow[1].style.transform="rotate(180deg)";
	
		
		
	
	}
	else
	{
		
		nav[1].style.display="none";
		arrow[1].style.transform="rotate(0deg)";
	}
	
	
	
	});
	
	
	features.addEventListener('click', function a(){
	
	if(nav[0].style.display=="none")
	{
		console.log(nav[0]);
		nav[0].style.display="inline-block";
		if(screen.width>800)
		nav[0].style.position="absolute";
else
		nav[0].style.position="relative";
		arrow[0].style.transform="rotate(180deg)";
	
	}
	else
	{
		
		nav[0].style.display="none";
		arrow[0].style.transform="rotate(0deg)";
	}
	
	
	
	});
	
	}


  /***********************************************/
 /*********** MENU BAR **************************/
/***********************************************/


	menuopen.onclick=()=>
	{
	menu.style.display="grid";
	menu.style.height="101vh";
	menu.style.marginTop="-3rem";
	menu.style.width="60%";
	menu.style.marginLeft="40%";
	menu.style.transform="translateX(-8px) translateX(-1rem)";
	menuopen.style.display="none";
	menuclose.style.display="inline";
	}


menuclose.onclick=()=>
	{
				menu.style.transform="translateY(10%)";
				menu.style.height="0%";
				menu.style.marginTop="-100%";
				menu.style.transform="translateX(10rem)";
				menuopen.style.display="inline";
				menuclose.style.display="none";


	}


