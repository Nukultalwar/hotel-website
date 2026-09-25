'use client'

import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-luxury font-bold mb-4 gold-gradient">LUXURY</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience unparalleled luxury and sophistication in the heart of elegance.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/facility" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/gaming" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Gaming
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMapPin />
                <span className="text-sm">123 Luxury Street, Premium City</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiPhone />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMail />
                <span className="text-sm">info@luxuryhotel.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Luxury Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
