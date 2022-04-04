import { useRef } from "react";
const newTodo = () => {
  const submitHandler = () => {};
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default newTodo;
