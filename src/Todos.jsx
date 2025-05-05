import { useReducer } from "react";
import { Input } from "./Input";
import { Todo } from "./Todo";
import { reducer } from "./reducer";

export const Todos = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [
      {
        id: 1,
        title: "Todo 1",
        tasks: [
          { id: 1, task: "Task 1", done: false },
          { id: 2, task: "Task 2", done: false },
        ],
      },
      {
        id: 2,
        title: "Todo 2",
        tasks: [
          { id: 3, task: "Task 3", done: false },
          { id: 4, task: "Task 4", done: false },
        ],
      },
    ],
    nextTodoId: 2,
    nextTaskId: 5,
  });

  return (
    <div>
      <Input
        placeholder={"Add new Todo"}
        onSubmit={(title) => dispatch({ type: "add-todo", title })}
      ></Input>
      {state.todos.map((todo) => (
        <Todo
          key={todo.id}
          todoId={todo.id}
          title={todo.title}
          tasks={todo.tasks}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};
