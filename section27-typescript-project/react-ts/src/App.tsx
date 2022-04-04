import { Fragment, useContext } from "react";

import { TodosContext } from "./store/todo-context";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <Fragment>
      <NewTodo />
      <Todos />
    </Fragment>
  );
}

export default App;
