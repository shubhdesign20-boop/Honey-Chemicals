import React from "react";
import { motion } from "motion/react";

const INDUSTRIES = [
  {
    name: "Filler Industries",
    description: "High-purity calcium carbonate fillers from Honey Chemicals ensure a consistent finish, improved strength, and cost efficiency across industries like plastics, paints, rubber, and PVC.",
    image: "https://dunamismachines.in/wp-content/uploads/2021/04/Looking-for-the-best-bottle-filling-machine.jpg",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – High whiteness, fine particle size.",
          "UNIT – Best-value filler with balanced performance."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "VT100C, VT200C – Premium coated grades with excellent dispersion.",
          "BC10T, BC20T – Egyptian origin, ultra-white, high-performance fillers."
        ]
      }
    ]
  },
  {
    name: "PVC Industries",
    description: "Honey Chemicals offers specially selected grades of calcium carbonate ideal for the PVC industry. Our high-purity products enhance surface finish, dimensional stability, and impact resistance while reducing material cost. Suitable for use in pipes, profiles, cables, and rigid PVC compounds.",
    image: "https://www.enggpro.com/blogs/wp-content/uploads/2023/10/pvc-pipes-drinking-water_176124-419.png",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – Provides smooth surface finish and good thermal stability.",
          "UNIT – Cost-effective solution for general-purpose PVC applications."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "VT100C, VT200C – Excellent dispersion and processing efficiency in rigid PVC.",
          "BC10T, BC20T – Superior whiteness and strength for high-end PVC profiles and cables."
        ]
      }
    ]
  },
  {
    name: "Rubber Industries",
    description: "Honey Chemicals supplies high-quality calcium carbonate that enhances elasticity, strength, and dimensional stability in rubber products. Ideal for automotive, footwear, and industrial applications, our grades ensure excellent processability and cost efficiency.",
    image: "https://www.theindustryoutlook.com/uploaded_images/newstransfer/dwyp1rubbee_456.jpg",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – Enhances volume and provides uniform dispersion.",
          "UNIT – Economical grade for general rubber applications."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "VT100C, VT200C – Excellent dispersion for high-performance sealings.",
          "BC10T, BC20T – High whiteness and superior reinforcement for premium rubber goods."
        ]
      }
    ]
  },
  {
    name: "Paint Industries",
    description: "Calcium carbonate is widely used in the paint and coatings industry as an extender and functional filler. At Honey Chemicals, our high-brightness grades improve opacity, whiteness, and flow properties while reducing formulation costs. Suitable for decorative, industrial, powder, and emulsion paints.",
    image: "https://flattrade.in/kosh/wp-content/uploads/2021/10/paint-industry.jpg",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – Enhances opacity and provides smooth texture.",
          "UNIT – Cost-effective choice for standard paint formulations."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "VT100C, VT200C – Excellent dispersion for high-performance coatings.",
          "BC10T, BC20T – Ultra-white grades for premium finishes and brilliant coverage."
        ]
      }
    ]
  },
  {
    name: "Paper Industries",
    description: "Calcium carbonate is widely used in the paper industry for its brightness, opacity, and cost-saving benefits. It improves printability, surface smoothness, and bulk while reducing the need for expensive raw materials.",
    image: "https://knnindia.co.in/uploads/newsfiles/Paper-Industry.jpg",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – Enhances whiteness and print surface quality.",
          "UNIT – Suitable for economical paper and board applications."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "VT100C, VT200C – Offers superior dispersion and gloss.",
          "BC10T, BC20T – High-purity, ultra-white grades for premium coated papers."
        ]
      }
    ]
  },
  {
    name: "Pigments Industries",
    description: "Calcium carbonate acts as an effective extender in the pigment industry, improving color strength, brightness, and dispersion while reducing formulation costs. It is widely used in both organic and inorganic pigment systems.",
    image: "https://www.coatingsworld.com/wp-content/uploads/sites/9/2025/06/517_main.jpg",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – Provides excellent whiteness and supports vibrant pigment dispersion.",
          "UNIT – Ideal for standard pigment formulations requiring smooth blending."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "VT100C, VT200C – High-brightness grades for enhanced opacity and flow.",
          "BC10T, BC20T – Ultra-fine, high-purity grades for premium pigment applications."
        ]
      }
    ]
  },
  {
    name: "Cables Industries",
    description: "Calcium carbonate is a key additive in cable manufacturing, used to enhance insulation, mechanical strength, and surface finish. It also improves process stability and reduces compound costs in wire and cable applications.",
    image: "https://www.electricalindia.in/wp-content/uploads/2025/07/electric-wire.jpg",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – Supports insulation properties and smooth extrusion.",
          "UNIT – Suitable for general cable sheathing and filler applications."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "VT100C, VT200C – Excellent dispersion and compatibility with PVC and XLPE compounds.",
          "BC10T, BC20T – High-purity ultra-white options for premium cable insulation and jacketing."
        ]
      }
    ]
  },
  {
    name: "Cattle Feed Industries",
    description: "Calcium carbonate is widely used in the cattle feed industry as a natural source of calcium, essential for bone development, milk production, and overall animal health.",
    image: "https://filesblog.bizvibe.com/wp-content/webp-express/webp-images/uploads/2022/09/animal-feed-manufacturers.jpg.webp",
    grades: [
      {
        category: "Indian Ground - Uncoated",
        items: [
          "UNIT – High-purity grade for mineral mixtures and feed supplements.",
          "UNIT – Cost-effective option for standard cattle feed formulations."
        ]
      },
      {
        category: "Imported Ground - Uncoated",
        items: [
          "BC10T, BC20T – Ultra-fine, feed-grade quality for greater nutrient dosing and better absorption."
        ]
      }
    ]
  },
  {
    name: "Agro Chemicals",
    description: "Calcium carbonate is commonly used in agrochemical formulations as a pH regulator, anti-caking agent, and carrier for active ingredients. It helps improve product stability and enhances soil conditioning properties.",
    image: "https://blog.sathguru.com/wp-content/uploads/2021/01/Opportunity-for-India-becoming-a-global-agro-chemical-manufacturing-hub.jpg",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – Fine-grade with consistent quality for liquid formulations and soil applications.",
          "UNIT – Suitable for general-purpose agrochemical use and fertilizer blending."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "VT100C, VT200C – Superior dispersion and purity for advanced formulations.",
          "BC10T, BC20T – High whiteness, ultra-fine grades for controlled-release and foliar products."
        ]
      }
    ]
  },
  {
    name: "Ceramic and Glass",
    description: "Calcium carbonate is a vital raw material in the ceramic and glass industries, used as a fluxing agent to reduce melting temperatures and improve product strength, transparency, and finish.",
    image: "https://images.pexels.com/photos/8903705/pexels-photo-8903705.jpeg",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – Suitable for ceramic bodies and glazes with good thermal stability.",
          "UNIT – Best-suited grade for general ceramic and tile production."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "VT100C, VT200C – Fine particle size for improved glass clarity and uniform ceramic surfaces.",
          "BC10T, BC20T – High-purity grades ideal for premium ceramic ware and specialty glass applications."
        ]
      }
    ]
  },
  {
    name: "Cosmetics",
    description: "Calcium carbonate is used in the cosmetics industry for its absorbent, mattifying, and bulking properties. It enhances texture, spreadability, and skin feel in products like face powders, foundations, and skin care formulations.",
    image: "https://images.pexels.com/photos/15984939/pexels-photo-15984939.jpeg",
    grades: [
      {
        category: "Indian Ground - Uncoated",
        items: [
          "UNIT – Fine, smooth grade suitable for cosmetic powders and creams.",
          "UNIT – Economical option for general personal care formulations."
        ]
      },
      {
        category: "Imported Ground - Uncoated (Cosmetics Grade)",
        items: [
          "BC10T, BC20T – Ultra-fine, high-purity grades for premium skin care applications with excellent softness and whiteness."
        ]
      }
    ]
  },
  {
    name: "Soap & Detergents",
    description: "In the soap and detergent industry, calcium carbonate is used as a functional filler to control cost while maintaining effective cleaning properties and structural integrity of the final product.",
    image: "https://images.pexels.com/photos/3177257/pexels-photo-3177257.jpeg",
    grades: [
      {
        category: "Indian Ground - Coated & Uncoated",
        items: [
          "UNIT – Good whiteness and fine particle size for smooth bar textures.",
          "UNIT – Cost-effective filler for detergent powders and bars."
        ]
      },
      {
        category: "Imported Ground - Coated & Uncoated",
        items: [
          "BC10T, BC20T – High-purity white grades for premium detergent applications."
        ]
      }
    ]
  },
  {
    name: "Concrete & General",
    description: "Calcium carbonate is used in the construction industry to improve the properties of concrete, mortar, and other building materials, providing better finish, workability, and durability.",
    image: "https://images.pexels.com/photos/37121407/pexels-photo-37121407.jpeg",
    grades: [
      {
        category: "Indian Ground - Uncoated",
        items: [
          "UNIT – Coarse to fine grades for diverse construction applications.",
          "UNIT – Reliable filler for general-purpose concrete and mortar blending."
        ]
      },
      {
        category: "Imported Ground - Uncoated",
        items: [
          "BC10T, BC20T – High-purity industrial grades for specialized high-strength concrete."
        ]
      }
    ]
  },
  {
    name: "Petroleum & Oil Drilling",
    description: "Specially engineered grades of calcium carbonate are used in the oil and gas industry as weighting agents and bridging materials in drilling fluids to prevent fluid loss and stabilize wellbores.",
    image: "https://images.pexels.com/photos/16852979/pexels-photo-16852979.jpeg",
    grades: [
      {
        category: "Indian Ground - Uncoated",
        items: [
          "UNIT – Acid-soluble grades for non-damaging drilling operations.",
          "UNIT – Standard weighting agent for oilfield applications."
        ]
      },
      {
        category: "Imported Ground - Uncoated",
        items: [
          "VT100C – Precision particle size distribution for optimized wellbore bridging.",
          "BC10T, BC20T – Ultra-pure grades for sensitive offshore and deep-well drilling."
        ]
      }
    ]
  },
];

const Industries = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-700/5 rounded-full blur-[120px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] -ml-40 -mb-40"></div>
        <div className="absolute top-1/2 left-0 w-px h-full bg-gradient-to-b from-transparent via-red-700/10 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-full bg-slate-200/50"></div>
        
        {/* Subtle Decorative Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', 
            backgroundSize: '100px 100px' 
          }}
        ></div>
      </div>

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/40 to-transparent"></div>
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', 
              backgroundSize: '40px 40px' 
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 font-bold uppercase tracking-[0.4em] text-sm mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter"
          >
            INDUSTRIAL <span className="text-red-700">APPLICATIONS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Honey Chemicals provides high-purity minerals engineered for precision performance across a vast range of global industries.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-700/5 -skew-x-12 transform translate-x-20"></div>
      </section>

      {/* List Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} ${i % 2 === 1 ? 'bg-white' : 'bg-slate-900/5 backdrop-blur-sm'} rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 items-stretch min-h-[500px] relative group`}
            >
              {/* Decorative Accent Line */}
              <div className={`absolute top-0 ${i % 2 === 0 ? 'left-0' : 'right-0'} w-2 h-full bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Image Column */}
              <div className="lg:w-1/2 relative min-h-[350px]">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:rotate-2 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden"></div>
                <div className="absolute bottom-10 left-10 lg:hidden">
                   <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter">{industry.name}</h3>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <div className="hidden lg:block mb-6">
                  <h3 className="text-red-700 text-4xl font-black uppercase italic tracking-tighter">{industry.name}</h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-10 text-xl">
                  {industry.description}
                </p>

                <div className="space-y-8">
                  <h4 className="text-slate-900 font-black uppercase tracking-widest text-sm border-b-2 border-red-700 inline-block pb-1">
                    Suggested Grades
                  </h4>
                  
                  {industry.grades.map((gradeGroup, idx) => (
                    <div key={idx} className="space-y-3">
                      <p className="text-lg font-bold text-slate-800 flex items-center">
                        <span className="w-6 h-6 rounded-lg bg-red-50 text-red-700 flex items-center justify-center text-xs mr-3 font-black">
                          {idx === 0 ? 'A' : 'B'}
                        </span>
                        {gradeGroup.category}
                      </p>
                      <ul className="space-y-2 ml-9">
                        {gradeGroup.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-slate-500 text-base flex items-start">
                            <span className="text-red-700 mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-700 shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-950 rounded-[3rem] p-10 md:p-20 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-700/20 blur-[120px] rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 mb-10 md:mb-0 md:mr-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-tight italic tracking-tighter">Ready for precise <span className="text-red-700">Mineral Solutions?</span></h2>
              <p className="text-slate-400 text-xl max-w-xl">
                Partner with Honey Chemicals for laboratory-tested, high-purity calcite and dolomite refined for your specific industrial needs.
              </p>
            </div>
            <a 
              href="/#contact" 
              className="relative z-10 bg-red-700 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-red-800 transition-all whitespace-nowrap shadow-xl"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
