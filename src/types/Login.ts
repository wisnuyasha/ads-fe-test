import * as z from 'zod'

export const loginFormSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(1, 'Username or email is required')
    .email('Invalid email address')
    .or(z.string().min(1, 'Username is required')),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export type LoginFormValues = z.infer<typeof loginFormSchema>
