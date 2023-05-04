import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodo } from '../../types/todo';
import { TodoSlice } from './asyncTodoSlice';

export const fetchAllTodos = createAsyncThunk<
  ITodo[],
  undefined,
  { state: { todosAsync: TodoSlice } }
>(
  'todos/fetchTodos',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return (await res.json()) as ITodo[];
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().todosAsync;
      if (status === 'loading') {
        return false;
      }
    },
  },
);

export const createTodo = createAsyncThunk('todos/create', async (text: string) => {
  const newTodo: Omit<ITodo, 'id'> = {
    userId: 1,
    title: text,
    completed: false,
  };
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  });
  return (await res.json()) as ITodo;
});
export const toggleStatus = createAsyncThunk('todos/toggle', async (todo: ITodo) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed: !todo.completed,
    }),
  });
  return (await res.json()) as ITodo;
});

export const deleteTodo = createAsyncThunk('todos/delete', async (id: ITodo['id']) => {
   await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  });

  return (id) as ITodo['id'] ;
});
