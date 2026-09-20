import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build a website",
    "Practice JavaScript",
    "Build a React project",
  ]);

  const [input, setInput] = useState("");

  function addTask() {
    setTasks([...tasks, input]);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Task Name"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTask}>Add Task</button>
      <h1>Tasks:</h1>
      <p>{tasks}</p>
    </div>
  );
}

export default App;
