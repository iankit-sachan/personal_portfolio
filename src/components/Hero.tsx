import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import Scene3D from './Scene3D';
import { useProfile } from '../hooks/usePortfolioData';

export default function Hero() {
  const { profile, loading } = useProfile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </section>
    );
  }

  const displayName = profile?.full_name || 'Ankit Kumar';
  const displayTitle = profile?.title || 'Social Media Growth Strategist';

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="absolute inset-0 opacity-40">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          className="cursor-grab active:cursor-grabbing"
        >
          <Scene3D />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold backdrop-blur-sm shadow-lg shadow-emerald-500/5">
              <Sparkles size={16} className="animate-pulse" />
              Professional Portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
              {displayName}
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-500 leading-relaxed">
              {displayTitle}
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl"
          >
            Helping brands scale on LinkedIn, Instagram & Meta through strategic content creation and data-driven growth strategies
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              View My Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-semibold border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4"
          >
            <a
              href={profile?.github_url || 'https://github.com/iankit-sachan'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group w-14 h-14 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Github size={22} />
            </a>
            <a
              href={profile?.linkedin_url || 'https://linkedin.com/in/techankit10'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group w-14 h-14 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-500 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${profile?.email || 'ankitsachan982@gmail.com'}`}
              aria-label="Email"
              className="group w-14 h-14 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-emerald-600 hover:to-emerald-500 hover:border-emerald-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="text-slate-500 hover:text-slate-400 transition-colors" size={32} />
      </motion.div>
    </section>
  );
}
