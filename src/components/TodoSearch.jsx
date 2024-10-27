import './TodoSearch.css'

function TodoSearch() {
    return (
      <input 
             className="TodoSearch" 
             placeholder="Aprender Ingles"
             onChange={(event) => {
                console.log('Escribiste en TodoSearch');
                console.log(event);
                console.log(event.target);
                /* valor del elemento html */
                console.log(event.target.value);
             }} 
        />
    );
}

// export nombrado 
export {TodoSearch};