import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import type { IconType } from "react-icons/lib";

export function SidebarEntry({
  icon: Icon,
  text,
  href = "#",
}: {
  icon: IconType;
  text: string;
  href?: string;
}) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <a href={href}>
          <Icon />
          <span>{text}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
