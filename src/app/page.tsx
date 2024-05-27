import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl p-6">
      <div className="space-y-2">
        <TodoForm />
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}
