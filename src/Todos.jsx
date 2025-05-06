import { useReducer } from "react";
import { Input } from "./Input";
import { Todo } from "./Todo";
import { reducer } from "./reducer";

export const Todos = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    nextTodoId: 2,
    nextTaskId: 5,
  });

  return (
    <div className="app-wrapper">
      <div>
        <Input
          placeholder={"Add new Todo"}
          onSubmit={(title) => dispatch({ type: "add-todo", title })}
        ></Input>
      </div>
      {state.todos.map((todo) => {
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
