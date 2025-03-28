import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <MainRoutes />
    </StrictMode>
  </BrowserRouter>
)
