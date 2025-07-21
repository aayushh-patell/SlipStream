import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/data" element={<DataExplorer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

const Predict = () => (
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">Race Prediction</h2>
      <p className="mt-4 text-lg text-gray-600">
        Prediction features coming soon...
      </p>
    </div>
  </div>
);

const DataExplorer = () => (
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">Data Explorer</h2>
      <p className="mt-4 text-lg text-gray-600">
        Data exploration features coming soon...
      </p>
    </div>
  </div>
);

const NotFound = () => (
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">404 - Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-600">
        The page you're looking for doesn't exist.
      </p>
    </div>
  </div>
);

export default App;
