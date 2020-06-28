let myLibrary = [];
myLibrary.push(new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 512, true, "https://covers.openlibrary.org/w/id/8474036-L.jpg"))
myLibrary.push(new Book("The Two Towers", "J.R.R. Tolkien", 512, true, "https://covers.openlibrary.org/w/id/8478177-L.jpg"))
myLibrary.push(new Book("The Return of the King", "J.R.R. Tolkien", 512, false, "https://covers.openlibrary.org/w/id/10194302-L.jpg"))
function Book(title, author, pages, read, cover) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.cover = cover
}

Book.prototype.info = function () {
  return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
}

function addBookToLibrary() {
  //create new book obj using provided input
  newBook = new Book(title, author, pages, read, cover);

  //add obj to Library
  myLibrary.push(newBook);
}

function renderLibrary() {
  myLibrary.forEach(renderBook)
}

function renderBook(book, id) {

  if (book.read) {
    read_status = "already read"
  } else {
    read_status = "not read yet"
  };

  img_url = book.cover || "assets/img/generic-book.svg"

  document.querySelector('.library').innerHTML +=
    `<div class="book py-2 px-3">
        <img src="${img_url}" class="book-img" width="100px">
        <div class="book-details">
          <h2>${book.title}</h2>
          <p class="author text-muted">${book.author}</p>
          <p class="pages">${book.pages} pages</p>
          <p class="read-status">${read_status}</p>
          <button class="btn btn-info btn-sm read-toggle" onclick="toggleReadStatus(${id})">mark read</button>
        </div>
        <button class="btn btn-danger btn-sm delete" onclick="deleteBook(${id})"><i class="far fa-trash-alt"></i></button>
      </div>`
}

function newBook() {
  //display new book form

  //get title
  //get author
  //get pages
  //get read status

  addBookToLibrary(title, author, pages, read)
}

function toggleReadStatus(id) {
  myLibrary[id].read = !myLibrary[id].read
}

function deleteBook(id) {
  //add confirmation alert
  myLibrary.splice(id, 1)
  //refresh page
}

renderLibrary();