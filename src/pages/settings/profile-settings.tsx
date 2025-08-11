import { ImagePicker } from "@/components/files/image-picker"
import { Button } from "@/components/ui/button"
import { Input, InputWithIcon } from "@/components/ui/input"
import { useState } from "react"
import { LuEye, LuEyeClosed } from "react-icons/lu"

export function ProfileSettings() {
  return (
    <div className="flex flex-col gap-5 w-4/5">
      <ProfileSection title="Details">
        <div className="flex gap-5 items-center">
          <div className="flex flex-col gap-5 w-2/3">
            <ProfileEntry
              title="Username"
              placeholder="Name"
            />
            <ProfileEntry
              title="Bio"
              placeholder="Your story"
            />
            <ProfileEntry
              title="Website"
              placeholder="https://yoursite.com"
            />
          </div>
          <div className="flex flex-col gap-3 w-1/3">
            <h2 className="font-semibold">Profile Image</h2>
            <ImagePicker />
          </div>
        </div>
      </ProfileSection>
      <ProfileSection title="Security">
        <ProfileEntry
          title="Email"
          placeholder="Email"
          description="To change your email ask an administrator to do so."
          disabled
        />
        <ChangePasswordSection />
        <DangerZoneSection />
      </ProfileSection>
    </div>
  )
}

function ProfileSection({
  title,
  children
}: {
  title: string,
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </section>
  )
}

function ProfileEntry({
  title,
  placeholder,
  description,
  className,
  disabled
}: {
  title: string,
  placeholder: string,
  description?: string
  className?: string,
  disabled?: boolean
}) {
  return (
    <section className={`${className} flex flex-col gap-2 ml-3`}>
      <h3 className="font-semibold">{title}</h3>
      <div className="flex flex-col gap-2">
        <Input placeholder={placeholder} disabled={disabled} />
        { description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
    </section>
  )
}

function ChangePasswordSection() {
  const [visible, setVisible] = useState<boolean>(false)
  
  return (
    <div className="flex flex-col gap-2 ml-3">
      <h3 className="font-semibold">Change Password</h3>
      <div className="w-full">
        <InputWithIcon placeholder={"Current Password"} type={visible ? "text" : "password"} className="rounded-b-none"
          Symbol={visible ? LuEye : LuEyeClosed} onIconClick={() => setVisible(!visible)}
        />
        <InputWithIcon placeholder={"New Password"} type={visible ? "text" : "password"} className="rounded-none"
          Symbol={visible ? LuEye : LuEyeClosed} onIconClick={() => setVisible(!visible)}
        />
        <InputWithIcon placeholder={"Retype new Password"} type={visible ? "text" : "password"} className="rounded-t-none"
          Symbol={visible ? LuEye : LuEyeClosed} onIconClick={() => setVisible(!visible)}
        />
      </div>
      <Button className="self-end hover:cursor-pointer active:scale-95">Change Password</Button>
    </div>
  )
}

function DangerZoneSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-lg">Danger Zone</h2>
      <div className="flex items-center gap-5 p-5 ml-3 border-[1px] border-red-500 rounded-md">
        <span className="text-sm text-accent-foreground">Delete the account permanently. Be certain before doing this.</span>
        <Button variant={'outline'} className="!border-red-500 hover:!bg-red-500 w-fit active:scale-95">Delete Account</Button>
      </div>
    </div>
  )
}