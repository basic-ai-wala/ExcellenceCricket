import { motion } from 'motion/react';
import { Clock, Calendar, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Schedule() {
  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Training <span className="text-blue-600">Schedule</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Optimized practice routines designed for peak performance. We maintain strict time slots to ensure personalized attention for every player.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          
          {/* Weekday Schedule */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center mb-8">
              <div className="bg-blue-600 text-white p-3 rounded-xl mr-4 shadow-md">
                <Calendar className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Weekday Routine</h2>
            </div>
            
            <p className="text-slate-600 mb-8 text-lg">Monday to Friday - Focus on skill refinement, net practice, and fitness conditioning.</p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Sun className="w-16 h-16" /></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Morning Session</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Fitness & Fielding</span>
                  </div>
                  <p className="text-slate-600 mb-4">Core strength, stamina building, agility drills, and ground fielding.</p>
                  <p className="text-blue-700 font-bold flex items-center text-lg"><Clock className="w-5 h-5 mr-2" /> 06:00 AM - 08:30 AM IST</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Moon className="w-16 h-16" /></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Evening Session</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Turf Nets</span>
                  </div>
                  <p className="text-slate-600 mb-4">Intense turf net practice, bowling machine facing, and spin tackling.</p>
                  <p className="text-blue-700 font-bold flex items-center text-lg"><Clock className="w-5 h-5 mr-2" /> 04:00 PM - 07:00 PM IST</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Weekend Schedule */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center mb-8">
              <div className="bg-emerald-600 text-white p-3 rounded-xl mr-4 shadow-md">
                <Calendar className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Weekend Matches</h2>
            </div>
            
            <p className="text-slate-600 mb-8 text-lg">Saturday & Sunday - Putting skills to the test with live match scenarios and tactical assessments.</p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Match Scenarios</h3>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Game Time</span>
                </div>
                <p className="text-slate-600 mb-4">Inter-academy leagues, friendly club matches (T20 and 40-over formats).</p>
                <p className="text-emerald-700 font-bold flex items-center text-lg"><Clock className="w-5 h-5 mr-2" /> 07:00 AM - 01:00 PM IST</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Recovery & Review</h3>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Analysis</span>
                </div>
                <p className="text-slate-600 mb-4">Video analysis of the morning match, followed by light stretching and recovery pool sessions.</p>
                <p className="text-emerald-700 font-bold flex items-center text-lg"><Clock className="w-5 h-5 mr-2" /> 03:00 PM - 05:00 PM IST</p>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-colors shadow-lg"
          >
            Enroll Now
          </Link>
        </div>

      </div>
    </main>
  );
}
