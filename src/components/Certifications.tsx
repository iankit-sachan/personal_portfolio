import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { useCertifications } from '../hooks/usePortfolioData';

export default function Certifications() {
  const { certifications, loading } = useCertifications();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      <section id="certifications" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center text-white">Loading...</div>
      </section>
    );
  }

  return (
    <section id="certifications" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Professional certifications from industry-leading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white sm:w-8 sm:h-8" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-blue-400 font-medium text-xs sm:text-sm mb-3">{cert.issuing_organization}</p>

                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar size={14} />
                  <span>{cert.issue_year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
