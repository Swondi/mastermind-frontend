import { useAuth } from "@/hooks/authentication/use-auth"
import { useEffect } from "react"
import { Navigate } from "react-router"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function UnprotectedRoute({ children }: { children: React.ReactNode }) {
  const { isloading, isFirstTime, checkAuth } = useAuth()

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

  return children
}
