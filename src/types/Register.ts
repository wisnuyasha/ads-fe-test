import * as z from 'zod'

const passwordSchema = z.string().refine((value) => {
  const hasMinLength = value.length >= 8
  const hasLowercase = /[a-z]/.test(value)
  const hasUppercase = /[A-Z]/.test(value)
  const hasNumber = /\d/.test(value)
  const hasSpecialChar = /[!@#$%^&*]/.test(value)

  return (
    hasMinLength &&
    // min 3 cond
    [hasLowercase, hasUppercase, hasNumber, hasSpecialChar].filter(Boolean)
      .length >= 3
  )
}, 'Password must meet the criteria')

export const registerFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  username: z.string().min(1, 'Username is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits long'),
  password: passwordSchema,
})

export type RegisterFormValues = z.infer<typeof registerFormSchema>
