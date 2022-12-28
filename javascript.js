const calcButtons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let displayNumber = '';

const numButtons = document.getElementsByClassName('number');
const operationButtons = document.getElementsByClassName('operator');
const equalsButton = document.getElementById('equal')
const clearAllButton = document.getElementById('clearall')
const deleteButton = document.getElementById('delete')
const operationDisplay = document.getElementsByClassName('operationDisplay');
const resultantDisplay = document.getElementsByClassName('resultantDisplay');

function appendNumber(number) {

}

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
}

let fillData = () => {
    let ele = document.getElementById('display');
    let node = operate()
}

