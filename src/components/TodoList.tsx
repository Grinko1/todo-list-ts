import { useAppSelector } from 'redux-hook';

import TodoItem from './TodoItem';
import { ITodo } from '../types/todo';

interface ITodoList {
  todos: ITodo[];
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
}
const TodoList = ({ todos, handleDelete, handleToggle }: ITodoList) => {
  // const todos = useAppSelector<ITodo[]>(state => state)

  return (
    <ul>
      {todos && todos.map((todo) => (
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
