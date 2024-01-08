import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../../App";

function ComponentC() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <h1>
        Hii {user}, You are learning from {channel}
      </h1>
    </div>
  );
}

export default ComponentC;
