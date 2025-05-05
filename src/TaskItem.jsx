export const TaskItem = ({ task, toggleTask }) => {
  const textDecoration = task.done ? "line-through" : "none";

  return (
    <li>
      <p onClick={() => toggleTask(task.id)} style={{ textDecoration }}>
        {task.task}
      </p>
    </li>
  );
};
