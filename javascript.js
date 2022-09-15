const calcButtons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let displayNumber = '';
var screen = document.getElementById('display')



function add(a, b) {
    var c = a + b;
    return c;
}

function subtract(a, b){
    var c = a - b;
    return c;
}

function multiply(a, b){
    var c = a * b;
    return c;
}

function divide(a,b){
    var c = a / b;
    return c;
}

function exponent(a,b){
    var c = Math.pow(a, b)
    return c
}

function operate(operator, a, b) {
    var operator = prompt("Add, Subtract, Multiply, Divide, or Exponent?");
    var x = prompt("First number?");
    var y = prompt("Second number?");
    var a = parseInt(x);
    var b = parseInt(y);
    if (operator == "Add"){
        return add(a, b);
    } else if (operator == "Subtract") {
        return subtract(a, b);
    } else if (operator == "Multiply") {
        return multiply(a, b);
    } else if (operator == "Divide") {
        return divide(a, b);
    } else if (operator == "Exponent") {
        return exponent(a, b)
    }
    screen.appendChild(result)
}