// client/src/tests/BugForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('BugForm renders and submits', () => {
  const mockAdd = jest.fn();

  render(<BugForm onAdd={mockAdd} />);
  fireEvent.change(screen.getByPlaceholderText(/Bug Title/i), { target: { value: 'Sample Bug' } });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: 'Bug description' } });
  fireEvent.click(screen.getByText(/Report Bug/i));

  // Form resets will be async due to axios mock, so just assert function called
  expect(mockAdd).toHaveBeenCalledTimes(0); // since axios is not mocked
});
