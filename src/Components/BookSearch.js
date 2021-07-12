import React from "react";
import "../CSS/BookSearch.css"

const BookSearch = ({
    handleSubmit,
    handleChange,
    searchTerm,
    error
}) => {
    return ( 
        <form onSubmit={handleSubmit}>
        <label>
          <span>BookSearch.Whaaaat</span>
          <br/>
          <input 
            type="text"
            placeholder="Looking for a book?"
            value={searchTerm}
            onChange={handleChange}
            required />
            <br/>
            <button type="submit">Search</button>
        </label>
        {
        error && <div style={{color: `black`}}>Some error occurred, try again</div>
        }
      </form>
     );
}
 
export default BookSearch;