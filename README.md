# SlipStream - F1 Race Prediction Platform

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/aayushh-patell/SlipStream)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)

SlipStream is an advanced Formula 1 race prediction platform that leverages machine learning algorithms and comprehensive race data to provide accurate race outcome predictions.

## 🏎️ Features

- **AI-Powered Predictions**: Advanced machine learning models trained on historical F1 data
- **Real-Time Analysis**: Live weather feeds and track condition integration
- **Comprehensive Data**: Coverage of all F1 circuits and drivers
- **Interactive Dashboard**: User-friendly interface for exploring race data and statistics
- **Responsive Design**: Optimized for desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aayushh-patell/SlipStream.git
cd SlipStream
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system

## 📊 API Integration

SlipStream includes a comprehensive API service layer for:

- Circuit data and specifications
- Driver information and statistics
- Race prediction algorithms
- Historical race data analysis
- Performance metrics and analytics

## 🎯 Usage

### Making Predictions

1. Navigate to the **Predict** page
2. Select a circuit from the dropdown menu
3. Choose a driver
4. Set weather conditions
5. Click "Generate Prediction" to get AI-powered results

### Exploring Data

Visit the **Data Explorer** to:
- View recent race results
- Analyze driver performance statistics
- Compare circuit characteristics
- Examine historical trends

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation component
│   └── ui/             # UI component library
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Predict.tsx     # Prediction interface
│   ├── DataExplorer.tsx # Data visualization
│   └── About.tsx       # About page
├── services/           # API and service functions
│   └── api.ts          # API client and types
├── lib/                # Utility functions
│   └── utils.ts        # Helper utilities
└── App.tsx            # Main application component
```
