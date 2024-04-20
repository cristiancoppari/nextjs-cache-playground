import Container from "@/components/container";
import User from "@/components/user";

import { getUsers } from "@/utils/fetchers";

import { addUserAction } from "@/actions/actions";
import { SubmitButton } from "./button";

export default async function Users() {
  const users = await getUsers({ tags: ["users"], cache: "no-store" });

  return (
    <div>
      <p className="text-lg font-semibold">
        Getting the data from a API with Fetch
      </p>
      <div className="grid grid-cols-2 gap-4 items-start">
        <Container type="server">
          <div>
            {users.length === 0 && <p className="text-sm">No users found</p>}
            {users.map((user) => {
              return <User key={user.id} user={user} />;
            })}
          </div>
        </Container>

        <Container type="server">
          <p className="mb-4 text-sm">
            Using API with form component with <code>server actions</code>
          </p>

          <form action={addUserAction} className="flex gap-2">
            <input type="text" name="name" className="border flex-1" />

            <SubmitButton />
          </form>
        </Container>
      </div>
    </div>
  );
}
