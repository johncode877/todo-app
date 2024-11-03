import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../components/TodoContext';


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App
