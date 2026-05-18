import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  WifiIcon,
  TvIcon,
  HomeIcon,
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

const featuredRooms = [
  {
    id: 1,
    name: 'Deluxe Ocean Suite',
    description: 'Luxurious suite with panoramic ocean views and private balcony',
    price: 299,
    rating: 4.9,
    reviews: 128,
    size: '45m²',
    maxGuests: 2,
    bedType: 'King Size Bed',
    features: ['Ocean View', 'Private Balcony', 'Smart Controls', 'Premium Amenities'],
    availability: 'Available Now',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800&h=500',
  },
  {
    id: 2,
    name: 'Executive Sky Room',
    description: 'Modern room with stunning city skyline views and workspace',
    price: 199,
    rating: 4.7,
    reviews: 89,
    size: '35m²',
    maxGuests: 2,
    bedType: 'Queen Size Bed',
    features: ['City View', 'Work Desk', 'High-Speed WiFi', 'Smart TV'],
    availability: '2 Rooms Left',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800&h=500',
  },
  {
    id: 3,
    name: 'Premium Family Suite',
    description: 'Spacious suite perfect for families with separate living area',
    price: 399,
    rating: 4.8,
    reviews: 156,
    size: '65m²',
    maxGuests: 4,
    bedType: '2 King Size Beds',
    features: ['Living Room', 'Kitchenette', 'Children Area', 'Entertainment System'],
    availability: 'Limited Availability',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800&h=500',
  },
]

const amenities = [
  {
    name: 'Free Wi-Fi',
    description: 'High-speed internet throughout the hotel with smart connectivity',
    icon: WifiIcon,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Smart TV',
    description: 'HD TVs with AI-powered content recommendations',
    icon: TvIcon,
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Luxury Rooms',
    description: 'Voice-controlled smart rooms with automated features',
    icon: HomeIcon,
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    name: 'Room Service',
    description: 'AI-assisted 24/7 concierge and dining service',
    icon: SparklesIcon,
    color: 'from-amber-400 to-amber-600',
  },
  {
    name: 'Climate Control',
    description: 'Smart temperature and humidity management',
    icon: SparklesIcon,
    color: 'from-rose-400 to-rose-600',
  },
  {
    name: 'Digital Keys',
    description: 'Secure smartphone room access',
    icon: HomeIcon,
    color: 'from-indigo-400 to-indigo-600',
  },
]

const Home = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let interval: NodeJS.Timeout

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (!isPaused) {
          const isEnd = currentIndex >= amenities.length - 1
          const nextIndex = isEnd ? 0 : currentIndex + 1
          
          slider.scrollTo({
            left: nextIndex * 320,
            behavior: 'smooth'
          })
          
          setCurrentIndex(nextIndex)
        }
      }, 3000) // Change slide every 3 seconds
    }

    startAutoScroll()

    const handleScroll = () => {
      if (slider) {
        const index = Math.round(slider.scrollLeft / 320)
        setCurrentIndex(index)
      }
    }

    slider.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(interval)
      slider?.removeEventListener('scroll', handleScroll)
    }
  }, [currentIndex, isPaused])

  const handleSlideChange = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return

    const isEnd = currentIndex >= amenities.length - 1
    const isStart = currentIndex <= 0

    let nextIndex = currentIndex
    if (direction === 'next' && !isEnd) {
      nextIndex = currentIndex + 1
    } else if (direction === 'prev' && !isStart) {
      nextIndex = currentIndex - 1
    } else if (direction === 'next' && isEnd) {
      nextIndex = 0
    } else if (direction === 'prev' && isStart) {
      nextIndex = amenities.length - 1
    }

    sliderRef.current.scrollTo({
      left: nextIndex * 320,
      behavior: 'smooth'
    })
    setCurrentIndex(nextIndex)
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 animate-fadeIn">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              The Future of Luxury
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 font-light">
              Experience tomorrow's comfort in today's world
            </p>
            <Link
              to="/rooms"
              className="neon-button text-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Rooms */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
              Featured Rooms
            </h2>
            <div className="glass-divider mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="glass-card group rounded-xl overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full shadow-lg">
                    <div className="flex items-center space-x-1">
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-800">{room.rating}</span>
                      <span className="text-xs text-gray-500">({room.reviews})</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 glass px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-blue-600">{room.availability}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{room.description}</p>
                  
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <HomeIcon className="h-5 w-5 text-blue-500" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserGroupIcon className="h-5 w-5 text-blue-500" />
                      <span>Up to {room.maxGuests}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="glass px-3 py-1.5 rounded-full text-sm text-gray-700 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Starting from</p>
                        <div className="flex items-center gap-1">
                          <CurrencyDollarIcon className="h-6 w-6 text-blue-600" />
                          <span className="text-3xl font-bold text-gray-900">{room.price}</span>
                          <span className="text-gray-600 text-sm">/night</span>
                        </div>
                      </div>
                      <Link
                        to={room.id === 1 ? '/rooms/deluxe-ocean-suite' : room.id === 2 ? '/rooms/executive-sky-room' : '/rooms/family-suite'}
                        className="neon-button group/btn inline-flex items-center gap-2 px-6 py-2.5 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        Book Now
                        <ArrowRightIcon className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
              Smart Amenities
            </h2>
            <p className="text-gray-500 mb-8">Experience the future of hospitality</p>
            <div className="glass-divider mx-auto"></div>
          </div>
          
          <div className="relative"
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}>
            <div ref={sliderRef}
                 className="amenities-slider flex space-x-6 py-8 px-4 overflow-x-auto hide-scrollbar">
              {amenities.map((amenity, index) => (
                <div
                  key={amenity.name}
                  className={`amenity-card glass-card flex-none w-[300px] p-8 text-center group transition-all duration-500
                            ${currentIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}
                >
                  <div className={`icon-wrapper mb-6 mx-auto bg-gradient-to-br ${amenity.color} p-4 rounded-2xl transform group-hover:scale-110 transition-transform duration-500`}>
                    <amenity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {amenity.name}
                  </h3>
                  <p className="text-gray-600">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
            
            <button 
              className="slider-nav-btn left-4 group/nav" 
              onClick={() => handleSlideChange('prev')}
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600 group-hover/nav:text-blue-600" />
            </button>
            <button 
              className="slider-nav-btn right-4 group/nav" 
              onClick={() => handleSlideChange('next')}
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover/nav:text-blue-600" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {amenities.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                             ${currentIndex === index 
                               ? 'w-6 bg-blue-500' 
                               : 'bg-gray-300 hover:bg-gray-400'}`}
                  onClick={() => {
                    sliderRef.current?.scrollTo({
                      left: index * 320,
                      behavior: 'smooth'
                    })
                    setCurrentIndex(index)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
