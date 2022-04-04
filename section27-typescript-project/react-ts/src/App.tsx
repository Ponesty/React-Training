import { Fragment, useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
  ]);
  const addTodo = (todoText: string) => {
    setTodos([...todos, new Todo(todoText)]);
  };
  return (
    <Fragment>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} />
    </Fragment>
  );
}

export default App;
