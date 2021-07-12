import React, { useState } from "react";
import BookSearch from "../Components/BookSearch";
import Loading from "../Components/Loading";
import BookList from "../Components/BookList";
import axios from "axios";

const Searchpage = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const [books,setBooks] = useState({items:[]});
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value)
    }
  
    let API = `https://www.googleapis.com/books/v1/volumes`;
  
    const fetch = async() => {
      setLoading(true);
      setError(false);
    try {
      const result = await axios.get(`${API}?q=${searchTerm}`);
      setBooks(result.data);
    }
    catch(error) {
      setError(true);
    }
    const result = await axios.get(`${API}?q=${searchTerm}`);
    setBooks(result.data);
    setLoading(false);
  }
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch();
  }
    return ( 
        <div>
      <BookSearch
        handleSubmit = {handleSubmit}
        handleChange = {handleChange}
        searchTerm = {searchTerm}
        error = {error}
        />
      <Loading
        searchTerm = {searchTerm}
        loading = {loading}
      />  
      <BookList
        books = {books}/>
      
    </div>
     );
}
 
export default Searchpage;