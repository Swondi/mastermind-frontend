import { useAuth } from "@/hooks/authentication/use-auth"
import { useEffect } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useNavigate } from "react-router"

export function OneTimeRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isloading, isFirstTime, checkAuth } = useAuth()
  const navigate = useNavigate()

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
  
  if (!isFirstTime) {
    navigate(isAuthenticated ? '/' : '/login')
  }

  return children
}
