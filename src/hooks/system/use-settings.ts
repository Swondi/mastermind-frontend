import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface SettingsState {
  theme: 'light' | 'dark',
  setTheme: (theme: 'light' | 'dark') => void
}

export const useSettings = create<SettingsState>()(
  persist((set) => ({
    theme: 'light',
    setTheme: (theme) => {
      const root = document.documentElement
        
      root.classList.remove(theme === 'dark' ? 'light' : 'dark')
      root.classList.add(theme)
      set({ theme })
    }
  }), {
    name: 'settings',
    storage: createJSONStorage(() => sessionStorage)
  })
)