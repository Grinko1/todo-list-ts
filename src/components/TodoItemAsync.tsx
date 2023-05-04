import { ITodo } from 'types/todo';
import '../App.css';

export interface ITodoItem extends ITodo {
  handleDelete: (id: string) => void;
  handleToggle: (todo: ITodo) => void;
}
const TodoItemAsync = ({ title, id, completed, handleDelete, handleToggle }: ITodoItem) => {
  return (
    <li className="list-item">
      <input type="checkbox" checked={completed} onChange={() => handleToggle({id,title, completed})} />
      <span>{title}</span>
      <span className="delete" onClick={() => handleDelete(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItemAsync;
