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
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/' element={<Layout />}>
            <Route index element={<DashboardPage />}/>
            <Route path='customers' element={<CustomersPage />}/>
          </Route>
          <Route path='/settings' element={<SettingsPage />}>
            <Route index element={<ProfileSettings />}/>
            <Route path="notifications" element={<NotificationSettings />}/>
            <Route path="appearance"  element={<AppearanceSettings />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}