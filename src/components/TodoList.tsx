import { useAppDispatch, useAppSelector } from 'redux-hook';
import TodoItem from './TodoItem';
import { removeTodo, toggleTodo } from 'feature/Todo/todoSlice';
import { selectorAllTodos } from 'feature/Todo/todoSelectors';

const TodoList = () => {
  const todos = useAppSelector(selectorAllTodos);
  console.log(todos);
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(removeTodo(id));
  };
  const handleToggle = (id: string) => {

    dispatch(toggleTodo(id));
  };
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleDelete={handleDelete} 
            handleToggle={handleToggle}
          />
        ))}
    </ul>
  );
};

export default TodoList;
