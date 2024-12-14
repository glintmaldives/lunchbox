import React from 'react';

const Stats = () => {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '456', label: 'Restaurant Partners' },
    { value: '42%', label: 'Average Revenue Growth' }
  ];

  return (
    <section className="py-16 bg-prussian">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-maize text-lg mb-2">Online Ordering Availability</h3>
          <p className="text-white text-xl">Powering the future of restaurant commerce</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-grayblue">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;