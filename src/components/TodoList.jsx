import Todo from "./Todo";

export default function TodoList({ todoList, setTodoList }) {
  return (
    <div className="todoList">
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
        ))}
      </ul>
    </div>
  );
}
