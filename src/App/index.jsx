import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
//import './App.css'

import { useLocalStorage } from './useLocalStorage';
import React from 'react';
import { AppUI } from './AppUI';


  // localStorage.removeItem('TODOS_V1');
  // const defaultTodos = [
  //   { text: 'Aprender Reactjs', completed: false },
  //   { text: 'Certificarme en AWS Foundations', completed: false },
  //   { text: 'Aprender Nodejs', completed: true },
  //   { text: 'Desplegar api rest python en Railway', completed: true },
  //   { text: 'Aprender Ingles', completed: false },
  //   { text: 'Aprender Guitarra', completed: false },
  //   { text: 'Hacer un jamon', completed: false },
  // ];

  // let stringifiedTodos = JSON.stringify(defaultTodos);
  // localStorage.setItem('TODOS_V1',stringifiedTodos);
  


function App() {

  const {item: todos, 
         saveItem: saveTodos,
         loading,
         error} = useLocalStorage('TODOS_V1', []);

  // el estado es inmutable 
  // es por ello que react 
  // nos ofrece una funcion para modificar el valor
  // del estado
  // el valor del input esta atado al estado
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // console.log("Log 1");  
  // ejemplo de uso de efectos 
  // en react  
  // siempre se ejecuta
  // React.useEffect(() => {
  //   console.log("Looooooog 2");
  // });

  // solo se ejecuta una vez 
  //  React.useEffect(() => {
  //   console.log("Loooooog 2");
  // },[]); 

  // solo se ejecuta 
  // cuando cambia totalTodos
  // React.useEffect(() => {
  //   console.log("Loooooooog 2");
  // },[totalTodos]);
  // console.log("Log 3"); 

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
  
  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App
