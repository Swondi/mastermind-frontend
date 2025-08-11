import { Switch } from "@/components/ui/switch"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export function NotificationSettings() {
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
          />
          <NotificationPreference
            name="Node Offline Warnings"
            description="Alert when a node is offline."
          />
          <NotificationPreference
            name="High Latency Alerts"
            description="Notify on high network latency."
          />
          <NotificationPreference
            name="Security Breach Detected"
            description="Alert on suspicious activity."
          />
        </NotificationSection>

        <NotificationSection title="Marketing">
          <NotificationPreference
            name="Transaction Confirmations"
            description="Be instantly informed when transactions or payments are completed."
          />
          <NotificationPreference
            name="Feature Updates"
            description="Stay updated on new features or changes with mobile alerts."
          />
          <NotificationPreference
            name="Promotional Offers"
            description="Get notified about special deals, discounts, and promotions."
          />
          <NotificationPreference
            name="Newsletter"
            description="Monthly digest of updates, tips, and industry news."
          />
        </NotificationSection>

        <NotificationSection title="Account">
          <NotificationPreference
            name="Login Alerts"
            description="Receive notifications for new or suspicious login attempts."
          />
          <NotificationPreference
            name="Password Change Alerts"
            description="Get an alert whenever your account password is updated."
          />
          <NotificationPreference
            name="Subscription Expiration"
            description="Be reminded when your subscription is about to expire."
          />
        </NotificationSection>

        <NotificationSection title="Billing">
          <NotificationPreference
            name="Invoice Ready"
            description="Get notified when a new invoice is available."
          />
          <NotificationPreference
            name="Payment Failures"
            description="Be alerted when a payment method fails or is declined."
          />
          <NotificationPreference
            name="Refund Processed"
            description="Receive confirmation when a refund is issued."
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
}: {
  name: string
  description: string
}) {
  return (
    <TableRow>
      <TableCell>
        <div className="w-full">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </TableCell>
      <TableCell>
        <Switch />
      </TableCell>
      <TableCell>
        <Switch />
      </TableCell>
    </TableRow>
  )
}