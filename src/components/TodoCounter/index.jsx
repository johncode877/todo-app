import './TodoCounter.css';

/*
   const estilos = {
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px'
   }

   Es posible tambien colocar 
   la doble llave para poder incluir los 
   parametros del atributo style
   style={{
      fontSize: '24px'
     }}
   
   <h1 style={estilos} >

   import './TodoCounter.css';
   <h1 >

*/

//function TodoCounter(props) {
// style es un atributo del elemento h1
function TodoCounter({ total, completed, loading }) {

    /*elementos de react*/
    return (
        <>
            {!loading && (

                <><h1 className={`TodoCounter ${(total > 0 && completed == total) && "TodoCounter--hidden"}`}>
                    Has completado <span>{completed}</span> de <span>{total}</span> TODOs                 
                  </h1>
                  
                  <h1 className={`TodoCounter ${!(total > 0 && completed == total) && "TodoCounter--hidden"}`}>
                        Felicitaciones!!!!
                  </h1>
                </>
            )}

            {loading && (
                    <><h1 className="TodoCounter--loading"> 
                        <span>Cargando ....</span>
                    </h1>
                  </>
            )}
        </>
    );
}

// export default 
//export default TodoCounter;

// export nombrado 
export { TodoCounter };