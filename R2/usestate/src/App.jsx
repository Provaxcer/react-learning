import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build a website",
    "Practice JavaScript",
    "Build a React project",
  ]);

  return (
    <div>
      <input type="text" value={tasks} placeholder="Task Name" onChange={(e) => {
        setTasks(e.text.value);
      }}/>
      <button>Submit</button>
      <h1>Tasks:</h1>
    </div>
  );
}

export default App;
