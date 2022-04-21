import React from 'react'
import { render, screen } from '@testing-library/react';
import App from '../../App';
import LearnReact from '../../LearnReact';

test('renders learn react link', () => {
  render(<LearnReact />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
