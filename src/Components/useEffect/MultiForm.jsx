import { useState } from "react";

export default function MultiForm() {
  const [name, setValue] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName + " - " + name.lastName}
      <form>
        <input
          onChange={(e) => setValue({ ...name, firstName: e.target.value })}
          type="text"
          placeholder="First Name"
          value={name.firstName}
        />
        <input
          onChange={(e) => setValue({ ...name, lastName: e.target.value })}
          type="text"
          placeholder="Last Name"
          value={name.lastName}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
