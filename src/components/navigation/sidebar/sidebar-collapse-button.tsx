import { useSidebar } from "@/components/ui/sidebar";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb";

export function SidebarCollapseButton() {
  const { setOpen, open, isMobile, openMobile, setOpenMobile } = useSidebar();

  return (
    <div className="absolute top-4 -right-10 z-50 hover:scale-x-110 transition-transform"
      onClick={() => {
        console.log('clicked');
        if (isMobile) {
          setOpenMobile(!open)
        }
        else {
          setOpen(!open)
        }
      }}
    >

      { isMobile ?
        (openMobile ? <TbLayoutSidebarLeftCollapse  size={24} /> : <TbLayoutSidebarRightCollapse  size={24} />) :
        (open ? <TbLayoutSidebarLeftCollapse  size={24} /> : <TbLayoutSidebarRightCollapse  size={24} />)
      }
    </div>
  )
}