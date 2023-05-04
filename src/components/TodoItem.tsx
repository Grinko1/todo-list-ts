import { ITodo } from 'types/todo';
import '../App.css';

export interface ITodoItem extends ITodo {
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
}
const TodoItem = ({ title, id, completed, handleDelete, handleToggle }: ITodoItem) => {
  return (
    <li className="list-item">
      <input type="checkbox" checked={completed} onChange={() => handleToggle(id)} />
      <span>{title}</span>
      <span className="delete" onClick={() => handleDelete(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
