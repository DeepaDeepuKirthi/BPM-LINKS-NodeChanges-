

function validateform(){
	var name=document.getElementById("name").value;
		var pattern = /^[a-zA-Z0-9 ]*$/;
		if (name.match(pattern)) {

		}

		else {
						text = "*enter the alphanumeric";
					document.getElementById("sp1").innerHTML = text;
					 return false;	
		}

	
var code1=document.getElementById("code").value;
		var pattern = /^[3-8]{1}[0-9]{11}$/;
		if (code1.match(pattern)) {
			var lastDigit = code1 % 10;
			var digits = Math.floor(code1 / 10);
			var elevenDigits = digits % Math.pow(10, 10);
			var numList = [];
			for (var i = 0; elevenDigits > 0; i++) {

				numList[i] = elevenDigits % 10;
				elevenDigits = Math.floor(elevenDigits / 10);

			}
			var sum = 0;
			for (var j = 0; j < numList.length; j++) {
				sum = sum + numList[j];
			}
			if (sum >= 10) {
				var sum0 = sum % 10;
				var sum1 = Math.floor(sum / 10);
				sum = sum0 + sum1;
			}
			if (sum == lastDigit) { 
			} else {
			text="* Invalid BarCode";
				document.getElementById("sp2").innerHTML = text;
		
   return false;
			}
		} else {
	text=" *Length must be 12 digits and must start with 3-8 range";
			document.getElementById("sp2").innerHTML = text;
	return false;

}

var data=document.getElementById("price").value;
		var pattern = /^[0-9]+(\.[0-9]{1,2})?$/;
		if (data.match(pattern)) {

		} else {
		text="* Please Enter valid number";
			document.getElementById("sp3").innerHTML = text ;
return false;			

		} 

return true;
}
function myname(){
	var name=document.getElementById("name").value;
	var pattern = /^[a-zA-Z0-9 ]*$/;
	if (name.match(pattern)) {

	}

	else { 
					text = " *enter the alphanumeric";
				document.getElementById("sp1").innerHTML = text;
	}	
	
}
function myBarCode(){
	var code1=document.getElementById("code").value;
	var pattern = /^[3-8]{1}[0-9]{11}$/;
	if (code1.match(pattern)) {
		var lastDigit = code1 % 10;
		var digits = Math.floor(code1 / 10);
		var elevenDigits = digits % Math.pow(10, 10);
		var numList = [];
		for (var i = 0; elevenDigits > 0; i++) {

			numList[i] = elevenDigits % 10;
			elevenDigits = Math.floor(elevenDigits / 10);

		}
		var sum = 0;
		for (var j = 0; j < numList.length; j++) {
			sum = sum + numList[j];
		}
		if (sum >= 10) {
			var sum0 = sum % 10;
			var sum1 = Math.floor(sum / 10);
			sum = sum0 + sum1;
		}
		if (sum == lastDigit) {

		} else {
		text="* Invalid BarCode";
			document.getElementById("sp2").innerHTML = text;
	
		}
	} else {
text=" *Length must be 12 digits and must start with 3-8 range";
		document.getElementById("sp2").innerHTML = text;

}
	
}
function myPrice(){
	
	var data=document.getElementById("price").value;
	var pattern = /^[0-9]+(\.[0-9]{1,2})?$/;
	if (data.match(pattern)) {

	} else {
	text="* Please Enter valid number";
		document.getElementById("sp3").innerHTML = text ;
		

	}

	
}
function taxValidation() {

	var tax;
var priceRate=document.getElementById("price").value;
var productType=document.getElementById("type").value;
if(productType=="food")
	{
	tax=10*priceRate/100;
	 }
	 else if(productType=="cosmetics")
	{
	tax=5*priceRate/100;
	
	}
else if(productType=="house")
{
tax=18*priceRate/100;

}
else{
	tax=5*priceRate/100;
	
}

var priceTax=document.getElementById('priceTax');
priceTax.value=tax;

}