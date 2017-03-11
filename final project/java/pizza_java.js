
/*$(document).ready(function(){ */
    function getReceipt() {
        var heading1 = "<h2>Your order</h2>";
        var runningTotal = 0;
        var sizeTotal = 0; 
        var sizeArray = document.getElementsByClassName("size");

        for (var i = 0; i< sizeArray.length; i++){
            if (sizeArray[i].checked){    
                var selectedSize = sizeArray[i].value;
                heading1 = heading1 + selectedSize + "<br>";
            }
        }
        if (selectedSize == "Personal") {
            sizeTotal = 6;
        }
        else if (selectedSize == "Medium"){
            sizeTotal = 10;
        }
        else if (selectedSize == "Large"){
            sizeTotal = 14;
        }
        else if (selectedSize == "XLarge"){
            sizeTotal = 16;
        }
       runningTotal = sizeTotal;
	   console.log(selectedSize+" = $"+sizeTotal+".00");
	   console.log("size heading1: "+heading1);
	   console.log("subtotal: $"+runningTotal+".00");
       document.getElementById("items").innerHTML= selectedSize;
       document.getElementById("itemSub").innerHTML= sizeTotal;
	   /*getMeat(runningTotal,heading1);*/
    };
    /*
    function getMeat(runningTotal, heading1) {
        var meatTotal = 0;
        var selectedMeat = [];
        var meatArray = document.getElementsByClassName("Meats");
        
        for(var j = 0; j < meatArray.length; j++) {
            if (meatArray[j].checked) {
                selectedMeat.push(meatArray[j].value);
                console.log("selected meat item: ('meatArray[j].value+')");
                heading1 = heading1+meatArray[j].value+"<br>";
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
        console.log("total selected meat items: "+meatCount);
        console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
        console.log("meat heading1: "+heading1);
        getCheese(runningTotal + heading1)
    }
    function getCheese(runningTotal, heading1){
        var cheeseTotal = 0;
        var cheeseArray = document.getElementsByClassName("Cheese");
        
        for (var c = 0; c < cheeseArray.length; c++){
            if (cheeseArray[c].checked){    
                var selectedCheese = cheeseArray[c].value;
                heading1 = heading1 + selectedCheese + "<br>";
            }
        }
        if(selectedCheese === "Regualar"){
            cheeseTotal = 0;
        }
        else if(selectedCheese === "No Cheese"){
            cheeseTotal = 0;
        }
        else if(selectedCheese === "Extra"){
            cheeseTotal = 3;
        }
        
        runningTotal = (runningTotal + cheeseTotal);
        console.log(selectedCheese+" = $"+cheeseTotal+".00");
        console.log("cheese heading1: "+heading1);
        console.log("Purchase Total: "+"$"+runningTotal+".00");
        document.getElementById("showOrder").innerHTML= heading1;
        document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
        
    }*/
/*}); */