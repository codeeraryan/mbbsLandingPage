import React, { useState } from 'react';
import "./index.css"
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Countries from './components/Countries';
import CtaBanner from './components/CtaBanner';
import Form from './components/Form';

const App = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  
  const countries = [
    { name: 'Russia', fee: '$4,000/year', duration: '6 years' },
    { name: 'Uzbekistan', fee: '$3,500/year', duration: '5 years' },
    { name: 'Kazakhstan', fee: '$3,800/year', duration: '5 years' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
       <Hero/>

      {/* Benefits Section */}
        
        <Benefits/>

      {/* Countries Section */}
     <Countries countries={countries} activeCountry={activeCountry} setActiveCountry={setActiveCountry}/>

      {/* Application Form Preview */}
       <Form countries={countries}/>

      {/* CTA Banner */}
      <CtaBanner/>
    </div>
  );
};

export default App;