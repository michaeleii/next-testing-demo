import { Todo } from "@/stores/todo";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div className="flex items-center justify-center p-6">
      <span>{todo.task}</span>
    </div>
  );
}
