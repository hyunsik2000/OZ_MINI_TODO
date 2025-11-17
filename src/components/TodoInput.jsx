import { useState } from "react";

export default function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="todoEditor">
      <h3>새로운 Todo 작성하기✏️</h3>
      <div className="editor_wrapper">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="할 일을 작성해주세요"
        />
        <button
          onClick={() => {
            const newTodo = { id: Number(new Date()), content: inputValue };
            const newTodoList = [...todoList, newTodo];
            setTodoList(newTodoList);
            setInputValue("");
          }}
        >
          추가
        </button>
      </div>
    </div>
  );
}
