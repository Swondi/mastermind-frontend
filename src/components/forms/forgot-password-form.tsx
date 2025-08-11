import { LockIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { useForm } from "react-hook-form";
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { GoCheckCircle } from "react-icons/go";
import { useNavigate } from "react-router";

const ForgotPasswordSchema = z.object({
  email: z.email(),
})

export function ForgotPasswordForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    }
  })

  function onSubmit(data: z.infer<typeof ForgotPasswordSchema>) {
    console.log(data);
    setIsSubmitted(true);
  }
  
  return (
    <Card className="mx-auto w-full max-w-md">
      {
        isSubmitted ? 
          <div className="flex flex-col items-center justify-center gap-10 py-10">
            <GoCheckCircle size={48} className="text-green-500" />
            <div className="flex flex-col gap-5">
              <p className="text-center px-5">
                Your password has been updated successfully. You can now login with your new credentials. <br />
              </p>
              <p className="text-center px-5">
                Once you changed your password, click <span onClick={() => navigate('/login')} className="hover:cursor-pointer underline">sign in</span>.
              </p>
            </div>
          </div>
          :
          <>
            <CardHeader className="space-y-1">
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <LockIcon className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-center text-2xl">Reset Password</CardTitle>
              <CardDescription className="text-center">
                Create a new password for your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormInput
                    ctrl={form.control}
                  />
                  <Button type="submit" className="w-full">
                    Reset Password
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-muted-foreground text-sm">
                Remember your password?{" "}
                <a href="/login" className="text-primary underline">
                  Sign in
                </a>
              </p>
            </CardFooter>
          </>
      }
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