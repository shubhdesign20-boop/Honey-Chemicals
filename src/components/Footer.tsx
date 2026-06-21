import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#1A1A1A] text-white pt-24 pb-8 overflow-hidden font-sans">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-700 z-20 flex justify-around overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-12 h-4 bg-red-800 -mt-1 opacity-20 transform -skew-x-12" />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
      
      {/* Accent Accent Lines */}
      <div className="absolute top-0 left-1/4 w-px h-12 bg-gradient-to-b from-red-600 to-transparent z-10 opacity-30"></div>
      <div className="absolute top-0 right-1/4 w-px h-12 bg-gradient-to-b from-red-600 to-transparent z-10 opacity-30"></div>
      <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-red-600 to-transparent z-10 opacity-20"></div>
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div 
          className="absolute right-0 bottom-0 w-[60%] h-full bg-gradient-to-tl from-white/20 to-transparent"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />
        <div 
          className="absolute right-[20%] bottom-0 w-[40%] h-[70%] bg-white/10"
          style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20">
          {/* Brand Info */}
          <div>
            <Logo light className="scale-90 origin-left mb-10" />
            <p className="text-slate-400 text-base leading-relaxed max-w-xs font-medium">
              Honey Chemicals is a leading producer of premier industrial minerals, dedicated to quality and excellence in every particle.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-white/40">Products</h4>
            <div className="flex flex-col space-y-4">
              <Link to="/product/calcite" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">Calcite Powder</Link>
              <Link to="/product/dolomite" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">WHITE Dolomite Powder</Link>
              <Link to="/product/grey-dolomite" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">Grey Dolomite Powder</Link>
              <Link to="/product/limestone" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">Limestone Powder</Link>
              <Link to="/product/calcium-carbonate" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">Calcium Carbonate</Link>
              <Link to="/product/marble-chips" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">Marble Chips</Link>
              <Link to="/product/marbles-lumps" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">Marbles Lumps</Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-white/40">Navigation</h4>
            <div className="flex flex-col space-y-5">
              <Link to="/about" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">About Us</Link>
              <Link to="/industries" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">Industries</Link>
              <Link to="/quality" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">Quality Control</Link>
              <Link to="/contact" className="text-slate-300 hover:text-red-500 transition-colors text-base font-semibold tracking-wide">Contact Us</Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-white/40">Contact</h4>
            <div className="flex flex-col space-y-4 text-slate-300 text-base font-semibold leading-relaxed max-w-[280px]">
              <p>Survey No.174NA/P/1, Gram Panchayat Milkat No.1506, Umiyanagar road, Badarpura(Kalusana), Ta- Palanpur, Dist - B.K. 385520, India</p>
              <div className="flex flex-col space-y-1">
                <p className="text-white font-bold text-lg">Dilip Patel: +91 70169 66322</p>
                <p className="text-white font-bold text-lg">Bharat Patel: +91 99048 24758</p>
              </div>
              <p className="text-red-500 underline underline-offset-4 decoration-2">honeychemicals2025@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Line */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-red-600 via-white/5 to-transparent"></div>
          <div className="absolute top-0 left-0 w-48 h-1 bg-red-700"></div>
          <div className="absolute top-0 left-56 w-12 h-1 bg-red-700 opacity-40"></div>
          <div className="absolute top-0 left-72 w-4 h-1 bg-red-700 opacity-20"></div>
          <div className="border-t border-white/10 pt-10 pb-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-slate-400">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
            © 2026 Honey Chemicals Pvt Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-[11px] font-bold uppercase tracking-widest opacity-60">Follow us</span>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} strokeWidth={2.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={18} strokeWidth={2.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={18} strokeWidth={2.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={18} strokeWidth={2.5} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Line */}
        <div className="text-right">
          <p className="text-[10px] items-center space-x-1 inline-flex opacity-50 font-bold tracking-tight">
            <span>Web Design by</span>
            <a 
              href="https://wa.me/918469608713" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-red-500 cursor-pointer transition-colors font-bold"
            >
              raghav digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
