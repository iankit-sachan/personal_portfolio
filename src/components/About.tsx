import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { useProfile, useEducation } from '../hooks/usePortfolioData';

export default function About() {
  const { profile, loading: profileLoading } = useProfile();
  const { education, loading: educationLoading } = useEducation();

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

  if (profileLoading || educationLoading) {
    return (
      <section id="about" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center text-white">Loading...</div>
      </section>
    );
  }

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Hello! I'm {profile?.full_name}</h3>
              <p className="text-slate-300 leading-relaxed text-lg">{profile?.bio}</p>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={20} className="text-emerald-400" />
                <span>{profile?.location}</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-[3/4] md:aspect-square rounded-2xl bg-gradient-to-br from-emerald-600/20 to-slate-800/40 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl shadow-emerald-500/5">
                {profile?.profile_image_url ? (
                  <img
                    src={profile.profile_image_url}
                    alt={profile.full_name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-emerald-400">
                    {profile?.full_name?.charAt(0) || 'A'}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l-2 border-emerald-500/30 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-900"></div>

                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                        <p className="text-emerald-400 font-medium mb-1">{edu.institution}</p>
                        {edu.university && <p className="text-slate-400 text-sm">{edu.university}</p>}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar size={16} className="text-emerald-400" />
                        <span>{edu.start_year} - {edu.end_year}</span>
                      </div>
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin size={16} className="text-emerald-400" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
