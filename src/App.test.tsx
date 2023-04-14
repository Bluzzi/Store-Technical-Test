import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react text', () => {
  render(<App />)
  const linkElement = screen.getByText(/Web store application/i)
  expect(linkElement).toBeInTheDocument()
})
