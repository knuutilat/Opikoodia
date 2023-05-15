window.onload = rollNumber;

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
    guesscount += 1;
    document.getElementById("guesscount").innerHTML = guesscount;
    var playerInput = document.getElementById("number").value;
    console.log(playerInput)

    if(playerInput == randomNumber) {
        var result = document.getElementById("result");
        result.textContent = "Correct";
        console.log("Correct")
    } 

    if(playerInput > 100) {
        var result = document.getElementById("result");
        result.textContent = "Error";
        console.log("Error")

    }
    
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

    
}




