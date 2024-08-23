import { User } from '@/types/User'
import create from 'zustand'

interface UserState {
  users: User[]
  addUser: (user: User) => void
  findUser: (usernameOrEmail?: string, password?: string) => User | undefined
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [
    // default user
    {
      id: '1',
      username: 'user',
      email: 'test@example.com',
      phone: '1234567890',
      password: 'password',
    },
  ],
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  findUser: (usernameOrEmail, password) =>
    get().users.find(
      (user) =>
        (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
        user.password === password
    ),
}))
