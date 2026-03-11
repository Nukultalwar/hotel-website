'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiStar, FiWifi, FiCoffee, FiDroplet } from 'react-icons/fi'
import dynamic from 'next/dynamic'

const ThreeDScene = dynamic(() => import('@/components/ThreeDScene'), {
  ssr: false,
  loading: () => <div className="w-full h-screen absolute inset-0 bg-black" />,
})

export default function Home() {
  const features = [
    { icon: <FiWifi />, title: 'High-Speed WiFi', desc: 'Free unlimited internet' },
    { icon: <FiCoffee />, title: 'Premium Dining', desc: 'World-class cuisine' },
    { icon: <FiDroplet />, title: 'Spa & Wellness', desc: 'Relax and rejuvenate' },
    { icon: <FiStar />, title: '5-Star Service', desc: 'Luxury at its finest' },
  ]

  const roomCategories = [
    {
      name: 'Normal Room',
      price: '$12/night',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      features: ['Comfortable bed', 'Modern amenities', 'City view'],
    },
    {
      name: 'High Class Room',
      price: '$50/night',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
      features: ['Premium bedding', 'Mini bar', 'Balcony'],
    },
    {
      name: 'Luxury Suite',
      price: '$200/night',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
      features: ['Separate living area', 'Jacuzzi', 'Butler service'],
    },
    {
      name: 'Master Room',
      price: '$400/night',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
      features: ['Presidential suite', 'Private pool', '24/7 concierge'],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section with 3D Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ThreeDScene />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-luxury font-bold mb-6 gold-gradient"
          >
            Welcome to Luxury
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience unparalleled luxury and sophistication in the heart of elegance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/booking"
              className="px-8 py-4 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Book Now</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all"
            >
              Explore More
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 luxury-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-luxury font-bold text-center mb-12 gold-gradient"
          >
            Premium Amenities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="text-4xl text-luxury-gold mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Categories Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-luxury font-bold text-center mb-12 gold-gradient"
          >
            Room Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomCategories.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${room.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{room.name}</h3>
                    <p className="text-luxury-gold font-semibold">{room.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-4">
                    {room.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-center space-x-2">
                        <span className="text-luxury-gold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className="block w-full text-center px-4 py-2 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 luxury-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-luxury font-bold mb-6 gold-gradient"
          >
            Ready for an Unforgettable Experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Book your stay today and immerse yourself in luxury
          </motion.p>
          <Link
            href="/booking"
            className="inline-block px-8 py-4 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all"
          >
            Reserve Your Room
          </Link>
        </div>
      </section>
    </main>
  )
}
