import React from "react";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ light = false, className = "" }) => {
  const honeyColor = "#C41E3A";
  const chemicalsColor = "#4B5563"; // Medium grey
  const textColor = light ? "#FFFFFF" : chemicalsColor;

  return (
    <div className={`flex items-center transition-transform duration-300 group-hover:scale-105 ${className}`}>
      <img 
        src="https://lh3.googleusercontent.com/d/1C3lhsicAscrLrXbPU_5fa5l1P3Q2ECt0" 
        alt="Honey Chemicals Logo" 
        className={`h-12 sm:h-16 w-auto object-contain ${light ? "brightness-0 invert" : ""}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
