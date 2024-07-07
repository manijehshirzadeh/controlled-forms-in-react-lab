import { useState } from "react";

const Bookshelf = () => {
  //Define a state variable books
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  //Define a state variable newBook
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  //   Create event handlers
  const handleTitleChange = (event) => {
    setNewBook({ title: event.target.value, author: newBook.author });
  };

  const handleAuthorChange = (event) => {
    setNewBook({ title: newBook.title, author: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>

          {/* Create a add new form  */}
          <form className="formDiv">
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleTitleChange}
            />

            <label htmlFor="author">Author: </label>
            <input
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleAuthorChange}
            />
          </form>
          <button type="submit" onClick={handleSubmit}>
            Add Book
          </button>
        </div>
        <div className="bookCardsDiv">
          {/* Map through books */}
          {books.map((book) => (
            <div key={book.title} className="bookCard">
              <h2 className="card-title">{book.title}</h2>
              <p className="card-text"> by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
