import React from "react";
import useCounter from "../useCounter";

function Couter() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <div>Count - {count}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Couter;
