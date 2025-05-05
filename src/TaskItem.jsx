export const TaskItem = ({ task, dispatch, todoId }) => {
  const className = task.done ? "task-done" : "none";

  return (
    <div className="task-item">
      <p
        onClick={() =>
          dispatch({ type: "toggle-task", todoId, taskId: task.id })
        }
        className={className}
      >
        {task.task}
      </p>
    </div>
  );
};
