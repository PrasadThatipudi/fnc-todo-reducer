import { useState } from "react";

const TodoInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      console.log("New Todo:", inputValue);
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

const TodoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
};

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Learn React", done: false },
  ]);

  const handleAddTask = (task) => {
    const newTask = {
      id: Date.now(),
      task,
      done: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput onSubmit={handleAddTask} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default Todo;
