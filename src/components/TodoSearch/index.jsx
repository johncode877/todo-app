import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  const {
    loading,
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (

    <>
      {!loading && (
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
        />)}

      {loading && (
        <input disabled className="TodoSearch--loading"/>
      )}

    </>
  );
}

// export nombrado 
export { TodoSearch };