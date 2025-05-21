// ./src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Cardo } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Handcrafted Haven',
  description: 'Artisan Marketplace',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Defines --font-inter CSS variable
})

const cardo = Cardo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cardo', // Defines --font-cardo CSS variable
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Apply the font variables to the html tag
    <html lang="en" className={`${inter.variable} ${cardo.variable}`}>
      <body className="min-h-screen bg-amber-50">
        <header className="bg-amber-800 text-amber-50 p-4 shadow-md">
          <h1 className="text-2xl font-serif font-bold">Handcrafted Haven</h1>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}