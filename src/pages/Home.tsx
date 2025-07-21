import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Predict the Future of</span>
              <span className="block text-blue-600">Formula 1 Racing</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Advanced machine learning meets Formula 1 racing. Get precise race outcome 
              predictions with real-time data analysis and comprehensive statistics.
            </p>
            <div className="mt-10 flex justify-center space-x-6">
              <Link
                to="/predict"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start Predicting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/data"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Explore Data
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose SlipStream?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Cutting-edge technology for F1 enthusiasts and data scientists
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Advanced Analytics</h3>
              <p className="mt-2 text-gray-500">
                Machine learning algorithms analyze historical race data and driver performance
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Real-time Data</h3>
              <p className="mt-2 text-gray-500">
                Up-to-date race information and live prediction updates
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Easy to Use</h3>
              <p className="mt-2 text-gray-500">
                Intuitive interface designed for both beginners and experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
