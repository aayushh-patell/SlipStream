import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",
        sizes[size],
        className
      )}
    />
  );
};

interface LoadingStateProps {
  message?: string;
  className?: string;
}

const LoadingState = ({ message = "Loading...", className }: LoadingStateProps) => (
  <div className={cn("flex flex-col items-center justify-center py-12", className)}>
    <LoadingSpinner size="lg" className="mb-4" />
    <p className="text-gray-600">{message}</p>
  </div>
);

export { LoadingSpinner, LoadingState };
