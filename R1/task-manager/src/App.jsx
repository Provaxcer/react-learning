import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build a website",
    "Practice JavaScript"
  ]);

  return (
    <div>
      <h1>My Tasks</h1>

      <p>{tasks[0]}</p>
      <p>{tasks[1]}</p>
      <p>{tasks[2]}</p>
    </div>
  );
}

export default App;