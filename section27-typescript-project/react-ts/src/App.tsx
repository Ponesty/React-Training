import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TyoeScript")];
  return (
    <div>
      <Todos items={["Learn React", "Learn TypeScript"]} />
    </div>
  );
}

export default App;
