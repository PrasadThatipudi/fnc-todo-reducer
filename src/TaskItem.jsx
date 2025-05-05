export const TaskItem = ({ task, dispatch, todoId }) => {
  const textDecoration = task.done ? "line-through" : "none";

  return (
    <li>
      <p
        onClick={() => dispatch({ type: "toggle-task", todoId, taskId: task.id })}
        style={{ textDecoration }}
      >
        {task.task}
      </p>
    </li>
  );
};
