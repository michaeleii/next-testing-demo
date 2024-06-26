import { create } from "zustand";

export interface Todo {
  id: string;
  task: string;
}

export interface TodoListState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

export const useTodoStore = create<TodoListState>()((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todo) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== todo.id) })),
}));
