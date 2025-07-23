import { Wheat } from "lucide-react";
import chakkiIcon from "@/assets/chakki-icon.jpg";

const LoadingSpinner = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        {/* Chakki Wheel */}
        <div className="relative mb-6">
          <div className="w-24 h-24 mx-auto">
            <img
              src={chakkiIcon}
              alt="Chakki Wheel"
              className="w-full h-full object-contain chakki-spin opacity-80"
            />
          </div>
          
          {/* Grain particles around the wheel */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-wheat-gold rounded-full animate-grain-fall opacity-70"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-lg font-medium text-foreground animate-gentle-pulse">
          {text}
        </p>
        
        {/* Tagline */}
        <p className="text-sm text-muted-foreground mt-2">
          Preparing fresh quality for you...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;