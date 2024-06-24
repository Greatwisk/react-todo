//import React from "react";

const TodoList =() => {
    const todoList = [
        'Learn React',
        'Build App',
        'Eat at Michelin restaurant',
    ];

    return (
        <ul>
        {todoList.map((todo, index) => (
            <li key={index}>{todo}</li>
    ))}
        </ul>
    );
};export default TodoList;