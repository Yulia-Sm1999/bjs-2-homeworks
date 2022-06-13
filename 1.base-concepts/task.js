'use strict'

function solveEquation(a, b, c) {
  let arr;
  let equationRoot1;
  let equationRoot2;
  const d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    equationRoot1 = -b / (2 * a);
    arr = [equationRoot1];
  } else {
    equationRoot1 = (-b + Math.sqrt(d)) / (2 * a);
    equationRoot2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [equationRoot1, equationRoot2];
  };

  return arr; 
}

'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);


  if (Number.isNaN(percent)) {
    return ('Параметр "Процентная ставка" содержит неправильное значение "test"');
  } else if (Number.isNaN(contribution)) {
    return ('Параметр "Начальный взнос" содержит неправильное значение "test"');
  } else if (Number.isNaN(amount)) {
    return ('Параметр "Общая стоимость" содержит неправильное значение "test"');
  } 
  
  let mortgageBody = amount - contribution;

  if (mortgageBody === 0) {
    return totalAmount = 0;
  } else {
    let date2 = new Date();
    let period = Math.floor((date - date2) / (1000 * 60 * 60 * 24 * 30));
    let P = (1 / 12 * percent / 100);
    let monthlyPayment = mortgageBody * (P + (P / ((1 + P) ** period - 1)));

    totalAmount = Number((monthlyPayment * period).toFixed(2));
    return totalAmount;
  }
}