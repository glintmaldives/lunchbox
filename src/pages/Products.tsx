import React from 'react';
import { Package, ShoppingBag, Users } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Package,
      title: 'Online Ordering',
      description: 'Streamline your digital ordering experience with our comprehensive platform.'
    },
    {
      icon: ShoppingBag,
      title: 'Catering Solutions',
      description: 'Manage large orders and events with our enterprise catering system.'
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Build lasting relationships with integrated CRM and loyalty programs.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-prussian to-slate">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Our Products
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.title} className="bg-slate/50 p-8 rounded-xl">
              <product.icon className="w-12 h-12 text-orange mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
              <p className="text-grayblue">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;