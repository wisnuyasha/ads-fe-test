'use client'

import React from 'react'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export const useLoginAuth = () => {
  const { toast } = useToast()
  const router = useRouter()
  const { data: session } = useSession()

  React.useEffect(() => {
    if (session && session.user) {
      toast({
        description: 'Already login',
      })
      router.push('/dashboard')
    }
  }, [session, toast, router])
}
