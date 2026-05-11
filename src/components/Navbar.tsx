import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Mail, Phone, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

const COLORS = {
  primary: "#C41E3A",
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsProductDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const productLinks = [
    { 
      name: "Calcite Powder", 
      href: "/product/calcite",
      subItems: [
        { name: "Calcite Uncoated Calcium Carbonate", href: "/product/calcite-uncoated" },
        { name: "Calcite Coated Calcium Carbonate", href: "/product/calcite-coated" },
      ]
    },
    { 
      name: "Dolomite Powder", 
      href: "/product/dolomite",
      subItems: [
        { name: "Dolomite Uncoated Calcium Carbonate", href: "/product/dolomite-uncoated" },
        { name: "Dolomite Coated Calcium Carbonate", href: "/product/dolomite-coated" },
      ]
    },
    { 
      name: "Indigenous Calcium Carbonate", 
      href: "/product/indigenous-calcium-carbonate",
      subItems: [
        { name: "Indigenous Uncoated Calcium Carbonate", href: "/product/indigenous-uncoated" },
        { name: "Indigenous Coated Calcium Carbonate", href: "/product/indigenous-coated" },
      ]
    },
    { 
      name: "Vietnam Calcium Carbonate", 
      href: "/product/vietnam-calcium-carbonate",
      subItems: [
        { name: "Vietnam Uncoated Calcium Carbonate", href: "/product/vietnam-uncoated" },
        { name: "Vietnam Coated Calcium Carbonate", href: "/product/vietnam-coated" },
      ]
    },
    { 
      name: "Egypt Calcium Carbonate", 
      href: "/product/egypt-calcium-carbonate",
      subItems: [
        { name: "Egypt Uncoated Calcium Carbonate", href: "/product/egypt-uncoated" },
        { name: "Egypt Coated Calcium Carbonate", href: "/product/egypt-coated" },
      ]
    },
    { 
      name: "Malaysia Calcium Carbonate", 
      href: "/product/malaysia-calcium-carbonate",
      subItems: [
        { name: "Malaysia Uncoated Calcium Carbonate", href: "/product/malaysia-uncoated" },
        { name: "Malaysia Coated Calcium Carbonate", href: "/product/malaysia-coated" },
      ]
    },
    { name: "Marbles Lumps", href: "/product/marbles-lumps" },
    { name: "Marble Blocks", href: "/product/marble-blocks" },
  ];

  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isProcessDropdownOpen, setIsProcessDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const processLinks = [
    { name: "Grinding Process", href: "/operations/grinding" },
    { name: "Quality Control", href: "/operations/quality-control" },
    { name: "Infrastructure", href: "/operations/infrastructure" },
    { name: "Packaging", href: "/operations/packaging" },
  ];

  const closeAllMenus = () => {
    setIsProductDropdownOpen(false);
    setIsProcessDropdownOpen(false);
    setActiveSubMenu(null);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`transition-all duration-300 border-b border-white/10 ${isScrolled || !isHome ? "bg-red-800 py-1.5" : "bg-red-700/90 backdrop-blur-sm py-2"}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-1 sm:space-y-0">
            <a href="tel:+917016966322" className="flex items-center hover:text-white/80 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2" />
              +91 70169 66322
            </a>
            <a href="tel:+919904824758" className="flex items-center hover:text-white/80 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2" />
              +91 99048 24758
            </a>
            <a href="mailto:honeychemicals2025@gmail.com" className="flex items-center hover:text-white/80 transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2" />
              honeychemicals2025@gmail.com
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-white/80 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${isScrolled || !isHome ? "bg-white shadow-md py-4" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group cursor-pointer">
          <Logo light={!isScrolled && isHome} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[15px] font-bold uppercase tracking-[0.12em] transition-colors ${
                isScrolled || !isHome ? "text-slate-700 hover:text-red-700" : "text-white hover:text-red-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div className="relative group">
            <button 
              onMouseEnter={() => {
                setIsProcessDropdownOpen(false);
                setIsProductDropdownOpen(true);
              }}
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              className={`text-[15px] font-bold uppercase tracking-[0.12em] flex items-center transition-colors ${
                isScrolled || !isHome ? "text-slate-700 hover:text-red-700" : "text-white hover:text-red-400"
              }`}
            >
              Products <ChevronDown className={`ml-1 w-3 h-3 transition-transform ${isProductDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {isProductDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => {
                    setIsProductDropdownOpen(false);
                    setActiveSubMenu(null);
                  }}
                  className="absolute left-0 mt-3 w-72 bg-white shadow-2xl rounded-xl overflow-hidden py-0 border border-slate-200 z-[100]"
                >
                  {productLinks.map((product) => (
                    <div 
                      key={product.name}
                      className="relative border-b border-slate-100 last:border-0"
                      onMouseEnter={() => product.subItems && setActiveSubMenu(product.name)}
                    >
                      <Link
                        to={product.href}
                        className={`block px-5 py-3 text-[12px] font-bold transition-all uppercase tracking-widest items-center justify-between flex ${
                          activeSubMenu === product.name ? "bg-slate-50 text-red-700" : "text-slate-700 hover:bg-slate-50 hover:text-red-700"
                        }`}
                      >
                        {product.name}
                        {product.subItems && <ChevronRight className="w-3 h-3 opacity-40" />}
                      </Link>

                      {/* Sub-menu Panel */}
                      <AnimatePresence>
                        {product.subItems && activeSubMenu === product.name && (
                          <motion.div 
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="absolute left-full top-0 ml-1 w-80 bg-white shadow-2xl rounded-xl overflow-hidden py-0 border border-slate-200 z-[110] text-left"
                          >
                            <div className="px-5 py-2 bg-slate-50 border-b border-slate-100">
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Varieties</p>
                            </div>
                            {product.subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                className="block px-5 py-3 text-[11px] font-bold text-slate-600 border-b border-slate-50 last:border-0 hover:bg-slate-50 hover:text-red-700 transition-all uppercase tracking-widest"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Process Dropdown */}
          <div className="relative group">
            <button 
              onMouseEnter={() => {
                setIsProductDropdownOpen(false);
                setIsProcessDropdownOpen(true);
              }}
              onClick={() => setIsProcessDropdownOpen(!isProcessDropdownOpen)}
              className={`text-[15px] font-bold uppercase tracking-[0.12em] flex items-center transition-colors ${
                isScrolled || !isHome ? "text-slate-700 hover:text-red-700" : "text-white hover:text-red-400"
              }`}
            >
              Process <ChevronDown className={`ml-1 w-3 h-3 transition-transform ${isProcessDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {isProcessDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setIsProcessDropdownOpen(false)}
                  className="absolute left-0 mt-3 w-56 bg-white shadow-2xl rounded-xl overflow-hidden py-0 border border-slate-200 z-[100]"
                >
                  {processLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.href}
                      className="block px-5 py-3 text-[12px] font-bold text-slate-700 border-b border-slate-100 last:border-0 hover:bg-slate-50 hover:text-red-700 transition-all uppercase tracking-widest"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/industries"
            className={`text-[15px] font-bold uppercase tracking-[0.12em] transition-colors ${
              isScrolled || !isHome ? "text-slate-700 hover:text-red-700" : "text-white hover:text-red-400"
            }`}
          >
            Industries
          </Link>

          <Link
            to="/gallery"
            className={`text-[15px] font-bold uppercase tracking-[0.12em] transition-colors ${
              isScrolled || !isHome ? "text-slate-700 hover:text-red-700" : "text-white hover:text-red-400"
            }`}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className={`text-[15px] font-bold uppercase tracking-[0.12em] transition-colors ${
              isScrolled || !isHome ? "text-slate-700 hover:text-red-700" : "text-white hover:text-red-400"
            }`}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className={`px-6 py-2.5 rounded-full text-[14px] font-bold uppercase tracking-widest transition-all ${
              isScrolled || !isHome 
                ? "bg-red-700 text-white hover:bg-red-800" 
                : "bg-white text-slate-900 hover:bg-slate-100"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled || !isHome ? "text-slate-900" : "text-white"} /> : <Menu className={isScrolled || !isHome ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-white shadow-2xl p-8 z-40 md:hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-bold text-slate-900 uppercase tracking-widest hover:text-red-700"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Products</p>
                <div className="grid grid-cols-1 gap-4">
                  {productLinks.map((product) => (
                    <div key={product.name} className="text-left">
                      <Link
                        to={product.href}
                        className="block text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-red-700 mb-2"
                      >
                        {product.name}
                      </Link>
                      {product.subItems && (
                        <div className="pl-4 border-l-2 border-slate-100 space-y-3 mt-2 mb-4">
                          {product.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-red-700"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                key="industries-mobile"
                to="/industries"
                className="text-lg font-bold text-slate-900 uppercase tracking-widest hover:text-red-700"
              >
                Industries
              </Link>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Process</p>
                {processLinks.map((subLink) => (
                  <Link
                    key={subLink.name}
                    to={subLink.href}
                    className="block text-lg font-bold text-slate-900 uppercase tracking-widest hover:text-red-700 mb-4"
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
              <Link
                key="gallery-mobile"
                to="/gallery"
                className="text-lg font-bold text-slate-900 uppercase tracking-widest hover:text-red-700"
              >
                Gallery
              </Link>
              <Link
                key="contact-mobile"
                to="/contact"
                className="text-lg font-bold text-slate-900 uppercase tracking-widest hover:text-red-700"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-red-700 text-white py-4 rounded-xl font-bold uppercase"
              >
                Get a Quote
              </Link>

              <div className="border-t border-slate-100 pt-6 mt-4 space-y-4">
                <a href="tel:+917016966322" className="flex items-center justify-center text-slate-700 font-bold text-sm">
                  <Phone className="w-4 h-4 mr-2 text-red-700" />
                  +91 70169 66322
                </a>
                <a href="tel:+919904824758" className="flex items-center justify-center text-slate-700 font-bold text-sm">
                  <Phone className="w-4 h-4 mr-2 text-red-700" />
                  +91 99048 24758
                </a>
                <a href="mailto:honeychemicals2025@gmail.com" className="flex items-center justify-center text-slate-700 font-bold text-sm">
                  <Mail className="w-4 h-4 mr-2 text-red-700" />
                  honeychemicals2025@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </header>
  );
};
