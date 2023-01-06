import { useState } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Todos from "./Component/Todos";
import AddToDo from "./Component/AddTodo";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addToDo = (title, desc) => {
    console.log({ title, desc });
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno,
      title,
      desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddToDo addToDo={addToDo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
