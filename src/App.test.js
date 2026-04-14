import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthContextProvider } from './components/context/AuthContext';

test('renders learn react link', () => {
  render(<AuthContextProviderr>
    <App />
  </AuthContextProviderr>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
