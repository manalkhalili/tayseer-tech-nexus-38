import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-tayseer-black shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-max flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/5ff76fb1-f0b4-4556-9464-820a5130a055.png" alt="Al-Tayseer Logo" className="h-20 md:h-24 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 bg-transparent">
          {navItems.map(item => <Link key={item.name} to={item.path} className={`font-medium hover:text-tayseer-orange transition-colors ${isScrolled ? 'text-tayseer-black dark:text-orange-500' : 'text-orange-500'}`}>
              {item.name}
            </Link>)}
          <Link to="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-tayseer-orange" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="md:hidden bg-white dark:bg-tayseer-black shadow-lg animate-slide-in-right">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => <Link key={item.name} to={item.path} className="font-medium text-tayseer-black dark:text-white hover:text-tayseer-orange" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <Link to="/contact" className="btn-primary inline-block text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>}
    </header>;
};
export default Navbar;