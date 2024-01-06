import { render, screen } from "@testing-library/react";
import Product from "./Product";

test("renders learn react link", () => {
  render(<Product />);
  //const linkElement = screen.getByText(/learn react/i);
  const linkElm = screen.getAllByTitle(/Add to Cart/i);
  // Think of this as a comparison
  //Expect(a) means that a is being compared

  expect(linkElm).toBeInTheDocument();
});
