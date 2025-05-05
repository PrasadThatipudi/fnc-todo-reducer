import { Input } from "./Input";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

export const Todo = ({
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
