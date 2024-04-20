// CLIENT SIDE RENDERING

// "use client";

// import Container from "@/components/container";

// export default function Todo({ todo }: { todo: { id: number; todo: string } }) {
//   return (
//     <Container type="client">
//       <div key={todo.id} className="flex justify-between">
//         <span>{todo.todo}</span>
//         <button
//           className="text-red-500 underline"
//           onClick={() => console.log("asd")}
//         >
//           Delete
//         </button>
//       </div>
//     </Container>
//   );
// }

import Container from "@/components/container";
import { DeleteButton } from "@/components/button";
import { deleteTodoAction, deleteTodoActionFormData } from "@/actions/actions";

export default function Todo({ todo }: { todo: { id: number; todo: string } }) {
  return (
    <Container type="client">
      <div key={todo.id} className="flex justify-between">
        <span>{todo.todo}</span>

        <form action={deleteTodoActionFormData}>
          <input type="hidden" name="id" defaultValue={todo.id} />
          <DeleteButton />
        </form>
      </div>
    </Container>
  );
}
