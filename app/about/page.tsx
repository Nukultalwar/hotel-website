'use client'

import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiMapPin, FiHeart } from 'react-icons/fi'

export default function About() {
  const stats = [
    { icon: <FiAward />, number: '50+', label: 'Awards Won' },
    { icon: <FiUsers />, number: '100K+', label: 'Happy Guests' },
    { icon: <FiMapPin />, number: '25+', label: 'Locations' },
    { icon: <FiHeart />, number: '98%', label: 'Satisfaction Rate' },
  ]

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring your experience exceeds expectations.',
    },
    {
      title: 'Luxury',
      description: 'Indulge in the finest amenities and services that define true luxury hospitality.',
    },
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge technology to enhance your comfort and convenience.',
    },
    {
      title: 'Heritage',
      description: 'A rich legacy of hospitality spanning decades, passed down through generations.',
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600)',
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
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A legacy of luxury, excellence, and unparalleled hospitality
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 luxury-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6 gold-gradient">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Founded with a vision to redefine luxury hospitality, our hotel has been a beacon
                of excellence for over three decades. We combine timeless elegance with modern
                innovation to create unforgettable experiences.
              </p>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Every detail, from our meticulously designed rooms to our world-class amenities,
                reflects our commitment to providing the ultimate in comfort and sophistication.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team of dedicated professionals ensures that every guest feels valued and
                pampered, making your stay with us truly exceptional.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass-effect p-8 rounded-xl"
              >
                <div className="text-4xl text-luxury-gold mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 luxury-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-luxury font-bold text-center mb-12 gold-gradient"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold text-luxury-gold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
