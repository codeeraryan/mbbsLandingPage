import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const Form = ({ countries = [] }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    country: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Full name is required';
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      tempErrors.fullName = 'Name must be at least 2 characters long';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.country) {
      tempErrors.country = 'Please select a country';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', formData);
        setFormData({ fullName: '', email: '', country: '' });
      } catch (error) {
        setSubmitError('An error occurred while submitting the form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Apply Now</h2>
          
          {submitError && (
            <div className="flex items-center gap-2 p-4 mb-6 text-red-700 bg-red-100 rounded-lg">
              <AlertCircle className="h-5 w-5" />
              <p>{submitError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${
                  errors.fullName ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Country Preference</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${
                  errors.country ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="">Select a country</option>
                {countries && countries.length > 0 ? (
                  countries.map(country => (
                    <option key={country.name} value={country.name}>{country.name}</option>
                  ))
                ) : (
                  <option value="default">No countries available</option>
                )}
              </select>
              {errors.country && (
                <p className="mt-1 text-sm text-red-500">{errors.country}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white py-3 rounded-lg font-bold transition
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;