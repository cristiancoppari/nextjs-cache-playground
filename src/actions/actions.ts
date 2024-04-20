"use server";

import { addTodoToDB, deleteTodoFromDB } from "@/db/supabase/db";
import { addUser, deleteUser } from "@/utils/fetchers";

import { revalidateTag } from "next/cache";

// POST /api/users
export async function addUserAction(formData: FormData) {
  const name = formData.get("name") as string;

  try {
    const user = await addUser({ name });
    revalidateTag("users");
    return user;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
}

// DELETE /api/users/:id/
export async function deleteUserAction({ id }: { id: string }) {
  try {
    const user = await deleteUser({ id });
    revalidateTag("users");
    return user;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
}

// DB - CREATE
export async function addTodoAction(formData: FormData) {
  const todoValue = formData.get("todo") as string;

  try {
    const todo = await addTodoToDB(todoValue);
    revalidateTag("todos");
    return todo;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
}

export async function deleteTodoAction({ id }: { id: number }) {
  try {
    const todo = await deleteTodoFromDB(id);
    revalidateTag("todos");
    return todo;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
}

export async function deleteTodoActionFormData(formData: FormData) {
  const id = Number(formData.get("id"));

  try {
    const todo = await deleteTodoFromDB(id);
    revalidateTag("todos");
    return todo;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
}
