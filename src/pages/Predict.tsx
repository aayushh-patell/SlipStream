import { useState } from "react";
import { ChevronDown, Trophy, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { api, type PredictionRequest, type PredictionResult } from "../services/api";
import { Alert } from '../components/ui/alert';
import { LoadingSpinner } from '../components/ui/loading';

const Predict = () => {
  const [selectedCircuit, setSelectedCircuit] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");
  const [weatherConditions, setWeatherConditions] = useState<"dry" | "light_rain" | "heavy_rain">("dry");
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

  const predictionMutation = useMutation({
    mutationFn: (request: PredictionRequest) => api.generatePrediction(request),
    onSuccess: (result) => {
      setPredictionResult(result);
    },
    onError: (error) => {
      console.error('Prediction failed:', error);
    },
  });

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
    
    const request: PredictionRequest = {
      circuitId: selectedCircuit,
      driverId: selectedDriver,
      weatherConditions: weatherConditions as "dry" | "light_rain" | "heavy_rain",
    };
    
    predictionMutation.mutate(request);
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
                {[
                  { value: "dry", label: "Dry" },
                  { value: "light_rain", label: "Light Rain" },
                  { value: "heavy_rain", label: "Heavy Rain" }
                ].map((condition) => (
                  <label key={condition.value} className="flex items-center">
                    <input
                      type="radio"
                      name="weather"
                      value={condition.value}
                      checked={weatherConditions === condition.value}
                      onChange={(e) => setWeatherConditions(e.target.value as "dry" | "light_rain" | "heavy_rain")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-700">{condition.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={predictionMutation.isPending}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {predictionMutation.isPending ? (
                  <>
                    <LoadingSpinner size="sm" />
                    Generating Prediction...
                  </>
                ) : (
                  'Generate Prediction'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        <div className="mt-8 bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prediction Results</h2>
          
          {predictionMutation.error && (
            <Alert variant="destructive" className="mb-6">
              <strong>Prediction Error:</strong> Unable to generate prediction. Please try again with different parameters.
            </Alert>
          )}
          
          {predictionMutation.isPending && (
            <div className="flex items-center justify-center py-12">
              <LoadingSpinner size="lg" />
              <span className="ml-3 text-gray-600">Analyzing race conditions...</span>
            </div>
          )}
          
          {predictionResult ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Trophy className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Predicted Position</p>
                  <p className="text-2xl font-bold text-blue-600">P{predictionResult.position}</p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600 text-2xl font-bold mb-2">
                    {Math.round(predictionResult.probability * 100)}%
                  </div>
                  <p className="text-sm text-gray-600">Win Probability</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Est. Lap Time</p>
                  <p className="text-lg font-semibold text-purple-600">
                    {predictionResult.estimatedLapTime || 'N/A'}
                  </p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Prediction Factors</h3>
                <div className="space-y-3">
                  {Object.entries(predictionResult.factors).map(([factor, value]) => (
                    <div key={factor} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 capitalize">
                        {factor.replace('_', ' ')}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${value * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {Math.round(value * 100)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>Confidence Level:</strong> {Math.round(predictionResult.confidence * 100)}%
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  This prediction is based on historical race data, driver performance, and current conditions.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">
              Submit the form above to see AI-powered race predictions based on historical data and current conditions.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Predict;
