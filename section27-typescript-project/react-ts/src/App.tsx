import { Fragment, useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <Fragment>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} onDelete={deleteTodo} />
    </Fragment>
  );
}

export default App;
