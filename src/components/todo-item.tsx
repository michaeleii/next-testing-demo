import { Todo } from "@/stores/todo";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div className="flex gap-2">
      <div className="flex-1 rounded-lg border p-6">{todo.task}</div>
      <div className="flex items-center">
        <Button variant="destructive" size="icon">
          <Trash2Icon />
        </Button>
      </div>
    </div>
  );
}
