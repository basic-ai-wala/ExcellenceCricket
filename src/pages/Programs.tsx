import { motion } from 'motion/react';
import { Shield, Activity, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      id: 'batting',
      icon: Shield,
      title: 'Batting Masterclass',
      desc: 'Our batting curriculum is designed to build a rock-solid defense and expansive stroke play. We focus on grip, stance, backlift, and precise footwork against both express pace and turning spin.',
      highlights: ['Stance & Head Position optimization', 'Playing spin with soft hands', 'Pace bowling machine practice up to 140km/h', 'Running between the wickets']
    },
    {
      id: 'bowling',
      icon: Activity,
      title: 'Pace & Spin Bowling',
      desc: 'Whether you want to bowl express pace or deceptive spin, our coaches analyze your biomechanics. We work on run-up rhythm, gather, release point, and follow-through.',
      highlights: ['Seam presentation & swing mechanics', 'Spin flight, dip, and turn', 'Run-up optimization for fast bowlers', 'Tactical field placements']
    },
    {
      id: 'fielding',
      icon: Users,
      title: 'Wicketkeeping & Fielding',
      desc: 'Matches are won in the field. This high-intensity program focuses on reflexes, diving, throwing accuracy, and specialist wicketkeeping drills.',
      highlights: ['High catch & flat catch techniques', 'Direct hit targeting', 'Wicketkeeping stance and gathering', 'Agility and reflex ladders']
    }
  ];

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
            Cricket <span className="text-blue-600">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Specialized coaching modules tailored for various disciplines of the sport.
          </motion.p>
        </div>

        {/* Program Cards */}
        <div className="space-y-12">
          {programs.map((prog, idx) => (
            <motion.article 
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-10 items-start"
            >
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                <prog.icon className="h-10 w-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{prog.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">{prog.desc}</p>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Focus Areas:</h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {prog.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-slate-700">
                        <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/schedule"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg"
          >
            See When We Train <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </main>
  );
}
