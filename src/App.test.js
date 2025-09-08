import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Portfolio heading', () => {
  render(<App />);
  const heading = screen.getByText(/my portfolio/i);
  expect(heading).toBeInTheDocument();
});

test('renders Welcome message', () => {
  render(<App />);
  const welcome = screen.getByText(/welcome to my site/i);
  expect(welcome).toBeInTheDocument();
});

test('renders About section', () => {
  render(<App />);
  const about = screen.getByText(/about/i);
  expect(about).toBeInTheDocument();
});
