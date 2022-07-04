class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this._state *= 1.5;
  }

  set state(state = this.fix()) {
    if (state > 100) {
      this._state = 100;
    } else if (state < 0) {
      this._state = 0;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}



//З А Д А Ч А  №2

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let book = this.books.find(book => book[type] === value);

    if (book === undefined) {
      return null;
    } else {
      return book;
    } 
  }
  
  giveBookByName(bookName) {
    let theBook = this.books.find(book => book.name === bookName);

    if (theBook === undefined) {
      return null;
    } else {
      this.books.splice(this.books.indexOf(theBook), 1)
      return theBook;
    } 
  }
}

// З А Д А Ч А №3

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student3 = new Student('Ann', 'female', 20);
let student4 = new Student('Max', 'male', 18);
let student5 = new Student('Jack', 'male', 21);

Student.prototype.addMark = function (mark, subjectName) {
  if (mark < 1 && mark > 5) {
    return 'Ошибка, оценка должна быть числом от 1 до 5';
  }
  
  if (this.marks === undefined) {
    this.marks = [];
  }
  
  let subject = this.marks.find(subject => subject.name === subjectName);

    if (subject === undefined) {
      this.marks[subject] = [mark];
    } else {
      this.marks[subjectName].push(mark);
    } 
}

Student.prototype.getAverageBySubject = function (subjectName) {
  if (this.marks[subjectName] === undefined) {
    return 'Несуществующий предмет'
  } else {
    let sum = this.marks[subjectName].reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks[subjectName].length;
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let subject in this.marks) {
    sum += subject.reduce((acc, mark) => acc + mark, 0);
  }
  return sum / this.marks.length;
}