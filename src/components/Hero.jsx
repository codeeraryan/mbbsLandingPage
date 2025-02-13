import React from 'react'

const Hero = () => {
  return (
   
       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <strong className="text-4xl font-bold mb-4">
              Study MBBS Abroad
              <span className="block text-yellow-400 mt-2">Your Gateway to Medical Excellence</span>
            </strong>
            <p className="text-xl mb-8">Start your medical journey with world-class education at affordable fees</p>
            <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
   
  )
}

export default Hero
