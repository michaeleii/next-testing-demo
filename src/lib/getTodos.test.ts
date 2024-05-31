import { vi } from "vitest";

test("makes a GET request to fetch todo list and returns the result", async () => {
  const todoListResponse = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 2,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: true,
    },
    {
      userId: 3,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
  ];

  const getTodos = vi.fn().mockResolvedValue(todoListResponse);

  const todos = await getTodos();

  expect(getTodos).toHaveBeenCalled();
  expect(todos).toBe(todoListResponse);
});
