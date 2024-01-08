import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(() => [null, false]),
}));

jest.mock('./../components/Loader');

test('renders children when user is authenticated', async () => {
  jest
    .spyOn(require('react-firebase-hooks/auth'), 'useAuthState')
    .mockReturnValueOnce([{}, false]);

  render(
    <MemoryRouter initialEntries={['/some-route']}>
      <div>Content for authenticated users</div>
    </MemoryRouter>
  );

  await screen.findByText('Content for authenticated users');
  expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
});
