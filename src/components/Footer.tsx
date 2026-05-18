import { Link } from 'react-router-dom'

const Footer = () => {
  const rooms = [
    'Deluxe Ocean Suite',
    'Executive Sky Room',
    'Family Suite',
    'Penthouse'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-6 text-white">LuxStay</h3>
            <p className="text-gray-400 text-lg">
              Experience luxury and comfort at its finest. Your perfect stay awaits.
            </p>
          </div>
          <div className="flex flex-col h-full">
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('button[data-booking]')?.click();
                }}>
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col h-full">
            <h4 className="text-xl font-semibold mb-6 text-white">Our Rooms</h4>
            <ul className="flex flex-col gap-4">
              {rooms.map(room => (
                <li key={room}>
                  <Link 
                    to={`/rooms/${room.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {room}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col h-full">
            <h4 className="text-xl font-semibold mb-6 text-white">Location</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li>123 Luxury Avenue</li>
              <li>Paradise City, PC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@luxstay.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LuxStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
