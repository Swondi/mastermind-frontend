import { useAuth } from "@/hooks/authentication/use-auth";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { useUser } from "@/hooks/user/use-user";

export function Layout() {
  const { isAuthenticated } = useAuth();
  const { fetchUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
    else {
      fetchUser()
    }
  }, [isAuthenticated]);
 
  return (
    <section className="flex h-screen w-screen gap-10">
      <Sidebar />
      <Outlet />
    </section>
  );
}