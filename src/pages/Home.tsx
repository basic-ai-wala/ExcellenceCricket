import { motion } from 'motion/react';
import { ArrowRight, Trophy, Activity, Users, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-32 lg:py-48" aria-label="Hero Section">
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/Oval_Maidan%2C_Mumbai.jpg"
            alt="Local cricket ground with players practicing in Mumbai"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Mumbai's Premier <span className="text-blue-400">Cricket Academy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Transform your passion into professional excellence. Elite coaching, state-of-the-art turf pitches in Dadar, and local maidan match-simulation training.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg w-full sm:w-auto"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white hover:bg-slate-50 text-slate-900 transition-colors shadow-lg w-full sm:w-auto"
            >
              Join the Academy <ArrowRight className="ml-2 h-5 w-5 text-blue-600" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT MUMBAI CRICKET / SEO PARAGRAPH */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Expert Cricket Coaching in the Heart of Mumbai</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Welcome to Excellence Cricket Academy, officially recognized as one of the best cricket training grounds in Mumbai. Rooted in the historic maidans of the city, we focus on identifying grassroots talent from local neighborhoods and colleges, nurturing them into state-level and professional athletes. Our customized programs cover intensive batting masterclasses, dedicated pace and spin bowling sessions, and rigorous fitness camps tailored specifically for competitive Mumbai leagues.
          </p>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="py-20 bg-white" aria-labelledby="highlights-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="highlights-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Excellence Cricket?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We provide a comprehensive ecosystem designed for modern cricket development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">ICC Certified Coaches</h3>
              <p className="text-slate-600 leading-relaxed">Learn from former professionals and certified experts who understand the modern game's demands.</p>
            </article>

            <article className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Turf & Cement Wickets</h3>
              <p className="text-slate-600 leading-relaxed">Practice on 5 turf wickets and 3 cement wickets equipped with professional bowling machines.</p>
            </article>

            <article className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Live Match Experience</h3>
              <p className="text-slate-600 leading-relaxed">Regular weekend league matches, inter-club tournaments, and high-pressure match simulations.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-blue-600 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Step onto the Pitch?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Whether you are a beginner looking to learn the basics or an advanced player aiming for state selection, we have the right program for you.
          </p>
          <Link
            to="/schedule"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-blue-700 hover:bg-slate-100 transition-colors shadow-xl"
          >
            View Training Schedule
          </Link>
        </div>
      </section>
    </main>
  );
}
