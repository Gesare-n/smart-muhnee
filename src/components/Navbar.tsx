import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, DollarSign } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useUser();

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <DollarSign className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">PesaSmart</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-green-700">Home</Link>
            <Link to="/learn" className="px-3 py-2 rounded-md hover:bg-green-700">Learn</Link>
            <Link to="/invest" className="px-3 py-2 rounded-md hover:bg-green-700">Invest</Link>
            <Link to="/startup-hub" className="px-3 py-2 rounded-md hover:bg-green-700">Startup Hub</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-green-700">Dashboard</Link>
                <button 
                  onClick={logout}
                  className="ml-4 px-4 py-2 rounded-md bg-white text-green-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="px-4 py-2 rounded-md bg-white text-green-600 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 rounded-md bg-green-800 text-white hover:bg-green-900"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/learn" 
              className="block px-3 py-2 rounded-md hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link 
              to="/invest" 
              className="block px-3 py-2 rounded-md hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Invest
            </Link>
            <Link 
              to="/startup-hub" 
              className="block px-3 py-2 rounded-md hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Startup Hub
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 rounded-md hover:bg-green-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md bg-white text-green-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md bg-white text-green-600 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;