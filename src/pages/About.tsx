import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function About() {
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
            About <span className="text-blue-600">Excellence Cricket</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            A legacy of building complete cricketers through discipline, technique, and world-class infrastructure.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Epping_Foresters_Cricket_Club_practice_nets_1.jpg" 
              alt="Cricket stumps and leather ball at a local practice net" 
              className="rounded-3xl shadow-xl w-full object-cover h-[450px]"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Heritage & Vision</h2>
            <p className="text-slate-600 mb-4 text-lg leading-relaxed">
              Established in 2015 at the historic Shivaji Park in Mumbai, Excellence Cricket Academy was born out of a passion to bridge the gap between local maidan street talent and professional, competitive cricket. As one of the top cricket coaching centers in Maharashtra, we understand the local cricketing culture deeply.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We realized that raw talent is abundant, but without the right coaching temperament, physical conditioning, and tactical awareness, true potential is rarely reached. Our academy focuses on a holistic development approach, ensuring every player understands the mechanics of the game while building mental resilience.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Core Philosophy:</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" /> Technique first, power second.
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" /> Game awareness and match simulations.
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" /> Uncompromising physical fitness and agility.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Facilities Section */}
        <div className="bg-slate-50 rounded-3xl p-10 md:p-16 border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">World-Class Facilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We invest heavily in our infrastructure to provide an international-standard training environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Turf Pitches</h3>
              <p className="text-slate-600">5 meticulously maintained turf wickets mimicking various international pitch behaviors (bouncy, spinning, flat).</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bowling Machines</h3>
              <p className="text-slate-600">Advanced programmable bowling machines capable of 150km/h speeds, swing, and spin variations.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Video Analysis</h3>
              <p className="text-slate-600">High-speed cameras and motion tracking software for in-depth biomechanical stroke and bowling analysis.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fitness Gym</h3>
              <p className="text-slate-600">Dedicated strength and conditioning center focused on cricket-specific muscle groups and agility.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
