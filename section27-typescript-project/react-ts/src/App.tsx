import { Fragment, useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
  ]);
  const addTodo = (todo: string) => {
    setTodos([...todos, new Todo(todo)]);
  };
  return (
    <Fragment>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} />
    </Fragment>
  );
}

export default App;
