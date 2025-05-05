import { TaskItem } from "./TaskItem";

export const TodoList = ({ tasks, dispatch, todoId }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          dispatch={dispatch}
          key={task.id}
          todoId={todoId}
        />
      ))}
    </ul>
  );
};
