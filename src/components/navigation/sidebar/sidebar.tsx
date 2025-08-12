import { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu } from "@/components/ui/sidebar";
import { FiCpu, FiUsers, FiServer, FiGrid, FiPlusCircle, FiPlus, FiKey, FiSettings } from "react-icons/fi";
import { ProfileBar } from "../profile/profile-bar";
import { SidebarEntry } from "./sidebar-entry";
import { SidebarGroup } from "./sidebar-group";
import { SidebarWrapper } from "./sidebar-wrapper";
import { useUser } from "@/hooks/user/use-user";


export function Sidebar() {
  const { user } = useUser()

  return (
    <SidebarWrapper>
        <SidebarHeader className="pt-5">
          <SidebarMenu>
            <span className="font-bold">Hello, {user.name}!</span>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarEntry icon={FiCpu} text="Dashboard" href="/"/>
            <SidebarEntry icon={FiUsers} text="Customers" href="/customers" />
            <SidebarEntry icon={FiServer} text="Nodes" />
            <SidebarEntry icon={FiGrid} text="Workspaces" />
            <SidebarEntry icon={FiPlusCircle} text="Add Workspace" />
          </SidebarGroup>

          <SidebarGroup label="Workspaces" action={<FiPlus />}>
            <SidebarEntry icon={FiServer} text="All Nodes" />
            <SidebarEntry icon={FiPlusCircle} text="Register Node" />
          </SidebarGroup>          
        </SidebarContent>

        <SidebarFooter className="pb-5">
          <SidebarGroup>
            <SidebarEntry icon={FiKey} text="Api Keys" />
            <SidebarEntry icon={FiSettings} text="Settings" href="/settings"/>
          </SidebarGroup>
          <div className="w-full h-0.5 bg-accent"></div>
          <ProfileBar />
        </SidebarFooter>
      </SidebarWrapper>
  )
}