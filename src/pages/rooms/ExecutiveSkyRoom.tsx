import { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useBooking } from '../../contexts/BookingContext'

const ExecutiveSkyRoom = () => {
  const { openBooking } = useBooking()
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1920',
    '/rooms/executive-sky-room-2.jpg',
    '/rooms/executive-sky-room-3.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const amenities = [
    { name: 'City View', description: 'Stunning views of the city skyline' },
    { name: 'Work Space', description: 'Ergonomic desk with business amenities' },
    { name: 'Executive Lounge', description: 'Exclusive access to the Executive Lounge' },
    { name: 'Premium Bathroom', description: 'Rain shower and luxury toiletries' },
    { name: 'Smart Controls', description: 'Advanced room automation system' },
    { name: 'Mini Bar', description: 'Curated selection of premium refreshments' }
  ];

  const reviews = [
    {
      name: 'Robert Chen',
      rating: 5,
      date: 'March 2024',
      comment: 'Perfect for business travelers. The work space and city views made my stay productive and enjoyable. Executive lounge access was a great perk!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
    },
    {
      name: 'Amanda Parker',
      rating: 5,
      date: 'February 2024',
      comment: 'Exceptional room with modern amenities. The smart controls were impressive and the soundproof windows ensured a peaceful stay.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
    },
    {
      name: 'John Williams',
      rating: 4,
      date: 'January 2024',
      comment: 'Great business hotel room with all the essentials. The executive lounge was well-stocked and the service was impeccable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Image Gallery */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Executive Sky Room"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-600/20 backdrop-blur-sm hover:bg-blue-600/40 transition-all"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-600/20 backdrop-blur-sm hover:bg-blue-600/40 transition-all"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Executive Sky Room</h1>
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-yellow-400/50 fill-current'}`} />
            ))}
            <span className="ml-2">4.7 (92 reviews)</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-4">Room Overview</h2>
              <p className="text-gray-600">
                Experience the perfect blend of comfort and functionality in our Executive Sky Room. 
                Located on the higher floors, each 45m² room features floor-to-ceiling windows showcasing 
                breathtaking city views, a dedicated work area, and modern amenities designed to enhance 
                your business stay.
              </p>
            </div>

            {/* Amenities Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Room Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="glass-card p-4 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">{amenity.name}</h4>
                    <p className="text-gray-600">{amenity.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Guest Reviews</h3>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg">{review.name}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-yellow-400/50 fill-current'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Features */}
            <div className="glass-card p-6 rounded-xl bg-blue-50">
              <h3 className="text-2xl font-bold mb-4">Business Benefits</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  24/7 Business Center Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Complimentary Meeting Room Hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Express Check-in/Check-out
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Pressing Service Available
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Card */}
          <div className="md:col-span-1">
            <div className="sticky top-24 glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">From $399/night</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Base rate</span>
                  <span>$399</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & fees</span>
                  <span>$60</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$459</span>
                  </div>
                </div>
                <button 
                  onClick={() => openBooking()}
                  className="w-full neon-button"
                >
                  Book Now
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Free cancellation up to 24 hours before check-in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSkyRoom; 