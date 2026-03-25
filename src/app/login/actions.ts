'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const password = formData.get('password')
  if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set('site-auth', 'authenticated', { maxAge: 60 * 60 * 24 * 30 }) // 30 days
  }
  redirect('/')
}
