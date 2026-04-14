import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthContextProvider } from './components/context/AuthContext';

test('renders learn react link', () => {
  render(<AuthContextProvider>
    <App />
  </AuthContextProvider>);
});
