
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { useState } from 'react'
import { Label } from '../ui/label'
import { LuEye, LuEyeClosed } from 'react-icons/lu'

const LoginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(8, {
    error: "Password must be at least 8 characers."
  }).max(32, {
    error: "Password cannot be more than 32 characters."
  }).refine((val) => /[A-Z]/.test(val), {
    message: "Password must include at least one uppercase letter."
  })
  .refine((val) => /[a-z]/.test(val), {
    message: "Password must include at least one lowercase letter."
  })
  .refine((val) => /[^A-Za-z0-9]/.test(val), {
    message: "Password must include at least one symbol."
  })
})

export default function LoginForm() {
  const [ passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    alert(`You submitted the following values: ${JSON.stringify(data, null, 2)}`);
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          Welcome to Mastermind
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="francesco@example.com" {...field}  className='select-none' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="text-sm underline-offset-4 hover:underline select-none"
                  >
                    Forgot password?
                  </a>
                </div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className='flex items-center gap-3'>
                      <div className='flex flex-col w-full'>
                        <FormControl>
                          <Input placeholder="FractalCow123" {...field} className='select-none'/>
                        </FormControl>
                        <FormMessage />
                      </div>
                      <div onClick={() => setPasswordVisible(!passwordVisible)} className="cursor-pointer py-2 mb-auto">
                        {passwordVisible ? <LuEyeClosed className="w-5 h-5"/> : <LuEye className="w-5 h-5 hover:scale-y-110 transition-all"/>}
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full select-none hover:cursor-pointer">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}