"use client";
import { TodoListState } from "@/stores/todo";
import TodoItem from "./todo-item";
import { StoreApi, UseBoundStore } from "zustand";

export default function TodoList({
  useTodoStore,
}: {
  useTodoStore: UseBoundStore<StoreApi<TodoListState>>;
}) {
  const todos = useTodoStore((s) => s.todos);

  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <div className="space-y-2 p-6 text-center">
          <div className="text-lg font-bold">You have no todos.</div>
          <div className="text-sm">Add a todo to get started.</div>
        </div>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} useTodoStore={useTodoStore} />
        ))
      )}
    </div>
  );
}
