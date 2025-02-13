import { ArrowRight, Check } from 'lucide-react'
import React from 'react'

const Countries = ({countries,setActiveCountry,activeCountry}) => {
  return (
    <div className="bg-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Countries</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {countries.map((country) => (
          <div
            key={country.name}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
            onMouseEnter={() => setActiveCountry(country.name)}
            onMouseLeave={() => setActiveCountry(null)}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{country.name}</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Fees: {country.fee}</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Duration: {country.duration}</span>
                </li>
              </ul>
              {activeCountry === country.name && (
                <button className="mt-4 text-blue-600 flex items-center hover:text-blue-800">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  )
}

export default Countries
