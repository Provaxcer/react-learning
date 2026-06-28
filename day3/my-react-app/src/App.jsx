import { useState } from "react";

function TradeStatus() {
  const [balance, setBalance] = useState(10000);  // starting balance

  return (
    <div>
      <p>Balance: ₹{balance}</p>

      {/* if balance is above 10000 → in profit, else → in loss */}
      {balance > 10000 ? <p>🟢 In Profit</p> : <p>🔴 In Loss</p>}

      {/* only show this warning if balance drops below 8000 */}
      {balance < 8000 && <p>⚠️ Warning: High drawdown!</p>}

      <button onClick={() => setBalance(balance + 500)}>Trade Won</button>
      <button onClick={() => setBalance(balance - 500)}>Trade Lost</button>
    </div>
  );
}

export default TradeStatus;