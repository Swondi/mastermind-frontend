/**
 * This page will ONLY be showed once during the first deployment of the app.
 * This page is used to create root account.
 */
import { Card } from '@/components/ui/card';
import { useAuth } from '@/hooks/authentication/auth-hook';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function AdminOTAPage() {

  const { isAuthenticated, isFirstTime } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isFirstTime) {
      navigate(isAuthenticated ? '/' : '/login')
    }
  }, []);

  return (
    <main className='flex h-screen w-screen gap-10 p-10'>
      <div className='flex flex-col w-full gap-10'>
        <div className='flex flex-col'>
          <Card>
            1
          </Card>
        </div>
        <div className='flex flex-col'>
          <Card>
            2
          </Card>
        </div>
      </div>
      <div className='w-full'>
        <div className='flex flex-col'>
          <Card>
            3
          </Card>
        </div>
        <div className='flex flex-col'>
          <Card className='w-full h-full'>
            4
          </Card>
        </div>
      </div>
    </main>
    // <ListProvider onDragEnd={handleDragEnd}>
    //   <ListGroup id="Admin Users">
    //     <ListHeader color='red' name="Admins"/>
    //     <ListItems>
    //       {
    //         admins.map((u, i) => {
    //           return (
    //             <ListItem
    //               id={`${u.id}`}
    //               key={u.id}
    //               name={u.name}
    //               index={i}
    //               parent={''}
    //             />
    //           )
    //         })
    //       }
    //     </ListItems>
    //   </ListGroup>
    //   <ListGroup id="Users">
    //     <ListHeader color='red' name="Users"/>
    //     <ListItems>
    //       {
    //         users.map((u, i) => {
    //           return (
    //             <ListItem
    //               id={`${u.id}`}
    //               key={u.id}
    //               name={u.name}
    //               index={i}
    //               parent={''}
    //             />
    //           )
    //         })
    //       }
    //     </ListItems>
    //   </ListGroup>
    // </ListProvider>
  );
};