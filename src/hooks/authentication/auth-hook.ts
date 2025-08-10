import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import axios from 'axios'

interface AuthState {
  user: { id: number; email: string } | null
  register: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  getSensitiveData: () => Promise<any>
  isAuthenticated: boolean,
  isloading: boolean,
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
      set({isloading: false, isAuthenticated: false});
    }
  },
  logout: async () => {
    try {
      set({isloading: true})
  
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`,
        { withCredentials: true }
      )
  
      set({ isloading: false, isAuthenticated: res.status !== 204 });
    }
    catch (e) {
      console.error(e)
      set({isloading: false})
    }
  },
  getSensitiveData: async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/get/data`,
      { withCredentials: true }
    )

    set({ user: { 'email': res.status === 200 ? res.data['user'] : res.statusText, id: 1999 }})
  },
}), {
  name: 'auth',
  storage: createJSONStorage(() => sessionStorage)
}))