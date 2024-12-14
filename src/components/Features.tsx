import React from 'react';
import { Monitor, Package, TrendingUp } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="bg-[#2b2e44] p-8 rounded-xl">
    <div className="w-12 h-12 bg-[#F77F00] rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 bg-[#003049]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-8">Catering</h2>
            <p className="text-xl text-gray-300">
              Order Management solutions built to elevate your catering business and grow revenue
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-[#F77F00] text-5xl font-bold">9x</span>
              <span className="text-white text-xl">Return on Investment</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
              alt="Platform Preview"
              className="rounded-lg shadow-xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;