// eslint-disable-next-line no-unused-vars
const Book = require("./Book");

const catalogue = [
  new Book ("The Catcher in the Rye", "J.D. Salinger", 10),
  new Book ("Dracula", "Bram Stoker", 0),
  new Book ("Between the Assassinations",  "Aravind Adiga",   9),
  new Book ("Wolf Hall",   "Hilary Mantel",   33),
  new Book ("Bring Up The Bodies",   "Hilary Mantel",   31),
  new Book ("A Place of Greater Safety",   "Hilary Mantel",   11),
  new Book ("Giving Up the Ghost",   "Hilary Mantel",   8),
  new Book ("The Assassination of Margaret Thatcher",   "Hilary Mantel",   43),
  new Book ("The Yellow Wallpaper",   "Charlotte Perkins Gilman",   12),
  new Book ("Conversations With Friends",   "Sally Rooney",   1),
  new Book ("Normal People",   "Sally Rooney",   2),
  new Book ("Everything I Never Told You",   "Celeste Ng",   6),
  new Book ("2666",   "Robert Bolaño",   17),
  new Book ("By Night In Chile",   "Robert Bolaño",   8),
  new Book ("A Tale of Two Cities",   "Charles Dickens",   3),
  new Book ("Oliver Twist",   "Charles Dickens",  7),
  new Book ("Great Expectations",   "Charles Dickens",  1),
  new Book ("The Blind Assassin",   "Margaret Atwood",   8),
  new Book ("Why Be Happy When You Could Be Normal?",   "Jeanette Winterson",   19),
  new Book ("The Origin of Species",   "Charles Darwin",   50)
];

function checkBook(title) {
  if (!title) throw new Error("Please provide a title");
  // Your code here
  let result = false
  let i = 0;
  while (i < catalogue.length) {
   //console.log(i);
   const bookTitle = catalogue[i].title;
   //console.log(bookTitle);
   let bookLS = bookTitle.toLowerCase();
   //console.log(bookLS);
   let titleLS = title.toLowerCase();
   
   if (bookLS.includes(titleLS)) {
      result = true
  
   }
   i++; 
   }
   return result
}

function countBooksByKeyword(keyword) {
  if (!keyword) throw new Error("Please provide a keyword");
  // Your code here
  let count = 0;
    let i = 0;
    while (i < catalogue.length) {
     //console.log(i);
     const book = catalogue[i].title;
     //console.log(book);
     let bookLS = book.toLowerCase();
     //console.log(bookLS);
     let keywordLS = keyword.toLowerCase();
         
     if (bookLS.includes(keywordLS)) { count = count + 1;
  }
  i++;
  
  }
  return count;
}

function getBooksByAuthor(author) {
  if (!author) throw new Error("Please provide an author");
  let bookList = [];
    let i = 0;
    while (i < catalogue.length) {
     const catAuthor = catalogue[i].author;
     let catAuthorLC = catAuthor.toLowerCase();
     let authorLC = author.toLowerCase();
     if (catAuthorLC.includes(authorLC)) { 
       let addBook = catalogue[i].title;
       bookList.push(addBook);
  }
  i++;
  
  }
  return bookList;
}

function getStockCount(title) {
  if (!title) throw new Error("Please provide a title");
  // Your code here
  var stockCount = "Not in our catalogue";
    let i = 0;
    while (i < catalogue.length) {
     const book = catalogue[i].title;
     let bookLS = book.toLowerCase();
     let titleLS = title.toLowerCase();
     if (bookLS === (titleLS)) { 
       stockCount = catalogue[i].quantity
  }
  i++;
  
  }
  return stockCount;
}

function stockReview(title) {
  if (!title) throw new Error("Please provide a title");
  // Your code here
  var stockCount;
  var text = "Not in our catalogue";

    let i = 0;
    while (i < catalogue.length) {
     const book = catalogue[i].title;
     let bookLS = book.toLowerCase();
     let titleLS = title.toLowerCase();
     if (bookLS === (titleLS)) { 
       stockCount = catalogue[i].quantity;

        switch(stockCount)  {
          case 0:
            text = "Not in Stock";
            break;
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            text = "Low Stock";
            break;
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            text = "Medium Stock";
            break;
          default:
            text = "High Stock";
          }
      }
   i++;
  }
  return text;
}

module.exports = {
  checkBook,
  countBooksByKeyword,
  getBooksByAuthor,
  getStockCount,
  stockReview
};
