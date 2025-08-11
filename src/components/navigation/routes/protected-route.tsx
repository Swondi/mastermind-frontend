import { useAuth } from "@/hooks/authentication/auth-hook"
import { useEffect } from "react"
import { Navigate } from "react-router"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isloading, checkAuth } = useAuth()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isloading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}
