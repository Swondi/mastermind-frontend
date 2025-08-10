import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface SettingsState {
  user: boolean
}

export const useSettings = create<SettingsState>()(persist((_) => ({
  user: false
}), {
  name: 'user',
  storage: createJSONStorage(() => sessionStorage)
}))