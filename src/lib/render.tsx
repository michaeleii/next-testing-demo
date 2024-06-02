import { render as renderComponent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function render(
  jsx: React.ReactElement,
  options?: Parameters<typeof renderComponent>[1],
) {
  return {
    user: userEvent.setup(),
    ...renderComponent(jsx, options),
  };
}