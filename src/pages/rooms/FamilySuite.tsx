import { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const FamilySuite = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/rooms/family-suite-1.jpg',
    '/rooms/family-suite-2.jpg',
    '/rooms/family-suite-3.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const amenities = [
    { name: 'Two Bedrooms', description: 'Master bedroom with king bed and children\'s room with bunk beds' },
    { name: 'Family Living Room', description: 'Spacious living area with comfortable seating and entertainment' },
    { name: 'Kids Corner', description: 'Dedicated play area with toys and games' },
    { name: 'Mini Kitchen', description: 'Equipped kitchenette for family meals and snacks' },
    { name: 'Family Bathroom', description: 'Large bathroom with tub and child-friendly features' },
    { name: 'Entertainment System', description: 'Smart TV with kids channels and gaming console' }
  ];

  const reviews = [
    {
      name: 'David & Lisa Wilson',
      rating: 5,
      date: 'March 2024',
      comment: 'Perfect for families! Our kids loved the play area and bunk beds. The kitchen was a lifesaver for preparing quick meals. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=100'
    },
    {
      name: 'Maria Rodriguez',
      rating: 5,
      date: 'February 2024',
      comment: 'Spacious, clean, and incredibly family-friendly. The kids corner kept our children entertained while we could relax. Will definitely return!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
    },
    {
      name: 'James & Sophie Brown',
      rating: 4,
      date: 'January 2024',
      comment: 'Great family accommodation with all the amenities you need. The entertainment system was a hit with the kids. Only suggestion would be more storage space.',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=100'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Image Gallery */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Family Suite"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Family Suite</h1>
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-yellow-400/50 fill-current'}`} />
            ))}
            <span className="ml-2">4.8 (86 reviews)</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-4">Suite Overview</h2>
              <p className="text-gray-600">
                Create unforgettable family memories in our spacious 85m² Family Suite. 
                Thoughtfully designed for families, this suite features two bedrooms, a 
                separate living area, and a dedicated kids' corner. The suite includes a 
                mini kitchen for convenient family meals and entertainment options for 
                all ages.
              </p>
            </div>

            {/* Amenities Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Suite Amenities</h3>
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

            {/* Family Features */}
            <div className="glass-card p-6 rounded-xl bg-blue-50">
              <h3 className="text-2xl font-bold mb-4">Family Benefits</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Complimentary Kids Club Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Welcome Gifts for Children
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Family Meal Packages Available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Babysitting Service (On Request)
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Card */}
          <div className="md:col-span-1">
            <div className="sticky top-24 glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">From $699/night</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Base rate</span>
                  <span>$699</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & fees</span>
                  <span>$105</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$804</span>
                  </div>
                </div>
                <button className="w-full neon-button">
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

export default FamilySuite; 