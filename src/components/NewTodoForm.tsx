import '../App.css';

interface INewTodo {
  text: string;
  setText: (text: string) => void;
  addTodo: () => void;
}

const NewTodoForm = ({ text, setText, addTodo }: INewTodo) => {
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default NewTodoForm;
