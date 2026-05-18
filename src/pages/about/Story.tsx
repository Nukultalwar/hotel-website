import { motion } from 'framer-motion';
import { HeartIcon, SparklesIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Story = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const milestones = [
    {
      year: '1985',
      title: 'The Beginning',
      description: 'LuxStay was founded with a vision to redefine luxury hospitality.'
    },
    {
      year: '1995',
      title: 'First Expansion',
      description: 'Opened our first international location in Paris.'
    },
    {
      year: '2005',
      title: 'Sustainability Initiative',
      description: 'Launched our eco-friendly hospitality program.'
    },
    {
      year: '2015',
      title: 'Digital Revolution',
      description: 'Introduced smart room technology across all properties.'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Awarded "Best Luxury Hotel Chain" globally.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1920"
          alt="LuxStay Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              {...fadeIn}
            >
              Our Story
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              A Journey of Excellence in Hospitality
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Values */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="glass-card p-8 rounded-xl text-center">
            <HeartIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To create unforgettable experiences through exceptional service and luxurious comfort.
            </p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center">
            <SparklesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in luxury hospitality, setting new standards of excellence.
            </p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center">
            <GlobeAltIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Impact</h3>
            <p className="text-gray-600">
              Creating positive change through sustainable practices and community engagement.
            </p>
          </div>
        </motion.div>

        {/* History Timeline */}
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <div className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}>
                  <div className="w-1/2" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full" />
                  <div className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'
                  }`}>
                    <div className="glass-card p-6 rounded-xl">
                      <span className="text-blue-600 font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Story; 