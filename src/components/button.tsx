"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="px-4 py-2 bg-black text-white rounded">
      {pending ? "Adding..." : "Add"}
    </button>
  );
}

// no se puede mostrar el estado de deleting porque useFormStatus no se esta
// llamando dentro de un form
export function DeleteButtonWithParam({ onDelete }: { onDelete: Function }) {
  return (
    <button className="text-red-500 underline" onClick={() => onDelete()}>
      Delete
    </button>
  );
}

export function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button className="text-red-500 underline">
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}
