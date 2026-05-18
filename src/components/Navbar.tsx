import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useBooking } from '../contexts/BookingContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openBooking } = useBooking()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === '/rooms') {
      return location.pathname === path || location.pathname.startsWith('/rooms/')
    }
    return location.pathname === path
  }

  const navItems = [
    {
      name: 'Home',
      path: '/',
      dropdown: false
    },
    {
      name: 'Rooms',
      path: '/rooms',
      dropdown: true,
      dropdownItems: [
        { name: 'View All Rooms', path: '/rooms' },
        { name: 'Deluxe Ocean Suite', path: '/rooms/deluxe-ocean-suite' },
        { name: 'Executive Sky Room', path: '/rooms/executive-sky-room' },
        { name: 'Family Suite', path: '/rooms/family-suite' },
        { name: 'Penthouse', path: '/rooms/penthouse' }
      ]
    },
    {
      name: 'About',
      path: '/about',
      dropdown: false
    },
    {
      name: 'Contact',
      path: '/contact',
      dropdown: false
    }
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/98 backdrop-blur-md shadow-lg' 
          : 'bg-gray-900/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-400 transition-colors duration-300">
                LuxStay
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-sm font-medium ${
                        isActive(item.path)
                          ? 'text-blue-600'
                          : 'text-white hover:text-blue-400'
                      } transition-colors`}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium ${
                      isActive(item.path)
                        ? 'text-blue-600'
                        : 'text-white hover:text-blue-400'
                    } transition-colors`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button
              onClick={openBooking}
              data-booking
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/98 backdrop-blur-md' 
            : 'bg-gray-900/95 backdrop-blur-sm'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="space-y-1">
                  <div
                    className={`px-3 py-2 text-sm font-medium ${
                      isActive(item.path)
                        ? 'text-blue-600'
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                  </div>
                  <div className="pl-4 space-y-1">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-white hover:text-blue-400'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <button
              onClick={() => {
                openBooking()
                setIsOpen(false)
              }}
              className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
