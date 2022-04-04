import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  deleteTodo: (todoId: string) => void;
}> = (props) => {
  const deleteItem = () => {
    props.deleteTodo(props.id);
  };
  return (
    <li className={classes.item} onClick={deleteItem}>
      {props.text}
    </li>
  );
};

export default TodoItem;
