import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useFetch from "./hooks/useFetch";

function App() {
  const [todoList, setTodoList] = useState([]);
  const { data, isLoading, error } = useFetch("http://localhost:4000/todo");

  useEffect(() => {
    if (data) {
      setTodoList(data);
    }
  }, [data]);

  return (
    <>
      <Header />

      {isLoading && <p>로딩중..</p>}
      {error && <p>에러 발생</p>}

      {!isLoading && !error && (
        <>
          <TodoInput todoList={todoList} setTodoList={setTodoList} />
          <br />
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </>
      )}
    </>
  );
}

export default App;
