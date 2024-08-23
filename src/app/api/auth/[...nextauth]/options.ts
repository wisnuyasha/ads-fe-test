import { useUserStore } from '@/store/useUserStore'
import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'login-provider',
      name: 'Login',
      credentials: {
        usernameOrEmail: {
          label: 'Username or Email',
          type: 'text',
          placeholder: 'Username or Email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const findUser = useUserStore.getState().findUser
        const user = findUser(
          credentials?.usernameOrEmail,
          credentials?.password
        )

        if (user) {
          return user
        } else {
          throw new Error('Invalid credentials')
        }
      },
    }),

    CredentialsProvider({
      id: 'register-provider',
      name: 'Sign Up',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        phone: { label: 'Phone', type: 'text', placeholder: 'Phone' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          credentials &&
          credentials.username &&
          credentials.email &&
          credentials.phone &&
          credentials.password
        ) {
          const newUser = {
            id: Math.random().toString(16).slice(2),
            username: credentials?.username,
            email: credentials?.email,
            phone: credentials?.phone,
            password: credentials?.password,
          }
          // store to global state
          useUserStore.getState().addUser(newUser)

          // automatically login because this authorize's real behavior is login
          return newUser
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/dashboard',
    signOut: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        if (session.user) {
          session.user.email = token.email
        }
      }
      return session
    },
  },
}
