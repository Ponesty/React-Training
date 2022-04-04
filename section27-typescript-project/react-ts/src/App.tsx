import { Fragment } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return (
    <Fragment>
      <Todos items={todos} />
    </Fragment>
  );
}

export default App;
