import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './feature/Todo/todoSlice'
import todoAsyncReducer from './feature/AsyncTodo/asyncTodoSlice'

const rootReducer = combineReducers({
  todos: todoReducer,
  todosAsync: todoAsyncReducer
});

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch