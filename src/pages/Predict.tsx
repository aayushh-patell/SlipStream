import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Predict = () => {
  const [selectedCircuit, setSelectedCircuit] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");
  const [weatherConditions, setWeatherConditions] = useState("");

  const circuits = [
    "Bahrain International Circuit",
    "Jeddah Corniche Circuit", 
    "Albert Park Circuit",
    "Baku City Circuit",
    "Miami International Autodrome",
    "Imola Circuit",
    "Monaco Circuit",
    "Circuit de Barcelona-Catalunya",
    "Circuit Gilles Villeneuve",
    "Red Bull Ring",
    "Silverstone Circuit",
    "Hungaroring",
    "Spa-Francorchamps",
    "Zandvoort Circuit",
    "Monza Circuit",
    "Marina Bay Street Circuit",
    "Suzuka Circuit",
    "Lusail International Circuit",
    "Circuit of the Americas",
    "Autodromo Hermanos Rodriguez",
    "Interlagos Circuit",
    "Las Vegas Strip Circuit",
    "Yas Marina Circuit"
  ];

  const drivers = [
    "Max Verstappen", "Lewis Hamilton", "George Russell", "Kimi Antonelli",
    "Charles Leclerc", "Carlos Sainz", "Lando Norris", "Oscar Piastri",
    "Fernando Alonso", "Lance Stroll", "Esteban Ocon", "Pierre Gasly",
    "Alexander Albon", "Nico Hulkenberg", "Gabriel Bortoleto", "Yuki Tsunoda",
    "Liam Lawson", "Isack Hadjar", "Oliver Bearman", "Franco Colapinto"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement prediction logic
    console.log("Prediction requested:", { selectedCircuit, selectedDriver, weatherConditions });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Race Prediction</h1>
          <p className="text-xl text-gray-600">
            Select race parameters to get AI-powered predictions
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Circuit Selection */}
            <div>
              <label htmlFor="circuit" className="block text-sm font-medium text-gray-700 mb-2">
                Select Circuit
              </label>
              <div className="relative">
                <select
                  id="circuit"
                  value={selectedCircuit}
                  onChange={(e) => setSelectedCircuit(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Choose a circuit...</option>
                  {circuits.map((circuit) => (
                    <option key={circuit} value={circuit}>
                      {circuit}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Driver Selection */}
            <div>
              <label htmlFor="driver" className="block text-sm font-medium text-gray-700 mb-2">
                Select Driver
              </label>
              <div className="relative">
                <select
                  id="driver"
                  value={selectedDriver}
                  onChange={(e) => setSelectedDriver(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Choose a driver...</option>
                  {drivers.map((driver) => (
                    <option key={driver} value={driver}>
                      {driver}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Weather Conditions */}
            <div>
              <label htmlFor="weather" className="block text-sm font-medium text-gray-700 mb-2">
                Weather Conditions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Dry", "Light Rain", "Heavy Rain"].map((condition) => (
                  <label key={condition} className="flex items-center">
                    <input
                      type="radio"
                      name="weather"
                      value={condition}
                      checked={weatherConditions === condition}
                      onChange={(e) => setWeatherConditions(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-700">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Generate Prediction
              </button>
            </div>
          </form>
        </div>

        {/* Results Placeholder */}
        <div className="mt-8 bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prediction Results</h2>
          <p className="text-gray-600">
            Submit the form above to see AI-powered race predictions based on historical data and current conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Predict;
