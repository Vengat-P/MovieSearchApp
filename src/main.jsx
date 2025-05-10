// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MoviesProvider from './Components/MoviesProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <MoviesProvider>
    <App />
  </MoviesProvider>

  // </StrictMode>,
)
