import React from "react";
import { Link } from "react-router-dom";
import "../CSS/BookList.css"



const Book = ({ book }) => {
  return (
    
      <div className="item">
        <img
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${
            book.id
          }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <Link to={`/book/${book.id}`}>Show details</Link>
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors}</p>
          <p>{book.volumeInfo.publishedDate}</p>
        </div>
      </div>
      
    
  );
};

const BooksList = ({ books }) => {
  return (
    <div className="grid">
    
      {books.items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </div>
  );
};

export default BooksList;
