import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Menu, X, ChevronDown, MapPin } from 'lucide-react';
import Logo from '../assets/images/logo.png';

const SITE_CONFIG = {
  phones: ["571-275-3696", "571-332-2431"],
  email: "mgnpools@yahoo.com",
  address: "5954 Hall Street, Springfield, VA, 22152",
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'Residential', path: '/residential' },
  { name: 'Renovations', path: '/renovations' },
  { name: 'Repair', path: '/repair' },
  { name: 'Bid', path: '/bid' },
  { name: 'Training', path: '/training' },
  { name: 'Contacts', path: '/contacts' },
  { name: 'Jobs', path: '/jobs' },
];

const locationLinks = [
  { name: 'Springfield, VA', path: '/locations/springfield-pool-service' },
  { name: 'Alexandria, VA', path: '/locations/alexandria-pool-service' },
  { name: 'Arlington, VA', path: '/locations/arlington-pool-service' },
  { name: 'Woodbridge, VA', path: '/locations/woodbridge-pool-service' },
  { name: 'Mount Vernon, VA', path: '/locations/mount-vernon-pool-service' },
  { name: 'McLean, VA', path: '/locations/mclean-pool-service' },
  { name: 'Great Falls, VA', path: '/locations/great-falls-pool-service' },
  { name: 'Washington DC', path: '/locations/washington-dc-pool-service' },
  { name: 'Maryland', path: '/locations/maryland-pool-service' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationsOpenDesktop, setIsLocationsOpenDesktop] = useState(false);
  const [isLocationsOpenMobile, setIsLocationsOpenMobile] = useState(false);
  const location = useLocation();
  const locationsRef = useRef<HTMLDivElement>(null);
  const locationsMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLocationsOpenDesktop(false);
    setIsLocationsOpenMobile(false);
  }, [location]);

  // Block body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle click outside for desktop locations dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setIsLocationsOpenDesktop(false);
      }
    };
    if (isLocationsOpenDesktop) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isLocationsOpenDesktop]);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || !isHome
        ? 'bg-white shadow-xl py-2' 
        : 'bg-transparent py-4'
    }`}
    style={{ 
      WebkitTransform: 'translateZ(0)', 
      transform: 'translateZ(0)',
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden'
    }}>
      {/* Top Bar with Logo and Contact Info */}
      <div className={`transition-all duration-300 ${isScrolled || !isHome ? 'h-0 overflow-hidden' : 'h-auto'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4 md:gap-6 text-sm py-2">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/" className="flex items-center gap-3">
              <img
                src={Logo}
                alt="MGN Pools logo"
                className="h-10 w-auto md:h-12"
              />
              <span className="hidden md:block text-xs font-medium text-white/90">
                Northern Virginia - DC Metro
              </span>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-white/70 hidden md:inline">Call us:</span>
              <a href={`tel:${SITE_CONFIG.phones[0]}`} className="flex items-center gap-2 text-white/90 hover:text-white font-medium">
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phones[0]}
              </a>
              <span className="text-white/50 hidden lg:inline">|</span>
              <a href={`tel:${SITE_CONFIG.phones[1]}`} className="flex items-center gap-2 text-white/90 hover:text-white font-medium">
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phones[1]}
              </a>
            </div>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-white/90 hover:text-white">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{SITE_CONFIG.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - shown when scrolled or not on home */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={isScrolled || !isHome ? 'block' : 'hidden'}
        >
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="MGN Pools logo"
              className="h-10 w-auto md:h-12"
            />
            <span className={`hidden md:block text-xs font-medium ${
              isScrolled || !isHome ? 'text-gray-600' : 'text-white/90'
            }`}>
              Northern Virginia - DC Metro
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 flex-1 justify-end">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                  link.path === '/renovations' || link.path === '/repair' ? 'whitespace-normal text-center leading-tight' : 'whitespace-nowrap'
                } ${
                  location.pathname === link.path
                    ? 'bg-sky-500 text-white'
                    : isScrolled || !isHome
                      ? 'text-gray-700 hover:text-sky-600 hover:bg-sky-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.path === '/renovations' ? (
                  <>Repairs<br />Renovations</>
                ) : link.path === '/repair' ? (
                  <>Leak<br />Repairs</>
                ) : link.name}
              </Link>
            ))}
            
            {/* Locations Dropdown */}
            <div className="relative" ref={locationsRef}>
              <button
                onClick={() => setIsLocationsOpenDesktop(!isLocationsOpenDesktop)}
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-1 whitespace-nowrap ${
                  location.pathname.startsWith('/locations')
                    ? 'bg-sky-500 text-white'
                    : isScrolled || !isHome
                      ? 'text-gray-700 hover:text-sky-600 hover:bg-sky-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpenDesktop ? 'rotate-180' : ''}`} />
              </button>
              
              {isLocationsOpenDesktop && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                  style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
                >
                  <div className="py-2">
                    {locationLinks.map((loc) => (
                      <Link
                        key={loc.path}
                        to={loc.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors flex items-center gap-2"
                        onClick={() => setIsLocationsOpenDesktop(false)}
                      >
                        <MapPin className="w-4 h-4" />
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            to="/bid" 
            className={`ml-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap ${
              isScrolled || !isHome ? '' : ''
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className={`lg:hidden p-2 rounded-lg ${
            isScrolled || !isHome ? 'text-gray-800' : 'text-white'
          }`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="lg:hidden bg-white shadow-xl fixed top-[var(--navbar-height)] left-0 w-full h-[calc(100vh-var(--navbar-height))] overflow-y-auto z-40"
          style={{ 
            '--navbar-height': isScrolled || !isHome ? '75px' : '115px',
            WebkitTransform: 'translateZ(0)', 
            transform: 'translateZ(0)',
            WebkitOverflowScrolling: 'touch'
          } as React.CSSProperties}
        >
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`block font-medium py-3 px-4 rounded-lg ${
                  location.pathname === link.path
                    ? 'bg-sky-500 text-white'
                    : 'text-gray-800 hover:bg-sky-50 hover:text-sky-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.path === '/renovations' ? 'Repairs & Renovations' 
                  : link.path === '/repair' ? 'Leak Repairs' 
                  : link.name}
              </Link>
            ))}
            
            {/* Mobile Locations Section */}
            <div className="pt-2 border-t" ref={locationsMobileRef}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsLocationsOpenMobile(!isLocationsOpenMobile);
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                }}
                className="w-full flex items-center justify-between font-medium py-3 px-4 rounded-lg text-gray-800 hover:bg-sky-50 hover:text-sky-600 active:bg-sky-100 touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Locations
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpenMobile ? 'rotate-180' : ''}`} />
              </button>
              {isLocationsOpenMobile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="pl-4 space-y-1 mt-2"
                  style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
                >
                  {locationLinks.map((loc) => (
                    <Link
                      key={loc.path}
                      to={loc.path}
                      className="block py-2 px-4 text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors touch-manipulation"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsLocationsOpenMobile(false);
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {loc.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
            
            {/* Mobile CTA Button */}
            <div className="pt-4 border-t">
              <Link
                to="/bid"
                className="block w-full bg-sky-500 hover:bg-sky-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all shadow-lg mb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-gray-600 text-sm font-medium mb-2">Call us:</p>
              <a href={`tel:${SITE_CONFIG.phones[0]}`} className="block text-sky-600 font-semibold py-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phones[0]}
              </a>
              <a href={`tel:${SITE_CONFIG.phones[1]}`} className="block text-sky-600 font-semibold py-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phones[1]}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

