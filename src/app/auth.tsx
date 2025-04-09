'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Auth() {
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const login = async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${location.origin}/generate`, // Zielseite nach Login
        },
      })

      if (error) {
        console.error('Fehler beim Login:', error.message)
      } else if (data?.url) {
        window.location.href = data.url // Weiterleitung zur Google-Login-Seite
      }
    }

    login()
  }, [router, supabase])

  return <p>Weiterleitung zu Google Login…</p>
}
