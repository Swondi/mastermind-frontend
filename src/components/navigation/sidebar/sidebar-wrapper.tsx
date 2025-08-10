import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="max-w-fit">
      <Sidebar collapsible="icon">{children}</Sidebar>
    </SidebarProvider>
  );
}
