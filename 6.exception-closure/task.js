function parseCount(string) {
  if (Number.isNaN(Number.parseInt(string))) {
    throw new Error("Невалидное значение");
  } 
  return Number.parseInt(string);
}


function validateCount(string) {
  try {
    parseCount(string);
  } catch (error) {
    return error;
  }
}

//ЗАДАЧА №2

class Triangle {
  constructor(side1, side2, side3) {
    if ((side1 < side2 + side3) || (side2 < side1 + side3) || (side3 < side1 + side2)) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  }

  getPerimeter() {
    return this.perimeter = this.side1 + this.side2 + this.side3;
  }

  getArea() {
    p = ((this.side1 + this.side2 + this.side3) / 2);
    return this.area = (Math.sqrt(semi_periment(p - this.side1)(p - this.side2)(p - this.side3))).toFixed(3);
  }
}

function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3)
  } catch (error) {
    return Triangle.getArea(error) && Triangle.getPerimeter(error);    
  }
}
