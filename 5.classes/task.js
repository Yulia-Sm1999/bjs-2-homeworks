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

  set state(state = this._state) {
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

/*З А Д А Ч А  №2*/

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }
}

addBook(book) {
  if (book._state > 30) {
    this.books.push(book);
  }
}

findBookBy(type, value) {
  if (bookObject.type = value) {
    return (bookName = bookObject.name);
  } else {
    return null;
  }
}

giveBookByName(bookName) {

}