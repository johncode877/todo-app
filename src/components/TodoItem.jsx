import './TodoItem.css'

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
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
            onClick={props.onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
            onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };