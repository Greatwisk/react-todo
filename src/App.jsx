//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const todoList = [
    { id: 1, title: "Go to store" },
    { id: 2, title: "Watch the movie" },
    { id: 3, title: "Eating at MIchelin rated restaurant" },
  ];
  return (
    <>
    <h1>Todo List</h1>
<ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
