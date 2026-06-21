import React from "react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Globe, 
  Award,
  ThumbsUp,
  Factory,
  Beaker,
  ArrowRight,
  Diamond,
  Truck,
  Zap,
  Package,
} from "lucide-react";
import { motion, animate } from "motion/react";
import { IndustrialWatermark } from "../components/IndustrialWatermark";

const StatCounter = ({ value, suffix = "+" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const controls = animate(0, value, { 
      duration: 2, 
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    });
    return controls.stop;
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

const PRODUCTS = [
  {
    id: "calcite",
    name: "CALCITE POWDER",
    isPremium: true,
    description: "Naturally occurring form of CaCO3, valued for its brightness and chemical purity in plastics, paints, and rubber.",
    image: "https://lh3.googleusercontent.com/d/1Dj9UxgEnULT--caQA85kMOexZqzHOS8C",
    specs: ["CaCO3: 97 ± 1%", "CaO: 55 ± 0.5%", "pH Value: 8.5"]
  },
  {
    id: "dolomite",
    name: "WHITE DOLOMITE POWDER",
    description: "Sourced from high-quality deposits, processed for optimal magnesium content and thermal stability across sectors.",
    image: "https://lh3.googleusercontent.com/d/1i9kT8A62hrPNmS2Nf6UBFZTwBCugNQyN",
    specs: ["Brightness: 96-96.5", "SiO2: <2.50%", "High MgCO3 Pure"]
  },
  {
    id: "grey-dolomite",
    name: "GREY DOLOMITE POWDER",
    description: "Industrial-grade raw grey dolomite powder high in magnesium and mechanical durability, optimized for metallurgy, refractories, and agriculture, delivering exceptional cost efficiency.",
    image: "https://lh3.googleusercontent.com/d/1M8__CnPpxU3CV2tKwE0wB3X8HlXvP7Vu",
    specs: ["MgO: 19.5% - 21.0%", "CaO: 29.5% - 31.0%", "Specific Gravity: 2.84"]
  },
  {
    id: "limestone",
    name: "LIMESTONE POWDER",
    description: "Meticulously processed high-grade sedimentary mineral high in CaCO3, ideal for cement production, environmental buffering, and animal feed stability.",
    image: "https://lh3.googleusercontent.com/d/1p8PEDBWWaw78kwiLaEClPDnPc2aZQJTO",
    specs: ["Highly Reactive", "High Calcium", "Consistent Sizing"]
  },
  {
    id: "calcium-carbonate",
    name: "CALCIUM CARBONATE",
    description: "Premium industrial-grade calcium carbonate of unmatched crystalline purity, ideal for plastics compounding, masterbatches, paper, and advanced coatings.",
    image: "https://lh3.googleusercontent.com/d/15cPGXC3BUAWXtBX7HjaF5PGm9HoZr7G_",
    specs: ["CaCO3: > 98.2%", "Whiteness: 96.5% - 98%", "Low Silica Content"]
  },
  {
    id: "marble-chips",
    name: "MARBLE CHIPS",
    isPremium: true,
    description: "Premium white crushed marble chips of high brightness and uniform fractions, perfect for terrazzo, landscaping and architectural builds.",
    image: "https://lh3.googleusercontent.com/d/1z2iHy-q20jeYskcwc_vatuTrUvaraTND",
    specs: ["Sizing: Sorted Fractions", "CaCO3: 95-99%", "Optimal Durability"]
  },
  {
    id: "marbles-lumps",
    name: "MARBLES LUMPS",
    description: "Premium marble lumps sourced from exclusive mining assets, known for rich texture and high purity.",
    image: "https://lh3.googleusercontent.com/d/1zCtin3DKpPiI1GScGiqv5PyW1PswecnA",
    specs: ["CaCO3: 95-99%", "Crystalline Texture", "High Reserve Capacity"]
  }
];

const INDUSTRIES = [
  { name: "Paper Industries", image: "https://papermart.in/wp-content/uploads/2023/08/indian-paper-industry.jpg" },
  { name: "Paint Industries", image: "https://media.licdn.com/dms/image/v2/C5112AQFGzEM6lSB8Fw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1582864581330?e=2147483647&v=beta&t=4crWdU_IUStQqeU8iLzwaWw62rSAMOOKBphFP4v10oI" },
  { name: "Cattle Feed Industries", image: "https://filesblog.bizvibe.com/wp-content/webp-express/webp-images/uploads/2022/09/animal-feed-manufacturers.jpg.webp" },
  { name: "Filler Industries", image: "https://www.khs.com/fileadmin/user_upload/KHS_Innofill-Can-C-800x566.jpg" },
  { name: "Rubber Industries", image: "https://www.erpabsolute.com/assets/img/rubber_bg.jpg" },
  { name: "PVC Industries", image: "https://www.enggpro.com/blogs/wp-content/uploads/2023/10/pvc-pipes-drinking-water_176124-419.png" },
];

const Home = () => {
  return (
    <div>
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-1 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/13yOjqIfm-CdzyBbU-cia-HF6HkcfxCOo" 
            alt="Honey Chemicals Factory" 
            className="w-full h-full object-cover brightness-40"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 uppercase italic">
              Superior Mineral <br />
              <span className="text-red-700">Solutions</span> <br />
              for Every Industry
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Honey Chemicals specializes in the production and supply of ultra-fine industrial minerals, delivering unmatched technical expertise and precision across India.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/#products" 
                className="px-10 py-5 bg-red-700 hover:bg-red-800 text-white font-bold rounded-full transition-all text-sm uppercase tracking-widest flex items-center justify-center group"
              >
                Our Products
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/#about" 
                className="px-10 py-5 border border-white/30 hover:bg-white/10 text-white font-bold rounded-full transition-all text-sm uppercase tracking-widest flex items-center justify-center"
              >
                Our Legacy
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
      </section>

      <section id="about" className="py-24 bg-white overflow-hidden relative">
        {/* Tech Accents - Enhanced and Extended */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none -mr-48 -mt-48">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#000" d="M100 0 L200 100 L100 200 L0 100 Z" />
            <circle cx="100" cy="100" r="80" stroke="#000" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-0 w-24 h-[500px] border-r border-red-700/10 -translate-y-1/2 pointer-events-none hidden xl:block"></div>
        <div className="absolute top-1/2 right-0 w-24 h-[500px] border-l border-red-700/10 -translate-y-1/2 pointer-events-none hidden xl:block"></div>
        <div className="absolute bottom-20 left-10 w-40 h-1 bg-red-700/10 rounded-full"></div>
        <div className="absolute bottom-24 left-10 w-20 h-1 bg-red-700/20 rounded-full"></div>
        
        {/* Large Ambient Circle */}
        <div className="absolute -left-64 top-1/4 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-[60%]"
            >
              {/* Decorative Circle Backgrounds */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-red-700/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[10px] border-slate-100 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-red-700/[0.03] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/13yOjqIfm-CdzyBbU-cia-HF6HkcfxCOo" 
                  alt="Honey Chemicals Premium Mineral Processing" 
                  className="w-full opacity-90 hover:opacity-100 transition-all duration-700 object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-red-700 p-10 rounded-3xl shadow-xl z-20 text-white hidden xl:block">
                <p className="text-6xl font-black mb-1">15+</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Mining Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[40%]"
            >
              <h2 className="text-red-700 font-bold uppercase tracking-[0.2em] text-[13px] mb-4">Established Excellence</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase italic">
                About Honey Chemicals: <br />
                <span className="text-red-700">A Legacy of Precision</span>
              </h3>
              
              <div className="space-y-6 text-slate-600">
                <p className="text-base leading-relaxed">
                  At Honey Chemicals, we stand at the intersection of industrial heritage and technical innovation. As a premier manufacturer of premium ultrafine minerals, our reputation is built on the pillars of consistency, chemical purity, and engineering excellence.
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-4 flex items-center">
                    <div className="w-8 h-[2px] bg-red-700 mr-2"></div>
                    Our Core Philosophy
                  </h4>
                  <p className="text-base font-medium italic mb-5">
                    We don’t just supply minerals; we provide the foundational elements that empower global industries. Our operations are governed by three uncompromising standards:
                  </p>
                  
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="bg-red-50 p-2.5 rounded-lg text-red-700 shrink-0 h-fit">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-slate-900 font-bold text-base block mb-1">Technical Superiority</span>
                        <p className="text-sm leading-relaxed">Utilizing advanced micronizing technologies to achieve particle size distributions that meet the most exacting specifications.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="bg-red-50 p-2.5 rounded-lg text-red-700 shrink-0 h-fit">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-slate-900 font-bold text-base block mb-1">Rigorous Quality Assurance</span>
                        <p className="text-sm leading-relaxed">Every batch undergoes comprehensive laboratory testing to ensure mineralogical stability and performance reliability.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="bg-red-50 p-2.5 rounded-lg text-red-700 shrink-0 h-fit">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-slate-900 font-bold text-base block mb-1">Customer-Centric Engineering</span>
                        <p className="text-sm leading-relaxed">We collaborate closely with our partners to deliver tailored mineral solutions that optimize their production efficiency and end-product quality.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-3">Global Standards, Local Integrity</h4>
                  <p className="text-base leading-relaxed">
                    With a deep-rooted commitment to sustainable sourcing and operational transparency, Honey Chemicals has become a trusted name. Our "Established Excellence" is not just a slogan—it is the benchmark we meet with every shipment.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Diamond className="w-12 h-12" />
                  </div>
                  <p className="text-red-700 font-black italic text-xl mb-2 leading-tight">
                    "Driven by science, defined by quality."
                  </p>
                  <p className="text-sm font-bold text-slate-500">
                    Honey Chemicals continues to lead the way in mineral processing, ensuring that our clients stay ahead.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Stats Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-red-600 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-950 rounded-full blur-[120px]"
        />

        {/* Industrial Watermark Background */}
        <IndustrialWatermark className="absolute bottom-0 right-[5%] w-[45%] h-[90%] pointer-events-none opacity-[0.06] select-none" />
        <IndustrialWatermark className="absolute top-0 left-[2%] w-[35%] h-[75%] pointer-events-none opacity-[0.04] scale-x-[-1] select-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "States Explored To", value: 7, icon: Globe },
              { label: "Satisfied Clients", value: 75, icon: ThumbsUp },
              { label: "Years of Experience", value: 11, icon: Award },
              { label: "Dedicated Staff", value: 20, icon: Users },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white border-2 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group transition-all duration-500 ${
                  idx === 0 ? "border-red-600/20" : "border-slate-50"
                } hover:border-red-600/40 hover:shadow-2xl hover:shadow-red-900/5`}
              >
                <div className="mb-8 text-red-600 transition-transform duration-500 group-hover:scale-110">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div 
                  className="text-6xl md:text-7xl font-bold tracking-tighter mb-4"
                  style={{ WebkitTextStroke: "2px #94a3b8", color: "transparent" }}
                >
                  <StatCounter value={stat.value} />
                </div>
                <div className="w-full h-px bg-slate-100 my-6" />
                <div className="text-xs font-black text-slate-600 uppercase tracking-[0.2em] leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(196,30,58,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(196,30,58,0.02) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-[#1e3a5f]"
            >
              Diverse Products, Unmatched Quality
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md transition-transform duration-500 group-hover:-translate-y-2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <Link to={`/product/${product.id}`} className="flex items-center justify-between border-b border-[#0072BB]/30 pb-2 mb-4 group-hover:border-[#BC2E3D] transition-colors">
                  <h3 className="text-lg font-black text-[#1e3a5f] uppercase tracking-wide group-hover:text-red-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-red-700 group-hover:border-red-700 transition-all">
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-24 bg-white relative overflow-hidden">
        {/* Technical Design Accents - Extended to Edges */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-red-700/20 via-red-700/5 to-red-700/20"></div>
          <div className="absolute top-0 left-[5%] w-px h-full bg-gradient-to-b from-transparent via-slate-100 to-transparent"></div>
          <div className="absolute top-0 right-[5%] w-px h-full bg-gradient-to-b from-transparent via-slate-100 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-700/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-[#1e3a5f]"
            >
              Industries We Serve
            </motion.h2>
          </div>

          <div className="relative">
            <motion.div 
              animate={{ 
                x: [0, -100 * (INDUSTRIES.length)] 
              }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-6"
            >
              {[...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
                <div
                  key={`${industry.name}-${i}`}
                  className="relative flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-4 bottom-6 bg-white/95 backdrop-blur-sm rounded-xl py-4 px-2 shadow-xl border border-slate-100 transform transition-transform duration-500 group-hover:-translate-y-2 text-center">
                    <h3 className="text-[#1e3a5f] font-bold text-base md:text-lg tracking-tight">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <div className="flex justify-center gap-2 mt-12">
              {[0, 1, 2].map((dot) => (
                <div 
                  key={dot} 
                  className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-[#1e3a5f]' : 'bg-slate-300'}`}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to="/industries" 
                  className="px-10 py-4 bg-[#1e3a5f] text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl hover:shadow-red-700/20 inline-flex items-center group"
                >
                  View All Industries
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        {/* Industrial Accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
        <div className="absolute top-0 left-10 w-px h-full bg-red-600/[0.03]"></div>
        <div className="absolute top-0 right-10 w-px h-full bg-red-600/[0.03]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-red-700 font-bold uppercase tracking-[0.4em] text-sm mb-4"
            >
              Our Advantage
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic leading-none mb-6"
            >
              WHY CHOOSE <span className="text-red-700">HONEY CHEMICALS?</span>
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
              className="text-slate-500 max-w-2xl mx-auto font-semibold text-lg leading-relaxed italic"
            >
              We distinguish ourselves through a relentless commitment to quality, global expertise, and a logistics network that supports seamless production for our clients.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              { 
                title: "Quality Assurance", 
                icon: ShieldCheck, 
                desc: "We conduct rigorous laboratory testing on every batch, evaluating purity, particle size distribution, and chemical properties to ensure absolute consistency.",
                detail: "Our dedicated quality control offices in key mineral hubs like Vietnam and Egypt provide direct oversight of the extraction process."
              },
              { 
                title: "Global Sourcing", 
                icon: Globe, 
                desc: "Honey Chemicals imports minerals from the world's most renowned manufacturers, ensuring access to premium grades of Calcium Carbonate and Dolomite.",
                detail: "Our established international relationships and localized offices enable us to secure the finest crystalline deposits for our technical users."
              },
              { 
                title: "Industrial Customization", 
                icon: Factory, 
                desc: "We recognize the unique technical needs of varied sectors, offering tailored micronized solutions for paints, plastics, rubber, and pharmaceuticals.",
                detail: "From specialized surface coatings to custom mesh gradations, we provide minerals engineered for your specific formulation."
              },
              { 
                title: "Efficient Logistics", 
                icon: Truck, 
                desc: "Our robust supply chain network ensures prompt and reliable delivery across India and international markets, minimizing downtime for your enterprise.",
                detail: "Strategically located processing units near major ports and industrial clusters allow us to manage large-scale bulk distributions with precision."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-2xl hover:border-red-600/20 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-slate-900 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-red-700/40 relative">
                  {item.title === "Quality Assurance" && (
                    <div className="absolute -top-3 -right-3 bg-red-600 text-white p-1 rounded-full border-2 border-white shadow-lg animate-bounce">
                      <Diamond className="w-4 h-4" />
                    </div>
                  )}
                  <item.icon className="w-10 h-10" />
                </div>
                <div className="text-center md:text-left space-y-4 relative">
                  {item.title === "Quality Assurance" && (
                    <span className="absolute -top-6 left-0 text-red-600 font-black text-xs tracking-[0.3em] uppercase">Premium Grade</span>
                  )}
                  <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-bold leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed italic border-l-2 border-red-600/30 pl-4">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-red-700/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white text-xl font-bold uppercase tracking-widest relative z-10"
              >
                Experience the <span className="text-red-600">Honey Chemicals</span> Advantage Today
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 relative z-10"
              >
                <Link to="/contact" className="inline-flex items-center text-xs font-black bg-red-700 text-white px-8 py-3 rounded-full uppercase tracking-tighter hover:bg-white hover:text-red-700 transition-all">
                  Contact Our Technical Team <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12 border-y border-slate-100 overflow-hidden">
        <div className="overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center space-x-20 whitespace-nowrap w-fit"
          >
            {[1, 2].map((group) => (
              <div key={group} className="flex items-center space-x-20 pr-20">
                <span className="text-6xl md:text-8xl font-black text-slate-400 uppercase italic">
                  Quality First • Innovation • Purity • Reliability • HONEY CHEMICALS
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-red-700 text-white skew-y-1 sm:skew-y-2 origin-left">
        <div className="-skew-y-1 sm:-skew-y-2">
          <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { title: "Innovation", icon: Beaker, desc: "R&D dedicated to sustainable and efficient solutions." },
              { title: "Credibility", icon: Award, desc: "Transparent, honest, and hands-on approach to business." },
              { title: "Commitment", icon: Factory, desc: "Building a robust, responsible business for the long run." },
              { title: "Safety", icon: ShieldCheck, desc: "Prioritizing the well-being of our workers and environment." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white/10 p-6 rounded-full mb-6 text-white">
                  <v.icon className="w-8 h-8 group-hover:text-red-500 transition-colors" />
                </div>
                <h4 className="text-2xl font-black mb-3 italic">{v.title}</h4>
                <p className="text-red-100 text-sm leading-relaxed max-w-[200px]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Processing Units Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-red-700 font-bold uppercase tracking-[0.4em] text-sm mb-4">Infrastructure</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                MODERN <span className="text-red-700">PROCESSING UNITS</span>
              </h3>
              <p className="text-slate-600 text-xl mb-8 leading-relaxed">
                Our Palanpur facility houses state-of-the-art vertical roller mills and computerized sorting units. This advanced infrastructure allows us to maintain the highest levels of purity and consistency for our ultrafine micronized minerals.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-900 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Custom Grading</h4>
                    <p className="text-sm text-slate-500">Precision mesh sizes tailored to your industry.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-900 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">High Capacity</h4>
                    <p className="text-sm text-slate-500">Equipped for large-scale industrial bulk orders.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link 
                  to="/infrastructure" 
                  className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-full transition-all text-xs uppercase tracking-widest flex items-center w-fit"
                >
                  Explore Infrastructure <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Halo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-dashed border-red-700/10 rounded-full animate-spin-slow"></div>
              
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src="https://lh3.googleusercontent.com/d/1MeIbaXiFaA3XTe6J3X8ngpItr89UPGIm" 
                  alt="Modern Processing Units" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-700/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
