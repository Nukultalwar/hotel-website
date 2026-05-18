 import { motion } from 'framer-motion';
import {
  SparklesIcon,
  HeartIcon,
  WifiIcon,
  TvIcon,
  HomeModernIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CakeIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: SparklesIcon,
      title: '24/7 Concierge',
      description: 'Round-the-clock assistance for all your needs, from restaurant reservations to travel arrangements.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: HeartIcon,
      title: 'Spa & Wellness',
      description: 'Luxurious spa treatments, state-of-the-art fitness center, and wellness programs.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: CakeIcon,
      title: 'Fine Dining',
      description: 'Multiple restaurants offering international cuisine prepared by world-class chefs.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: WifiIcon,
      title: 'Business Center',
      description: 'Fully equipped business center with meeting rooms and conference facilities.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: HomeModernIcon,
      title: 'Rooftop Pool',
      description: 'Infinity pool with panoramic views, poolside bar, and luxury cabanas.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: UserGroupIcon,
      title: 'Event Spaces',
      description: 'Versatile venues for weddings, conferences, and special occasions.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: TvIcon,
      title: 'Smart Rooms',
      description: 'Cutting-edge room technology with voice control and automated systems.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: GlobeAltIcon,
      title: 'Eco Programs',
      description: 'Sustainable initiatives and eco-friendly practices throughout the hotel.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1920"
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Experience luxury beyond expectations
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass-card overflow-hidden rounded-xl group"
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Guarantee */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Our Service Guarantee</h2>
          <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              At LuxStay, we're committed to providing exceptional service that exceeds your expectations. 
              Our dedicated team is available 24/7 to ensure your stay is nothing short of perfect. 
              If any aspect of our service doesn't meet your standards, we'll make it right.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 