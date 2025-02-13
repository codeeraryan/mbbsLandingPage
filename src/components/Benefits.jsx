import { BookOpen, Globe, GraduationCap } from 'lucide-react'
import React from 'react'

const Benefits = () => {
  return (
    <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Education</h3>
              <p className="text-gray-600">Internationally recognized degrees from top medical universities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Recognition</h3>
              <p className="text-gray-600">Practice medicine anywhere with our globally accepted programs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Affordable Fees</h3>
              <p className="text-gray-600">High-quality medical education at budget-friendly costs</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Benefits
