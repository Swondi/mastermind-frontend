import './index.css'
import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import { LoginPage } from './pages/authentication/login-page'
import { Layout } from './layouts/layout'
import { CustomersPage } from './pages/customers/customers-page'
import { DashboardPage } from './pages/dashboard/dashboard-page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<DashboardPage />}/>
          <Route path='/customers' element={<CustomersPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)