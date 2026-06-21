import React from "react";
import { motion } from "motion/react";
import { Factory, Cpu, Zap, Truck } from "lucide-react";
import { IndustrialWatermark } from "../components/IndustrialWatermark";

const Infrastructure = () => {
  const assets = [
    { name: "Micro-Grinding", icon: Cpu, desc: "High-speed vertical roller mills for ultrafine micronized powder production." },
    { name: "Power Backup", icon: Zap, desc: "Uninterrupted 24/7 power supply ensuring zero production downtime." },
    { name: "Logistics", icon: Truck, desc: "Dedicated fleet and strategic highway access for pan-India delivery." },
    { name: "Processing", icon: Factory, desc: "Computerized crushing and sorting units for raw material purity." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-red-600 font-bold uppercase tracking-[0.4em] text-sm mb-4">Operations</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6">INFRA <span className="text-red-700">STRUCTURE</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Our Palanpur facility is a marvel of modern industrial engineering, combining massive processing capacity with surgical precision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        {/* Subtle Industrial Watermark Background */}
        <IndustrialWatermark className="absolute bottom-0 right-[2%] w-[45%] h-[80%] pointer-events-none opacity-[0.05] select-none" />
        <IndustrialWatermark className="absolute top-0 left-[2%] w-[35%] h-[60%] pointer-events-none opacity-[0.03] scale-x-[-1] select-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1MeIbaXiFaA3XTe6J3X8ngpItr89UPGIm" 
                alt="Honey Chemicals Processing Unit - Modern Facility" 
                className="rounded-3xl shadow-2xl transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-black text-slate-900 mb-6">MODERN PROCESSING UNITS</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg font-medium">
                Honey Chemicals operates multiple independent production lines capable of producing various grades of Calcite and Dolomite simultaneously. Our infrastructure is designed for scalability and minimal environmental impact.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <p className="text-4xl font-black text-red-700">5000+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Sq. Meters Facility</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <p className="text-4xl font-black text-red-700">100</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Tons/Day Capacity</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {assets.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-red-200 transition-colors text-center"
              >
                <div className="mx-auto bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                  <a.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase italic">{a.name}</h3>
                <p className="text-slate-500 text-base font-medium">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
