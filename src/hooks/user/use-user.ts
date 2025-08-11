import { EmptyUser, type User } from '@/models/user/user'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import axios from 'axios'

interface UserState {
  user: User,
  fetchUser: () => Promise<void>
  saveUser: (user: Partial<User>) => Promise<void>
}

export const useUser = create<UserState>()(persist((set, get) => ({
  user: EmptyUser,
  fetchUser: async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/me`,
        { withCredentials: true}
      )
      
      set({
        user: res.data
      })
    }
    catch (e) {
      console.error('Error fetching the user: ' + e)
    }
  },
  saveUser: async (puser: Partial<User>) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/save`,
        { ...puser },
        { withCredentials: true}
      )
      
      if (res.status === 204) {
        const current = get().user;
        set({
          user: { ...current, ...puser}
        })
      }
    }
    catch (e) {
      console.error('Error fetching the user: ' + e)
    }
  }

}), {
  name: 'user',
  storage: createJSONStorage(() => sessionStorage)
}))