function parseCount(string) {
  let number = Number.parseInt(string);

  if (Number.isNaN(number)) {
    throw new Error("Невалидное значение");
  } 

  return number;
}


function validateCount(string) {
  try {
    return parseCount(string);
  } catch (error) {
    return error;
  }
}

//ЗАДАЧА №2

class Triangle {
  constructor(side1, side2, side3) {
    if ((side1 > side2 + side3) || (side2 > side1 + side3) || (side3 > side1 + side2)) {
      throw new Error("Треугольник с такими сторонами не существует");
    } 

      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  getArea() {
    let p = (this.getPerimeter() / 2);
    return Number(Math.sqrt(p * (p - this.side1)(p - this.side2)(p - this.side3))).toFixed(3);
  }
}

function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3)
  } catch (error) {
    let theObject = new Object();
    theObject.getArea = () => 'Ошибка! Треугольник не существует';
    theObject.getPerimeter = () => 'Ошибка! Треугольник не существует';
    return theObject;    
  }
}
