import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import axios, { AxiosError } from 'axios'

interface AuthState {
  isFirstTime: boolean,
  isAuthenticated: boolean
  isloading: boolean
  error: string
  register: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
}

export const useAuth = create<AuthState>()(persist((set) => ({
  isFirstTime: false,
  isAuthenticated: document.cookie.includes('at=') && document.cookie.includes('rt='),
  isloading: false,
  error: "",
  register: async (email: string, password: string) => {
    try {
      set({isloading: true})
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        { email: email, password: password },
        { withCredentials: true}
      );
  
      set({isloading: false, isAuthenticated: res.status === 204, error: "" });
    }
    catch(e) {
      if (!(e instanceof AxiosError)) {
        console.error(e)
        set({isloading: false, isAuthenticated: false, error: "An error occurred. Try again later."})
        return
      }
      
      set({isloading: false, isAuthenticated: false, error: e.response?.data.message });
    }
  },
  login: async (email: string, password: string) => {
    try {
      set({isloading: true})

      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        { email: email, password: password },
        { timeout: 10000, withCredentials: true }
      )
      set({isloading: false, isAuthenticated: res.status === 204, error: ""});
    }
    catch (e) {
      if (!(e instanceof AxiosError)) {
        console.error(e)
        set({isloading: false, isAuthenticated: false, error: "An error occurred. Try again later."})
        return
      }

      set({isloading: false, isAuthenticated: false, error: e.response?.data.message})
    }
  },
  logout: async () => {
    try {
      set({isloading: true})
  
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`,
        { withCredentials: true }
      )
  
      set({ isloading: false, isAuthenticated: res.status !== 204, error: "" })
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

      if (res.status === 200) {        
        set({
          isAuthenticated: res.data.isAuthenticated,
          isFirstTime: res.data.isFirstTime,
          isloading: false
        })
      } else {
        set({
          isAuthenticated: false,
          isloading: false
        })
      }
    } catch (e) {
      set({ isAuthenticated: false, isloading: false })
    }
  }
}), {
  name: 'auth',
  storage: createJSONStorage(() => sessionStorage),
  partialize: (state) => ({
    isAuthenticated: state.isAuthenticated,
    isFirstTime: state.isFirstTime,
  }),
}))