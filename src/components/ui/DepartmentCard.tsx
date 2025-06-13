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
      <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
        {/* Background Icon or Image */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10 bg-tayseer-orange rounded-bl-full z-0"></div>

        {/* Image (Avatar Style) */}
        <div className="p-6 pb-0 flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-tayseer-black text-lg font-bold">{title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4 pt-2 relative z-10">
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
          <Link
              to={link}
              className="inline-flex items-center text-sm text-tayseer-orange font-medium hover:underline"
          >
            Explore
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
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
