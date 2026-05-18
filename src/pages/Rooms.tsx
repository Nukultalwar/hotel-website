import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Ocean Suite',
      description: 'Luxurious suite with breathtaking ocean views and premium amenities.',
      image: '/rooms/deluxe-ocean-suite-1.jpg',
      price: 499,
      rating: 4.8,
      reviews: 124,
      path: '/rooms/deluxe-ocean-suite',
      amenities: ['Ocean View', 'King Bed', 'Spa Bath', 'Lounge Area']
    },
    {
      id: 2,
      name: 'Executive Sky Room',
      description: 'Contemporary room with city skyline views, perfect for business travelers.',
      image: '/rooms/executive-sky-room-1.jpg',
      price: 399,
      rating: 4.7,
      reviews: 98,
      path: '/rooms/executive-sky-room',
      amenities: ['City View', 'Work Desk', 'Mini Bar', 'Rain Shower']
    },
    {
      id: 3,
      name: 'Family Suite',
      description: 'Spacious suite designed for families with separate living areas.',
      image: '/rooms/family-suite-1.jpg',
      price: 699,
      rating: 4.8,
      reviews: 86,
      path: '/rooms/family-suite',
      amenities: ['2 Bedrooms', 'Kids Area', 'Kitchen', 'Entertainment']
    },
    {
      id: 4,
      name: 'Penthouse',
      description: 'Ultimate luxury with panoramic views and exclusive services.',
      image: '/rooms/penthouse-1.jpg',
      price: 2999,
      rating: 5.0,
      reviews: 32,
      path: '/rooms/penthouse',
      amenities: ['Private Pool', 'Butler', 'Terrace', 'Helipad Access']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Our Rooms"
        subtitle="Discover our collection of luxurious rooms and suites, each designed to provide the ultimate comfort and style."
        backgroundImage="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Available Accommodations</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Link
              key={room.id}
              to={room.path}
              className="glass-card group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold">
                  ${room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{room.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>
                <div className="space-y-2">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Room Booking Information */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Room Booking Information</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center rounded-xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Flexible Dates</h3>
              <p className="text-gray-600">Choose from a range of dates that suit your schedule best.</p>
            </div>
            <div className="glass-card p-8 text-center rounded-xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Best Rate Guarantee</h3>
              <p className="text-gray-600">We guarantee the best rates when you book directly with us.</p>
            </div>
            <div className="glass-card p-8 text-center rounded-xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Secure Booking</h3>
              <p className="text-gray-600">Your reservation is protected with state-of-the-art encryption.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;

