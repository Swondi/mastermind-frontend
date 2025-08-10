import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/authentication/auth-hook"
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router";


export default function CustomPage() {
  const { logout, user, getSensitiveData, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])
  
  useEffect(() => {
    getSensitiveData()
  }, [])

  return (
    <div className="flex flex-col gap-10 h-screen w-full items-center justify-center bg-zinc-300">
      <h1>Welcome {user?.email}</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}