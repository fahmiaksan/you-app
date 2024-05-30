import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import React from 'react';

const inter = Inter({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative dark overflow-x-hidden`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
