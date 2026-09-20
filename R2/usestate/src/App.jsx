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

  function deleteTask(){
    const result = tasks.filter((num)=>{
      return num == key
    })

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
      <div>
        {tasks.map((allTask) => {
          return (
            <div>
              <p key={allTask}>{allTask}</p>
              <button onClick={deleteTask}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
