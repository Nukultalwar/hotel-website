import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

interface BookingFormProps {
  isOpen: boolean
  onClose: () => void
}

interface BookingFormData {
  fullName: string
  email: string
  phone: string
  specialRequests: string
  roomType: string
  checkIn: string
  checkOut: string
  adults: number
  children: number
}

const BookingForm = ({ isOpen, onClose }: BookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
    roomType: 'Deluxe Ocean Suite',
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to submit booking' }))
        throw new Error(errorData.message || 'Failed to submit booking')
      }

      const data = await response.json()
      console.log('Booking response:', data)
      alert('Thank you for your booking request! We will confirm availability shortly.')
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        specialRequests: '',
        roomType: 'Deluxe Ocean Suite',
        checkIn: '',
        checkOut: '',
        adults: 1,
        children: 0
      })
      onClose()
    } catch (error) {
      // Check if it's a network error (server not running)
      if (error instanceof TypeError && error.message.includes('fetch')) {
        alert('Unable to connect to the server. Please make sure the backend server is running, or contact us directly.')
      } else {
        alert(`Sorry, there was an error submitting your booking: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact us directly.`)
      }
      console.error('Booking submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full mx-4 h-auto relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all z-10"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Book Your Stay</h2>
          <p className="text-gray-600 mb-6 text-sm">Fill out the form below to request a reservation</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Guest Information */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Guest Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="glass-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="glass-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="glass-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  rows={2}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requirements or preferences?"
                  className="glass-input w-full"
                />
              </div>
            </div>

            {/* Room Information */}
            <div className="space-y-3 pt-3 border-t">
              <h3 className="text-lg font-semibold text-gray-900">Room Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room Type
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="glass-input w-full"
                >
                  <option>Deluxe Ocean Suite</option>
                  <option>Executive Sky Room</option>
                  <option>Family Suite</option>
                  <option>Penthouse</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="glass-input w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="glass-input w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adults
                  </label>
                  <input
                    type="number"
                    name="adults"
                    min="1"
                    required
                    value={formData.adults}
                    onChange={handleChange}
                    className="glass-input w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Children
                  </label>
                  <input
                    type="number"
                    name="children"
                    min="0"
                    value={formData.children}
                    onChange={handleChange}
                    className="glass-input w-full"
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 text-white font-semibold bg-blue-600 rounded-lg shadow-md transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Request Booking'}
              </button>
              <p className="mt-2 text-sm text-gray-500 text-center">
                We'll confirm availability and send you a confirmation email
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingForm 