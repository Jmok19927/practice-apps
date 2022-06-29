import React from 'react';

// pass in an object with 2 keys, term and definition
// make a button to change the state and edit the object
// keep track of index in order to affect state properly
var Entry = (props) => {
  return (<div>{props.entryObj.term}: {props.entryObj.def}</div>)
}




export default Entry;