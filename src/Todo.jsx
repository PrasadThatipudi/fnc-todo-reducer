import { Input } from "./Input";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

export const Todo = ({ tasks, title, todoId, dispatch }) => {
  return (
    <div className="todo">
      <TodoTitle title={title} />

      <div className="task-controls">
        <div className="input-wrapper">
          <Input
            placeholder={"Add new task"}
            onSubmit={(task) => dispatch({ type: "add-task", task, todoId })}
          />
        </div>
        <button onClick={() => dispatch({ type: "delete-todo", todoId })}>
          Delete
        </button>
      </div>
      <TodoList tasks={tasks} dispatch={dispatch} todoId={todoId} />
    </div>
  );
};
