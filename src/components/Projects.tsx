import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { useProjects } from '../hooks/usePortfolioData';

export default function Projects() {
  const { projects, loading } = useProjects();

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
      <section id="projects" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center text-white">Loading...</div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in web development
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-slate-900 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-blue-400/20">{index + 1}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    {project.year && (
                      <div className="flex items-center gap-1 text-slate-400 text-sm">
                        <Calendar size={14} />
                        <span>{project.year}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                  {project.detailed_description && project.detailed_description.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {project.detailed_description.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                    {project.technologies?.map((tech, idx) => (
                      <span key={idx} className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.project_url && project.project_url !== '#' && (
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </a>
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
