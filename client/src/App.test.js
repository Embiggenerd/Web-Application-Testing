import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders parent component', () => {
  const { getByTestId } = render(<App />);
  const parent = getByTestId(/app/i);
  expect(parent).toBeInTheDocument();
});

test('displays dashboard', () => {
  const { getByTestId } = render(<App/>);
  const dashboard = getByTestId(/dashboard/i)
  expect(dashboard).toBeInTheDocument()
})

test('displays display', () => {
  const { getByTestId } = render(<App/>);
  const display = getByTestId(/display/i)
  expect(display).toBeInTheDocument()
})