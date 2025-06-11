
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1 border-t-4 border-tayseer-orange h-full flex flex-col">
      <div className="text-tayseer-orange mb-4 flex justify-center md:justify-start">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-3 text-center md:text-left leading-tight">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed text-center md:text-left flex-grow text-sm">{description}</p>
      <Link
        to={link}
        className="text-tayseer-orange font-medium hover:underline flex items-center justify-center md:justify-start mt-auto pt-2"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
