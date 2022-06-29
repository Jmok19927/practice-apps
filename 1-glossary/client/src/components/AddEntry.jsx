import React from 'react';


var AddEntry = (props) => {
  return (
    <form onSubmit={props.handleAddSubmit}>
      <label>
        Add New Term: <input type="text" name="query" defaultValue='' onChange={props.handleAddChange}/>
      </label>
      <input type="submit" />
    </form>)
}




export default AddEntry;