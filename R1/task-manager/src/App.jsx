import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <span>Enter text: </span>
      <input type="text"
      value={text} 
      onChange={handleChange} />
      <p>Hello, {text}</p>
    </div>
  );
}

export default App;
