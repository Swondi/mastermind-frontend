import { useSettings } from "@/hooks/system/use-settings";
import { BsLayoutTextWindowReverse } from "react-icons/bs";

export function AppearanceSettings() {
  const { setTheme } = useSettings();

  return (
    <div className="flex flex-col gap-3 w-4/5">
      <h1 className="font-bold text-lg">Appearance</h1>
      <div className="flex w-full gap-5">
        <ThemeCard label="Light" className="bg-white text-[rgba(24,24,27,1)]" onClick={() => setTheme('light')}/>
        <ThemeCard label="Dark" className="bg-[rgba(24,24,27,1)] text-white" onClick={() => setTheme('dark')}/>
      </div>
      <p className="text-muted-foreground">Choose the theme of the interface. </p>
    </div>
  )
}

function ThemeCard({ label, className, onClick}: {label: string, className?: string, onClick: () => void}) {
  return (
    <div
      onClick={onClick}
      className={`${className}
        relative flex justify-center w-full px-10 py-5 rounded-md hover:cursor-pointer
        border-[1px] transition-all overflow-hidden active:scale-95`
      }
    >
      <BsLayoutTextWindowReverse size={64} />
      <span className="absolute left-2 bottom-2 text-sm">{label}</span>
    </div>
  )
}