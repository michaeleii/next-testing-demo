import { render } from "@testing-library/react";
import { test } from "vitest";
import Counter from "./counter";

test("Should render the component", () => {
  render(<Counter />);
});

test.todo(
  "Should increment when the 'Increment' button is pressed",
  async () => {},
);
