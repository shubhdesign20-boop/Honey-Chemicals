import React from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowDown, 
  Settings, 
  Search, 
  Truck, 
  Database, 
  Layers, 
  ShieldCheck,
  Zap
} from "lucide-react";

const PROCESS_STEPS = [
  { 
    title: "Raw Material Selection", 
    desc: "Careful selection from select mines for purity and chemical composition.",
    icon: Database,
    color: "bg-blue-50 text-blue-600"
  },
  { 
    title: "Crushing", 
    desc: "Primary and secondary crushing to reduce large ores into manageable sizes.",
    icon: Layers,
    color: "bg-slate-50 text-slate-600"
  },
  { 
    title: "Mixing & Pre-Processing", 
    desc: "Strategic blending of raw minerals to ensure uniform output quality.",
    icon: Settings,
    color: "bg-amber-50 text-amber-600"
  },
  { 
    title: "Grinding at Unit", 
    desc: "Advanced micro-grinding in specialized milling units for ultra-fine particle sizes.",
    icon: Zap,
    color: "bg-red-50 text-red-600"
  },
  { 
    title: "Multi-Stage Testing", 
    desc: "Rigorous internal testing for consistency and particle size distribution (PSD).",
    icon: Search,
    color: "bg-purple-50 text-purple-600"
  },
  { 
    title: "Quality Assurance", 
    desc: "Final verification against international standards and customer specifications.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600"
  },
  { 
    title: "Dispatch", 
    desc: "Secure packaging and optimized logistics for timely nationwide delivery.",
    icon: Truck,
    color: "bg-slate-900 text-white"
  },
];

const GrindingProcess = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Background Decorative Lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-700/5 blur-3xl -tr-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 font-bold uppercase tracking-[0.4em] text-sm mb-4"
          >
            Manufacturing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter"
          >
            GRINDING <span className="text-red-700">OPERATIONS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            One of India's leading manufacturers of high-quality Calcium Carbonate, trusted for precision, purity, and unmatched production capacity.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-700/5 -skew-x-12 transform translate-x-20"></div>
      </section>

      {/* Main Process Content */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Interactive Vertical Flowchart */}
            <div>
              <div className="relative">
                {/* Connecting Line - restricted to the process list */}
                <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-slate-200 hidden md:block"></div>
                
                <div className="space-y-10">
                  {PROCESS_STEPS.map((step, i) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start group"
                    >
                      <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${step.color} transition-transform group-hover:scale-110`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div className="ml-8 pt-2">
                        <h3 className="text-xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter group-hover:text-red-700 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 text-base leading-relaxed max-w-md">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Callout Cards - Placed outside the relative container to avoid line overlap */}
              <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 p-8 rounded-3xl shadow-2xl text-white border border-white/5 h-full"
                >
                  <p className="font-bold text-white text-sm mb-3 uppercase tracking-widest italic">Mineral Excellence</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    We process various industrial minerals to cater to the specific requirements of our customers.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-2xl border border-red-50 h-full"
                >
                  <div className="w-12 h-12 bg-red-700 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <p className="font-bold text-slate-900 text-sm mb-3 uppercase italic">Process Control</p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Real-time monitoring systems ensure product uniformity at every stage of the grinding process.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right: Technical Details & Stats */}
            <div className="space-y-12">
              <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-slate-100">
                <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter border-b-2 border-red-700 inline-block pb-1">
                  MINE TO MARKET LEADERSHIP
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                  <p className="text-xl">
                    Honey Chemicals is specialized in processing a wide range of industrial minerals, catering to the specific requirements of our customers across diverse sectors. Our raw materials are carefully sourced from select mines, ensuring consistency, purity, and the highest industry standards.
                  </p>
                  <div className="space-y-8 mt-12">
                    <div className="flex gap-6">
                      <div className="w-1 rounded-full bg-red-700 shrink-0"></div>
                      <div>
                        <p className="font-black text-slate-900 uppercase text-lg mb-2">1. Raw Material Characterization</p>
                        <p className="text-base">Careful selection and testing of ore for purity, particle size, and chemical composition.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-1 rounded-full bg-red-700 shrink-0"></div>
                      <div>
                        <p className="font-black text-slate-900 uppercase text-lg mb-2">2. Process Control</p>
                        <p className="text-base">Advanced crushing, grinding, and mixing processes with real-time monitoring to maintain product uniformity.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-1 rounded-full bg-red-700 shrink-0"></div>
                      <div>
                        <p className="font-black text-slate-900 uppercase text-lg mb-2">3. Quality Assurance & Dispatch</p>
                        <p className="text-base">Rigorous testing, precise packaging, and secure delivery to ensure the final product meets every specification.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capacity Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-10 bg-red-700 rounded-[2.5rem] text-white shadow-xl">
                  <p className="text-5xl font-black mb-2 italic">5</p>
                  <p className="font-bold text-sm uppercase tracking-widest opacity-80">In-house Production Plants</p>
                </div>
                <div className="p-10 bg-slate-950 rounded-[2.5rem] text-white shadow-xl">
                  <p className="text-5xl font-black mb-2 italic">8</p>
                  <p className="font-bold text-sm uppercase tracking-widest opacity-80">Specialized Units (Job-work)</p>
                </div>
              </div>

              <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-md">
                 <p className="text-slate-500 italic text-lg leading-relaxed">
                   "Our integrated manufacturing setup enables us to deliver bulk orders while ensuring quality, efficiency, and timely supply. We are committed to excellence from mine to market."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Image Banner */}
      <section className="bg-slate-900 py-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
           <div className="md:w-1/2 p-16 md:p-24 flex flex-col justify-center text-white">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 max-w-md">Precision in every <span className="text-red-700">Micron.</span></h2>
              <p className="text-slate-400 leading-relaxed mb-10">
                Our state-of-the-art grinding units are capable of achieving particle sizes tailored to the most demanding industrial specifications.
              </p>
              <div className="mt-4">
                 <button className="px-10 py-5 bg-red-700 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-red-800 transition-all shadow-xl">Explore Infrastructure</button>
              </div>
           </div>
           <div className="md:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Grinding factory"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/20"></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default GrindingProcess;
