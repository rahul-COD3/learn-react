import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
}

export default IntervalHookCounter;
