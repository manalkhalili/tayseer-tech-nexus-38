
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
    <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 transition-all hover:shadow-xl hover:-translate-y-1 border-t-4 border-tayseer-orange h-full flex flex-col">
      <div className="text-tayseer-orange mb-2 sm:mb-3 flex justify-center">
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-center leading-tight">{title}</h3>
      <p className="text-gray-600 mb-3 leading-relaxed text-center flex-grow text-xs sm:text-sm">{description}</p>
      <Link
        to={link}
        className="text-tayseer-orange font-medium hover:underline flex items-center justify-center mt-auto pt-2 text-xs sm:text-sm"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 ml-1"
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
