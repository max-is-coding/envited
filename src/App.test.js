import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<App />} />
        <Route path="/event" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
