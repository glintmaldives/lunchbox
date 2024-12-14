import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-[#003049] to-[#2b2e44] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Enterprise Order Management at Scale
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Lunchbox is the only open, scalable restaurant solution enabling B2B catering, 
            multi-channel ordering, and guest engagement for enterprise operations on a single platform.
          </p>
          <button className="px-8 py-3 bg-[#F77F00] text-white rounded-md text-lg font-semibold 
            hover:bg-[#e56b49] transition-colors">
            Book A Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;