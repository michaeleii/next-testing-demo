import Counter from "@/components/counter";
import TodoList from "@/components/todo-list";

export default function Home() {
  return (
    <div className="space-y-6 p-6">
      <TodoForm />
      <div>
        <TodoList
          todos={[
            {
              id: "1",
              task: "Hello world",
            },
          ]}
        />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}
