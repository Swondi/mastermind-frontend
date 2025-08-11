
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { LuLoaderCircle } from 'react-icons/lu'
import { useAuth } from '@/hooks/authentication/auth-hook'
import { useNavigate } from 'react-router'
import { EyeOffIcon, EyeIcon } from 'lucide-react'

const LoginFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
})

export default function LoginForm() {
  const [ passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const { login, isloading, error } = useAuth()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: 'test@gmail.com',
      password: 'FrancescoMaca2002'
    }
  })

  async function onFormSubmit(data: z.infer<typeof LoginFormSchema>) {
    await login(data.email, data.password)
  }

  return (
    <Card className="w-full max-w-md">
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
          <form onSubmit={form.handleSubmit(onFormSubmit)}>
            <div className="flex flex-col gap-6">
              <FormInput
                ctrl={form.control}
              />
              <FormPasswordInput 
                ctrl={form.control}
                visible={passwordVisible}
                onIconClick={() => setPasswordVisible(!passwordVisible)}
                onForgotPasswordClick={() => navigate('/password-reset')}
              />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full select-none hover:cursor-pointer">
              {isloading ? <LuLoaderCircle className='animate-spin duration-200'/> : 'Login'}
            </Button>
          </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function FormInput({
  ctrl,
}: {
  ctrl: any
}) {
  return (
    <FormField
      control={ctrl}
      name="email"
      render={({ field }) => (
        <FormItem>
          <Label htmlFor="email">Email</Label>
            <FormControl>
              <Input
                placeholder="francesco@example.com"
                type="text"
                {...field}
              />
            </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

function FormPasswordInput({
  ctrl,
  visible,
  onIconClick,
  onForgotPasswordClick
}: {
  ctrl: any,
  visible: boolean
  onIconClick: () => void,
  onForgotPasswordClick: () => void
}) {
  return (
    <FormField
      control={ctrl}
      name="password"
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <span
              className="text-sm underline-offset-4 hover:underline select-none hover:cursor-pointer"
              onClick={onForgotPasswordClick}
            >
              Forgot password?
            </span>
          </div>
          <div className="relative">
            <FormControl>
              <Input
                placeholder="FractalCow123"
                type={visible ? "text" : "password"}
                {...field}
              />
            </FormControl>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-muted-foreground absolute top-0 right-0 h-full px-3 py-2"
              onClick={onIconClick}
            >
              { visible ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" /> }
            </Button>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}