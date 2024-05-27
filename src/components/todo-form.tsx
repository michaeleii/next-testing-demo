"use client";
import { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useTodoStore } from "@/stores/todo";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const addTodo = useTodoStore((s) => s.addTodo);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!todo.trim()) return;

    addTodo({ id: crypto.randomUUID() as string, task: todo });
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Label className="flex" htmlFor="todo">
        Todo
      </Label>
      <div className="flex flex-1 gap-2">
        <Input
          name="todo"
          type="text"
          placeholder="Enter a todo...."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button disabled={todo.trim().length === 0}>Add Todo</Button>
      </div>
    </form>
  );
}
