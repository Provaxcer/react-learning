import { useState } from "react";

function PnLTracker() {
  const [balance, setBalance] = useState(10000);

  return (
    <div>
      <p>Balance: ₹{balance}</p>
      <button onClick={() => setBalance(balance + 500)}>
        Trade Won
      </button>

      <button onClick={() => setBalance(balance - 500)}>
        Trade Lost
      </button>
    </div>
  );
}

export default PnLTracker;