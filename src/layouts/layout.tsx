import { useAuth } from "@/hooks/authentication/auth-hook";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";

export function Layout() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated]);
 
  return (
    <section className="flex h-screen w-screen gap-10 bg-gray-100">
      <Sidebar />
      <Outlet />
    </section>
  );
}
