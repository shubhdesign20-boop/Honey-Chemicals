import React from "react";
import { motion } from "motion/react";
import { Package, Shield, Layers, Scale } from "lucide-react";

const Packaging = () => {
  const options = [
    { name: "HDPE Bags", icon: Package, desc: "Standard 25kg & 50kg moisture-proof HDPE bags for long-term storage." },
    { name: "Jumbo Bags", icon: Layers, desc: "1.0 to 1.5 Metric Ton jumbo bags with lifting loops for industrial scale use." },
    { name: "Precision Weight", icon: Scale, desc: "Computerized automatic bagging machines ensuring ±20g accuracy." },
    { name: "Protection", icon: Shield, desc: "Inner liners and shrink wrapping available for export-grade protection." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-red-600 font-bold uppercase tracking-[0.4em] text-sm mb-4">Operations</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6">PACKA <span className="text-red-700">GING</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              We understand that mineral purity must be protected until it reaches your production floor. Our packaging solutions prevent moisture and contamination.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <h2 className="text-3xl font-black text-slate-900 mb-6">STRENGTH & PROTECTION</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg font-medium">
                Our packaging line is fully automated to ensure maximum hygiene and minimal human contact. We offer customizable branding options for our B2B partners and ensure all materials are recyclable.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Moisture Control", desc: "Special LDPE liners for hygroscopic minerals." },
                  { title: "Custom Branding", desc: "Private labeling available for global exporters." },
                  { title: "Palletization", desc: "Sturdy wooden/plastic pallets for overseas transit." },
                ].map((item) => (
                  <div key={item.title} className="p-6 bg-slate-50 rounded-[2rem] border-l-4 border-red-700">
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 w-full h-full flex justify-center"
            >
              <div className="w-full">
                <img 
                  src="https://lh3.googleusercontent.com/d/1dnx_WgI_bu-NbpEcQ8AzkOSGVlJ_5QxK" 
                  alt="Mineral packaging" 
                  className="rounded-3xl shadow-2xl transition-all duration-700 w-full hover:scale-[1.01] cursor-zoom-in"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {options.map((o, i) => (
              <motion.div
                key={o.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-900 text-white rounded-3xl hover:bg-red-700 transition-colors"
              >
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <o.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black mb-3 uppercase italic">{o.name}</h3>
                <p className="text-slate-400 text-base">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packaging;
