import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      COMPONENT F - {countContext.count}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>
        Increment
      </button>
    </div>
  );
}

export default ComponentF;
