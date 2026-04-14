import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthContextProvider } from './components/context/AuthContext';

test('shows loading initially', () => {
  render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );

  const loadingText = screen.getByText(/loading/i);
  expect(loadingText).toBeInTheDocument();
});
