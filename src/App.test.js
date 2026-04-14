import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthContextProvider } from './components/context/AuthContext';

test('shows loader initially', () => {
  render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});