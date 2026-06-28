import { useState } from "react";

function PnLTracker(){

  const [balance, currentPnL] = useState(10000)

  return(

    <div>

<p>{balance}</p>
{balance > 10000 ? <p>🟢 Profitable Session</p> : <p>Loss</p>}
    {balance < 9000 && <p>⚠️ Stop Loss Hit!</p>}

    <button onClick={() => currentPnL(balance + 500)}>Trade Won</button>
      <button onClick={() => currentPnL(balance - 500)}>Trade Lost</button>
    </div>
    
  )
}

export default PnLTracker;