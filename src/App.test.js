import { render, screen } from '@testing-library/react';
import { FuncBasedApp, ClassBasedApp } from './App';

test('renders brand title in a function-based component', () => {
  render(<FuncBasedApp />);
  const brandElement = screen.getByText(/Tiger of Sweden/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders brand title in a class-based component', () => {
  render(<ClassBasedApp />);
  const brandElement = screen.getByText(/Tiger of Sweden/i);
  expect(brandElement).toBeInTheDocument();
});
