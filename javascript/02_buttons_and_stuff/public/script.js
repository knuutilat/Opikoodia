function changeColor() {
    let header = document.getElementById("header");
    if(header.style.color === "blue") {
    header.style.color = "red";
    } else {
        header.style.color = "blue";
    }
    console.log("Changed color!");

}