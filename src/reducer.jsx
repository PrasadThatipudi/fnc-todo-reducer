const addNewTodo = (state, action) => {
  const newTodo = {
    id: state.nextTodoId,
    tasks: [],
    title: action.title,
  };

  return {
    ...state,
    todos: [...state.todos, newTodo],
    nextTodoId: state.nextTodoId + 1,
  };
};

const addNewTask = (state, action) => {
  const newTask = {
    id: state.nextTaskId,
    task: action.task,
    done: false,
  };

  const newTodos = state.todos.map((todo) => {
    if (todo.id === action.todoId) {
      return {
        ...todo,
        tasks: [...todo.tasks, newTask],
      };
    }
    return todo;
  });

  return {
    ...state,
    todos: newTodos,
    nextTaskId: state.nextTaskId + 1,
  };
};

const deleteTodo = (state, action) => {
  const newTodos = state.todos.filter((todo) => todo.id !== action.todoId);

  return {
    ...state,
    todos: newTodos,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return addNewTodo(state, action);
    case "add-task":
      return addNewTask(state, action);
    case "delete-todo":
      return deleteTodo(state, action);
    default:
      return state;
  }
};
