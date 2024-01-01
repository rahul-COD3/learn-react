import { useState } from "react";

export default function MultiForm() {
  const [name, setValue] = useState({ firstName: "", lastName: "" });
  return (
    <div>
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
      </form>
    </div>
  );
}
