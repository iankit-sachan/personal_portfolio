import { motion } from 'framer-motion';
import { FileText, Download, Eye, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  const resumePath = '/Python_developer-Ankit-kumar (1).pdf';

  const handleView = () => {
    window.open(resumePath, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Ankit_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlights = [
    {
      icon: Briefcase,
      title: 'Professional Experience',
      description: 'Python Developer with Django & Flask expertise',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'MCA from AKTU | BCA from CSJM University',
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Multiple certifications from IBM, Meta, Google Cloud',
    },
  ];

  return (
    <section id="resume" className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-4">
            <FileText size={16} />
            Professional Resume
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
              My Resume
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            View or download my detailed resume showcasing my skills, experience, and achievements
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 p-4 sm:p-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                <FileText size={40} className="text-emerald-400" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                Ankit Kumar - Python Developer
              </h3>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Comprehensive overview of my professional journey, technical skills, projects, and certifications
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                <button
                  onClick={handleView}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2 sm:gap-3 w-full sm:min-w-[200px] justify-center"
                >
                  <Eye size={18} className="sm:w-5 sm:h-5" />
                  <span>View Resume</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={handleDownload}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-slate-800/80 backdrop-blur-sm text-white rounded-xl font-semibold border border-slate-700 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2 sm:gap-3 w-full sm:min-w-[200px] justify-center"
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  <span>Download PDF</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-slate-500 text-sm">
                  Last updated: January 2025 | PDF Format
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-slate-400 text-sm">
              For HR inquiries, please feel free to reach out via{' '}
              <a href="#contact" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                contact section
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
