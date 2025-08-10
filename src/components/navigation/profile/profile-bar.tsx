import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/authentication/auth-hook";
import { FiLogOut } from "react-icons/fi";

export function ProfileBar({
  username,
  email,
  avatarUrl,
}: {
  username: string;
  email: string;
  avatarUrl?: string;
}) {
  const { logout } = useAuth()
  
  return (
    <>
      <div className="w-full h-0.5 bg-accent"></div>
      <div className="flex items-center gap-3 p-3 rounded-md hover:cursor-pointer hover:bg-sidebar-accent"
        onClick={() => console.log('profile clicked')}
      >
        <img
          src={avatarUrl || "https://picsum.photos/64/64"}
          alt="Profile"
          className="w-10 h-10 rounded-full border"
        />
        <div className="flex justify-between flex-1 min-w-0">
          <Tooltip delayDuration={500}>
            <TooltipTrigger asChild>
              <div className="flex flex-col">
                <p className="font-medium truncate">{username}</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Logged in as <span className="font-semibold">{email}</span></p>
            </TooltipContent>
          </Tooltip>
          <div className="flex gap-2 text-sm">
            <button className="hover:text-red-500 hover:cursor-pointer hover:scale-105"
              onClick={(e) => {
                e.stopPropagation()
                logout()
              }}
            >
              <FiLogOut size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}