import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-tayseer-black shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container-max flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
                src={isScrolled ? "/assets/logo-dark.png" : "/assets/logo-white.png"}
                alt="Al-Tayseer Logo"
                className="h-28 md:h-32 lg:h-36 object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 bg-transparent">
            {navItems.map(item => (
                <Link
                    key={item.name}
                    to={item.path}
                    className={`font-medium hover:text-tayseer-orange transition-colors ${isScrolled ? 'text-tayseer-black dark:text-orange-500' : 'text-white'}`}
                >
                  {item.name}
                </Link>
            ))}
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 right-0 h-full z-40 bg-black/60 backdrop-blur-md max-w-[70%] w-full sm:max-w-[50%] transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden rounded-l-2xl shadow-xl`}>
          <div className="flex justify-end p-4">
            <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                className="text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 pt-4">
            <nav className="flex flex-col space-y-6">
              {navItems.map(item => (
                  <Link
                      key={item.name}
                      to={item.path}
                      className="text-white font-semibold text-lg hover:text-tayseer-orange transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
              ))}
              <Link
                  to="/contact"
                  className="btn-primary inline-block text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
