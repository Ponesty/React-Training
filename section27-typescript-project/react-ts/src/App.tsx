import { Fragment, useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
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

  return (
    <Fragment>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} onDelete={deleteTodo} />
    </Fragment>
  );
}

export default App;
