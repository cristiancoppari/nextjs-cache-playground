import Random from "@/components/random";
import Users from "@/components/users";
import Todos from "@/components/todos";

import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="p-4 grid gap-4 w-[800px] mx-auto">
      <Suspense
        fallback={
          <div className="h-[222px] w-full bg-red-100 rounded-lg text-red-500 p-4">
            Loading random cats...
          </div>
        }
      >
        <Random />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-[222px] w-full bg-red-100 rounded-lg text-red-500 p-4">
            Loading users from API...
          </div>
        }
      >
        <Users />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-[222px] w-full bg-red-100 rounded-lg text-red-500 p-4">
            Loading TODOs from DB...
          </div>
        }
      >
        <Todos />
      </Suspense>
    </main>
  );
}
