import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const departments = [
    { name: 'Al-Tayseer Solar', link: '/services' },
    { name: 'Al-Tayseer Biogas', link: '/services' },
    { name: 'Al-Tayseer Envirotech', link: '/services' },
    { name: 'Al-Tayseer Construction', link: '/services' },
  ];

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Blog', link: '/blog' },
  ];

  const contactInfo = {
    address: 'Palestine, Tulkarm, New Courts Quarter, Al-Tayseer 1 Building',
    phone: '+970 (595) 563-555',
    email: 'info@al-tayseer.ps',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-tayseer-black text-white pt-16 pb-8">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/assets/5ff76fb1-f0b4-4556-9464-820a5130a055.png"
              alt="Al-Tayseer Logo" 
              className="h-16 mb-4" 
            />
            <p className="text-gray-300 mb-4">
              Al-Tayseer International Co. specializes in renewable energy solutions,
              sustainable construction, and environmental technology.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://linktr.ee/altayseer.int" className="hover:text-tayseer-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05h2.03V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tayseer-orange">Our Departments</h3>
            <ul className="space-y-2">
              {departments.map((department) => (
                <li key={department.name}>
                  <Link 
                    to={department.link} 
                    className="text-gray-300 hover:text-tayseer-orange transition-colors"
                  >
                    {department.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tayseer-orange">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.link} 
                    className="text-gray-300 hover:text-tayseer-orange transition-colors"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tayseer-orange">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-0.5 text-tayseer-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-gray-300">{contactInfo.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mt-0.5 text-tayseer-orange"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <div className="flex flex-col space-y-1 text-gray-300">
                  <span>+970 (595) 563-555</span>
                  <span>+972 (59) 202-6163</span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-0.5 text-tayseer-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-gray-300">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Al-Tayseer International Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
