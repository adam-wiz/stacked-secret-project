
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, MessageSquare, Phone, Star, BadgeCheck, ChevronDown, ThumbsUp, Award, Video, Users } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              
              {/* Read More Collapsible Section */}
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="mt-4 rounded-xl overflow-hidden border border-gray-100"
              >
                <CollapsibleTrigger className="w-full flex items-center justify-center py-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-t-xl group text-lawyer-primary font-medium">
                  <span>Read More</span>
                  <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                
                <CollapsibleContent className="p-4 bg-white">
                  <Tabs defaultValue="reviews" className="w-full">
                    <TabsList className="w-full bg-gray-100 p-1 rounded-lg mb-4">
                      <TabsTrigger value="reviews" className="flex items-center gap-1.5 flex-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>Reviews</span>
                      </TabsTrigger>
                      <TabsTrigger value="cases" className="flex items-center gap-1.5 flex-1">
                        <Award className="w-4 h-4" />
                        <span>Case Results</span>
                      </TabsTrigger>
                      <TabsTrigger value="video" className="flex items-center gap-1.5 flex-1">
                        <Video className="w-4 h-4" />
                        <span>Video</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    {/* Reviews Tab */}
                    <TabsContent value="reviews" className="space-y-4">
                      <h4 className="text-lg font-semibold text-lawyer-dark flex items-center gap-2">
                        <Users className="w-5 h-5 text-lawyer-blue" /> 
                        <span>Client Reviews</span>
                      </h4>
                      
                      {/* Client Reviews */}
                      <div className="space-y-4">
                        {[
                          {
                            name: "Michael R.",
                            date: "July 2023",
                            rating: 5,
                            text: "Attorney Wieczorek was amazing throughout my entire case. He kept me informed, fought hard, and got my charges reduced significantly. Forever grateful!"
                          },
                          {
                            name: "Sarah T.",
                            date: "May 2023",
                            rating: 5,
                            text: "I cannot recommend this law firm enough. They turned what could have been a life-altering disaster into a manageable situation and were there for me every step of the way."
                          },
                          {
                            name: "David L.",
                            date: "March 2023",
                            rating: 5,
                            text: "Professional, responsive, and truly cares about their clients. They managed to get my case dismissed and helped me get my life back on track."
                          }
                        ].map((review, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium">{review.name}</div>
                              <div className="text-sm text-gray-500">{review.date}</div>
                            </div>
                            <div className="flex items-center mb-2">
                              {[...Array(review.rating)].map((_, j) => (
                                <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />
                              ))}
                            </div>
                            <p className="text-gray-700 text-sm">{review.text}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    {/* Case Results Tab */}
                    <TabsContent value="cases" className="space-y-4">
                      <h4 className="text-lg font-semibold text-lawyer-dark flex items-center gap-2">
                        <Award className="w-5 h-5 text-lawyer-gold" /> 
                        <span>Notable Case Results</span>
                      </h4>
                      
                      <div className="space-y-4">
                        {[
                          {
                            type: "DUI Defense",
                            result: "Charges Reduced",
                            description: "Client facing felony DUI charges had case reduced to misdemeanor with minimal penalties."
                          },
                          {
                            type: "Drug Possession",
                            result: "Case Dismissed",
                            description: "Successfully argued illegal search and seizure, resulting in complete dismissal of all charges."
                          },
                          {
                            type: "Domestic Violence",
                            result: "Not Guilty Verdict",
                            description: "Jury trial resulting in full acquittal after presenting evidence of false accusations."
                          }
                        ].map((caseResult, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium text-lawyer-primary">{caseResult.type}</span>
                              <span className="badge badge-verified">{caseResult.result}</span>
                            </div>
                            <p className="text-gray-700 text-sm">{caseResult.description}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    {/* Video Tab */}
                    <TabsContent value="video" className="space-y-4">
                      <h4 className="text-lg font-semibold text-lawyer-dark flex items-center gap-2">
                        <Video className="w-5 h-5 text-lawyer-blue" /> 
                        <span>Introduction Video</span>
                      </h4>
                      
                      <div className="relative bg-gray-200 rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center flex-col space-y-3">
                          <Video className="w-16 h-16 text-lawyer-primary opacity-70" />
                          <span className="text-sm text-gray-600 font-medium">Attorney Introduction Video</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 italic text-center">
                        Meet Attorney Wieczorek and learn about his approach to criminal defense cases.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CollapsibleContent>
              </Collapsible>
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
