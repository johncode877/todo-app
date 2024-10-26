
/*componente react*/
function TodoItem(props) {
    /*elementos de react*/
    return (
      <li>
        <span>V{props.completed}</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
}

export { TodoItem };