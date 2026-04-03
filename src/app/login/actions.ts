'use server'

import { saveGuest, validateGuest } from '@/lib/auth';
import { RSVPFormData } from '@/lib/validation';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const password = formData.get('password') as string;
  const data = await validateGuest(password);

  if (!data.success) {
    // throw new Error('Invalid token');
    redirect('/login')
  }

  const cookieStore = await cookies();

  cookieStore.set('guest', JSON.stringify(data.guest), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  });
  cookieStore.set('site-auth', 'authenticated', { maxAge: 60 * 60 * 24 * 30 }) // 30 days
  redirect('/')
}

export async function save(data: RSVPFormData) {
  const res = await saveGuest(data);

  if (!res.success) {
    // throw new Error('Invalid token');
    return false
  }
  return true;
}

export async function confirmGuest() {
  const cookieStore = await cookies();

  const guestCookie = cookieStore.get('guest');

  if (!guestCookie) {
    console.error('no se encontró la cookie');
    return { success: false };
  }

  const guest = JSON.parse(guestCookie.value);

  // 👇 Modificas lo que necesitas
  guest.confirmed = "SI";

  // 👇 Reescribes la cookie completa
  cookieStore.set('guest', JSON.stringify(guest), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  });

  return { success: true };
}