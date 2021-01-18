import React from 'react';

function TodoList({todos, toggleTodo, deleteTodo}) {
    const todoList = todos.map(todo => {
        const label = todo.completed ? 'IN PROGRESS' : 'COMPLETED';

        return (
            <li key={todo.id}>
                {todo.title}
                <button onClick={()=> toggleTodo(todo.id, todo.completed)}>{label}</button>
                <button onClick={()=> deleteTodo(todo.id)}>DELETE</button>
            </li>
        );
    });

    return <ul>{todoList}</ul>;
}

export default TodoList;