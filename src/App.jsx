import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <h1>Dog App</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}