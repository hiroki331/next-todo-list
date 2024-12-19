import { revalidatePath } from "next/cache";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation";

export default function New() {
  const createTodo = async (formData: FormData) => {
    "use server";
    console.log(FormData);
    const title = formData.get("title");
    await fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    revalidatePath("/");
    redirect("/");
  };

  return (
    <>
      <h1>新規作成</h1>
      <form action={createTodo}>
        <input type="text" name="title" />
        <button type="submit">作成</button>
      </form>
    </>
  );
}
