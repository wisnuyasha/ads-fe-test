'use client'

import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'

export default function DashboardPage() {
  const { data: session } = useSession()
  const router = useRouter()

  React.useEffect(() => {
    if (session === null) {
      toast({
        description: 'Unauthorized',
      })
      router.push('/login')
    }
  }, [session])

  console.log(session)
  return (
    <>
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}
