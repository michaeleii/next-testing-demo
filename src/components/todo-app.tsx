import { StoreApi, UseBoundStore } from "zustand";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";
import { TodoListState } from "@/stores/todo";

export default function TodoApp({
  useTodoStore,
}: {
  useTodoStore: UseBoundStore<StoreApi<TodoListState>>;
}) {
  return (
    <div className="space-y-2">
      <TodoForm useTodoStore={useTodoStore} />
      <div>
        <TodoList useTodoStore={useTodoStore} />
      </div>
    </div>
  );
}
