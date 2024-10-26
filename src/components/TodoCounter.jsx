
//function TodoCounter(props) {
function TodoCounter({total, completed}) {    
    /*elementos de react*/
    return (
      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
    );
}

// export default 
//export default TodoCounter;

// export nombrado 
export {TodoCounter};