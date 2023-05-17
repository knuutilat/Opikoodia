window.onload = function () {
    rollNumber();
}

var randomNumber
var guesscount = 0;
var lowlimit = 1;
var highlimit = 100;

function rollNumber(min,max) {
    min = 1;
    max = 100;
    randomNumber = Math.floor(Math.random() * (max-min) + min)
    console.log(randomNumber)
    
}
function checkNumber() {
    document.getElementById("guesscount").innerHTML = guesscount;
    var playerInput = document.getElementById("number").value;
    console.log(playerInput)

    if(playerInput == randomNumber) {
        var result = document.getElementById("result");
        result.textContent = "Correct";
        console.log("Correct")
    } 

    if(playerInput > lowlimit && playerInput < highlimit) {
        guesscount++;
        if(playerInput < randomNumber) {
            var result = document.getElementById("result");
            result.textContent = "Too small";
            console.log("Too small")
            lowlimit = playerInput;
            document.getElementById("low").innerHTML = lowlimit;
        }

        if(playerInput > randomNumber) {
            var result = document.getElementById("result");
            result.textContent = "Too big";
            console.log("Too big")
            highlimit = playerInput;
            document.getElementById("high").innerHTML = highlimit;
        }
}   else {
        var result = document.getElementById("result");
        result.textContent = "Error";
        console.log("Error")
        if (isNaN(playerInput)) {
        var result = document.getElementById("result");
        result.textContent = "Error";
        console.log("Error")
}
}

    
}




