
const display = document.getElementById("display");

function addToDisplay(input){
    display.value += input;
}

function clearDisplay(){
}

function calculate(){
    display.value = eval(display.value);
}