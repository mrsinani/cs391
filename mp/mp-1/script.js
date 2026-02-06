// Define global variables, code verbosity
const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const result = document.getElementById("result");

function calculate(a, b, operator) {
    // Calculate the result based on the operator and values, and make the result red if the result is negative
    let answer = 0;
    // Switch statement to calculate based on operator
    switch (operator) {
        case "+":
            // Calculate Answer
            answer = Number(a.value) + Number(b.value);
            break;
        case "-":
            answer = Number(a.value) - Number(b.value);
            break;
        case "*":
            answer = Number(a.value) * Number(b.value);
            break;
        case "/":
            answer = Number(a.value) / Number(b.value);
            break;
        case "**":
            // Initialize answer so it doesnt start at 0
            answer = Number(a.value);
            for (let i = 1; i < Number(b.value); i++) {
                // Multiply answer by a, b times
                answer = answer * Number(a.value);
            }
            break;
        default:
            answer = "Invalid operator";
            break;
    }

    // Check if the answer is negative and change the color of the result
    if (answer < 0) {
        result.style.color = "red";
    } else {
        result.style.color = "";
    }
    // Set the result to the answer
    result.innerHTML = String(answer);
}

function addition() {
    // Add the two numbers (pass elements, not values)
    calculate(firstNumber, secondNumber, "+");
}

function subtract() {
    // Subtract the two numbers
    calculate(firstNumber, secondNumber, "-");
}

function multiply() {
    // Multiply the two numbers
    calculate(firstNumber, secondNumber, "*");
}

function divide() {
    // Divide the two numbers
    calculate(firstNumber, secondNumber, "/");
}

function exponent() {
    // Exponent the two numbers
    calculate(firstNumber, secondNumber, "**");
}

function clearCalculator() {
    // Set values to empty with .value so we refresh the state
    firstNumber.value = "";
    secondNumber.value = "";
    result.innerHTML = "";
}