//Claulcator Functions

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
