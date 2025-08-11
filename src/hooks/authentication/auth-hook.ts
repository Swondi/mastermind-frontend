import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import axios from 'axios'

interface AuthState {
  user: { id: number; email: string } | null
  isAuthenticated: boolean,
  isloading: boolean,
  register: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>,
  checkAuth: () => Promise<void>
}

export const useAuth = create<AuthState>()(persist((set) => ({
  user: null,
  isAuthenticated: document.cookie.includes('at=') && document.cookie.includes('rt='),
  isloading: false,
  register: async (email: string, password: string) => {
    try {
      set({isloading: true})
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        { email: email, password: password },
        { withCredentials: true}
      );
  
      set({isloading: false, isAuthenticated: res.status === 204 });
    }
    catch(e) {
      console.error(e);
      set({isloading: false, isAuthenticated: false });
    }
  },
  login: async (email: string, password: string) => {
    try {
      set({isloading: true})

      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        { email: email, password: password },
        { timeout: 10000, withCredentials: true }
      )

      set({isloading: false, isAuthenticated: res.status === 204});
    }
    catch(e) {
      console.error(e);
      set({isloading: false, isAuthenticated: false})
    }
  },
  logout: async () => {
    try {
      set({isloading: true})
  
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`,
        { withCredentials: true }
      )
  
      set({ isloading: false, isAuthenticated: res.status !== 204 })
    }
    catch (e) {
      console.error(e)
      set({isloading: false})
    }
  },
  checkAuth: async () => {
    set({ isloading: true });
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`, {
        withCredentials: true
      })

      if (res.status === 204) {
        set({ user: res.data, isAuthenticated: true, isloading: false })
      } else {
        set({ user: null, isAuthenticated: false, isloading: false })
      }
    } catch (e) {
      set({ user: null, isAuthenticated: false, isloading: false })
    }
  }
}), {
  name: 'auth',
  storage: createJSONStorage(() => sessionStorage)
}))