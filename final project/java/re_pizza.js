function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
    var subTotal = "<h3>Subtotals:</h3>";
	var runningTotal = 0; 
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium") {
		sizeTotal = 10;
	} else if (selectedSize === "Large") {
		sizeTotal = 14;
	} else if (selectedSize === "Xlarge") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
    subTotal = (subTotal + "$"+ sizeTotal +".00" + "<br>")
	getMeat(runningTotal,text1,subTotal);
};	
function getMeat(runningTotal,text1,subTotal){
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("Meats");

    for(var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {                selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ('meatArray[j].value+')");
            text1 = text1+meatArray[j].value+", "+"<br>";
            }
        }
    var meatCount = selectedMeat.length;
        if(meatCount > 1){
            meatTotal = (meatCount - 1);
        }
        else {
            meatTotal = 0;
        }
    runningTotal = (runningTotal + meatTotal);
    subTotal = (subTotal +"$"+ meatTotal +".00"+ "<br>")
    getCheese(runningTotal, text1,subTotal);
};

function getCheese(runningTotal,text1,subTotal){
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("Cheese");
    
    for (var j = 0; j < cheeseArray.length; j++){
        if (cheeseArray[j].checked){    
                var selectedCheese = cheeseArray[j].value;
                text1 = text1+cheeseArray[j].value+"<br>";
            }
    }
    
    if(selectedCheese === "Extra"){
            cheeseTotal = 3;
        }
        else {
            cheeseTotal = 0;
        }
    runningTotal = (runningTotal + cheeseTotal);
    subTotal = (subTotal + "$"+ cheeseTotal +".00"+ "<br>")
    getCrust (runningTotal, text1,subTotal);
};
function getCrust(runningTotal,text1,subTotal){
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("Crust");
        
    for (var r = 0; r < crustArray.length; r++){
            if (crustArray[r].checked){
            var selectedCrust = crustArray[r].value;
            text1 = text1+crustArray[r].value+"<br>";            }
    }
        
        if(selectedCrust == "Cheese stuffed"){
            crustTotal = 3;
        }
        else {
            crustTotal = 0;
        }
        
    runningTotal = (runningTotal + crustTotal);
    subTotal = (subTotal + "$"+ crustTotal +".00" + "<br>")
    getSauce(runningTotal, text1, subTotal);
};
function getSauce(runningTotal, text1, subTotal){
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName("Sauce");
    
    for (var s = 0; s < sauceArray.length; s++){
        if (sauceArray[s].checked){
            var selectedSauce = sauceArray[s].value;
            text1= text1+sauceArray[s].value+"<br>";
            sauceTotal = 0;
        }
    }
    runningTotal = (runningTotal + sauceTotal);
    subTotal = (subTotal + "$"+ sauceTotal +".00" + "<br>")
    getVeggies(runningTotal,text1,subTotal);
};

function getVeggies(runningTotal,text1,subTotal){
    var veggiesTotal = 0;
    var veggiesArray = document.getElementsByClassName("Veggies");
    var selectedVeggies = [];
    
    for (var v = 0; v < veggiesArray.length; v++){
        if (veggiesArray[v].checked) {
            selectedVeggies.push(veggiesArray[v].value);
            console.log("selected veggies:('veggiesArray[v].value+')");
            text1 = text1+veggiesArray[v].value+"<br>";
        }
    }
    var veggiesCount = selectedVeggies.length;
    if(veggiesCount >1){
        veggiesTotal = (veggiesCount-1);
    }
    else {
        veggiesTotal = 0; 
    }
    runningTotal = (runningTotal+veggiesTotal);
    subTotal = (subTotal + "$"+ veggiesTotal +".00" + "<br>")
    document.getElementById("showText1").innerHTML = text1;
    document.getElementById("showText2").innerHTML = subTotal;
    document.getElementById("totalPrice").innerHTML = "Total="+ "$"+runningTotal+".00";
}
    