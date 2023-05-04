import { useAppDispatch, useAppSelector } from 'redux-hook';
import { selectorAsyncTodos } from 'feature/AsyncTodo/todoAsyncSelector';
import { useEffect } from 'react';
import { deleteTodo, fetchAllTodos, toggleStatus } from 'feature/AsyncTodo/todoAsyncActions';
import { ITodo } from 'types/todo';
import TodoItemAsync from './TodoItemAsync';

const TodoListAsync = () => {

  const {list} = useAppSelector(selectorAsyncTodos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos())
  },[])
  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id))
  };
  const handleToggle = (todo: ITodo) => {
    dispatch(toggleStatus(todo))
  };
  return (
    <ul>
      {list &&
        list.map((todo) => (
          <TodoItemAsync
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

export default TodoListAsync;
