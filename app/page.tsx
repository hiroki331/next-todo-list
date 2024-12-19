interface Todo {
  id: string;
  title: string;
}
export default async function Home() {
  const res = await fetch("http://localhost:3001/todo");
  const todos = await res.json();
  console.log(todos); // サーバー側でのみ表示

  return (
    <div>
      <h1>TODO リスト</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
