import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import { LoadingSpinner } from "./components/ui/loading";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home"));
const Predict = lazy(() => import("./pages/Predict"));
const DataExplorer = lazy(() => import("./pages/DataExplorer"));
const About = lazy(() => import("./pages/About"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (previously cacheTime)
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error && typeof error === 'object' && 'status' in error) {
          const status = error.status as number;
          if (status >= 400 && status < 500) return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navigation />
        <main>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-96">
              <LoadingSpinner size="lg" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/predict" element={<Predict />} />
              <Route path="/data" element={<DataExplorer />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  </QueryClientProvider>
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
