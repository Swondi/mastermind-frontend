import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { SidebarCollapseButton } from "./sidebar-collapse-button";

export function SidebarWrapper({ children }: { children: React.ReactNode }) {  
  return (
    <SidebarProvider className="relative max-w-fit">
      <SidebarCollapseButton />
      <Sidebar collapsible="offcanvas">{children}</Sidebar>
    </SidebarProvider>
  );
}
