  
var side = document.querySelectorAll('.side-length');
var calBtn = document.querySelector("#calculate-area");
var outputBox = document.querySelector("#output");


function calArea() {
    if((Number(side[0].value) || Number(side[1].value)) < 0){
        outputBox.innerText = "please enter positive values"
    } else {
    outputBox.innerText = "The Area is " + 0.5*(Number(side[0].value) * Number(side[1].value)).toFixed(2);
    }
}   

calBtn.addEventListener('click', calArea);