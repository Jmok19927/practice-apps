import React from 'react';


var Search = (props) => {
  return (
    <form>
      <label>
        Search Glossary: <input onChange={props.search} type="text" name="query" defaultValue=''/>
      </label>
    </form>)
}




export default Search;