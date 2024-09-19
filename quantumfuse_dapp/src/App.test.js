import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Key Features section', () => {
  render(<App />);
  const sectionTitle = screen.getByText(/Key Features/i); // Adjust this to match the actual content
  expect(sectionTitle).toBeInTheDocument();
});
