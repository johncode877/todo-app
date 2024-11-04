
import React from 'react'


function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    // primera vez que el usuario entra en la aplicacion 
    React.useEffect(() => {
        setTimeout(() => {
          try {
            console.log("useLocalStorage.useEffect");
            const localStorageItem = localStorage.getItem(itemName);
        
            let parsedItem;
      
            if (localStorageItem) {
                parsedItem = JSON.parse(localStorageItem);
                setItem(parsedItem);
            } else {              
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            }
      
            setLoading(false);
          } catch(error) {
            setLoading(false);
            setError(true);
          }
        }, 1500);
      },[]);

    const saveItem = (newItem) => {
        console.log("saveItem");
        setItem(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem));        
    };
  

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };