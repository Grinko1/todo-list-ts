import { createTodo } from 'feature/AsyncTodo/todoAsyncActions';
import { addTodo } from 'feature/Todo/todoSlice';
import { useState } from 'react';
import { useAppDispatch } from 'redux-hook';
import '../App.css';

const NewTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  // const addTodoHandler = () => {
  //   if (text.length) {
  //     dispatch(addTodo(text));
  //   }
  //   setText('');
  // };
  const addTodoHandler = () => {
    if (text.length) {
      dispatch(createTodo(text));
    }
    setText('');
  };
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
};

export default NewTodoForm;
