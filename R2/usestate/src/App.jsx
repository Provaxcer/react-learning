import { useState, useEffect } from "react";

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

function TaskForm(props) {
  return (
    <div>
      <input
        type="text"
        value={props.input}
        placeholder="Task Name"
        onChange={(e) => props.onInputChange(e.target.value)}
      />
      <button onClick={props.onAdd}>Add Task</button>
    </div>
  );
}

function TaskList(props) {
  return (
    <div>
      <h1>Tasks: {props.tasks.length}</h1>
      {props.tasks.map((allTask) => {
        return (
          <div key={allTask.id}>
            <Task
              name={allTask.name}
              completed={allTask.completed}
              onDelete={() => props.onDelete(allTask)}
              onComplete={() => props.onComplete(allTask)}
            />
          </div>
        );
      })}
    </div>
  );
}

function TaskSummary(props) {
  const completedTasks = props.tasks.filter((task) => task.completed === true);
  return <p>Completed tasks: {completedTasks.length}</p>;
}

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React", completed: false },
    { id: 2, name: "Build a website", completed: false },
    { id: 3, name: "Practice JavaScript", completed: false },
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("App loaded");
  }, []);

  function addTask() {
    if (input.trim() === "") return;

    setTasks([...tasks, { id: Date.now(), name: input, completed: false }]);

    setInput("");
  }

  function deleteTask(taskToDelete) {
    const result = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(result);
  }

  function completeTask(taskToComplete) {
    const result = tasks.map((task) => {
      if (task.id === taskToComplete.id) {
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
      <TaskSummary tasks={tasks} />
      <TaskForm input={input} onInputChange={setInput} onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
    </div>
  );
}

export default App;