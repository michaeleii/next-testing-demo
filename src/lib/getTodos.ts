interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) {
      throw new Error("Error fetching todos.");
    }
    const data: Todo[] = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
}
