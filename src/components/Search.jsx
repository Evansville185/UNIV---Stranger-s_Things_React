import React from 'react';

const Search = () => {
    return (
        <form className="searchContainer">
          <input type="text" id="searchBar" name="search-term" placeholder="Search"></input>
          <button type="submit" id="searchBtn">Submit</button>
        </form>
    )
}

export default Search;