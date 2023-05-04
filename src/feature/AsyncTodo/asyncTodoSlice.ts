import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../../types/todo';
import { createTodo, deleteTodo, fetchAllTodos, toggleStatus } from './todoAsyncActions';

export type TodoSlice = {
  status: 'idle' | 'loading' | 'finished' | 'error';
  list: ITodo[];
};
const initialState: TodoSlice = {
  status: 'idle',
  list: [],
};
const todoAsyncSlice = createSlice({
  name: '@todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'finished';
      })
      .addCase(fetchAllTodos.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        const todo = state.list.find((item) => item.id === action.payload.id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoAsyncSlice.reducer;
