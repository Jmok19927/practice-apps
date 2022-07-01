import React from "react";

var Confirmation = (props) => {
  return (
  <div>
    Confirmation Page
    <button onClick={props.next}>Done!</button>
  </div>

  )
}

export default Confirmation;