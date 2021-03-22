import { render } from '@testing-library/react';
import App from './App';

test('App component test - hello world', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/^Hello/);
  expect(linkElement).toBeInTheDocument();
});
