import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("useEffect - Updating document title");
  });

  // document.title = `Clicked ${count} times`;

  function UpdateCount() {
    setCount((prevValue) => prevValue + 1);
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={UpdateCount}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
