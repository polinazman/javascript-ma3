//Use RegEx to validate form
document.getElementById("submit").addEventListener("click", function(){
	var inputFields = document.getElementsByTagName("input");

	for(var i=0; i < inputFields.length; i++){
		var myInput = inputFields[i].value;
		var myPattern = new RegExp(inputFields[i].pattern);
		var myTest = myPattern.test(myInput);

		if(myTest === true){
			console.log("Thank you!")
		} else {
			console.log(inputFields[i].name + " is incorrect")
		}
	}
});