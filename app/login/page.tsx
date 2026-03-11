'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { useAuth } from '@/components/AuthProvider'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { signIn } = useAuth()

  const handleGoogleLogin = async () => {
    try {
      // Simulate Google OAuth
      const googleEmail = prompt('Enter your email for Google login:') || 'user@gmail.com'
      await signIn(googleEmail, undefined, 'google')
      router.push('/booking')
    } catch (err) {
      setError('Google login failed. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email')
      return
    }

    if (isSignUp && !name) {
      setError('Please enter your name')
      return
    }

    if (!isSignUp && !password) {
      setError('Please enter your password')
      return
    }

    try {
      await signIn(email, password, 'email')
      router.push('/booking')
    } catch (err) {
      setError('Login failed. Please try again.')
    }
  }

  return (
    <main className="min-h-screen pt-20 flex items-center justify-center px-4 luxury-gradient">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass-effect p-8 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-luxury font-bold text-center mb-2 gold-gradient">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-center text-gray-400 mb-8">
            {isSignUp ? 'Sign up to continue' : 'Sign in to your account'}
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-luxury-gold"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-luxury-gold"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {!isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-luxury-gold"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="mt-4 w-full py-3 glass-effect text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-luxury-gold hover:underline"
            >
              {isSignUp
                ? 'Already have an account? Sign in'
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
