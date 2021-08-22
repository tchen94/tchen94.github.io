const calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: false,
    operator: null,
};

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+': 
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*': 
            return multiply(a, b);
        case '/': 
            return divide(a, b);
        case '%': 
            return remainder(a, b);
        default:
            return b;
    }
}

function displayInput() {
    const display = document.querySelector('.calc-screen');
    display.value = calculator.displayValue;
}

function digitInputs(digit) {
    const { displayValue, secondOperand } = calculator;

    if (secondOperand === true) {
        calculator.displayValue = digit;
        calculator.secondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function addDecimal(period) {
    if (calculator.secondOperand === true) {
        calculator.displayValue = "0.";
        calculator.secondOperand = false;
        return;
    }

    if (!calculator.displayValue.includes(period)) {
        calculator.displayValue += period;
    }
}

function operators(nextOperation) {
    const { firstOperand, displayValue, operator } = calculator
    const input = parseFloat(displayValue);

    if (operator && calculator.secondOperand) {
        calculator.operator = nextOperation;
        return;
    }

    if (firstOperand === null && !isNaN(input)) {
        calculator.firstOperand = input;
    } else if (operator) {
        const result = operate(firstOperand, input, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }

    calculator.secondOperand = true;
    calculator.operator = nextOperation;
}

function posMinSign() {
    const negative = parseFloat(calculator.displayValue) * -1;
    calculator.displayValue = negative.toString();
}

function clearEverything() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.secondOperand = false;
    calculator.operator = null;
}

const buttons = document.querySelector('.calc-buttons');

buttons.addEventListener('click', (e) => {
    const { target } = e;
    const { value } = target;

    if (!target.matches('button')) {
        return;
    }

    switch(value) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
        case "=":
            operators(value);
            break;
        case ".":
            addDecimal(value);
            break;
        case "clear":
            clearEverything();
            break;
        case "-1":
            posMinSign();
            break;
        default:
            if (Number.isInteger(parseFloat(value))) {
                digitInputs(target.value);
            }
    }
    displayInput();
})