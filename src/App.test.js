import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

test('renders Home page by default', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const homeHeading = screen.getByText(/Welcome to IT Polytechnic/i); // ตรวจสอบข้อความในหน้า Home
  expect(homeHeading).toBeInTheDocument();
});