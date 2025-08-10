import { ImagePicker } from "@/components/files/image-picker"
import { Input } from "@/components/ui/input"

export function ProfileSettings() {
  return (
    <div className="flex flex-col gap-3 w-4/5">
      <h1 className="font-bold text-lg">Profile</h1>
      <p className="text-muted-foreground text-sm">
        This is how the customers will see you on the app.
      </p>
      <ImagePicker />
      <ProfileSection
        title="Username"
        placeholder="Name"
        description="This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days"
      />
      <ProfileSection
        title="Username"
        placeholder="Name"
        description="This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days"
      />
      <ProfileSection
        title="Username"
        placeholder="Name"
        description="This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days"
      />
    </div>
  )
}

function ProfileSection({
  title,
  placeholder,
  description
}: {
  title: string,
  placeholder: string,
  description: string
}) {
  return (
    <section className="">
      <h2 className="font-bold">{title}</h2>
      <div className="flex flex-col gap-3 py-5">
        { placeholder === 'image' ? 
          <Input className="text-muted-foreground" type="file"/> :
          <Input placeholder={placeholder} />
        }
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </section>
  )
}