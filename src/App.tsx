/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import QualityControl from "./pages/QualityControl";
import Infrastructure from "./pages/Infrastructure";
import Packaging from "./pages/Packaging";
import GrindingProcess from "./pages/GrindingProcess";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Gallery from "./pages/Gallery";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased bg-white selection:bg-red-700 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/operations/quality-control" element={<QualityControl />} />
            <Route path="/operations/infrastructure" element={<Infrastructure />} />
            <Route path="/operations/grinding" element={<GrindingProcess />} />
            <Route path="/operations/packaging" element={<Packaging />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
