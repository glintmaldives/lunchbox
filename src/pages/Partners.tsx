import React from 'react';
import { Building2, Users2, Briefcase, Award } from 'lucide-react';

const PartnerCard = ({ icon: Icon, title, description }: {
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

const Partners = () => {
  const partners = [
    {
      icon: Building2,
      title: 'Enterprise Partners',
      description: 'Join our network of enterprise-level restaurant chains and food service providers.'
    },
    {
      icon: Users2,
      title: 'Technology Partners',
      description: 'Integrate your solutions with our platform to enhance the dining experience.'
    },
    {
      icon: Briefcase,
      title: 'Solution Partners',
      description: 'Deliver comprehensive solutions to our mutual customers.'
    },
    {
      icon: Award,
      title: 'Strategic Alliances',
      description: 'Form strategic partnerships to drive innovation in the restaurant industry.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-prussian to-slate min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-grayblue max-w-2xl mx-auto">
            Join our ecosystem of partners driving innovation in the restaurant industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner) => (
            <PartnerCard key={partner.title} {...partner} />
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-orange text-white rounded-md text-lg font-semibold 
            hover:bg-sienna transition-colors">
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;