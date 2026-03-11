import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/components/AuthProvider'

export const metadata: Metadata = {
  title: 'Luxury Hotel - Premium Experience',
  description: 'Experience luxury like never before at our premium hotel',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navigation />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
