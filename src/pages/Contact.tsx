import React, { useState } from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Could not connect to the server. Please check your internet connection.");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #000 1px, transparent 0)', backgroundSize: '40px 40px', opacity: '0.05' }}></div>
        
        {/* Floating Technical Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-700/[0.03] rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-200/40 rounded-full blur-[120px]"></div>
        
        {/* Diagonal Technical Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="20%" x2="100%" y2="80%" stroke="red" strokeWidth="1" />
            <line x1="0" y1="40%" x2="100%" y2="100%" stroke="red" strokeWidth="1" />
            <line x1="20%" y1="0" x2="80%" y2="100%" stroke="red" strokeWidth="1" />
          </svg>
        </div>

        {/* Technical Grid/Lines */}
        <div className="absolute top-[12%] left-0 w-full h-px bg-gradient-to-r from-transparent via-red-700/20 to-transparent"></div>
        <div className="absolute top-[18%] left-0 w-full h-px bg-gradient-to-r from-transparent via-red-700/10 to-transparent"></div>
        <div className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-red-700/[0.05] to-transparent"></div>
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
        
        {/* Large Decorative Circles */}
        <div className="absolute -right-60 top-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-red-700/[0.03] rounded-full"></div>
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-red-700/[0.02] rounded-full"></div>
        
        {/* Abstract Corner Accent */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-red-700/10 rounded-tl-3xl"></div>
      </div>

      <section className="py-20 px-6 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-500 font-bold uppercase tracking-widest text-base mb-4"
            >
              Contact Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-red-700 leading-tight mb-4 uppercase italic"
            >
              Please feel free to send us an enquiry. We are happy to help you!!!
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Left Side: Form */}
            <div className="flex-1 p-8 md:p-12 text-left">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 uppercase italic">Message Sent!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm">Thank you for your inquiry. Our team will get back to you shortly at {formData.email}.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-red-700 font-bold hover:underline uppercase tracking-widest text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-red-700 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-red-700 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-red-700 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-red-700 outline-none transition-all"
                    />
                  </div>
                  
                  {status === "error" && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full md:w-auto flex items-center justify-center bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:active:scale-100 uppercase tracking-widest min-w-[200px]"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  
                  {status === "error" && errorMessage.includes("SMTP") && (
                    <p className="text-[10px] text-slate-400 mt-2">
                      Developer Note: Please configure SMTP credentials in the Secrets panel to enable real email sending.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Right Side: Contact Details */}
            <div className="w-full md:w-[40%] bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Contact details</h2>
                <p className="text-slate-400 text-base mb-12 italic">
                  Supplying India's Industries, Empowering Everyday Life.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-base font-black text-red-600 uppercase tracking-widest mb-2">Location</h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                      Survey No.174NA/P/1, Gram Panchayat Milkat No.1506,<br/>
                      Umiyanagar road, Badarpura(Kalusana), Ta- Palanpur,<br/>
                      Dist - B.K. 385520, India
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-red-600 uppercase tracking-widest mb-2">Phone Number</h3>
                    <p className="text-slate-300 text-lg font-bold">Dilip Patel: +91 7016966322</p>
                    <p className="text-slate-300 text-lg font-bold">Bharat Patel: +91 9904824758</p>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-red-600 uppercase tracking-widest mb-2">Email</h3>
                    <p className="text-slate-300 text-base font-medium">honeychemicals2025@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6 mt-12">
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="h-[400px] lg:h-auto min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.106297314216!2d72.3923363!3d23.7731766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cee12f38d3597%3A0x6d97c72f10b7f61!2sBadarpura%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713768000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Honey Chemicals Location"
                ></iframe>
              </div>
              <div className="p-8 md:p-16 flex flex-col justify-center bg-slate-950 text-white">
                <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Visit Us</p>
                <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic leading-tight">
                  Headquarters in <span className="text-red-700">Palanpur</span>
                </h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-2xl text-red-600">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 uppercase tracking-tight">Factory Address</h4>
                      <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                        Survey No.174NA/P/1, Gram Panchayat Milkat No.1506,
                        Umiyanagar road, Badarpura(Kalusana), Ta- Palanpur,
                        Dist - B.K. 385520, India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.google.com/maps?q=Badarpura+Palanpur+Gujarat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg text-sm uppercase tracking-widest"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
