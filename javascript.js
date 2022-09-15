console.log('This is a test!')

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

function operate(operator, a, b) {
    var operator = prompt("Add, Subtract, Multiply, or Divide?");
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
    }
}