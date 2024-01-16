import React, { useState } from "react";
import useInput from "../useInput";

function UserForm() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">First Name</label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input {...bindLastName} type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
