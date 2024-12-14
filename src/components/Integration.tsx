import React from 'react';

const Integration = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We integrate with every major point of sale system.
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {/* Partner logos would go here - using placeholder divs */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-12 bg-gray-800 rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;