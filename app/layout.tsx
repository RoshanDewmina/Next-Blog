import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Header from './layout/Header'
import { ClerkProvider } from '@clerk/nextjs'
import {neobrutalism, dark} from "@clerk/themes";
import Footer from './layout/Footer'
import NewsletterSubscribe from './home/NewsletterSubscribe'
import CalloutSection from './home/CalloutSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Blog',
  description: 'A blog to stay up to date with latest tech news and trends.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: neobrutalism
    }}>
      <html lang="en" suppressHydrationWarning>
      <head />
      <body className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
          {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
        </html>
    </ClerkProvider>
  )
}
