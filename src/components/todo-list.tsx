import { Todo } from "@/stores/todo";
import TodoItem from "./todo-item";
import { Card } from "./ui/card";

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <Card className="max-w-xl space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Card>
  );
}
