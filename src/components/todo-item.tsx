import { Todo, useTodoStore } from "@/stores/todo";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";

export default function TodoItem({ todo }: { todo: Todo }) {
  const removeTodo = useTodoStore((s) => s.removeTodo);
  return (
    <div className="flex gap-2">
      <div data-testid="todo-item" className="flex-1 rounded-lg border p-6">
        {todo.task}
      </div>
      <div className="flex items-center">
        <Button
          data-testid="remove-item"
          variant="destructive"
          size="icon"
          onClick={() => removeTodo(todo)}
        >
          <span className="sr-only">Remove Item</span>
          <Trash2Icon />
        </Button>
      </div>
    </div>
  );
}
