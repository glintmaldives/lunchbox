import React from 'react';
import { Monitor, Shield, Zap } from 'lucide-react';
import Card from '../common/Card';

const WebApp = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Web & App Ordering',
      description: 'Fully branded ordering experience'
    },
    {
      icon: Shield,
      title: 'Benefits Design',
      description: 'Customizable rewards and loyalty programs'
    },
    {
      icon: Zap,
      title: 'Enhanced Guest Experience',
      description: 'Seamless ordering flow and personalization'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Web & App</h2>
          <p className="text-xl text-gray-600 mb-8">
            Fully branded ordering with innovative guest engagement features to grow loyalty and increase sales.
          </p>
          <div className="grid gap-6">
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
            Learn More About Ordering
          </button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80"
            alt="Web App Interface"
            className="rounded-lg shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WebApp;