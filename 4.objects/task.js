function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student3 = new Student('Ann', 'female', 20);
let student4 = new Student('Max', 'male', 18);
let student5 = new Student('Jack', 'male', 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...mark);
  }
};

Student.prototype.getAverage = function () { 
  let sum = this.marks.reduce((acc, mark) => acc += mark, 0);

  if (this.marks.length > 0) {
    return sum / this.marks.length;
  } else {
    return sum / 1;
  }
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}