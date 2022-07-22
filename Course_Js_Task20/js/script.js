"use strict";

const potatoNumber = +prompt("How many potatoes?")
const potatoCalc = (potatoNumber, potatoesMass = 75, literOfBorscht = 48, price = 13) => {
  if (potatoNumber <= 0) {
    return 'Error, enter correct details';
  }
  const sum = potatoesMass * potatoNumber * literOfBorscht / 1000;
  const result = sum * price;
  return Math.ceil(result);
};

console.log("Potato cost:",potatoCalc(potatoNumber),"UAH");