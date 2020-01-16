import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders parent component', () => {
  const { getByTestId } = render(<App />);
  const parent = getByTestId(/app/i);
  expect(parent).toBeInTheDocument();
});

test('displays dashboard', () => {
  const { getByTestId } = render(<App />);
  const dashboard = getByTestId(/dashboard/i)
  expect(dashboard).toBeInTheDocument()
})

test('displays display', () => {
  const { getByTestId } = render(<App />);
  const display = getByTestId(/display/i)
  expect(display).toBeInTheDocument()
})

test('strikes work', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId(/addStrike/i)
  const display = getByTestId(/showStrikes/i)
  expect(display.innerHTML).toBe('strikes: 0')
  fireEvent.click(button)
  expect(display.innerHTML).toBe('strikes: 1')
  fireEvent.click(button)
  expect(display.innerHTML).toBe('strikes: 2')
  fireEvent.click(button) // this is async version of ele.click, allows useEffect to be tested
  expect(display.innerHTML).toBe('strikes: 0')
})

test('balls work', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId(/addBall/i)
  const display = getByTestId(/showBalls/i)
  expect(display.innerHTML).toBe('balls: 0')
  fireEvent.click(button)
  expect(display.innerHTML).toBe('balls: 1')
  fireEvent.click(button)
  expect(display.innerHTML).toBe('balls: 2')
  fireEvent.click(button) 
  expect(display.innerHTML).toBe('balls: 3')
  fireEvent.click(button) 
  expect(display.innerHTML).toBe('balls: 0')
})

test('fouls work', ()=>{
  const { getByTestId } = render(<App />);
  const button = getByTestId(/addFoul/i)
  const display = getByTestId(/showStrikes/i)
  expect(display.innerHTML).toBe('strikes: 0')
  fireEvent.click(button)
  expect(display.innerHTML).toBe('strikes: 1')
  fireEvent.click(button)
  expect(display.innerHTML).toBe('strikes: 2')
  fireEvent.click(button) 
  expect(display.innerHTML).toBe('strikes: 2')
})