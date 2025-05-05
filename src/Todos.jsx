import { useReducer, useEffect, useState } from "react";
import { Input } from "./Input";
import { Todo } from "./Todo";
import { reducer } from "./reducer";

const fetchTodos = async () => {
  const response = await fetch("/api/todos");
  const data = await response.json();

  return data;
};

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((todos) => {
      console.log(todos);
      setTodos(todos);
    });
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    todos,
    nextTodoId: 2,
    nextTaskId: 5,
  });

  return (
    <div>
      <Input
        placeholder={"Add new Todo"}
        onSubmit={(title) => dispatch({ type: "add-todo", title })}
      ></Input>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todoId={todo.id}
            title={todo.title}
            tasks={todo.tasks}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};
