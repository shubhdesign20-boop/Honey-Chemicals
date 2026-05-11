import React from "react";
import { motion } from "motion/react";

export const Marquee = () => {
  const items = [
    "QUALITY FIRST",
    "INNOVATION",
    "PURITY",
    "EXCELLENCE",
    "TRANSFORMATION",
    "RELIABILITY"
  ];

  // We duplicate the items precisely once and use animate x: [0, "-50%"]
  // This ensures that the moment the animation reaches the end of the first set,
  // it resets to the start of the first set (which looks identical).
  const fullText = [...items, ...items];

  return (
    <div className="bg-white py-10 overflow-hidden">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap items-center w-fit"
      >
        {fullText.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-[8vw] md:text-[100px] font-black italic text-slate-400 tracking-tighter uppercase whitespace-nowrap select-none">
              {item}
            </span>
            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-slate-400 mx-8 md:mx-12 shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
