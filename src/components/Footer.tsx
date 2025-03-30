
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-oil-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suresh Enterprises KKD</h3>
            <p className="text-gray-300 mb-4">
              Reliable & Trusted Vendor for the Oil & Gas Industry Since 15 Years
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-300 hover:text-white transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/services#stationery">Stationery Supplies</Link>
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/services#tools">Hand Tools Supply</Link>
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/services#manpower">Manpower Services</Link>
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/services#carpentry">Wooden Boxes & Carpentry</Link>
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/services#fabrication">Fabrication Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Industrial Area, Kakinada East Godavari, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <a href="mailto:info@sureshenterpriseskkd.com" className="text-gray-300 hover:text-white">
                  info@sureshenterpriseskkd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Suresh Enterprises KKD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
