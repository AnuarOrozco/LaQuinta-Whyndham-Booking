import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-quinta-blue text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-quinta-gold">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPinIcon className="h-6 w-6 mt-1 text-quinta-gold" />
              <p>250 N 1100 W, Cedar City, UT 84720</p>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-6 w-6 text-quinta-gold" />
              <p>(435) 586-7777</p>
            </div>
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="h-6 w-6 text-quinta-gold" />
              <p>info@laquintacedarcity.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-quinta-gold">Quick Links</h3>
            <nav className="space-y-2">
              <a href="/" className="block hover:text-quinta-gold transition">Home</a>
              <a href="/rooms" className="block hover:text-quinta-gold transition">Rooms</a>
              <a href="/amenities" className="block hover:text-quinta-gold transition">Amenities</a>
              <a href="/gallery" className="block hover:text-quinta-gold transition">Gallery</a>
            </nav>
          </div>

          {/* Social/Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-quinta-gold">Stay Connected</h3>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} La Quinta by Wyndham, Cedar City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}