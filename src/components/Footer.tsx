import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useProfile } from '../hooks/usePortfolioData';

export default function Footer() {
  const { profile } = useProfile();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{profile?.full_name}</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {profile?.title} passionate about building innovative solutions and continuous learning.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Resume', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
              <a
                href={profile?.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile?.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile?.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm break-all">{profile?.email}</p>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} {profile?.full_name}. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by TechWiPro
          </p>
        </div>
      </div>
    </footer>
  );
}
