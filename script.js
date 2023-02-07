let myLibrary = [];

function Book(title, author, numPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.haveRead = haveRead;
  this.info = function () {
    return `${title} by ${author}, ${numPages} pages, ${
      haveRead ? "has been read" : "not yet read"
    }`;
  };
}

function addBookToLibrary(title, author, numPages, haveRead) {
  newBook = new Book(title, author, numPages, haveRead);

  myLibrary.push(newBook);
}

function printLibrary() {
  myLibrary.forEach((novel) => {
    console.log(novel.info());
  });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkin", 245, true);
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkin", 654, true);
addBookToLibrary("The Two Towers", "J.R.R. Tolkin", 654, false);
addBookToLibrary("The Return of the King", "J.R.R. Tolkin", 777, false);

printLibrary();
