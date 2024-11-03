
import React from 'react'


function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    let parsedItem;

    // primera vez que el usuario entra en la aplicacion 
    React.useEffect(() => {
       setTimeout(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            if (!localStorageItem) {
                localStorage.setItem(itemName,
                    JSON.stringify(initialValue));
                parsedItem = [];
            } else {
                parsedItem = JSON.parse(localStorageItem);
                // actualiza el estado 
                setItem(parsedItem);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
       }, 2000);
    },[]);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    console.log(item);

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };