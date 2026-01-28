import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Logo from '../assets/images/logo.png';

const SITE_CONFIG = {
  phones: ["571-275-3696", "571-332-2431"],
  email: "mgnpools@yahoo.com",
  address: "5954 Hall Street, Springfield, VA, 22152",
  social: {
    instagram: "https://www.instagram.com/mgnpools?igsh=cmNrbGJqZXY0bWtu",
    facebook: "https://www.facebook.com/mgnpools",
  },
};

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Commercial pool management', path: '/commercial' },
  { name: 'Residential pool service', path: '/residential' },
  { name: 'Pool repairs and renovations', path: '/renovations' },
  { name: 'Training and certification', path: '/training' },
];

const supportLinks = [
  { name: 'Bid request', path: '/bid' },
  { name: 'Request your free repair estimate', path: '/repair' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Contact us', path: '/contacts' },
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

const serviceAreas = {
  fairfax: "Alexandria, Arlington, Annadale, Burke, Centreville, Chantilly, Clifton, Fairfax, Fairfax Station, Falls Church, Fort Belvoir, Great Falls, Herndon, Lorton, McLean, Oakton, Reston, Springfield, Vienna",
  loudoun: "Aldie, Ashburn, Bluemont, Dulles, Hamilton, Hillsboro, Lansdowne, Leesburg, Lovettsville, Middleburg, Paeonian Springs, Potomac Falls, Purcellville, Round Hill, South Riding, Sterling, Stoneridge, Waterford",
  princeWilliam: "Bristow, Dale City, Dumfries, Gainesville, Haymarket, Manassas, Manassas Park, Nokesville, Occoquan, Quantico, Triangle, Woodbridge",
  spotsylvania: "Fredericksburg",
  montgomery: "Bethesda, Chevy Chase, Potomac, Rockville, Silver Spring, Takoma Park",
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={Logo}
                alt="MGN Pools logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              MGN Pools Management specializes in commercial and residential swimming pool management, maintenance, repair, and renovation.
            </p>
            <p className="text-gray-500 text-sm">
              We are pool service company that provides pool management, pool renovations and pool repairs. Our pool contractor services also include pool leak detection and pool plaster.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-sky-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-sky-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Areas We Serve</h4>
            <ul className="space-y-3">
              {locationLinks.map((loc) => (
                <li key={loc.path}>
                  <Link to={loc.path} className="text-gray-400 hover:text-sky-400 transition-colors">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phones[0]}`} className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                  <Phone className="w-5 h-5 text-sky-400" />
                  {SITE_CONFIG.phones[0]}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phones[1]}`} className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                  <Phone className="w-5 h-5 text-sky-400" />
                  {SITE_CONFIG.phones[1]}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                  <Mail className="w-5 h-5 text-sky-400" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h5>
              <div className="flex items-center gap-4">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-white transition-all hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition-all hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            We provide swimming pool management, repair and renovation services in Northern Virginia, Maryland and DC.
          </p>
          <div className="mt-4 text-gray-500 text-xs space-y-2">
            <p><span className="text-gray-400 font-medium">Fairfax County:</span> {serviceAreas.fairfax}</p>
            <p><span className="text-gray-400 font-medium">Loudoun County:</span> {serviceAreas.loudoun}</p>
            <p><span className="text-gray-400 font-medium">Prince William County:</span> {serviceAreas.princeWilliam}</p>
            <p><span className="text-gray-400 font-medium">Spotsylvania County:</span> {serviceAreas.spotsylvania}</p>
            <p><span className="text-gray-400 font-medium">Montgomery County:</span> {serviceAreas.montgomery}</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2007-{new Date().getFullYear()} MGN Pools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

