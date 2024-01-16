import React, { useState } from "react";

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((preValue) => preValue + 1);
  };
  const decrement = () => {
    setCount((preValue) => preValue - 1);
  };
  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
