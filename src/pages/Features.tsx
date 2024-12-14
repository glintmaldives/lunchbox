import React from 'react';
import { Zap, Shield, Clock, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for quick order processing'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Enterprise-grade security for all transactions'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Instant order tracking and status updates'
    },
    {
      icon: Globe,
      title: 'Multi-location Support',
      description: 'Manage multiple locations from one dashboard'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-prussian to-slate py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Platform Features
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-slate/50 p-6 rounded-xl">
              <feature.icon className="w-10 h-10 text-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-grayblue">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;