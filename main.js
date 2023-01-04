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
let calcDisplayValue = '';

//Updates Calculator Display
const updateCalcDisplay = (updatedValue) => {
    document.querySelector('.calculator-screen').value = updatedValue;
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
const calculateResult  = (value, classList) => {

console.log(classList.contains(`operator`));


    if (value == "all-clear") {
      calcDisplayValue = "";
    } else if (classList.contains(`operator`)) {
      calcDisplayValue += ` ${value} `;
    } else if (value == "=") {
      
      
      let splitValue = calcDisplayValue.split(' ');
      let result = operate(splitValue[1], splitValue[0], splitValue[2]);


      calcDisplayValue = result.toString();
     

    } else {
      calcDisplayValue += value;
    }
    
 
    updateCalcDisplay(calcDisplayValue);
       
};




getNumberPressed();