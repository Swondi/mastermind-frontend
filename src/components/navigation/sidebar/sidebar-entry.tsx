import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import type { IconType } from "react-icons/lib";
import { useNavigate } from "react-router";

export function SidebarEntry({
  icon: Icon,
  text,
  href = "#",
}: {
  icon: IconType;
  text: string;
  href?: string;
}) {
  const navigate = useNavigate()

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
          <div className="flex hover:cursor-pointer" onClick={() => navigate(href)}>
            <Icon />
            <span>{text}</span>
          </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
