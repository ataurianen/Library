let myLibrary = [];
const bookshelf = document.getElementById("bookshelf-body");

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
  let row = bookshelf.insertRow(-1);

  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);

  c1.textContent = title;
  c2.textContent = author;
  c3.textContent = numPages;
  c4.textContent = haveRead;
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkin", 245, true);
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkin", 654, true);
addBookToLibrary("The Two Towers", "J.R.R. Tolkin", 654, false);
addBookToLibrary("The Return of the King", "J.R.R. Tolkin", 777, false);
