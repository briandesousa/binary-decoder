import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/binary decoder/i);
  expect(headingElement).toBeInTheDocument();
});
