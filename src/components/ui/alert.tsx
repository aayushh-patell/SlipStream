import { AlertCircle, CheckCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertProps {
  variant?: "default" | "destructive" | "success" | "warning";
  className?: string;
  children: React.ReactNode;
}

const Alert = ({ variant = "default", className, children, ...props }: AlertProps) => {
  const variants = {
    default: "border-gray-200 bg-white text-gray-900",
    destructive: "border-red-200 bg-red-50 text-red-900",
    success: "border-green-200 bg-green-50 text-green-900",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-900",
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-lg border p-4",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertDescription = ({ className, children, ...props }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("text-sm", className)} {...props}>
    {children}
  </div>
);

const AlertTitle = ({ className, children, ...props }: { className?: string; children: React.ReactNode }) => (
  <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props}>
    {children}
  </h5>
);

export { Alert, AlertDescription, AlertTitle };
