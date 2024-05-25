import { screen } from "@testing-library/react";
import Counter from "./counter";
import { render } from "@/lib/utils";

test("Should render the component", () => {
  render(<Counter />);
});

test("Should increment when the 'Increment' button is pressed", async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId("current-count");
  expect(currentCount).toHaveTextContent("0");
  const button = screen.getByRole("button", { name: "Increment" });
  await user.click(button);
  expect(currentCount).toHaveTextContent("1");
});

test("Should reset the count when the 'Reset' button is pressed", async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId("current-count");
  expect(currentCount).toHaveTextContent("0");

  const incButton = screen.getByRole("button", { name: "Increment" });
  await user.click(incButton);
  expect(currentCount).toHaveTextContent("1");

  const resetButton = screen.getByRole("button", { name: "Reset" });
  await user.click(resetButton);
  expect(currentCount).toHaveTextContent("0");
});

test("Should render the component with a custom initial count", () => {
  const count = 3;
  render(<Counter initialCount={count} />);
  const currentCount = screen.getByTestId("current-count");
  expect(currentCount).toHaveTextContent(`${count}`);
});

test("Should increment three times when the 'Increment' button is pressed three times", async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId("current-count");
  expect(currentCount).toHaveTextContent("0");
  const button = screen.getByRole("button", { name: "Increment" });
  await user.tripleClick(button);
  expect(currentCount).toHaveTextContent("3");
});
