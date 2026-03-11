'use client'

import { motion } from 'framer-motion'
import { FiTv, FiMonitor, FiHeadphones, FiZap, FiUsers, FiAward } from 'react-icons/fi'

export default function Gaming() {
  const gamingFeatures = [
    {
      icon: <FiTv />,
      title: 'Gaming Consoles',
      description: 'Latest PlayStation, Xbox, and Nintendo Switch consoles',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800',
    },
    {
      icon: <FiMonitor />,
      title: 'High-End PCs',
      description: 'Gaming rigs with RTX 4090 and latest processors',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800',
    },
    {
      icon: <FiHeadphones />,
      title: 'VR Experience',
      description: 'Immersive virtual reality gaming stations',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800',
    },
    {
      icon: <FiZap />,
      title: 'Esports Arena',
      description: 'Professional gaming arena for tournaments',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    },
    {
      icon: <FiUsers />,
      title: 'Multiplayer Zones',
      description: 'Dedicated spaces for group gaming sessions',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
    },
    {
      icon: <FiAward />,
      title: 'Gaming Tournaments',
      description: 'Regular tournaments with exciting prizes',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
    },
  ]

  const gamingPackages = [
    {
      name: 'Casual Gaming',
      price: '$49/day',
      includes: ['Access to gaming lounge', 'Console gaming', 'Snacks & drinks'],
    },
    {
      name: 'Pro Gaming',
      price: '$99/day',
      includes: ['High-end PC access', 'VR experience', 'Premium snacks', 'Priority booking'],
    },
    {
      name: 'VIP Gaming',
      price: '$199/day',
      includes: ['Private gaming room', 'All equipment access', 'Personal assistant', 'Tournament entry'],
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-luxury font-bold mb-6 gold-gradient">
            Gaming Facility
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            State-of-the-art gaming experience for enthusiasts and professionals
          </p>
        </motion.div>
      </section>

      {/* Gaming Features */}
      <section className="py-20 px-4 luxury-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-luxury font-bold text-center mb-12 gold-gradient"
          >
            Gaming Amenities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamingFeatures.map((feature, index) => (
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
                      backgroundImage: `url(${feature.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="text-3xl text-luxury-gold bg-black bg-opacity-50 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaming Packages */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-luxury font-bold text-center mb-12 gold-gradient"
          >
            Gaming Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gamingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold text-luxury-gold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-white mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center space-x-2">
                      <span className="text-luxury-gold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                  Book Package
                </button>
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
            Level Up Your Stay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            Whether you're a casual gamer or a competitive esports enthusiast, our gaming facility
            offers the ultimate gaming experience. Book your gaming session today!
          </motion.p>
        </div>
      </section>
    </main>
  )
}
