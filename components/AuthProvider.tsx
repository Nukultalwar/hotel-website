'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  name?: string
  email: string
  image?: string
}

interface AuthContextType {
  user: User | null
  signIn: (email: string, password?: string, provider?: 'google' | 'email') => Promise<void>
  signOut: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('hotel_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password?: string, provider: 'google' | 'email' = 'email') => {
    if (provider === 'google') {
      // Simulate Google OAuth
      const mockUser: User = {
        id: 'google_' + Date.now(),
        email: email,
        name: email.split('@')[0],
        image: `https://ui-avatars.com/api/?name=${encodeURIComponent(email)}&background=D4AF37&color=fff`,
      }
      setUser(mockUser)
      localStorage.setItem('hotel_user', JSON.stringify(mockUser))
    } else {
      // Email/password login
      const mockUser: User = {
        id: 'email_' + Date.now(),
        email: email,
        name: email.split('@')[0],
      }
      setUser(mockUser)
      localStorage.setItem('hotel_user', JSON.stringify(mockUser))
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('hotel_user')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
