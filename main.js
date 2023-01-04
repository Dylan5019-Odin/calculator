//Calculator Functions - Operators

const add = (x, y) => {
  x = parseInt(x);
  y = parseInt(y);
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
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

// Cheks the button pressed and decides the correct calculation to do
const calculateResult = (value, classList) => {
  if (value == "all-clear") {
    calcDisplayValue = "";
  } else if (classList.contains(`operator`)) {
    calcDisplayValue += ` ${value} `;
  } else if (value == "=") {
    let splitValue = calcDisplayValue.split(" ");
    let currentOperator = "";
    let result = 0;
    let temp = 0;

    // Calculate the result value from left to right
    for (let i = 0; i < splitValue.length; i++) {
      if (i % 2 != 0) {
        if ((currentOperator == "")) {
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


    calcDisplayValue = result.toString();
  } else {
    calcDisplayValue += value;
  }

  updateCalcDisplay(calcDisplayValue);
};

getNumberPressed();
