import { EmptyUser, type User } from '@/models/user/user'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import axios from 'axios'

interface UserState {
  user: User,
  fetchUser: () => Promise<void>
}

export const useUser = create<UserState>()(persist((set) => ({
  user: EmptyUser,
  fetchUser: async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/me`,
        { withCredentials: true}
      )
      
      console.log(res.data);
      
      set({
        user: res.data
      })
    }
    catch (e) {
      console.error('Error fetching the user: ' + e)

    }
  }

}), {
  name: 'user',
  storage: createJSONStorage(() => sessionStorage)
}))