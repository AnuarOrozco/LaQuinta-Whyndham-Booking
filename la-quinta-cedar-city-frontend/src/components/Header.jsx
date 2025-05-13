import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Amenities', path: '/amenities' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-quinta-blue">
              La Quinta <span className="text-quinta-gold">Cedar City</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-quinta-blue transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+14355867777" 
                className="flex items-center text-gray-700 hover:text-quinta-blue"
              >
                <PhoneIcon className="h-5 w-5 mr-1" />
                (435) 586-7777
              </a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-quinta-blue text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-blue-900 transition-colors"
              >
                Book Now
              </motion.button>
            </div>
          </nav>

          {/* Mobile menu button would go here */}
        </div>
      </div>
    </motion.header>
  );
}