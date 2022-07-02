import React from "react";

var Confirmation = (props) => {
  return (
  <div>
    Confirmation Page

    <div>Account Data:
    <ul>
      <p>Name: {props.values.name}</p>
      <p>Email: {props.values.email}</p>
      <p>Password: {props.values.password}</p>
    </ul>
    </div>
    <div>Address:
      <ul>
        <p>Line 1: {props.values.line1}</p>
        <p>Line 2: {props.values.line2}</p>
        <p>City: {props.values.city}</p>
        <p>State: {props.values.state}</p>
        <p>ZIP Code: {props.values.ZIP}</p>
        <p>Phone Number: {props.values.phonenumber}</p>
      </ul>
    </div>
    <div>Billing:
      <ul>
      <p>Credit Card Number: {props.values.number}</p>
      <p>Expiry Date: {props.values.expiry}</p>
      <p>CVV: {props.values.CVV}</p>
      <p>Billing Zip Code: {props.values.billingZIP}</p>
      </ul>
    </div>
    <button onClick={props.next}>Purchase!</button>
  </div>

  )
}

export default Confirmation;