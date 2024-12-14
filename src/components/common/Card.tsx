import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`bg-slate/50 p-8 rounded-xl ${className}`}>
      <Icon className="w-12 h-12 text-orange mb-4" />
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-grayblue">{description}</p>
    </div>
  );
};

export default Card;