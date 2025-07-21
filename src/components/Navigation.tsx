import { Car } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Car className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">SlipStream</h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/predict" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/predict') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Predict
            </Link>
            <Link 
              to="/data" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/data') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Data Explorer
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
