import { SidebarGroupAction, SidebarGroup as ExtSidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu } from "@/components/ui/sidebar";

export function SidebarGroup({
  label,
  children,
  action,
}: {
  label?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <ExtSidebarGroup>
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      {action && <SidebarGroupAction className="hover:cursor-pointer">{action}</SidebarGroupAction>}
      <SidebarGroupContent>
        <SidebarMenu>{children}</SidebarMenu>
      </SidebarGroupContent>
    </ExtSidebarGroup>
  );
}