import React from "react";
import Todo from "../models/todo";
const TodoItem: React.FC<{ todoItem: Todo }> = (props) => {
  return <li key={props.todoItem.id}>{props.todoItem.text}</li>;
};

export default TodoItem;
