const calcButtons = document.querySelectorAll('button');

const display = document.querySelector('.display');

const numButtons = document.getElementsByClassName('number');
const operationButtons = document.getElementsByClassName('operator');

const equalsButton = document.getElementById('equal')
const clearAllButton = document.getElementById('clearall')
const deleteButton = document.getElementById('delete')

const operationDisplay = document.getElementsByClassName('operationDisplay');
const resultantDisplay = document.getElementsByClassName('resultantDisplay');

const firstVarSpan = document.getElementById('firstVar');
const operatorSpan = document.getElementById('operatorSign');
const secondVarSpan = document.getElementById('secondVar');

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
    var c = Math.pow(a, b);
    return c;
}



document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', event => {
        updateVars(item.textContent);
    })
})

function updateVars(value){
    if (operatorSpan.textContent == '') {
        firstVarSpan.textContent += value;
    } else {
        secondVarSpan.textContent += value;
    }
} 
        
document.querySelectorAll('.operator').forEach(item => {
    item.addEventListener('click', event => {
        updateOperator(item.textContent);
    })
})


function updateOperator(value){
    if (firstVarSpan != '' && secondVarSpan == '') {
        operatorSpan.textContent += value; 
    }
}

