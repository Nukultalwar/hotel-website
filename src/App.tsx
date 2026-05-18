import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import About from './pages/About'
import Contact from './pages/Contact'
import BookingForm from './components/BookingForm'
import { BookingProvider, useBooking } from './contexts/BookingContext'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react'

// About section pages
import Story from './pages/about/Story'
import Values from './pages/about/Values'
import Services from './pages/about/Services'

// Room pages
import DeluxeOceanSuite from './pages/rooms/DeluxeOceanSuite'
import ExecutiveSkyRoom from './pages/rooms/ExecutiveSkyRoom'
import FamilySuite from './pages/rooms/FamilySuite'
import Penthouse from './pages/rooms/Penthouse'

const AppContent = () => {
  const { isBookingOpen, closeBooking, openBooking } = useBooking()

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenBookingPopup')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        openBooking()
        localStorage.setItem('hasSeenBookingPopup', 'true')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [openBooking])

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/story" element={<Story />} />
          <Route path="/about/values" element={<Values />} />
          <Route path="/about/services" element={<Services />} />
          
          {/* Rooms Routes */}
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/deluxe-ocean-suite" element={<DeluxeOceanSuite />} />
          <Route path="/rooms/executive-sky-room" element={<ExecutiveSkyRoom />} />
          <Route path="/rooms/family-suite" element={<FamilySuite />} />
          <Route path="/rooms/penthouse" element={<Penthouse />} />
          
          {/* Contact Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/general" element={<Contact />} />
          <Route path="/contact/corporate" element={<Contact />} />
          <Route path="/contact/weddings" element={<Contact />} />
          <Route path="/contact/careers" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BookingForm isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  )
}

function App() {
  // Enable browser's native scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  return (
    <Router>
      <BookingProvider>
        <AppContent />
      </BookingProvider>
    </Router>
  )
}

export default App
