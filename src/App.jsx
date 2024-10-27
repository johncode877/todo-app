import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

import React from 'react'

const defaultTodos = [
  { text: 'Aprender Reactjs', completed: false },
  { text: 'Certificarme en AWS Foundations', completed: false },
  { text: 'Aprender Nodejs', completed: true },
  { text: 'Desplegar api rest python en Railway', completed: false },
];

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <React.Fragment> */}

      <TodoCounter completed={1} total={defaultTodos.length} />

      <TodoSearch />

      <TodoList>
        {/* 
           <TodoItem />
           <TodoItem />
        */}

        {defaultTodos.map(todo => (
            <TodoItem 
                 key={todo.text} 
                 text={todo.text} 
                 completed={todo.completed}
                 />
          ))}
        
      </TodoList>

      <CreateTodoButton />

      {/* </React.Fragment> */}
    </>
  )
}


export default App
