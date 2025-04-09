'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Auth() {
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const login = async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })

      if (error) {
        console.error('Fehler beim Login:', error.message)
      } else {
        console.log('Erfolgreich eingeleitet:', data)
      }
    }

    login()
  }, [])

  return <p>Weiterleitung zu Google Login…</p>
}
