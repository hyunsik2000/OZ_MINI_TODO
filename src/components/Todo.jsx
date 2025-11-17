import { useState } from "react";

export default function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState(todo.content);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <li>
      <input type="checkbox" className="todoCheckbox" />
      {toggle ? (
        <>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            onClick={() => {
              setTodoList((prev) =>
                prev.map((el) =>
                  el.id === todo.id ? { ...el, content: inputValue } : el
                )
              );
              handleToggle();
            }}
          >
            확인
          </button>
          <button onClick={handleToggle}>취소</button>
        </>
      ) : (
        <>
          <div className="todoContent">{todo.content}</div>
          <button onClick={setToggle}>수정</button>
          <button
            onClick={() => {
              setTodoList((prev) => {
                return prev.filter((el) => el.id !== todo.id);
              });
            }}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
}
