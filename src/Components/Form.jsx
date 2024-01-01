import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <form>
        <input
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}
          //   above commented code is for understanig porpose.
          //   onChange={(e) => handleChange(e)}
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
      {name}
    </div>
  );
}
export default Form;
