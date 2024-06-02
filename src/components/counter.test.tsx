import { screen } from "@testing-library/react";
import Counter from "./counter";
import { render } from "@/lib/render";

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
