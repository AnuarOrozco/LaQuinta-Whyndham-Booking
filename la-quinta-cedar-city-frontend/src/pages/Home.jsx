import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-blue-900 flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-[url('/hotel-exterior.jpg')] bg-cover bg-center opacity-40"></div>
          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Experience Comfort in Cedar City</h1>
            <p className="text-xl mb-8">Modern accommodations with exceptional service in the heart of Southern Utah</p>
            <button className="bg-quinta-gold text-gray-900 px-8 py-3 rounded-full font-bold flex items-center mx-auto hover:bg-amber-500 transition">
              Book Your Stay <ArrowRightIcon className="h-5 w-5 ml-2" />
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Stay With Us?</h2>
            <div className="w-24 h-1 bg-quinta-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {icon: '🏨', title: 'Modern Rooms', desc: 'Spacious accommodations with premium amenities'},
              {icon: '🏊', title: 'Outdoor Pool', desc: 'Year-round heated pool and hot tub'},
              {icon: '🍳', title: 'Free Breakfast', desc: 'Complimentary Bright Side Breakfast®'}
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-quinta-blue text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Ready for Your Southern Utah Adventure?</h2>
            <button className="bg-quinta-gold text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-amber-500 transition">
              Check Availability
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}