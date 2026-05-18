import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import PageHeader from '../components/PageHeader'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.')
  }

  const contactMethods = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Available 24/7 through our AI concierge',
      action: 'Chat Now',
      onClick: () => alert('Live chat feature coming soon!')
    },
    {
      icon: VideoCameraIcon,
      title: 'Video Call',
      description: 'Schedule a virtual tour of our facilities',
      action: 'Schedule Call',
      onClick: () => alert('Video call scheduling coming soon!')
    },
    {
      icon: GlobeAltIcon,
      title: 'Virtual Assistance',
      description: 'Get help from our digital support team',
      action: 'Get Help',
      onClick: () => alert('Virtual assistance coming soon!')
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Get in Touch"
        subtitle="Whether you have a question about our rooms, need help with a booking, or want to learn more about our services, we're here to help."
        backgroundImage="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Digital Contact Methods */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Digital Contact Methods</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => (
            <div key={method.title} className="glass-card p-8 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white shadow-lg rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 group-hover:bg-blue-200 transition-colors">
                <method.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{method.title}</h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              <button
                onClick={method.onClick}
                className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white hover:shadow-md transition-all duration-300"
              >
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Information</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full md:mx-0 mx-auto"></div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 flex items-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white shadow-lg rounded-xl">
                <MapPinIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Location</h3>
                  <p className="text-gray-600">
                    123 Luxury Avenue
                    <br />
                    Paradise City, PC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white shadow-lg rounded-xl">
                <PhoneIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Phone</h3>
                  <p className="text-gray-600">
                    Front Desk: (555) 123-4567
                    <br />
                    Reservations: (555) 123-4568
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white shadow-lg rounded-xl">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    General: info@luxstay.com
                    <br />
                    Reservations: bookings@luxstay.com
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white shadow-lg rounded-xl">
                <ClockIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Hours</h3>
                  <p className="text-gray-600">
                    Front Desk: 24/7
                    <br />
                    Reservations: Mon-Sun 8am-8pm
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Find Us</h3>
              <div className="glass-card overflow-hidden rounded-lg bg-white shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043276541!5m2!1sen!2s"
                  className="w-full h-[300px] border-0 grayscale contrast-125"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl bg-white shadow-lg">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Send us a Message</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full md:mx-0 mx-auto mb-8"></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="glass-input w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="glass-input w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="glass-input w-full"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="glass-input w-full resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
