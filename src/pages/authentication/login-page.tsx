import LoginForm from "@/components/forms/login-form";
import { useAuth } from "@/hooks/authentication/use-auth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function LoginPage() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated]);

  return (
    <section className="flex items-center justify-center w-screen h-screen">
      <LoginForm />
    </section>
  )
}