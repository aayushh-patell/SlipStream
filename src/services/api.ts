// API Base Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// Types
export interface Circuit {
  id: string;
  name: string;
  country: string;
  length: number;
  lapRecord?: string;
}

export interface Driver {
  id: string;
  name: string;
  team: string;
  nationality: string;
  championships?: number;
}

export interface PredictionRequest {
  circuitId: string;
  driverId: string;
  weatherConditions: 'dry' | 'light_rain' | 'heavy_rain';
  trackTemperature?: number;
  airTemperature?: number;
}

export interface PredictionResult {
  position: number;
  probability: number;
  confidence: number;
  factors: {
    driver_performance: number;
    track_suitability: number;
    weather_impact: number;
    historical_data: number;
  };
  estimatedLapTime?: string;
}

export interface RaceData {
  id: string;
  circuit: string;
  date: string;
  winner: string;
  avgLapTime: string;
  weatherConditions: string;
  attendance?: number;
}

// API Functions
export const api = {
  // Circuits
  async getCircuits(): Promise<Circuit[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/circuits`);
      if (!response.ok) throw new Error('Failed to fetch circuits');
      return await response.json();
    } catch (error) {
      console.error('Error fetching circuits:', error);
      // Return mock data for development
      return [
        { id: '1', name: 'Monaco Circuit', country: 'Monaco', length: 3.337 },
        { id: '2', name: 'Silverstone Circuit', country: 'UK', length: 5.891 },
        { id: '3', name: 'Spa-Francorchamps', country: 'Belgium', length: 7.004 },
      ];
    }
  },

  // Drivers
  async getDrivers(): Promise<Driver[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/drivers`);
      if (!response.ok) throw new Error('Failed to fetch drivers');
      return await response.json();
    } catch (error) {
      console.error('Error fetching drivers:', error);
      // Return mock data for development
      return [
        { id: '1', name: 'Max Verstappen', team: 'Red Bull Racing', nationality: 'Dutch' },
        { id: '2', name: 'Lewis Hamilton', team: 'Mercedes', nationality: 'British' },
        { id: '3', name: 'Charles Leclerc', team: 'Ferrari', nationality: 'Monégasque' },
      ];
    }
  },

  // Predictions
  async generatePrediction(request: PredictionRequest): Promise<PredictionResult> {
    try {
      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });
      
      if (!response.ok) throw new Error('Failed to generate prediction');
      return await response.json();
    } catch (error) {
      console.error('Error generating prediction:', error);
      // Return mock prediction for development
      return {
        position: Math.floor(Math.random() * 10) + 1,
        probability: Math.random() * 0.3 + 0.1,
        confidence: Math.random() * 0.4 + 0.6,
        factors: {
          driver_performance: Math.random(),
          track_suitability: Math.random(),
          weather_impact: Math.random(),
          historical_data: Math.random(),
        },
        estimatedLapTime: `1:${String(Math.floor(Math.random() * 30) + 15).padStart(2, '0')}.${String(Math.floor(Math.random() * 999)).padStart(3, '0')}`,
      };
    }
  },

  // Race Data
  async getRaceData(filters?: { year?: number; circuit?: string }): Promise<RaceData[]> {
    try {
      const params = new URLSearchParams();
      if (filters?.year) params.append('year', filters.year.toString());
      if (filters?.circuit) params.append('circuit', filters.circuit);

      const response = await fetch(`${API_BASE_URL}/races?${params}`);
      if (!response.ok) throw new Error('Failed to fetch race data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching race data:', error);
      // Return mock data for development
      return [
        {
          id: '1',
          circuit: 'Monaco',
          date: '2024-05-26',
          winner: 'Max Verstappen',
          avgLapTime: '1:12.456',
          weatherConditions: 'dry',
        },
        {
          id: '2',
          circuit: 'Silverstone',
          date: '2024-07-07',
          winner: 'Lewis Hamilton',
          avgLapTime: '1:27.123',
          weatherConditions: 'light_rain',
        },
      ];
    }
  },

  // Statistics
  async getStatistics(): Promise<{
    totalRaces: number;
    predictionAccuracy: number;
    activeDrivers: number;
    circuitsCovered: number;
  }> {
    try {
      const response = await fetch(`${API_BASE_URL}/statistics`);
      if (!response.ok) throw new Error('Failed to fetch statistics');
      return await response.json();
    } catch (error) {
      console.error('Error fetching statistics:', error);
      // Return mock data for development
      return {
        totalRaces: 312,
        predictionAccuracy: 89.3,
        activeDrivers: 20,
        circuitsCovered: 23,
      };
    }
  },
};

export default api;
