import { useState } from "react";
import { Input } from "./Input";
import { Todo } from "./Todo";

export const Todos = () => {
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
