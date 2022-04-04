import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
