import React from "react";
import { motion } from "motion/react";
import { 
  Truck, 
  Diamond, 
  Beaker, 
  Package, 
  CheckCircle2, 
  Factory, 
  Handshake, 
  Users, 
  Award,
  Zap,
  ChevronRight,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { Marquee } from "../components/Marquee";

const REASONS = [
  { title: "Timely Deliveries", icon: Truck, desc: "Ensuring your production never stops with on-time logistics." },
  { title: "Quality Products", icon: Diamond, desc: "Premium grade minerals processed with state-of-the-art tech." },
  { title: "Lab Testing", icon: Beaker, desc: "Rigorous quality checks for every batch before dispatch." },
  { title: "Good Packaging", icon: Package, desc: "Moisture-proof packing to preserve mineral purity." },
  { title: "Buyer Satisfaction", icon: CheckCircle2, desc: "100% commitment to meeting client specifications." },
  { title: "Strong Infrastructure", icon: Factory, desc: "Advanced processing units in Palanpur, Gujarat." },
  { title: "Reasonable Prices", icon: Handshake, desc: "Competitive pricing without compromising on quality." },
  { title: "Talented Team", icon: Users, desc: "Expert engineers and experienced management board." },
  { title: "Professional Works", icon: Award, desc: "Strict adherence to safety standards and business ethics." },
];

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Background Decorative Lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 font-bold uppercase tracking-[0.4em] text-sm mb-4"
          >
            The Legacy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 uppercase"
          >
            ABOUT <span className="text-red-700">HONEY CHEMICALS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl leading-relaxed"
          >
            At Honey Chemicals, we stand at the intersection of industrial heritage and technical innovation. 
            As a premier manufacturer of premium ultrafine minerals, our reputation is built on the 
            pillars of consistency, chemical purity, and engineering excellence.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-700/5 -skew-x-12 transform translate-x-20"></div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-red-700 font-bold uppercase tracking-[0.4em] text-sm mb-4">Foundation</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase italic">
                Our Core <br /><span className="text-red-700">Philosophy</span>
              </h3>
              <p className="text-slate-600 text-xl font-medium mb-8 leading-relaxed italic">
                "We don’t just supply minerals; we provide the foundational elements that empower global industries. Our operations are governed by three uncompromising standards."
              </p>
              
              <div className="space-y-8">
                {[
                  { 
                    title: "Technical Superiority", 
                    icon: Zap, 
                    content: "Utilizing advanced micronizing technologies to achieve particle size distributions that meet the most exacting specifications." 
                  },
                  { 
                    title: "Rigorous Quality Assurance", 
                    icon: ShieldCheck, 
                    content: "Every batch undergoes comprehensive laboratory testing to ensure mineralogical stability and performance reliability." 
                  },
                  { 
                    title: "Customer-Centric Engineering", 
                    icon: Users, 
                    content: "We collaborate closely with our partners to deliver tailored mineral solutions that optimize their production efficiency and end-product quality." 
                  }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-slate-900 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all duration-500 shadow-lg">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold uppercase tracking-widest text-base mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-base leading-relaxed">{item.content}</p>
                    </div>
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
              {/* Decorative Geometric Shapes */}
              <div className="absolute -top-20 -right-20 w-80 h-80 border-[32px] border-slate-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-red-700/20 rounded-full animate-pulse"></div>
              
              <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Diamond className="w-48 h-48" />
                </div>
                <h4 className="text-slate-900 font-black text-2xl uppercase italic mb-6 border-b-4 border-red-700 w-fit pb-2">
                  Global Standards, <br />Local Integrity
                </h4>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  With a deep-rooted commitment to sustainable sourcing and operational transparency, Honey Chemicals has become a trusted name for high-performance industrial minerals. Our "Established Excellence" is not just a slogan—it is the benchmark we meet with every shipment.
                </p>
                <div className="bg-red-700 p-8 rounded-3xl text-white">
                  <p className="text-3xl font-black italic mb-2">"Driven by science, defined by quality."</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">The Honey Chemicals Benchmark</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Comprehensive Value Proposition */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        {/* Advanced Decorative Accents */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-about-v3" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(196,30,58,0.06)" strokeWidth="1" />
                <rect width="4" height="1" x="-2" y="-0.5" fill="rgba(185,28,28,0.3)" />
                <rect width="1" height="4" x="-0.5" y="-2" fill="rgba(185,28,28,0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-about-v3)" />
          </svg>
        </div>
        
        {/* Circular Technical Accents */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] border border-red-700/[0.03] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] border border-red-700/[0.02] rounded-full pointer-events-none"></div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-red-600/10 via-transparent to-red-600/10 z-0"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic leading-none mb-6"
            >
              WHY <span className="text-red-700">HONEY CHEMICAL?</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 100 }}
              viewport={{ once: true }}
              className="h-1.5 bg-red-700 mx-auto rounded-full mb-8"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-600 max-w-2xl mx-auto font-semibold text-lg leading-relaxed italic"
            >
              Our efficient client service and commitment to technical transparency have made us a leader in the global mineral supply market.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Quality Assurance", 
                icon: ShieldCheck, 
                desc: "Rigorous batch testing via our own offices in Vietnam and Egypt ensures absolute purity and particle size precision before dispatch."
              },
              { 
                title: "Global Sourcing", 
                icon: Globe, 
                desc: "Established relationships with world-renowned mines allow us to supply premium grades of Calcium Carbonate and Dolomite consistently."
              },
              { 
                title: "Technical Customization", 
                icon: Factory, 
                desc: "We offer tailored solutions, from specialized stearic acid coatings to unique mesh gradations, specifically for your industry's formulations."
              },
              { 
                title: "Efficient Logistics", 
                icon: Zap, 
                desc: "Our robust supply chain guarantees timely delivery across India, minimizing downtime and supporting seamless production cycles."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-start group hover:shadow-2xl hover:border-red-600/20 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all duration-500 shadow-lg mr-8">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="space-y-2 relative">
                  {item.title === "Quality Assurance" && (
                    <span className="absolute -top-6 right-0 bg-red-700 text-white text-[8px] font-black px-2 py-0.5 rounded-full tracking-[0.2em]">PREMIUM</span>
                  )}
                  <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-base font-bold leading-relaxed italic">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {REASONS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 pb-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-visible"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-red-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 text-red-600 flex items-center justify-center relative z-10 group-hover:bg-red-700 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100/50">
                    {item.title === "Quality Products" && (
                      <span className="absolute -top-3 -right-3 bg-slate-900 text-white text-[8px] px-2 py-1 rounded-full font-black tracking-widest z-20 border-2 border-white shadow-lg">PREMIUM</span>
                    )}
                    <item.icon className="w-10 h-10" strokeWidth={1.2} />
                  </div>
                </div>
                <h4 className="text-base font-black uppercase text-slate-900 tracking-widest leading-tight italic font-sans group-hover:text-red-700 transition-colors">
                  {item.title}
                </h4>
                <div className="w-8 h-1 bg-red-700 mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Quick View */}
      <section className="py-24 bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { title: "Innovation", icon: Award },
              { title: "Credibility", icon: ShieldCheck },
              { title: "Commitment", icon: Factory },
              { title: "Excellence", icon: Globe },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-white/10 p-6 rounded-full inline-block mb-6">
                  <v.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-3 italic uppercase">{v.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Marquee />
    </div>
  );
};

export default About;
