import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Cursor from '@/components/Cursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MusicVerse',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <Cursor></Cursor>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
