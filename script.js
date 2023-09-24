function temp(){
	var far=parseFloat(document.getElementById("f").value);
	var c=parseFloat(document.getElementById("c").value);
	if(!isNaN(c)){

	
	var f=(c*9/5)+32;
	document.getElementById("f").value=f;
}

else if(!isNaN(far)){

	var f=(far-32)*5/9;
	document.getElementById("c").value=f;

}
else{
			alert("please enter valid temprature");
		document.getElementById("c").focus();
}
}
function weight(){
	var kg=parseFloat(document.getElementById("kg").value);
	var lbs=parseFloat(document.getElementById("lbs").value);
	if(!isNaN(kg)){


	var f=kg*2.204;
	document.getElementById("lbs").value=f;
}

else if(!isNaN(lbs)){



	var f=lbs/2.204;
	document.getElementById("kg").value=f;

}
else{
		alert("please enter valid value");
		document.getElementById("kg").focus();
}
}

function distance(){
	var km=parseFloat(document.getElementById("km").value);
	var pd=parseFloat(document.getElementById("pd").value);
	if(!isNaN(km)){


	var f=km/1.609;
	document.getElementById("pd").value=f;
}

else if(!isNaN(pd)){



	var f=pd*1.609;
	document.getElementById("km").value=f;

}
else{
		alert("please enter valid value");
		document.getElementById("km").focus();
}
}

