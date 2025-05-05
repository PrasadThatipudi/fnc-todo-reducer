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

const TaskItem = ({ task, toggleTask }) => {
  const textDecoration = task.done ? "line-through" : "none";

  return (
    <li>
      <p onClick={() => toggleTask(task.id)} style={{ textDecoration }}>
        {task.task}
      </p>
    </li>
  );
};

const TodoList = ({ tasks, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem task={task} toggleTask={toggleTask} />
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

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput onSubmit={handleAddTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default Todo;
