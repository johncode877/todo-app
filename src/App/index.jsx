import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
//import './App.css'

import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoSearch } from '../components/TodoSearch';
import { useLocalStorage } from './useLocalStorage';
import React from 'react';

/*

const defaultTodos = [
  { text: 'Aprender Reactjs', completed: false },
  { text: 'Certificarme en AWS Foundations', completed: false },
  { text: 'Aprender Nodejs', completed: true },
  { text: 'Desplegar api rest python en Railway', completed: true },
];

let stringifiedTodos = JSON.stringify(defaultTodos);

localStorage.setItem('TODOS_V1',stringifiedTodos);

let todos = JSON.parse(localStorage.getItem('TODOS_V1'));


localStorage.removeItem('TODOS_V1');

*/



function App() {


  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  // el estado es inmutable 
  // es por ello que react 
  // nos ofrece una funcion para modificar el valor
  // del estado
  // el valor del input esta atado al estado
  const [searchValue, setSearchValue] = React.useState('');



  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // se crea un estado derivado de los otros estados como "todos"
  // esta estado contiene los todos que cumplen la condicion
  // que incluyen al texto en "searchValue"
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  });




  // metodo que permite actualizar el todoItem
  const completeTodo = (text) => {
    // se hace una copia del estado inicial de "todos" 
    // usando el operador ...
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].completed = true;

    // se le pasa una copia al metodo 
    // que permite actualizar el estado todos
    saveTodos(newTodos);
  }


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    // splice elimina x elementos a partir
    // del indice todoIndex.
    // en este caso solo 1 , como se 
    // indica en el segundo argumento
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }


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

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            // evento que se dispara cuando 
            // un todo ha sido completado 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}

      </TodoList>

      <CreateTodoButton />

      {/* </React.Fragment> */}
    </>
  )
}


export default App
