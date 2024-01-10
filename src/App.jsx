import React, { useReducer } from "react";
import ComponentA from "./Components/useReducer/Component/ComponentA";
import ComponentB from "./Components/useReducer/Component/ComponentB";
import ComponentC from "./Components/useReducer/Component/ComponentC";

export const CountContext = React.createContext();

const initalState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initalState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
