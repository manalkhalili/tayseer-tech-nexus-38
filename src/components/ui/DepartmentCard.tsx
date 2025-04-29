
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
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-0 left-0 right-0 text-white text-xl font-bold p-6">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-5">{description}</p>
        <Link
          to={link}
          className="bg-tayseer-orange text-white py-2 px-4 rounded-md inline-flex items-center hover:bg-orange-600 transition-colors"
        >
          Explore
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
    </div>
  );
};

export default DepartmentCard;
