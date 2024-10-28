import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

/*componente react*/
function TodoItem(props) {

  /*
     Sintaxis para añadir codigo 
     javascript 
     ${}
  */

  /*elementos de react*/
  return (
    <li className="TodoItem">

      {/*
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
              onClick={props.onComplete}
        >
          V
        </span>
      */}

      <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
          />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
          onDelete={props.onDelete}
      /> 

      {/*
        <span className="Icon Icon-delete"
            onClick={props.onDelete}
      >
        X
      </span>
      */}



    </li>
  );
}

export { TodoItem };