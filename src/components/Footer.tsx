import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <DollarSign className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">PesaSmart</span>
            </Link>
            <p className="mt-2">Empowering Kenyan youth with financial literacy and entrepreneurship skills.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/learn" className="hover:underline">Learn</Link></li>
              <li><Link to="/invest" className="hover:underline">Invest</Link></li>
              <li><Link to="/startup-hub" className="hover:underline">Startup Hub</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Financial Calculators</a></li>
              <li><a href="#" className="hover:underline">Investment Guides</a></li>
              <li><a href="#" className="hover:underline">Startup Toolkit</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-green-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p>Email: info@pesasmart.co.ke</p>
            <p>Phone: +254 700 000000</p>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} PesaSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;