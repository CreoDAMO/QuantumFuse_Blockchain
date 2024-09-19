import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

function ProblematicComponent() {
  throw new Error("Test Error");
}

test('renders fallback UI when error occurs', () => {
  render(
    <ErrorBoundary>
      <ProblematicComponent />
    </ErrorBoundary>
  );
  expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
});
