import React, { useState } from "react";

function HookCoutnerThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        type="text"
      />
      <input
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        type="text"
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <div>{JSON.stringify(name)}</div>
    </div>
  );
}

export default HookCoutnerThree;
