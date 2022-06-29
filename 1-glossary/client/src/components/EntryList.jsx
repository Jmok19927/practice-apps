import React from 'react';
import Entry from './Entry.jsx';

//pass in list of entry objects from state

var EntryList = (props) => {
  return (
  <div>
    {props.entries.map((entry, index) => {
      return <Entry entryObj={entry} key={index}/>
    })}
    </div>
  )
}




export default EntryList;