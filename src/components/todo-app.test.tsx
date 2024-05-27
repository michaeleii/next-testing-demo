import { render } from "@/lib/render";
import TodoApp from "./todo-app";
import { screen } from "@testing-library/react";
import { create } from "zustand";
import { TodoListState } from "@/stores/todo";

function renderTodoApp() {
  const useTodoStore = create<TodoListState>()((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    removeTodo: (todo) =>
      set((state) => ({ todos: state.todos.filter((t) => t.id !== todo.id) })),
  }));
  return render(<TodoApp useTodoStore={useTodoStore} />);
}

describe("Todo App", () => {
  test("Should render the component", () => {
    renderTodoApp();
  });

  test("Should add a todo to the todo list", async () => {
    const { user } = renderTodoApp();
    const input = screen.getByLabelText("Todo");

    await user.type(input, "Do the laundry");
    const button = screen.getByRole("button", { name: "Add Todo" });
    await user.click(button);
    const todoItem = screen.getByTestId("todo-item");

    expect(todoItem).toHaveTextContent("Do the laundry");
  });

  test("Should remove a todo when trash button is clicked from a todo item.", async () => {
    const { user } = renderTodoApp();
    const input = screen.getByLabelText("Todo");

    await user.type(input, "Do the laundry");
    const addTodoButton = screen.getByRole("button", { name: "Add Todo" });
    await user.click(addTodoButton);
    const todoItem = screen.getByTestId("todo-item");

    expect(todoItem).toHaveTextContent("Do the laundry");

    const removeTodoButton = screen.getByTestId("remove-item");
    await user.click(removeTodoButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
