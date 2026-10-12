import { useState } from "react";

function Task(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.completed ? "✓ " : ""}</p>
      <button onClick={props.onDelete}>Delete</button>
      {!props.completed && <button onClick={props.onComplete}>Complete</button>}
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    { name: "Learn React", completed: false },
    { name: "Build a website", completed: false },
    { name: "Practice JavaScript", completed: false },
  ]);

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
              <Task
                name={allTask.name}
                completed={allTask.completed}
                onDelete={() => deleteTask(allTask)}
                onComplete={() => completeTask(allTask)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
