import React from 'react';
import { Database, Lock, RefreshCw } from 'lucide-react';

const OpenAPI = () => {
  const features = [
    {
      icon: Database,
      title: 'Data Access',
      description: 'Full access to your restaurant data'
    },
    {
      icon: Lock,
      title: 'Secure Integration',
      description: 'Enterprise-grade security protocols'
    },
    {
      icon: RefreshCw,
      title: 'Real-time Sync',
      description: 'Instant updates across all systems'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Open API</h2>
            <p className="text-xl text-gray-600 mb-8">
              Build your own unique solutions using our comprehensive API platform.
            </p>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <feature.icon className="w-6 h-6 text-orange flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 px-6 py-3 bg-orange text-white rounded-md hover:bg-sienna transition-colors">
              Explore API Docs
            </button>
          </div>
          <div className="relative">
            <div className="bg-slate p-8 rounded-xl text-white space-y-6">
              <div className="space-y-2">
                <div className="h-4 bg-grayblue/20 rounded w-3/4"></div>
                <div className="h-4 bg-grayblue/20 rounded w-1/2"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-16 bg-grayblue/20 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenAPI;