import { TaskItem } from "./TaskItem";

export const TodoList = ({ tasks, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem task={task} toggleTask={toggleTask} key={task.id} />
      ))}
    </ul>
  );
};
