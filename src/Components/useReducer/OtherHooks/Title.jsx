import React from "react";

function Title() {
  console.log("Rendring Title");
  return <h2>useCallback Hooks</h2>;
}

export default React.memo(Title);
