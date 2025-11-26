import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useExperience } from '../hooks/usePortfolioData';

export default function Experience() {
  const { experience, loading } = useExperience();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  if (loading) {
    return (
      <section id="experience" className="py-24 bg-slate-800">
        <div className="container mx-auto px-6 text-center text-white">Loading...</div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-800"></div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors group">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                          <Briefcase size={24} className="text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      {exp.type && (
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 capitalize">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                        <Calendar size={16} className="text-blue-400" />
                        <span>{exp.start_date} - {exp.end_date}</span>
                      </div>
                      {exp.duration && <p className="text-slate-500 text-sm">{exp.duration}</p>}
                    </div>
                  </div>

                  {exp.location && (
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <MapPin size={16} className="text-blue-400" />
                      <span>{exp.location}</span>
                    </div>
                  )}

                  {exp.description && <p className="text-slate-300 mb-4">{exp.description}</p>}

                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-slate-400 flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
