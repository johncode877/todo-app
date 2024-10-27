import React from 'react';
import './TodoSearch.css'

function TodoSearch({
  searchValue,
  setSearchValue
}) {
   

    
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