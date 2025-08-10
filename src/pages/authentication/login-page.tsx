import LoginForm from "@/components/forms/login-form";
import { useAuth } from "@/hooks/authentication/auth-hook";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (isAuthenticated) {
      navigate('/about')
    }
  }, [isAuthenticated]);

  return (
    <section className="flex items-center justify-center w-screen h-screen">
      <LoginForm />
    </section>
  )
}