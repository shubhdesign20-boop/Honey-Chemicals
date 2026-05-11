import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Beaker, Award, CheckCircle } from "lucide-react";

const QualityControl = () => {
  const parameters = [
    { name: "Purity Check", icon: Beaker, desc: "Rigorous testing for CaCO3 and MgO content using top-grade reagents." },
    { name: "Standards", icon: Award, desc: "Adherence to ISO 9001:2015 and international ASTM mineral standards." },
    { name: "Safety", icon: ShieldCheck, desc: "Environmentally safe extraction and processing protocols." },
    { name: "Consistency", icon: CheckCircle, desc: "Batch-to-batch color and particle size uniformity reports." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Background Decorative Lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-red-600 font-bold uppercase tracking-[0.4em] text-sm mb-4">Operations</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6">QUALITY <span className="text-red-700">CONTROL</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              At Honey Chemicals, quality is not a destination but a continuous journey. Our state-of-the-at laboratory ensures every micro-gram meets global industrial requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-6">UNCOMPROMISED PRECISION</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg font-medium">
                Our quality control unit is equipped with advanced analysis tools including UV Spectrophotometers and Particle Size Analyzers (Mastersizer). We monitor raw materials from the crushing stage until final bagging.
              </p>
              <div className="space-y-4">
                {["In-house R&D Lab", "Batch-wise Analysis Reports", "Custom Grade Development", "24/7 Quality Audits"].map((item) => (
                  <div key={item} className="flex items-center space-x-3 text-slate-700 font-bold">
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://assets.spe.org/dims4/default/8842d65/2147483647/strip/true/crop/1024x576+0+96/resize/1200x675!/quality/90/?url=http%3A%2F%2Fspe-brightspot.s3.us-east-2.amazonaws.com%2F7a%2Fb0%2Fa25255b5f3088157e19e479459f6%2Fjpt-2016-08-qualityhero.jpg" 
                alt="Laboratory testing" 
                className="rounded-3xl shadow-2xl transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-700 p-8 rounded-2xl text-white shadow-xl">
                <p className="text-4xl font-black">99.9%</p>
                <p className="text-xs uppercase font-bold tracking-widest opacity-80">Consistency Rate</p>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {parameters.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-red-200 transition-colors"
              >
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-red-700 mb-6">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase italic">{p.name}</h3>
                <p className="text-slate-500 text-base">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityControl;
