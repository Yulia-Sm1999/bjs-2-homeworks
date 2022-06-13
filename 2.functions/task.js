// Задание 1
function getArrayParams(arr) {
  let min = 100;
  let max = -100;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}



// Задание 2
function worker(arr) {
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i]
  };

  return arrSum;
}

function makeWork(arrOfArr, func) {
  let maximum = - Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > maximum) {
      maximum = func(arrOfArr[i]);
    }
  };
  
  return maximum;
}



// Задание 3
function worker2(arr) {
  let arrMin = Infinity;
  let arrMax = -Infinity;
  let difference;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arrMax) {
      arrMax = arr[i];
    }

    if (arr[i] < arrMin) {
      arrMin = arr[i];
    }
  }

  return difference = Math.abs(arrMax - arrMin);
}

