
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MessageSquare, Phone, Star, BadgeCheck } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-lawyer-light to-white p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="badge bg-lawyer-primary/10 text-lawyer-primary mb-3">Legal Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-lawyer-dark mb-4">Need Legal Help in Hamilton County?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Expert criminal defense lawyers ready to protect your rights and future.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="law-card bg-white rounded-2xl overflow-hidden p-6 md:p-8 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 md:gap-8 items-start">
            {/* Profile Image and Badges Section */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="w-24 h-24 rounded-full bg-lawyer-light border-4 border-white shadow-md overflow-hidden flex items-center justify-center">
                <img 
                  src="https://source.unsplash.com/OLJ50CHJ_rE/96x96" 
                  alt="Attorney portrait" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="%233F51B5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>';
                  }}
                />
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <div className="badge badge-verified flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" /> 
                  <span>LawPro Verified</span>
                </div>
                
                <div className="badge badge-consultation flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> 
                  <span>Free Consultation</span>
                </div>
                
                <div className="badge-rating flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h2 className="text-2xl font-bold text-lawyer-dark">
                    Top Rated Criminal Lawyer in Hamilton County
                  </h2>
                  
                  <div className="badge badge-available flex items-center gap-1.5 animate-pulse-subtle">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="font-medium">Available Now</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-lawyer-primary flex items-center gap-2">
                  The Wieczorek Law Firm
                  <BadgeCheck className="text-lawyer-secondary w-5 h-5" />
                </h3>
              </div>
              
              <div className="mt-2 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  At the Wieczorek Law Firm, we pride ourselves on serving our clients with the utmost care and attention to detail. Whether you're facing felony charges or misdemeanor charges, we understand that a criminal conviction can have devastating long-term effects on your life.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {[
                    "Criminal Defense",
                    "DUI Defense",
                    "Domestic Violence",
                    "Drug Charges",
                    "Probation Violations",
                    "Expungements"
                  ].map((service, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-lawyer-secondary" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-cta text-white font-medium rounded-full py-3.5 px-6 flex items-center justify-center gap-2 mt-4 md:self-start shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Connect Me Now</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          <p>95% success rate | 500+ successful cases | 15+ years of experience</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
