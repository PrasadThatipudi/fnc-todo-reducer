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

const TodoTitle = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const Todo = ({ tasks, title, handleAddTask, toggleTask, todoId }) => {
  return (
    <div>
      <TodoTitle title={title} />
      <TodoInput onSubmit={(task) => handleAddTask(task, todoId)} />
      <TodoList tasks={tasks} toggleTask={toggleTask} todoId={todoId} />
    </div>
  );
};

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      tasks: [{ id: 0, task: "Learn React", done: false }],
      title: "Todo List",
    },
  ]);

  const handleAddTask = (task, todoId) => {
    console.log("New Task:", task);
    const newTask = {
      id: Date.now(),
      task,
      done: false,
    };

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, tasks: [...todo.tasks, newTask] } : todo
      )
    );
  };

  const toggleTask = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        tasks: todo.tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        ),
      }))
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todoId={todo.id}
          title={todo.title}
          tasks={todo.tasks}
          handleAddTask={handleAddTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
};

export default Todos;
