import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todoText: string) => {
    // setTodos([...todos, new Todo(todoText)]); How I did it. It works the same.

    // How instructor did it.
    setTodos((prevTodos) => {
      return prevTodos.concat(new Todo(todoText));
    });
  };

  const deleteTodo = (todoId: string) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== todoId;
      })
    );
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
