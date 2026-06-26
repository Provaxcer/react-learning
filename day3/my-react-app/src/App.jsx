import { useState } from "react";

function Counter() {
  const [InitialBalance, setCount] = useState(10000);

  return (
    <div>
      <p>{InitialBalance}</p>
      <button onClick={() => setCount(InitialBalance + 500)}>
        Trade Won
      </button>
      <button onClick={() => setCount(InitialBalance - 500)}>
        Trade Lost
      </button>
    </div>
  );
}

export default Counter;