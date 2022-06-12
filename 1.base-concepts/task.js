'use strict'

function solveEquation(a, b, c) {
  let arr;
  let x1;
  let x2;
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr = [x1];
  } else {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  };

  return arr; 
}

'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let mortgageBody = amount - contribution;
  let date2 = new Date();
  let period = (date - date2) / (1000 * 60 * 60 * 24 *30);
  let P = (1 / 12 * percent/100);
  let monthlyPayment = mortgageBody * (P + (P / ((1 + P) ** period - 1)));

  totalAmount = (+contribution + (monthlyPayment * period)).toFixed(2);
  return totalAmount;
}
