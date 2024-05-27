import TodoForm from "./todo-form";
import TodoList from "./todo-list";

export default function TodoApp() {
  return (
    <div className="space-y-2">
      <TodoForm />
      <div>
        <TodoList />
      </div>
    </div>
  );
}
