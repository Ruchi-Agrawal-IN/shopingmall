import { render, screen } from "@testing-library/react";
import Product from "./Product";


test("check for ul in products", () => {
  render(<Product />);
  const ele = screen.getAllByRole("listitem");
  expect(ele).toHaveLength(3);
});