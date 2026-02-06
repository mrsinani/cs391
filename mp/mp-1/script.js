// Define global variables, code verbosity
let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
let result = document.getElementById("result");

function calculate(a, b, operator) {
    console.log(a, b, operator);
    switch (operator) {
        case "+":
            result = Number(a.value) + Number(b.value);
            break;
        case "-":
            result = Number(a.value) - Number(b.value);
            break;
        case "*":
            result = Number(a.value) * Number(b.value);
            break;
        case "/":
            result = Number(a.value) / Number(b.value);
            break;
        case "**":
            result = Number(a.value) ** Number(b.value);
            break;
        default:
            result = "Invalid operator";
            break;
    }
    console.log(result);
    if (result < 0) {
        result.style.color = "red";
    }
    return result;
}

function addition() {
    // Add the two numbers (use .value to get the value at the time of click of button)
    let sum = Number(firstNumber.value) + Number(secondNumber.value);
    calculate(firstNumber.value, secondNumber.value, "+");
}

function subtract() {
    // Subtract the two numbers
    let sum = Number(firstNumber.value) - Number(secondNumber.value);
    calculate(firstNumber.value, secondNumber.value, "-");
}

function multiply() {
    // Multiply the two numbers
    let sum = Number(firstNumber.value) * Number(secondNumber.value);
    calculate(firstNumber.value, secondNumber.value, "*");
}

function divide() {
    // Divide the two numbers
    let sum = Number(firstNumber.value) / Number(secondNumber.value);
    calculate(firstNumber.value, secondNumber.value, "/");
}

function exponent() {
    // Exponent the two numbers
    let sum = Number(firstNumber.value) ** Number(secondNumber.value);
    calculate(firstNumber.value, secondNumber.value, "**");
}

function clearCalculator() {
    // Set values to empty with .value so we refresh the state
    firstNumber.value = "";
    secondNumber.value = "";
    result.innerHTML = "";
}