import React from 'react';
import { Target, Users, Globe2, Rocket } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-slate/50 p-8 rounded-xl">
    <Icon className="w-12 h-12 text-orange mb-4" />
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-grayblue">{description}</p>
  </div>
);

const Company = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower restaurants with technology that drives growth and enhances customer experience.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of innovators passionate about transforming the restaurant industry.'
    },
    {
      icon: Globe2,
      title: 'Global Impact',
      description: 'Supporting restaurants worldwide with scalable enterprise solutions.'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Continuously pushing boundaries to create the future of restaurant technology.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-prussian to-slate min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Lunchbox
          </h1>
          <p className="text-xl text-grayblue max-w-2xl mx-auto">
            Building the future of restaurant technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Join Our Team</h2>
          <button className="px-8 py-3 bg-orange text-white rounded-md text-lg font-semibold 
            hover:bg-sienna transition-colors">
            View Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;