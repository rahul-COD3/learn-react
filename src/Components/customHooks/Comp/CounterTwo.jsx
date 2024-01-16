import React from "react";
import useCounter from "../useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(20);
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

export default CounterTwo;
