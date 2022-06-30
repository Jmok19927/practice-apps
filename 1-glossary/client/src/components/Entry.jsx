import React from 'react';

// pass in an object with 2 keys, term and definition
// make a button to change the state and edit the object
// keep track of index in order to affect state properly
var Entry = (props) => {
  return (<div style={{display: "flex"}}> Term: {props.entryObj.term}
  <p style={{marginLeft:"auto"}}>Definition: {props.entryObj.def}</p>
  <div style={{marginLeft: "auto"}}>
  <button onClick={() => {props.edit(props.entryObj._id)}} style={{marginLeft: "auto"}}>Edit</button>
  <button onClick={()=> {props.delete(props.entryObj._id)}}>Delete</button></div>
  </div>)
}




export default Entry;