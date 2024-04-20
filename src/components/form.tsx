"use client";

import { useState, useEffect } from "react";

export default function Form() {
  const [todo, setTodo] = useState("");

  return (
    <form
      className="flex gap-4 items-start"
      onSubmit={(e) => {
        e.preventDefault();
        fetch("/api/add-todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ todo }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-black text-slate-100 rounded"
      >
        Submit
      </button>
    </form>
  );
}
