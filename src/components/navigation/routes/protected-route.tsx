import { useAuth } from "@/hooks/authentication/auth-hook"
import { useEffect } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { Navigate } from "react-router"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isloading, isFirstTime, checkAuth } = useAuth()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isloading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <AiOutlineLoading3Quarters className="animate-spin repeat-infinite text-accent" size={64}/>    
      </div>
    )
  }

  if (isFirstTime) {
    return <Navigate to="/admin" replace />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}
