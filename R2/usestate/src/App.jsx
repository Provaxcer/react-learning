import { useState } from "react";

function Task(props) {
  return ( 
    <div>
    <p>{props.name}</p>
    <p>{props.completed? "✓ " : ""}</p>
    </div>
  )
}

function App() {
  const [tasks, setTasks] = useState([
    { name: "Learn React", completed: false },
    { name: "Build a website", completed: false },
    { name: "Practice JavaScript", completed: false }
  ]);

  return (
<div>
  {Task.map => ((tasks) {
      <tasks name="Learn React" completed={false} />
    })}
</div>
    
  );

  const [input, setInput] = useState("");

  function addTask() {
    setTasks([
      ...tasks,
      {
        name: input,
        completed: false,
      },
    ]);
  }

  function deleteTask(taskToDelete) {
    const result = tasks.filter((task) => {
      return task.name !== taskToDelete.name;
    });

    setTasks(result);
  }

  function completeTask(taskToComplete) {
    const result = tasks.map((task) => {
      if (task.name === taskToComplete.name) {
        return {
          ...task,
          completed: true,
        };
      }

      return task;
    });

    setTasks(result);
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

      <div>
        {tasks.map((allTask) => {
          return (
            <div key={allTask.name}>
              <p>
                {allTask.completed ? "✓ " : ""}
                {allTask.name}
              </p>

              <button onClick={() => deleteTask(allTask)}>Delete</button>

              {!allTask.completed && (
                <button onClick={() => completeTask(allTask)}>Complete</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;