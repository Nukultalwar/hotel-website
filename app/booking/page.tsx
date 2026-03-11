'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FiCalendar, FiUsers, FiCreditCard, FiCheck } from 'react-icons/fi'
import { useAuth } from '@/components/AuthProvider'
import { format, addDays } from 'date-fns'

type PaymentMethod = 'upi' | 'card' | 'cash'

interface BookingData {
  roomType: string
  checkIn: string
  checkOut: string
  adults: number
  children: number
  paymentMethod: PaymentMethod
  totalPrice: number
}

export default function Booking() {
  const router = useRouter()
  const { user } = useAuth()
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    roomType: '',
    checkIn: format(new Date(), 'yyyy-MM-dd'),
    checkOut: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    adults: 1,
    children: 0,
    paymentMethod: 'card',
    totalPrice: 0,
  })

  const roomTypes = [
    { id: 'normal', name: 'Normal Room', price: 99 },
    { id: 'highclass', name: 'High Class Room', price: 199 },
    { id: 'luxury', name: 'Luxury Suite', price: 399 },
    { id: 'master', name: 'Master Room', price: 699 },
  ]

  const paymentMethods: { id: PaymentMethod; name: string; icon: string }[] = [
    { id: 'upi', name: 'UPI', icon: '📱' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'cash', name: 'Cash on Arrival', icon: '💵' },
  ]

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find((r) => r.id === bookingData.roomType)
    if (!selectedRoom) return 0

    const checkInDate = new Date(bookingData.checkIn)
    const checkOutDate = new Date(bookingData.checkOut)
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))

    return selectedRoom.price * nights
  }

  const handleRoomSelect = (roomId: string) => {
    setBookingData({ ...bookingData, roomType: roomId })
    setStep(2)
  }

  const handleDateChange = (field: 'checkIn' | 'checkOut', value: string) => {
    setBookingData({ ...bookingData, [field]: value })
  }

  const handleGuestChange = (field: 'adults' | 'children', value: number) => {
    setBookingData({ ...bookingData, [field]: Math.max(0, value) })
  }

  const handlePaymentSelect = (method: PaymentMethod) => {
    setBookingData({ ...bookingData, paymentMethod: method })
  }

  const handleConfirmBooking = () => {
    const total = calculateTotal()
    setBookingData({ ...bookingData, totalPrice: total })
    setStep(4)
  }

  if (!user) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 gold-gradient">Please Login First</h2>
          <button
            onClick={() => router.push('/login')}
            className="px-6 py-3 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-opacity-90"
          >
            Go to Login
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20 py-20 px-4 luxury-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-luxury font-bold text-center mb-12 gold-gradient"
        >
          Book Your Stay
        </motion.h1>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    step >= s
                      ? 'bg-luxury-gold text-black'
                      : 'glass-effect text-gray-400'
                  }`}
                >
                  {step > s ? <FiCheck /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > s ? 'bg-luxury-gold' : 'bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            <div className="glass-effect p-8 rounded-2xl">
              {/* Step 1: Room Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-white">Select Room Type</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roomTypes.map((room) => (
                      <button
                        key={room.id}
                        onClick={() => handleRoomSelect(room.id)}
                        className={`p-6 rounded-xl text-left transition-all ${
                          bookingData.roomType === room.id
                            ? 'bg-luxury-gold text-black'
                            : 'glass-effect hover:scale-105'
                        }`}
                      >
                        <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                        <p className="text-2xl font-bold">${room.price}/night</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Dates & Guests */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-white">Booking Details</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <FiCalendar className="inline mr-2" />
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          value={bookingData.checkIn}
                          onChange={(e) => handleDateChange('checkIn', e.target.value)}
                          min={format(new Date(), 'yyyy-MM-dd')}
                          className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-luxury-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <FiCalendar className="inline mr-2" />
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          value={bookingData.checkOut}
                          onChange={(e) => handleDateChange('checkOut', e.target.value)}
                          min={bookingData.checkIn}
                          className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-luxury-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <FiUsers className="inline mr-2" />
                          Adults
                        </label>
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => handleGuestChange('adults', bookingData.adults - 1)}
                            className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-2xl font-bold text-white w-12 text-center">
                            {bookingData.adults}
                          </span>
                          <button
                            onClick={() => handleGuestChange('adults', bookingData.adults + 1)}
                            className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <FiUsers className="inline mr-2" />
                          Children
                        </label>
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => handleGuestChange('children', bookingData.children - 1)}
                            className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-2xl font-bold text-white w-12 text-center">
                            {bookingData.children}
                          </span>
                          <button
                            onClick={() => handleGuestChange('children', bookingData.children + 1)}
                            className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => setStep(1)}
                        className="px-6 py-3 glass-effect rounded-lg hover:bg-opacity-80"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="px-6 py-3 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-opacity-90"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment Method */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-white">Payment Method</h2>
                  <div className="space-y-4 mb-6">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => handlePaymentSelect(method.id)}
                        className={`w-full p-6 rounded-xl text-left transition-all ${
                          bookingData.paymentMethod === method.id
                            ? 'bg-luxury-gold text-black'
                            : 'glass-effect hover:scale-105'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-3xl">{method.icon}</span>
                          <span className="text-xl font-semibold">{method.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 glass-effect rounded-lg hover:bg-opacity-80"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleConfirmBooking}
                      className="px-6 py-3 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-opacity-90"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-6">✓</div>
                  <h2 className="text-3xl font-bold mb-4 gold-gradient">Booking Confirmed!</h2>
                  <p className="text-gray-300 mb-8">
                    Your reservation has been successfully confirmed. We look forward to hosting you!
                  </p>
                  <button
                    onClick={() => router.push('/')}
                    className="px-8 py-3 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-opacity-90"
                  >
                    Return to Home
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="glass-effect p-6 rounded-2xl sticky top-24">
              <h3 className="text-2xl font-bold mb-6 text-white">Booking Summary</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Room Type</p>
                  <p className="text-white font-semibold">
                    {roomTypes.find((r) => r.id === bookingData.roomType)?.name || 'Not selected'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Check-in</p>
                  <p className="text-white font-semibold">
                    {bookingData.checkIn
                      ? format(new Date(bookingData.checkIn), 'MMM dd, yyyy')
                      : 'Not set'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Check-out</p>
                  <p className="text-white font-semibold">
                    {bookingData.checkOut
                      ? format(new Date(bookingData.checkOut), 'MMM dd, yyyy')
                      : 'Not set'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Guests</p>
                  <p className="text-white font-semibold">
                    {bookingData.adults} Adults, {bookingData.children} Children
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Payment</p>
                  <p className="text-white font-semibold">
                    {paymentMethods.find((m) => m.id === bookingData.paymentMethod)?.name}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Total</span>
                    <span className="text-2xl font-bold text-luxury-gold">
                      ${calculateTotal() || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
