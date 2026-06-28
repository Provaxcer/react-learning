import { useState } from "react";

function TradeStatus() {
  const [balance, setBalance] = useState(10000);

  return (
    <div>
      <p>Balance: ₹{balance}</p>

      {balance > 10000 ? <p>🟢 In Profit</p> : <p>🔴 In Loss</p>}

      {balance < 8000 && <p>⚠️ Warning: High drawdown!</p>}

      <button onClick={() => setBalance(balance + 500)}>Trade Won</button>
      <button onClick={() => setBalance(balance - 500)}>Trade Lost</button>
    </div>
  );
}

export default TradeStatus;