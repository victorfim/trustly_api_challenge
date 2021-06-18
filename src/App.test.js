import { render, screen } from '@testing-library/react';
import App from './App';

test('Eastern Standard Time', () => {
  render(<App />);
  const linkElement = screen.getByText(/Standard Time/i);
  expect(linkElement).toBeInTheDocument();
});
