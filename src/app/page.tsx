"use client";
import TodoApp from "@/components/todo-app";
import { useTodoStore } from "@/stores/todo";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl p-6">
      <TodoApp useTodoStore={useTodoStore} />
      <TodoApp useTodoStore={useTodoStore} />
    </div>
  );
}
