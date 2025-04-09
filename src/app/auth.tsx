'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'

export default function Auth() {
  const router = useRouter()

  useEffect(() => {
    const login = async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${location.origin}/generate`,
        },
      })

      if (error) {
        console.error('Fehler beim Login:', error.message)
      } else if (data?.url) {
        window.location.href = data.url
      }
    }

    login()
  }, [router])

  return <p>Weiterleitung zu Google Login…</p>
}
