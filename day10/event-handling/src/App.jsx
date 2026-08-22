import { useState } from "react"

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <p>Typed Name: {name}</p>
    </div>
  );
}

function App () {
  return (<NameInput />)
}

export default App;