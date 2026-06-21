import React from "react";

interface IndustrialWatermarkProps {
  className?: string;
  opacity?: number;
}

export const IndustrialWatermark: React.FC<IndustrialWatermarkProps> = ({
  className = "absolute inset-0 pointer-events-none overflow-hidden select-none",
  opacity = 0.04,
}) => {
  return (
    <div className={className} style={{ opacity }}>
      <svg
        viewBox="0 0 1000 1600"
        fill="currentColor"
        className="w-full h-full max-h-[140%] object-contain object-bottom text-slate-400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Double Lattice Towers */}
        {/* Lattice Tower 1 (Far Left) */}
        <g id="lattice-tower-1">
          <line x1="80" y1="50" x2="80" y2="1500" stroke="currentColor" strokeWidth="3" />
          <line x1="140" y1="50" x2="140" y2="1500" stroke="currentColor" strokeWidth="3" />
          {/* Cross braces */}
          {Array.from({ length: 18 }).map((_, i) => {
            const y1 = 50 + i * 80;
            const y2 = 50 + (i + 1) * 80;
            return (
              <g key={`l1-brace-${i}`}>
                <line x1="80" y1={y1} x2="140" y2={y2} stroke="currentColor" strokeWidth="2" />
                <line x1="140" y1={y1} x2="80" y2={y2} stroke="currentColor" strokeWidth="2" />
                <line x1="80" y1={y2} x2="140" y2={y2} stroke="currentColor" strokeWidth="2" />
              </g>
            );
          })}
        </g>

        {/* Lattice Tower 2 */}
        <g id="lattice-tower-2">
          <line x1="170" y1="50" x2="170" y2="1500" stroke="currentColor" strokeWidth="3" />
          <line x1="230" y1="50" x2="230" y2="1500" stroke="currentColor" strokeWidth="3" />
          {/* Cross braces */}
          {Array.from({ length: 18 }).map((_, i) => {
            const y1 = 50 + i * 80;
            const y2 = 50 + (i + 1) * 80;
            return (
              <g key={`l2-brace-${i}`}>
                <line x1="170" y1={y1} x2="230" y2={y2} stroke="currentColor" strokeWidth="2" />
                <line x1="230" y1={y1} x2="170" y2={y2} stroke="currentColor" strokeWidth="2" />
                <line x1="170" y1={y2} x2="230" y2={y2} stroke="currentColor" strokeWidth="2" />
              </g>
            );
          })}
        </g>

        {/* Right Double Lattice Towers */}
        {/* Lattice Tower 3 */}
        <g id="lattice-tower-3">
          <line x1="770" y1="50" x2="770" y2="1500" stroke="currentColor" strokeWidth="3" />
          <line x1="830" y1="50" x2="830" y2="1500" stroke="currentColor" strokeWidth="3" />
          {/* Cross braces */}
          {Array.from({ length: 18 }).map((_, i) => {
            const y1 = 50 + i * 80;
            const y2 = 50 + (i + 1) * 80;
            return (
              <g key={`l3-brace-${i}`}>
                <line x1="770" y1={y1} x2="830" y2={y2} stroke="currentColor" strokeWidth="2" />
                <line x1="830" y1={y1} x2="770" y2={y2} stroke="currentColor" strokeWidth="2" />
                <line x1="770" y1={y2} x2="830" y2={y2} stroke="currentColor" strokeWidth="2" />
              </g>
            );
          })}
        </g>

        {/* Lattice Tower 4 (Far Right) */}
        <g id="lattice-tower-4">
          <line x1="860" y1="50" x2="860" y2="1500" stroke="currentColor" strokeWidth="3" />
          <line x1="920" y1="50" x2="920" y2="1500" stroke="currentColor" strokeWidth="3" />
          {/* Cross braces */}
          {Array.from({ length: 18 }).map((_, i) => {
            const y1 = 50 + i * 80;
            const y2 = 50 + (i + 1) * 80;
            return (
              <g key={`l4-brace-${i}`}>
                <line x1="860" y1={y1} x2="920" y2={y2} stroke="currentColor" strokeWidth="2" />
                <line x1="920" y1={y1} x2="860" y2={y2} stroke="currentColor" strokeWidth="2" />
                <line x1="860" y1={y2} x2="920" y2={y2} stroke="currentColor" strokeWidth="2" />
              </g>
            );
          })}
        </g>

        {/* Wave base at bottom */}
        <g id="water-waves" className="text-slate-400">
          <path
            d="M 20,1350 Q 50,1320 80,1350 T 140,1350 T 200,1350 T 260,1350 T 320,1350 T 380,1350 T 440,1350 T 500,1350 T 560,1350 T 620,1350 T 680,1350 T 740,1350 T 800,1350 T 860,1350 T 920,1350 T 980,1350 L 980,1400 L 20,1400 Z"
            fill="currentColor"
          />
          <path
            d="M 20,1380 Q 50,1350 80,1380 T 140,1380 T 200,1380 T 260,1380 T 320,1380 T 380,1380 T 440,1380 T 500,1380 T 560,1380 T 620,1380 T 680,1380 T 740,1380 T 800,1380 T 860,1380 T 920,1380 T 980,1380 L 980,1430 L 20,1430 Z"
            fill="currentColor"
            opacity="0.6"
          />
        </g>

        {/* Central main platform */}
        {/* Large rectangle representing main background deck of the platform */}
        <rect x="25" y="590" width="850" height="55" rx="4" fill="currentColor" />

        {/* Underwater column or supports */}
        <rect x="140" y="645" width="20" height="700" fill="currentColor" />
        <rect x="210" y="645" width="20" height="700" fill="currentColor" />
        <rect x="780" y="645" width="20" height="700" fill="currentColor" />
        <rect x="850" y="645" width="20" height="700" fill="currentColor" />
        <rect x="480" y="645" width="40" height="500" fill="currentColor" />

        {/* Sub-platform details below main deck */}
        <rect x="350" y="645" width="300" height="85" rx="2" fill="currentColor" />
        {/* Grate stripes inside the sub-platform */}
        <rect x="370" y="660" width="50" height="55" fill="white" opacity="0.15" />
        <rect x="430" y="660" width="50" height="55" fill="white" opacity="0.15" />
        <rect x="520" y="660" width="50" height="55" fill="white" opacity="0.15" />
        <rect x="580" y="660" width="50" height="55" fill="white" opacity="0.15" />

        {/* Central Drilling Derrick / Truss Structure */}
        <g id="central-derrick">
          <line x1="410" y1="110" x2="410" y2="590" stroke="currentColor" strokeWidth="4" />
          <line x1="490" y1="110" x2="490" y2="590" stroke="currentColor" strokeWidth="4" />
          {/* horizontal braces in the derrick */}
          {Array.from({ length: 12 }).map((_, i) => {
            const y1 = 110 + i * 40;
            const y2 = 110 + (i + 1) * 40;
            return (
              <g key={`derrick-brace-${i}`}>
                <line x1="410" y1={y1} x2="490" y2={y2} stroke="currentColor" strokeWidth="2.5" />
                <line x1="490" y1={y1} x2="410" y2={y2} stroke="currentColor" strokeWidth="2.5" />
                <line x1="410" y1={y2} x2="490" y2={y2} stroke="currentColor" strokeWidth="2.5" />
              </g>
            );
          })}
          {/* Derrick Top crown block */}
          <rect x="400" y="90" width="100" height="20" fill="currentColor" />
          <rect x="420" y="55" width="60" height="35" rx="3" fill="currentColor" />
        </g>

        {/* Left Side Buildings on Deck */}
        <g id="deck-buildings-left">
          {/* Main factory block left */}
          <rect x="180" y="475" width="220" height="115" rx="3" fill="currentColor" />
          
          {/* Control room grid windows (left building) */}
          <rect x="200" y="495" width="25" height="25" rx="1.5" fill="white" />
          <rect x="235" y="495" width="25" height="25" rx="1.5" fill="white" />
          <rect x="270" y="495" width="25" height="25" rx="1.5" fill="white" />
          <rect x="305" y="495" width="25" height="25" rx="1.5" fill="white" />
          <rect x="340" y="495" width="25" height="25" rx="1.5" fill="white" />

          <rect x="200" y="535" width="25" height="40" rx="1" fill="white" />
          <rect x="235" y="535" width="25" height="40" rx="1" fill="white" />
          <rect x="270" y="535" width="25" height="40" rx="1" fill="white" />
          <rect x="305" y="535" width="25" height="40" rx="1" fill="white" />
          <rect x="340" y="535" width="25" height="40" rx="1" fill="white" />

          {/* Vertical Exhaust pipes (left) */}
          <rect x="250" y="405" width="15" height="70" fill="currentColor" />
          <rect x="275" y="405" width="15" height="70" fill="currentColor" />
          <rect x="300" y="405" width="15" height="70" fill="currentColor" />
          <rect x="325" y="405" width="15" height="70" fill="currentColor" />
        </g>

        {/* Right Side Buildings on Deck */}
        <g id="deck-buildings-right">
          {/* Central warehouse right */}
          <rect x="500" y="465" width="230" height="125" rx="3" fill="currentColor" />

          {/* Grid windows on right building */}
          <rect x="525" y="485" width="25" height="25" fill="white" />
          <rect x="560" y="485" width="25" height="25" fill="white" />
          <rect x="595" y="485" width="25" height="25" fill="white" />
          <rect x="630" y="485" width="25" height="25" fill="white" />
          <rect x="665" y="485" width="25" height="25" fill="white" />

          <rect x="525" y="525" width="25" height="25" fill="white" />
          <rect x="560" y="525" width="25" height="25" fill="white" />
          <rect x="595" y="525" width="25" height="25" fill="white" />
          <rect x="630" y="525" width="25" height="25" fill="white" />
          <rect x="665" y="525" width="25" height="25" fill="white" />

          <rect x="560" y="560" width="40" height="30" fill="white" />
          <rect x="630" y="560" width="40" height="30" fill="white" />

          {/* Domed Pressure Reactors / Silos */}
          <path d="M 535,385 A 25,25 0 0 1 585,385 L 585,465 L 535,465 Z" fill="currentColor" />
          <rect x="552" y="360" width="10" height="25" fill="currentColor" />
          <rect x="548" y="352" width="18" height="8" rx="1" fill="currentColor" />

          <path d="M 610,385 A 25,25 0 0 1 660,385 L 660,465 L 610,465 Z" fill="currentColor" />
          <rect x="627" y="360" width="10" height="25" fill="currentColor" />
          <rect x="623" y="352" width="18" height="8" rx="1" fill="currentColor" />
        </g>

        {/* Side cranes / diagonal armatures */}
        <g id="cranes">
          {/* Left Side Outrigger */}
          <line x1="180" y1="535" x2="25" y2="480" stroke="currentColor" strokeWidth="5" />
          <line x1="180" y1="570" x2="25" y2="480" stroke="currentColor" strokeWidth="3" />
          <line x1="25" y1="480" x2="20" y2="535" stroke="currentColor" strokeWidth="2" />
          {/* Wire rigging */}
          <line x1="180" y1="475" x2="25" y2="480" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />

          {/* Right Side Outrigger */}
          <line x1="730" y1="535" x2="950" y2="480" stroke="currentColor" strokeWidth="5" />
          <line x1="730" y1="570" x2="950" y2="480" stroke="currentColor" strokeWidth="3" />
          <line x1="950" y1="480" x2="955" y2="535" stroke="currentColor" strokeWidth="2" />
          {/* Wire rigging */}
          <line x1="730" y1="465" x2="950" y2="480" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
        </g>
      </svg>
    </div>
  );
};
