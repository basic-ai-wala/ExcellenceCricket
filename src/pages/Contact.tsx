import { motion } from 'motion/react';
import { MapPin, Mail, Phone, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = "919876543210";

  return (
    <main className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Get in <span className="text-blue-600">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Ready to take your game to the next level? Contact us today to enroll or schedule a campus visit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Academy Information</h2>
            
            <div className="space-y-8 mb-10 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">Our Ground</h3>
                  <p className="text-slate-600 leading-relaxed">Shivaji Park Maidan<br />Dadar West, Mumbai<br />Maharashtra 400028</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">Email Us</h3>
                  <a href="mailto:admissions@excellencecricket.in" className="text-slate-600 hover:text-blue-600 transition-colors">admissions@excellencecricket.in</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600">+91 98765 43210<br /><span className="text-sm text-slate-500">Mon-Sat, 9:00 AM - 6:00 PM IST</span></p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-3xl text-white shadow-lg flex flex-col items-start relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
                <MessageCircle className="w-48 h-48" />
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center relative z-10">
                <MessageCircle className="mr-3 h-8 w-8" />
                Quick Answers?
              </h3>
              <p className="text-green-50 mb-6 relative z-10 text-lg">
                Our coaches and admins are available on WhatsApp for immediate assistance regarding admissions, fees, and schedules.
              </p>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 text-lg font-bold rounded-xl bg-white text-green-600 hover:bg-green-50 transition-colors w-full sm:w-auto relative z-10 shadow-sm"
              >
                Chat on WhatsApp <Send className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Callback</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Player / Parent Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-slate-50 focus:bg-white text-lg"
                  placeholder="Enter full name"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-slate-50 focus:bg-white text-lg"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-semibold text-slate-700 mb-2">Player Age</label>
                  <input 
                    type="number" 
                    id="age" 
                    min="6" max="30"
                    className="w-full px-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-slate-50 focus:bg-white text-lg"
                    placeholder="e.g., 14"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="course" className="block text-sm font-semibold text-slate-700 mb-2">Interested Program</label>
                <select 
                  id="course"
                  className="w-full px-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-slate-50 focus:bg-white cursor-pointer text-lg"
                >
                  <option>Select a program...</option>
                  <option>Batting Masterclass</option>
                  <option>Pace & Spin Bowling</option>
                  <option>Wicketkeeping & Fielding</option>
                  <option>General Cricket Coaching (All-rounder)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Any prior experience?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none bg-slate-50 focus:bg-white text-lg"
                  placeholder="Tell us about the player's current skill level..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-6 rounded-xl transition-colors flex items-center justify-center shadow-md hover:shadow-lg text-lg mt-4"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
