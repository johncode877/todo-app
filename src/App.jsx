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
  { text: 'Desplegar api rest python en Railway', completed: true },
];

function App() {

  // el estado es inmutable 
  // es por ello que react 
  // nos ofrece una funcion para modificar el valor
  // del estado
  // el valor del input esta atado al estado
  const [searchValue, setSearchValue] = React.useState('');
   
  const [todos, setTodos] = React.useState(defaultTodos);
   
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length; 

  console.log('Los usuarios buscan todos de ' + searchValue);

  // <> es la forma abreviada de <React.Fragment> 
  return (
    <>
      {/*<> <React.Fragment> */}

      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
