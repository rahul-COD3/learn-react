import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Position changed");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("useEffect Removed");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      x - {x} : y - {y}
    </div>
  );
}

export default HookMouse;
