import React from "react";
import BookDetail from "../Components/BookDetail";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DetailPage = ({match}) => {
    const {
        params : {bookId}
    } = match;
    const [book,setBook] = useState(null);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
        const fetchBook = async () => {
          setLoading(true);
          setError(false);
          try {
            const result = await axios.get(`${API_BASE_URL}/${bookId}`);
            setBook(result.data);
          } catch (error) {
            setError(true);
          }
          setLoading(false);
        };
        
        fetchBook();
      }, [bookId]);

    return ( 
        <div>
            <Link to={`/`}>Go back to search books</Link>
      {loading && (
        <div style={{ color: `black` }}>
          loading books for:<strong>{bookId}</strong>
        </div>
      )}
      {error && (
        <div style={{ color: `black` }}>
          some error occurred,try again
        </div>
      )}
      {book && <BookDetail book={book} />}
        </div>
     );
}
 
export default DetailPage;