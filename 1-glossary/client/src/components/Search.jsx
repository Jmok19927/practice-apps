import React from 'react';


var Search = (props) => {
  return (
    <form>
      <label>
        Search Glossary: <input type="text" name="query"/>
      </label>
      <input type="submit" value="Submit"/>
    </form>)
}




export default Search;