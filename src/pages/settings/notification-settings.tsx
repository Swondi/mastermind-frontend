import { Switch } from "@/components/ui/switch"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { useUser } from "@/hooks/user/use-user";
import { useState } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export function NotificationSettings() {
  const { user, saveUser } = useUser()

  const [ np, setNp ] = useState(user.notificationPreference);

  const updateNp = async (id: string, type: "email" | "mobile", value: boolean) => {
    const newNp = {
      ...np,
      [id]: {
        ...np[id],
        [type]: value
      }
    };

    setNp(newNp)

    await saveUser({
      notificationPreference: newNp
    })
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="font-bold text-lg">Notifications</h1>
      <p className="text-muted-foreground text-sm">
        Choose how you want to be notified based on what happens in the servers linked to Mastermind.
      </p>
      <div className="flex flex-col gap-10">
        <NotificationSection title="Nodes">
          <NotificationPreference
            name="Server Overload Alerts"
            description="Alert on heavy server load."
            onChange={updateNp}
            email={np['server_overload_alerts'].email}
            mobile={np['server_overload_alerts'].mobile}
          />
          <NotificationPreference
            name="Node Offline Warnings"
            description="Alert when a node is offline."
            onChange={updateNp}
          />
          <NotificationPreference
            name="High Latency Alerts"
            description="Notify on high network latency."
            onChange={updateNp}
          />
          <NotificationPreference
            name="Security Breach Detected"
            description="Alert on suspicious activity."
            onChange={updateNp}
          />
        </NotificationSection>

        <NotificationSection title="Marketing">
          <NotificationPreference
            name="Transaction Confirmations"
            description="Be instantly informed when transactions or payments are completed."
            onChange={updateNp}
          />
          <NotificationPreference
            name="Feature Updates"
            description="Stay updated on new features or changes with mobile alerts."
            onChange={updateNp}
          />
          <NotificationPreference
            name="Promotional Offers"
            description="Get notified about special deals, discounts, and promotions."
            onChange={updateNp}
          />
          <NotificationPreference
            name="Newsletter"
            description="Monthly digest of updates, tips, and industry news."
            onChange={updateNp}
          />
        </NotificationSection>

        <NotificationSection title="Account">
          <NotificationPreference
            name="Login Alerts"
            description="Receive notifications for new or suspicious login attempts."
            onChange={updateNp}
          />
          <NotificationPreference
            name="Password Change Alerts"
            description="Get an alert whenever your account password is updated."
            onChange={updateNp}
          />
          <NotificationPreference
            name="Subscription Expiration"
            description="Be reminded when your subscription is about to expire."
            onChange={updateNp}
          />
        </NotificationSection>

        <NotificationSection title="Billing">
          <NotificationPreference
            name="Invoice Ready"
            description="Get notified when a new invoice is available."
            onChange={updateNp}
          />
          <NotificationPreference
            name="Payment Failures"
            description="Be alerted when a payment method fails or is declined."
            onChange={updateNp}
          />
          <NotificationPreference
            name="Refund Processed"
            description="Receive confirmation when a refund is issued."
            onChange={updateNp}
          />
        </NotificationSection>
      </div>
    </div>
  )
}

function NotificationSection({
  title,
  children
}: {
  title: string,
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="font-semibold">{title}</h2>
      <Table className="rounded-md overflow-hidden table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-full">Event</TableHead>
            <TableHead>
              <MdOutlineEmail className="mx-auto" size={20} />
            </TableHead>
            <TableHead>
              <IoPhonePortraitOutline className="mx-auto" size={20} />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </section>
  )
}
function NotificationPreference({
  name,
  description,
  onChange,
  email,
  mobile
}: {
  name: string
  description: string,
  onChange: (id: string, type: "email" | "mobile", value: boolean) => Promise<void>,
  email?: boolean,
  mobile?: boolean
}) {
  const id = name.toLowerCase().replaceAll(' ', '_')
  
  return (
    <TableRow>
      <TableCell>
        <div className="w-full">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </TableCell>
      <TableCell>
        <Switch
          onCheckedChange={(e) => onChange(id, 'email', e)}
          checked={email}
        />
      </TableCell>
      <TableCell>
        <Switch
          onCheckedChange={(e) => onChange(id, 'mobile', e)}
          checked={mobile}
        />
      </TableCell>
    </TableRow>
  )
}