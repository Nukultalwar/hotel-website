import { motion } from 'framer-motion';
import {
  HeartIcon,
  SparklesIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  LightBulbIcon,
  HandRaisedIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Values = () => {
  const values = [
    {
      icon: HeartIcon,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring the highest standards of service and quality.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trust & Safety',
      description: 'We prioritize the well-being and security of our guests, maintaining their trust through transparency and reliability.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Sustainability',
      description: 'We are committed to environmental stewardship and sustainable practices in all our operations.'
    },
    {
      icon: UserGroupIcon,
      title: 'Inclusivity',
      description: 'We celebrate diversity and create an welcoming environment for guests and staff from all backgrounds.'
    },
    {
      icon: HandRaisedIcon,
      title: 'Community',
      description: 'We actively engage with and contribute to the local communities where we operate.'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation',
      description: 'We embrace new technologies and ideas to enhance the guest experience.'
    },
    {
      icon: StarIcon,
      title: 'Authenticity',
      description: 'We provide genuine experiences that reflect local culture and traditions.'
    },
    {
      icon: LightBulbIcon,
      title: 'Continuous Improvement',
      description: 'We constantly evolve and adapt to exceed our guests\' expectations.'
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
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1920"
          alt="Our Values"
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
              Our Values
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              The principles that guide everything we do
            </motion.p>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values in Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Values in Action</h2>
          <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              Our values aren't just words on a page – they're the foundation of every interaction, 
              every service, and every experience at LuxStay. From our sustainable practices to our 
              community engagement programs, we live these values every day to create meaningful 
              experiences for our guests and positive impact in our communities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Values; 