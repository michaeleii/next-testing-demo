"use client";
import { useTodoStore } from "@/stores/todo";
import TodoItem from "./todo-item";

export default function TodoList() {
  const todos = useTodoStore((s) => s.todos);
  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <div className="space-y-2 p-6 text-center">
          <div className="text-lg font-bold">You have no todos.</div>
          <div className="text-sm">Add a todo to get started.</div>
        </div>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
