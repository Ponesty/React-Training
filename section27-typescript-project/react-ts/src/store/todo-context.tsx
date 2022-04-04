import React from "react";
import Todo from "../models/todo";

const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: () => void;
  deleteTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});
