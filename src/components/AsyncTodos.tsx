import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import TodoListAsync from './TodoListAsync';

const AsyncTodos = () => {
    return (
        <div>
            <h2>Async Slice</h2>
            <NewTodoForm/>
            <TodoListAsync/>
        </div>
    );
};

export default AsyncTodos;