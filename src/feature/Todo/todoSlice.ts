import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TodoItem from 'components/TodoItem';
import { ITodo } from 'types/todo';

const initialState: ITodo[] = [];

const todoSlice = createSlice({
  name: '@todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: String(new Date()),
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      // return state.map(todo => {
      //     if(todo.id !== action.payload) return todo
      //     return{
      //         ...todo,
      //         completed : !todo.completed
      //     }
      // })
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
