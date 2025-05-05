import { useState } from "react";

const Input = ({ onSubmit, placeholder }) => {
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
        placeholder={placeholder}
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
        <TaskItem task={task} toggleTask={toggleTask} key={task.id} />
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

const Todo = ({
  tasks,
  title,
  handleAddTask,
  toggleTask,
  deleteTodo,
  todoId,
}) => {
  return (
    <div>
      <TodoTitle title={title} />

      <div>
        <Input
          placeholder={"Add new task"}
          onSubmit={(task) => handleAddTask(task, todoId)}
        />
        <button onClick={() => deleteTodo(todoId)}>Delete</button>
      </div>
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

  const [nextTaskId, setNextTaskId] = useState(1);
  const [nextTodoId, setNextTodoId] = useState(1);

  const handleAddTask = (task, todoId) => {
    console.log("New Task:", task);
    const newTask = {
      id: nextTaskId,
      task,
      done: false,
    };

    setNextTaskId((prevId) => prevId + 1);

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

  const handleAddTodo = (title) => {
    const newTodo = {
      id: nextTodoId,
      tasks: [],
      title,
    };

    setNextTodoId((prevId) => prevId + 1);

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <Input placeholder={"Add new Todo"} onSubmit={handleAddTodo}></Input>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todoId={todo.id}
          title={todo.title}
          tasks={todo.tasks}
          handleAddTask={handleAddTask}
          toggleTask={toggleTask}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
