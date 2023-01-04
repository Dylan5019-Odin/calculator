//Calculator Functions - Operators

const add = (x, y) => {
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
let calcDisplayValue = 0;

//Updates Calculator Display
const updateCalcDisplay = (updatedValue) => {
    document.querySelector('.calculator-screen').value = updatedValue;
};


//Retrieve Number Pressed and Update Display Value
const getNumberPressed = () => {
    
    let calcButtons = document.querySelectorAll(".calc-button");

    calcButtons.forEach((button) => {
      button.addEventListener("click", () => {
        

     

        calculateResult(button.value);
      });
    });


  
};

// Cheks the button pressed and decides the correct calculation to do
const calculateResult  = (value) => {

    if (value == 'all-clear') {
      updateCalcDisplay(0)
    } else {
      updateCalcDisplay(value);
    }

       
};




getNumberPressed();