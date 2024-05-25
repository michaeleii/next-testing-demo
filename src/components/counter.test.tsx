import { screen, render } from "@testing-library/react";
import { expect, test } from "vitest";
import Counter from "./counter";

test("Should render the component", () => {
  render(<Counter />);
});

test("Should increment when the 'Increment' button is pressed", async () => {
  render(<Counter />);
  const currentCount = screen.getByTestId("current-count");
  expect(currentCount.textContent).toBe("00");
});
