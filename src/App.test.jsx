import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

function getBodyClassList() {
  return document.body.classList;
}

test('dark mode checkbox toggles body class', async () => {
  render(<App />);
  const checkbox = screen.getByLabelText(/dark mode/i);

  // Initially localStorage might have stored value; ensure removal
  localStorage.clear();

  expect(getBodyClassList().contains('dark')).toBe(false);

  await userEvent.click(checkbox);
  expect(getBodyClassList().contains('dark')).toBe(true);
  expect(localStorage.getItem('darkMode')).toBe('true');
});
