import { Input } from "./Input";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

export const Todo = ({ tasks, title, todoId, dispatch }) => {
  return (
    <div>
      <TodoTitle title={title} />

      <div>
        <Input
          placeholder={"Add new task"}
          onSubmit={(task) => dispatch({ type: "add-task", task, todoId })}
        />
        <button onClick={() => dispatch({ type: "delete-todo", todoId })}>
          Delete
        </button>
      </div>
      <TodoList tasks={tasks} dispatch={dispatch} todoId={todoId} />
    </div>
  );
};
