//Calculator Functions - Operators

const add = (x, y) => {
  x = parseFloat(x);
  y = parseFloat(y);
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return y != 0 || y == undefined ? x / y : "Error";
};

const operate = (operator, x, y) => {
  return operator == "/"
    ? divide(x, y)
    : operator == "*"
    ? multiply(x, y)
    : operator == "+"
    ? add(x, y)
    : operator == "-"
    ? subtract(x, y)
    : 0;
};

//Calculator Functions - Numbers

//Calculator Display Value
let calcDisplayValue = "";

//Updates Calculator Display
const updateCalcDisplay = (updatedValue) => {
  document.querySelector(".calculator-screen").value = updatedValue;
};

//Retrieve Number Pressed and Update Display Value
const getNumberPressed = () => {
  let calcButtons = document.querySelectorAll(".calc-button");

  calcButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculateResult(button.value, button.classList);
    });
  });
};

// Checks the button pressed and mainupulates the display value appropriately
// to either clear the display or do the calculation
const calculateResult = (value, classList) => {
  if (value == "all-clear") {
    calcDisplayValue = "";
  } else if (classList.contains(`operator`)) {
    calcDisplayValue += ` ${value} `;
  } else if (value == "=") {

    //Variables that are important for the calculation
    let splitValue = calcDisplayValue.split(" ");
    let currentOperator = "";
    let result = 0;
    let temp = 0;

    // Calculate the result value from left to right
    for (let i = 0; i < splitValue.length; i++) {
      if (i % 2 != 0) {
        if (currentOperator == "") {
          currentOperator = splitValue[i];

          temp = operate(currentOperator, splitValue[i - 1], splitValue[i + 1]);
          console.log(temp);
        } else {
          currentOperator = splitValue[i];

          temp = operate(currentOperator, temp, splitValue[i + 1]);
        }
      }
      result = temp;
    }

    // Very simple error handling for if the calculation returns NaN, Infinity, or tries to divide by zero
    if (result == NaN || result == "Error" || result == Infinity) {
      calcDisplayValue = "Error";
    } else {
    result = Math.round(result * 10000) / 10000;
    calcDisplayValue = result.toString();
    }


  } else {
    calcDisplayValue += value;
  }

  updateCalcDisplay(calcDisplayValue);
};



getNumberPressed();
