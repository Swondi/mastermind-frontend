/**
 * This page will ONLY be showed once during the first deployment of the app.
 * This page is used to create root account.
 */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHead,
  TableHeader,
  TableHeaderGroup,
  TableProvider,
  TableRow,
  type ColumnDef,
} from '@/components/ui/shadcn-io/table';
import { IoMdAdd } from "react-icons/io";

const users = [
  { name: "user1", role: "Admin", createdAt: "2025-08-12T09:00:00Z" },
  { name: "user5", role: "Editor", createdAt: "2025-08-08T21:45:00Z" }
];

export function AdminOTAPage() {

  const columns: ColumnDef<typeof users[number]>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Name" />
      ),
      cell: ({ row }) => (
        <div>
          { users[row.index].name }
        </div>
      )
    },
    {
      accessorKey: 'role',
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Role" />
      ),
      cell: ({ row }) => (
        <div>
          { users[row.index].role }
        </div>
      )
    },
    {
      accessorKey: 'created_at',
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Created At" />
      ),
      cell: ({ row }) => (
        <div>
          {
            new Date(users[row.index].createdAt).toLocaleString()
          }
        </div>
      )
    }
  ]

  return (
    <main className='flex flex-col h-screen w-screen gap-10 p-10'>
      <Card className='max-w-lg m-auto'>
        <CardHeader>
          <CardTitle>Create Admin Users</CardTitle>
          <CardDescription>
            Use this panel to create your first user that you will then use to create other users, admins or standard users. This is required when
            setting Mastermind up.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md overflow-hidden">
            <TableProvider columns={columns} data={users}>
              <TableHeader className='!rounded-full'>
                {({ headerGroup }) => (
                  <TableHeaderGroup headerGroup={headerGroup} key={headerGroup.id}>
                    {({ header }) => <TableHead header={header} key={header.id} />}
                  </TableHeaderGroup>
                )}
              </TableHeader>
              <TableBody>
                {({ row }) => (
                  <TableRow key={row.id} row={row}>
                    {({ cell }) => <TableCell cell={cell} key={cell.id} />}
                  </TableRow>
                )}
              </TableBody>
            </TableProvider>
            <Button variant="ghost" className='w-full rounded-t-none'>
              <IoMdAdd />Add User
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};