import { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/gallery-slider.css"
import {
  StarIcon,
  HeartIcon,
  SparklesIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  UserGroupIcon,
  LightBulbIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import PageHeader from '../components/PageHeader'

const values = [
  {
    icon: StarIcon,
    title: 'Excellence',
    description: 'We strive for excellence in every detail, from personalized service to immaculate accommodations.'
  },
  {
    icon: HeartIcon,
    title: 'Hospitality',
    description: 'Genuine care and warmth in every interaction, making every guest feel like family.'
  },
  {
    icon: SparklesIcon,
    title: 'Innovation',
    description: 'Embracing smart technology to enhance guest comfort and experience.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Trust & Safety',
    description: 'Ensuring the highest standards of security and privacy for our guests.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and reducing our environmental impact.'
  },
  {
    icon: HandRaisedIcon,
    title: 'Inclusivity',
    description: 'Creating a welcoming environment for guests from all walks of life.'
  },
  {
    icon: UserGroupIcon,
    title: 'Community',
    description: 'Building strong relationships with our local community and partners.'
  },
  {
    icon: LightBulbIcon,
    title: 'Continuous Improvement',
    description: 'Always seeking ways to enhance and elevate the guest experience.'
  }
]

const services = [
  {
    title: '24/7 Concierge',
    description: 'Round-the-clock assistance for all your needs',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Spa & Wellness',
    description: 'Luxurious treatments and state-of-the-art fitness center',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Fine Dining',
    description: 'Award-winning restaurants and 24-hour room service',
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Business Center',
    description: 'Fully equipped meeting rooms and conference facilities',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Rooftop Pool',
    description: 'Infinity pool with panoramic city views',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Smart Rooms',
    description: 'Voice-controlled amenities and automated comfort settings',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Event Spaces',
    description: 'Elegant venues for weddings and special occasions',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Eco Programs',
    description: 'Sustainable initiatives and green activities',
    image: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&q=80&w=800'
  }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800'
]

const testimonials = [
  {
    name: "Robert & Mary Anderson",
    role: "Frequent Guests",
    comment: "We've been staying at LuxStay for over 5 years now. The consistency in service excellence and the continuous improvements they make to enhance guest experience is remarkable.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=100",
    rating: 5
  },
  {
    name: "Jennifer Chen",
    role: "Business Traveler",
    comment: "As someone who travels frequently for work, I appreciate the perfect blend of luxury and functionality at LuxStay. The smart room features and 24/7 service are invaluable.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
    rating: 5
  },
  {
    name: "The Williams Family",
    role: "Family Travelers",
    comment: "The family suites are exceptional! Every detail is thought through with both parents and children in mind. It's our go-to destination for family vacations.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=100",
    rating: 5
  }
]

const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (image: string) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="About LuxStay"
        subtitle="Experience luxury redefined at our prestigious hotel, where every moment is crafted for your comfort and delight."
        backgroundImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Story</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020, LuxStay represents the perfect fusion of traditional luxury hospitality and cutting-edge technology. 
                We've reimagined the hotel experience for the modern traveler, combining elegant design, smart amenities, and 
                exceptional service to create unforgettable stays.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to innovation drives us to continuously evolve and enhance the guest experience, while our 
                dedication to personal service ensures that every stay is uniquely tailored to each guest's preferences.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&q=80&w=1920"
                alt="Hotel exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Values</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-12"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-8 text-center rounded-xl bg-white shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <value.icon className="h-12 w-12 mx-auto mb-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Services</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="glass-card group overflow-hidden">
                <div className="relative h-96">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-base leading-relaxed">
                      {service.description}
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Gallery</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="gallery-slider">
            <Slider {...sliderSettings}>
              {galleryImages.map((image, index) => (
                <div key={index} className="px-2">
                  <div
                    className="relative cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => openModal(image)}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className={`w-full ${
                        index % 2 === 0 ? 'h-96' : 'h-[22rem]'
                      } object-cover transition-transform duration-300 hover:scale-110`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged gallery image"
              className="max-h-[90vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Guest Testimonials</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-12"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-yellow-400/50 fill-current'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 