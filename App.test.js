import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders with correct title', () => {
  render(
    <MemoryRouter initialEntries={['/']} basename="/isit207-petheaven">
      <App />
    </MemoryRouter>
  );
});
