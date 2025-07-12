// client/src/tests/BugList.test.js
import { render, screen } from '@testing-library/react';
import BugList from '../components/BugList';

test('BugList renders empty message', () => {
  render(<BugList bugs={[]} onUpdate={() => {}} onDelete={() => {}} />);
  expect(screen.getByText(/No bugs reported/i)).toBeInTheDocument();
});

test('BugList renders bug items', () => {
  const bugs = [{ _id: '1', title: 'Bug A', status: 'open', description: 'Desc' }];
  render(<BugList bugs={bugs} onUpdate={() => {}} onDelete={() => {}} />);
  expect(screen.getByText(/Bug A/i)).toBeInTheDocument();
});
