'use client'

import { motion } from 'framer-motion'
import { FiWifi, FiCoffee, FiDroplet, FiMusic, FiActivity, FiNavigation, FiBriefcase, FiUmbrella } from 'react-icons/fi'

export default function Facility() {
  const facilities = [
    {
      icon: <FiWifi />,
      title: 'High-Speed Internet',
      description: 'Complimentary high-speed WiFi throughout the property',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    },
    {
      icon: <FiCoffee />,
      title: 'Fine Dining',
      description: 'Multiple restaurants serving world-class cuisine',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    },
    {
      icon: <FiDroplet />,
      title: 'Spa & Wellness',
      description: 'Full-service spa with massage therapy and wellness programs',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    },
    {
      icon: <FiMusic />,
      title: 'Entertainment',
      description: 'Live music, bars, and entertainment venues',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    },
    {
      icon: <FiActivity />,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with personal trainers',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    },
    {
      icon: <FiNavigation />,
      title: 'Valet Parking',
      description: 'Complimentary valet parking service',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    },
    {
      icon: <FiBriefcase />,
      title: 'Business Center',
      description: 'Fully equipped business center and meeting rooms',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    },
    {
      icon: <FiUmbrella />,
      title: 'Pool & Recreation',
      description: 'Infinity pool and recreational facilities',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-luxury font-bold mb-6 gold-gradient">
            Our Facilities
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            World-class amenities designed for your comfort and enjoyment
          </p>
        </motion.div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 px-4 luxury-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${facility.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="text-3xl text-luxury-gold bg-black bg-opacity-50 p-3 rounded-lg">
                      {facility.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-gray-400 text-sm">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-luxury font-bold mb-6 gold-gradient"
          >
            Experience Luxury at Every Turn
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Our facilities are designed to provide you with everything you need for a perfect stay.
            From relaxation to business, entertainment to wellness, we have it all. Every amenity
            is carefully curated to ensure your comfort and satisfaction.
          </motion.p>
        </div>
      </section>
    </main>
  )
}
