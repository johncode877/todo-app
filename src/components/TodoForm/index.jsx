import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        console.log("onSubmit");
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        console.log("onCancel");
        setOpenModal(false);
    }

    const onChange = (event) => {
        //console.log("onChange");
        setNewTodoValue(event.target.value);
    }

    return (
        <div onClick={(e) => {
            console.log("div->stopPropagation() ");
            e.stopPropagation();
        }}>
            <form onSubmit={onSubmit}>
                <label>Escribe tu nuevo TODO</label>
                <textarea
                    placeholder="Aprender Ingles"
                    value={newTodoValue}
                    onChange={onChange}
                    required
                />
                <div className="TodoForm-buttonContainer">
                    <button
                        type="button"
                        className="TodoForm-button 
                               TodoForm-button--cancel"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="TodoForm-button 
                              TodoForm-button--add"
                       
                    >
                        Añadir
                    </button>
                </div>
            </form>
        </div >
    )
}

export { TodoForm };