import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Outlet, useNavigate } from "react-router";
import { IoClose } from 'react-icons/io5'

export default function SettingsPage() {
  const navigate = useNavigate()
  
  return (
    <div className="max-w-4xl mx-auto p-5">
      <Card className="px-5">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Manage your account settings and e-mail preferences.
          </CardDescription>
          <CardAction className="hover:cursor-pointer">
            <IoClose size={24} onClick={() => navigate('/')}/>
          </CardAction>
        </CardHeader>
        <Separator />
        <CardContent className="flex space-y-6 px-0">
          <div className="flex flex-col h-full w-1/5 gap-1">
            <MenuEntry text="Profile" onClick={() => navigate('/settings')} />
            <MenuEntry text="Appearance" onClick={() => navigate('/settings/appearance')} />
            <MenuEntry text="Notifications" onClick={() => navigate('/settings/notifications')} />
          </div>
          <div className="h-full w-full">
            <Outlet />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MenuEntry({text, onClick }: {text: string, onClick: () => void}) {
  return (
    <div className="flex gap-3 items-center px-3 mr-2 py-1 hover:bg-sidebar-accent rounded-md hover:cursor-pointer"
      onClick={onClick}
    >
      <span>{text}</span>
    </div>
  )  
}