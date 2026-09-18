import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>My Tasks</h1>

      <input type="text" onChange={(e) => setInput(e.target.value)} />

      <p>{input}</p>
    </div>
  );
}

export default App;