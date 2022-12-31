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
    var resultant = a + b;
    return resultant;
}

function subtract(a, b){
    var resultant = a - b;
    return resultant;
}

function multiply(a, b){
    var resultant = a * b;
    return resultant;
}

function divide(a,b){
    var resultant = a / b;
    return resultant;
}

function exponent(a,b){
    var resultant = Math.pow(a, b);
    return resultant;
}


document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', event => {
        updateVars(item.textContent);
    })
})

function updateVars(value){
    if (operatorSpan.childNodes.length === 0) {
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
    if (firstVarSpan.childNodes.length !== 0 && operatorSpan.childNodes.length === 0) {
        operatorSpan.textContent += value; 
    } else if (firstVarSpan.childNodes.length !== 0 && operatorSpan.childNodes.length !== 0) {
        operatorSpan.textContent = value;
    }
}

document.querySelectorAll('.auxiliary').forEach(item => {
    item.addEventListener('click', event => {
        auxiliaryCommand(item.textContent);
    })
})

function auxiliaryCommand(value){
    if (value === 'DEL') {
        
    } else if (value === 'AC') {
        firstVarSpan.textContent = '';
        operatorSpan.textContent = '';
        secondVarSpan.textContent = '';
        resultantDisplay.textContent = '';
    }
}

document.querySelectorAll('.equal').forEach(item => {
    item.addEventListener('click', event => {
        updateResultantDisplay()
    })
})

function updateResultantDisplay(value) {
    let answerAsNum = solveProblem();
    let answerAsString = answerAsNum.toString();
    alert(answerAsString)
    resultantDisplay.textContent = answerAsString;
}

function solveProblem() {

    var firstVar = Number(firstVarSpan.textContent);
    var operator = operatorSpan.textContent;
    var secondVar = Number(secondVarSpan.textContent);

    if (operator == '+') {
        return add(firstVar, secondVar);
    } else if (operator == '-') {
        return subtract(firstVar, secondVar);
    } else if (operator == '*') {
        return multiply(firstVar, secondVar);
    } else if (operator == '/') {
        return divide(firstVar, secondVar);
    } 
} 