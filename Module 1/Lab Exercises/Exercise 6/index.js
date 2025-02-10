let book1 = {
  title: "The Hobbit",
  description: "The Hobbit is a tale of adventure.",
  author: "J.R.R. Tolkien",
  pages: 310,
};

let Library = [];

function PrintBookContents(book) {
  console.log(book.title);
  console.log(book.description);
  console.log(book.author);
  console.log(book.pages);
  console.log(book1);
}

function PrintLibraryContents(library) {
  for (let i = 0; i < library.length; i++) {
    console.log(library[i]);
  }
}

function EditBook1Description(book, description) {
  book.description = description;
}

function CreateArrayofBooks(library) {
  // create 5 books and add them to the Library array

  for (let i = 0; i < 5; i++) {
    // loop 5 times
    let book = {
      title: "Book" + i,
      description: "Description is this " + i,
      author: "Author" + i,
      pages: 100 + i,
    };

    library.push(book);
  }
}

PrintBookContents(book1);
EditBook1Description(book1, "The Hobbit is a tale of adventure and discovery.");
CreateArrayofBooks(Library);
PrintLibraryContents(Library);
