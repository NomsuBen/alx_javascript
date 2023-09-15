#!/usr/bin/node
/**
    a function divideBy:

It takes into argument firstNumber (number)
It returns a function that takes into argument secondNumber (number)
It returns the second number divided by the first number
Create a function addBy:

It takes into argument firstNumber (number)
It returns a function that takes into argument secondNumber (number)
It returns the sum of the two numbers
Create four closures:

addBy100, that uses the function addBy with the number 100
addBy1000, that uses the function addBy with the number 1000
divideBy10, that uses the function divideBy with the number 10
divideBy100, that uses the function divideBy with the number 100
 */

function divideBy (firstNumber) {
    return (secondNumber) => secondNumber / firstNumber;
  }
  
  function addBy (firstNumber) {
    return (secondNumber) => secondNumber + firstNumber;
  }
  
  const addBy100 = (secondNumber) => addBy(100)(secondNumber);
  const addBy1000 = (secondNumber) => addBy(1000)(secondNumber);
  const divideBy10 = (secondNumber) => divideBy(10)(secondNumber);
  const divideBy100 = (secondNumber) => divideBy(100)(secondNumber);