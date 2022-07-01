import React from "react";

var AddressForm = (props) => {
  return (
  <div>
    AddressForm
    <form>
      <p>Line1:
      <input onChange={props.change} defaultValue='' type="text" name="line1"></input></p>
      <p>Line2: <input onChange={props.change} defaultValue='' type="text" name="line2"></input></p>
      <p>City: <input onChange={props.change} defaultValue='' type="text" name="city"></input></p>
      <p>State: <input onChange={props.change} defaultValue='' type="text" name="State"></input></p>
      <p>ZIP Code: <input onChange={props.change} defaultValue='' type="text" name="zip"></input></p>
      <p>Phone Number: <input onChange={props.change} defaultValue='' type="text" name="phoneNumber"></input></p>
    </form>
    <button onClick={props.next}>Next</button>
  </div>

  )
}

export default AddressForm;