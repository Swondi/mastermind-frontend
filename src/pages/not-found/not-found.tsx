import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-screen h-screen">
      <h1 className="font-black text-6xl animate-bounce repeat-infinite">404</h1>
      <span className="text-muted-foreground text-lg">
        Looks like you've ventured into the unknown digital realm.
      </span>
      <Button onClick={() => navigate('/')}>Return to website</Button>
    </div>
  )
}