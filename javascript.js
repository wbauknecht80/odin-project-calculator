/* DECLARE VARIABLES -- MIGHT HAVE REDUNDANCIES */

const calcButtons = document.querySelectorAll('button');

const display = document.querySelector('.display');

const numButtons = document.getElementsByClassName('number');
const operationButtons = document.getElementsByClassName('operator');

const equalsButton = document.getElementById('equal')
const clearAllButton = document.getElementById('clearall')
const deleteButton = document.getElementById('delete')

const operationDisplay = document.getElementsByClassName('operationDisplay');
const answerDisplay = document.getElementById('answer');

const firstVarSpan = document.getElementById('firstVar');
const operatorSpan = document.getElementById('operatorSign');
const secondVarSpan = document.getElementById('secondVar');

/* OPERATOR FUNCTIONS */

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

/* HANDLES NUMBER BUTTONS */

document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', event => {
        updateVars(item.textContent);
    })
})

/* CHECKS WHICH SIDE OF THE OPERATOR SIGN TO ASSIGN NUMBER */

function updateVars(value){
    if (operatorSpan.childNodes.length === 0) {
        firstVarSpan.textContent += value;
    } else {
        secondVarSpan.textContent += value;
    }
} 

/* HANDLES OPERATOR BUTTONS */

document.querySelectorAll('.operator').forEach(item => {
    item.addEventListener('click', event => {
        updateOperator(item.textContent);
    })
})

/* CHECKS IF A VARIABLE HAS BEEN ASSIGNED, REPLACES ANY CURRENT EXISTING OPERATOR ON ANOTHER CLICK */

function updateOperator(value){

    if (answerDisplay.textContent === "Error: Can't divide by zero") {
        answerDisplay.textContent = '';
    }

    if (answerDisplay.childNodes.length !== 0 && operatorSpan.childNodes.length === 0) {
        operatorSpan.textContent += value;
    } else if (answerDisplay.childNodes.length !== 0 && operatorSpan.childNodes.length !== 0) {
        operatorSpan.textContent = value;
    } else if (firstVarSpan.childNodes.length !== 0 && operatorSpan.childNodes.length === 0) {
        operatorSpan.textContent += value; 
    } else if (firstVarSpan.childNodes.length !== 0 && operatorSpan.childNodes.length !== 0) {
        operatorSpan.textContent = value;
    }
}

/* HANDLES DEL AND AC BUTTONS */

document.querySelectorAll('.auxiliary').forEach(item => {
    item.addEventListener('click', event => {
        auxiliaryCommand(item.textContent);
    })
})

/* DEL DELETES FROM RIGHT TO LEFT, AC CLEARS EVERYTHING */

function auxiliaryCommand(value){
    if (value === 'DEL') {
        if (secondVarSpan.childNodes.length !== 0 ) {
                secondVarSpan.textContent = secondVarSpan.textContent.slice(0, -1);
            } else if (operatorSpan.childNodes.length !==0) {
                operatorSpan.textContent = operatorSpan.textContent.slice(0, -1);
            } else if (firstVarSpan.childNodes.length !== 0) {
                firstVarSpan.textContent = firstVarSpan.textContent.slice(0, -1);
            }
        } else if (value === 'AC') {
        firstVarSpan.textContent = '';
        operatorSpan.textContent = '';
        secondVarSpan.textContent = '';
        answerDisplay.textContent = '';
        let noError = true
    }}

/* HANDLES EQUAL SIGN */

document.querySelectorAll('.equal').forEach(item => {
    item.addEventListener('click', event => {
        updateResultantDisplay();
    })
})

/* CALLS FUNCTION TO SOLVE, UPDATES DISPLAY AND CHECKS FOR ERRORS */

function updateResultantDisplay(value) {

    if (firstVarSpan.childNodes.length !== 0 && operatorSpan.childNodes.length !== 0 
        && secondVarSpan.childNodes.length !== 0) {
        let answerAsNum = solveProblem();
        let answerAsString = answerAsNum.toString();   

        if (answerAsString === 'Infinity') {
            firstVarSpan.textContent = '';
            operatorSpan.textContent = '';
            secondVarSpan.textContent = '';
        } else {
            answerDisplay.append(answerAsNum);
            firstVarSpan.textContent = '';
            operatorSpan.textContent = '';
            secondVarSpan.textContent = '';
    }
} 
}

/* CALLS OPERATOR FUNCTIONS AND CREATES NECCESARY ERROR MESSAGES */

function solveProblem() {

    var firstVar = Number(firstVarSpan.textContent);
    var operator = operatorSpan.textContent;
    var secondVar = Number(secondVarSpan.textContent);
    let noError = true

    if (answerDisplay.childNodes.length !== 0){
        var firstVar = Number(answerDisplay.textContent);
        answerDisplay.textContent = '';
    }

    if (operator === '/' && secondVar === 0) {
        answerDisplay.textContent = "Error: Can't divide by zero";
        let noError = false;
    }
    
    if (operator == '+') {
        return add(firstVar, secondVar);
    } else if (operator == '-') {
        return subtract(firstVar, secondVar);
    } else if (operator == '*') {
        return multiply(firstVar, secondVar);
    } else if (operator == '/') {
        return divide(firstVar, secondVar);
    } else if (operator == '^') {
        return exponent(firstVar, secondVar);
    }
} 

/* 
FIX DECIMAL BUTTON
FIX NEGATIVE SIGN
ROUND DECIMALS
BUG WITH DIV BY ZERO ERROR NOT CLEARING OPERATOR AND SECOND VAR (temporarily fixed--need to make a catch-all for bugs)
*/