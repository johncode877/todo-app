import React from 'react';
import './TodoSearch.css'

function TodoSearch() {

     // el estado es inmutable 
     // es por ello que react 
     // nos ofrece una funcion para modificar el valor
     // del estado
     // el valor del input esta atado al estado
    const [searchValue, setSearchValue] = React.useState('');
        
    console.log('Los usuarios buscan todos de '+ searchValue);
    
    return (
      <input 
             className="TodoSearch" 
             placeholder="Aprender Ingles"
             value={searchValue}
             onChange={(event) => {
              /*
                console.log('Escribiste en TodoSearch');
                console.log(event);
                console.log(event.target);
                // event.target es el elemento html 
                // que genero el evento
                console.log(event.target.value);
              */
                setSearchValue(event.target.value);  
             }} 
        />
    );
}

// export nombrado 
export {TodoSearch};