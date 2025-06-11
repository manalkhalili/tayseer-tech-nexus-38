
import React from 'react';
import { Link } from 'react-router-dom';

interface DepartmentCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-3 md:p-4 flex flex-col md:flex-row gap-3 md:gap-4 items-start">
        <div className="flex-1 order-2 md:order-1">
          <h3 className="text-tayseer-black text-base md:text-lg font-bold mb-2 md:mb-3">
            {title}
          </h3>
          <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
            {description}
          </p>
          <Link
            to={link}
            className="bg-tayseer-orange text-white py-1.5 px-3 rounded-md inline-flex items-center hover:bg-orange-600 transition-colors text-xs md:text-sm"
          >
            Explore
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
        <div className="w-full md:w-20 h-20 md:h-20 flex-shrink-0 order-1 md:order-2">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
