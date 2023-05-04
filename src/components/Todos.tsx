import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import TodoListAsync from './TodoListAsync';

const Todos = () => {
    return (
        <div>
            <h2> Slice</h2>
            <NewTodoForm/>
            <TodoList/>
        </div>
    );
};

export default Todos;