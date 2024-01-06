import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  // Think of this as a comparison
  //Expect(a) means that a is being compared
  expect(linkElement).to

  expect(linkElement).toBeInTheDocument();
});
