import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { ErrorBoundary } from '@/components/error-boundary'
import { PageTransition } from '@/components/page-transition'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'SPINNECO',
  description: 'Elevate your status with SPINNECO',
  metadataBase: new URL('https://spinneco.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased relative before:fixed before:inset-0 before:w-full before:h-full before:bg-gradient-to-br before:from-pink-500/20 before:via-purple-500/20 before:to-blue-500/20 before:animate-gradient before:-z-10 text-foreground pt-14`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <PageTransition />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

