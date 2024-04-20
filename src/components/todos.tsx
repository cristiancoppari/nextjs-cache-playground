import Container from "@/components/container";
import Todo from "@/components/todo";
import { SubmitButton } from "@/components/button";
import { addTodoAction } from "@/actions/actions";
import { getCachedTodosFromDB, getTodosFromDB } from "@/db/supabase/db";

export default async function Todos() {
  // const todos = await getTodosFromDB();
  const todos = await getCachedTodosFromDB();

  return (
    <div>
      <p className="text-lg font-semibold">
        Getting the data from an external service like a DB
      </p>
      <div className="grid grid-cols-2 gap-4 items-start">
        <Container type="server">
          <div className="flex gap-4 flex-col">
            {todos.length === 0 && <p className="text-sm">No TODOs found</p>}
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>
        </Container>

        <Container type="server">
          <p className="mb-4 text-sm"></p>

          <form action={addTodoAction} className="flex gap-2">
            <input type="text" name="todo" className="border flex-1" />
            <SubmitButton />
          </form>
        </Container>
      </div>
    </div>
  );
}
