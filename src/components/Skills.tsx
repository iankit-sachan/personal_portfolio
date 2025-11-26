import { motion } from 'framer-motion';
import { Code2, Database, Globe, Wrench } from 'lucide-react';
import { useGroupedSkills } from '../hooks/usePortfolioData';

const categoryIcons: Record<string, typeof Code2> = {
  'Programming Languages': Code2,
  'Web Technologies & Frameworks': Globe,
  'Database & Query Language': Database,
  'Other Skills': Wrench,
  'Programming Concepts': Code2,
  'Content Management Systems': Globe,
  'Automation & Workflow Tools': Wrench,
};

export default function Skills() {
  const { groupedSkills, loading } = useGroupedSkills();

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
      <section id="skills" className="py-24 bg-slate-800">
        <div className="container mx-auto px-6 text-center text-white">Loading...</div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-24 bg-slate-800 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, skills]) => {
              const Icon = categoryIcons[category] || Code2;

              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <div key={skill.id} className="px-4 py-2 rounded-full bg-blue-500/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
