import React from 'react';
import { ArrowRight } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: 'Restaurant Growth Guide',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
      category: 'Guide'
    },
    {
      title: 'Digital Ordering Trends 2024',
      image: 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?auto=format&fit=crop&w=800&q=80',
      category: 'Report'
    },
    {
      title: 'Customer Engagement Strategies',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
      category: 'Webinar'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-orange text-white px-3 py-1 rounded-full text-sm">
                  {resource.category}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange transition-colors">
                {resource.title}
              </h3>
              <div className="flex items-center text-orange">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;