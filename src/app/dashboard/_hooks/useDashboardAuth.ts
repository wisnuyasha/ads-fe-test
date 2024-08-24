'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'

export function useDashboardAuth() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session === null) {
      toast({
        description: 'Unauthorized',
      })
      router.push('/login')
    }
  }, [session, router])

  return session
}