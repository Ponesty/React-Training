import React, { useContext } from "react";

import { TodosContext } from "../store/todo-context";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          deleteTodo={todosCtx.deleteTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
