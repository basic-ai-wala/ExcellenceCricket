import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { id: 1, url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mumbai%2C_India%2C_Oval_Maidan_recreational_field.jpg', title: 'Local Maidan Match' },
    { id: 2, url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Cockfosters_Cricket_Club_blue_cricket_helmet_at_Cockfosters%2C_London%2C_England.jpg', title: 'Batting Practice' },
    { id: 3, url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Practice_nets_at_Fenner%27s_Field_ground%2C_Cambridge_University_Cricket_Club%2C_England_01.jpg', title: 'Stumps Setup' },
    { id: 4, url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Epping_Foresters_Cricket_Club_practice_nets_1.jpg', title: 'Net Bowling' },
    { id: 5, url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Bayford_Cricket_Club_cricket_nets%2C_Bayford%2C_Hertfordshire%2C_England.jpg', title: 'Leather Ball Pitch' },
    { id: 6, url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cricket_at_maidan.jpg', title: 'Catching Drills' },
    { id: 7, url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Oval_Maidan%2C_Mumbai.jpg', title: 'Pitch Inspection' },
    { id: 8, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cricket_kit_at_Walker_Cricket_Ground%2C_Southgate%2C_London%2C_England_02.jpg', title: 'Cricket Gear' },
  ];

  return (
    <main className="py-16 md:py-24 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Action <span className="text-blue-400">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Glimpses of our intense practice sessions, academy matches, and the dedication of our players.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <motion.figure
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-slate-800 aspect-square"
            >
              <img 
                src={image.url} 
                alt={`Excellence Cricket Academy - ${image.title}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <figcaption className="p-6">
                  <span className="text-white font-semibold text-lg tracking-wide">{image.title}</span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </main>
  );
}
