import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-prussian">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Let's chat
        </h2>
        <h3 className="text-3xl font-bold text-white mb-8">
          Schedule a product tour
        </h3>
        <button className="px-8 py-3 bg-orange text-white rounded-md text-lg font-semibold hover:bg-sienna transition-colors">
          Book A Demo
        </button>
      </div>
    </section>
  );
};

export default CallToAction;