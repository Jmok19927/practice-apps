import React from "react";

var BillingForm = (props) => {
  return (
  <div>
    BillingForm
    <form>
      <p>Credit Card #: <input onChange={props.change} defaultValue='' type="text" name="creditCard"></input></p>
      <p>Expiry Date: <input onChange={props.change} defaultValue='' type="text" name="expiry"></input></p>
      <p>CVV <input onChange={props.change} defaultValue='' type="text" name="CVV"></input></p>
      <p>Billing ZIP Code <input onChange={props.change} defaultValue='' type="text" name="billingZIP"></input></p>
    </form>
    <button onClick={props.next}>Next</button>
  </div>

  )
}

export default BillingForm;