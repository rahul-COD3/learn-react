import React, { useState } from "react";

function HooksCounter() {
  const initalValue = 0;
  const [count, setCount] = useState(initalValue);
  return (
    <div>
      <div>Count:{count}</div>

      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevValue) => prevValue - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initalValue)}>Reset</button>
    </div>
  );
}

export default HooksCounter;
