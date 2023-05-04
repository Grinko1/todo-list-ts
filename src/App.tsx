import NewTodoForm from 'components/NewTodoForm';
import TodoList from 'components/TodoList';
import { useEffect, useState } from 'react';
import { ITodo } from './types/todo';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [text, setText] = useState('');

  const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
    const data: ITodo[] = await res.json();
    setTodos(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const toggleCompleted = (id: string) => {
    setTodos(
      todos.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          completed: !item.completed,
        };
      }),
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const addTodo = () => {
    const newTodo: ITodo = {
      id: String(new Date()),
      title: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText(' ');
  };
  return (
    <div>
      <NewTodoForm text={text} setText={setText} addTodo={addTodo} />
      <TodoList todos={todos} handleDelete={handleDelete} handleToggle={toggleCompleted} />
    </div>
  );
}

export default App;
