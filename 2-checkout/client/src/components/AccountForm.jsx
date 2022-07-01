import React from "react";

var AccountForm = (props) => {
  return (
    <div>
      AccountForm
      <form>
        <p>Name:
        <input onChange={props.change} defaultValue='' type="text" name="name"></input></p>
        <p>Email: <input onChange={props.change} defaultValue='' type="text" name="email"></input></p>
        <p>Password: <input onChange={props.change} defaultValue='' type="text" name="password"></input></p>
      </form>
      <button onClick={props.next}>Next</button>
    </div>

  )

}

export default AccountForm;