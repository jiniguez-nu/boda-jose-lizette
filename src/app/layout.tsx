import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.scss';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FlowerSystem from '@/components/FlowerSystem';
import AudioPlayer from '@/components/AudioPlayer';

export const metadata: Metadata = {
  title: 'Boda José y Liz | Invitación',
  description: 'Te invitamos a celebrar nuestro amor',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('site-auth')?.value === 'authenticated';

  return (
    <html lang="es">
      <link 
        rel='preload'
        as='image'
        href='/sky360-3.png'
      />
      <link 
        rel='preload'
        as='image'
        href='/photo-6.jpeg'
      />
      <link 
        rel='preload'
        as='image'
        href='/bg-login.jpg'
      />
      <body>
        {isAuthenticated ? (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
            <AudioPlayer />
            <FlowerSystem />
            <Analytics />
          </>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
