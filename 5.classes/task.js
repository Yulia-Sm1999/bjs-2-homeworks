class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(_state) {
    if (_state > 100) {
      this._state = 100;
    } else if (_state < 0) {
      this._state = 0;
    } else {
      this._state = _state;
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
    if (book.state > 30) {
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

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  addMark (mark, subjectName) {
    if (mark < 1 && mark > 5) {
      return 'Ошибка, оценка должна быть числом от 1 до 5';
    }
    
    if (this.marks === undefined) {
      this.marks = {};
    }
    
    if (this.marks[subjectName] === undefined) {
      this.marks[subjectName] = [mark];
      } else {
        this.marks[subjectName].push(mark);
      } 
  }
  
  
  getAverageBySubject(subjectName) {
    if (this.marks[subjectName] === undefined) {
      return 'Несуществующий предмет'
    } else {
      let sum = this.marks[subjectName].reduce((acc, mark) => acc + mark, 0);
      return sum / this.marks[subjectName].length;
    }
  }

  getAverage() {
    let sum = 0;
    let count = 0;
    
    for (let subject in this.marks) {
      count += 1;
      sum += this.getAverageBySubject(subject);
    }
    return sum / count;
  }    
}