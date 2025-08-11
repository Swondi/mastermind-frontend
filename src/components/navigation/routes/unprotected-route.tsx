import { useAuth } from "@/hooks/authentication/auth-hook"
import { useEffect } from "react"
import { Navigate } from "react-router"

export function UnprotectedRoute({ children }: { children: React.ReactNode }) {
  const { isloading, isFirstTime, checkAuth } = useAuth()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isloading) {
    return <div>Loading...</div>
  }

  if (isFirstTime) {
    return <Navigate to="/admin" replace />
  }

  return children
}
