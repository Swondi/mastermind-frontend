import { ForgotPasswordForm } from "@/components/forms/forgot-password-form";
import { useAuth } from "@/hooks/authentication/use-auth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function ForgotPasswordPage() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated]);

  return (
    <section className="relative flex items-center justify-center w-screen h-screen">
      <ForgotPasswordForm />
    </section>
  )
}