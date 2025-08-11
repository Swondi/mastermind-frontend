import './index.css'
import { StrictMode, useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import { LoginPage } from './pages/authentication/login-page'
import { Layout } from './layouts/layout'
import { CustomersPage } from './pages/customers/customers-page'
import { DashboardPage } from './pages/dashboard/dashboard-page'
import SettingsPage from './pages/settings/settings-page'
import { ProfileSettings } from './pages/settings/profile-settings'
import { NotificationSettings } from './pages/settings/notification-settings'
import { AppearanceSettings } from './pages/settings/appearance-settings'
import { useSettings } from './hooks/system/use-settings'
import { ProtectedRoute } from './components/navigation/routes/protected-route'
import { UnprotectedRoute } from './components/navigation/routes/unprotected-route'
import { ForgotPasswordPage } from './pages/authentication/forgot-password-page'
import { AdminOTAPage } from './pages/admin/admin-ota-page'
import { NotFoundPage } from './pages/not-found/not-found'

createRoot(document.getElementById('root')!).render(<App />)

function App() {
  const { theme, setTheme } = useSettings()

  useLayoutEffect(() => {
    setTheme(theme)  
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<AdminOTAPage />}/>
          <Route path='/login' element={
            <UnprotectedRoute>
              <LoginPage />
            </UnprotectedRoute>
          }/>
          <Route path='/password-reset' element={
            <UnprotectedRoute>
              <ForgotPasswordPage />
            </UnprotectedRoute>
          }/>
          <Route path='/' element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardPage />}/>
            <Route path='customers' element={<CustomersPage />}/>
          </Route>
          <Route path='/settings' element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }>
            <Route index element={<ProfileSettings />}/>
            <Route path="notifications" element={<NotificationSettings />}/>
            <Route path="appearance"  element={<AppearanceSettings />}/>
          </Route>
          <Route path='*' element={
            // <UnprotectedRoute>
              <NotFoundPage />
            // </UnprotectedRoute>

          }/>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}