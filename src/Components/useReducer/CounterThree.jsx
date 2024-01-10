import React, { useReducer } from "react";

const initialSatate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialSatate;
    default:
      return state;
  }
};

function CounterTree() {
  const [count, dispatch] = useReducer(reducer, initialSatate);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialSatate);
  return (
    <>
      <div>Count - {count}</div>
      <div>Count - {countTwo}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </>
  );
}

export default CounterTree;
