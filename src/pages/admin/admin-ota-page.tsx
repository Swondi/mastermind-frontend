import { useAuth } from "@/hooks/authentication/auth-hook"
import { useEffect } from "react"
import { useNavigate } from "react-router";


/**
 * This page will ONLY be showed once during the first deployment of the app.
 * This page is used to create root account.
 */
export function AdminOTAPage() {
  const { isFirstTime, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (!isFirstTime) {
      navigate(isAuthenticated ? '/' : '/login')
    }
  }, [])

  return (
    <div>
      Admin One time page
    </div>
  )
}