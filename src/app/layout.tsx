import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FlowerSystem from '@/components/FlowerSystem';

export const metadata: Metadata = {
  title: 'Nos Casamos | Invitación',
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
      <body>
        {isAuthenticated ? (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
            <FlowerSystem />
          </>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
