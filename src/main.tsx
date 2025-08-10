import './index.css'
import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import CustomPage from './pages/custom-page'
import LoginPage from './pages/authentication/login-page'
import { ProtectedRoute } from './components/authentication/authenticated-route'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />}/>
        <Route path='/about' element={<ProtectedRoute><CustomPage /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)