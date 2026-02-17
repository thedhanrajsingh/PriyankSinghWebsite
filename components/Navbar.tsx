
import React from 'react';

interface NavbarProps {
  isDark: boolean;
  onToggleDark: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleDark }) => {
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-4 mt-4 rounded-2xl glass-card-strong border border-black/5 dark:border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a className="font-display text-3xl font-medium cursor-pointer hover:opacity-80 transition-opacity" href="#/">
            Priyank Singh<span className="text-gradient-primary">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-wider">
            <a className="animated-underline cursor-pointer text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200" href="#/consultation">Work With Me</a>
            <a className="animated-underline cursor-pointer text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200" href="#academy">Academy</a>
            <a className="animated-underline cursor-pointer text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200" href="#resources">Resources</a>
          </div>

          <div className="flex items-center space-x-3">
            <button
              className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer"
              onClick={onToggleDark}
              aria-label="Toggle dark mode"
            >
              <span className="material-icons-round text-lg transition-transform duration-300" style={{ transform: isDark ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <a
              className="hidden sm:flex items-center bg-primary text-white px-5 py-2.5 rounded-full font-semibold cursor-pointer hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 text-sm"
              href="#/consultation"
            >
              Book a Call
              <span className="material-icons-round text-sm ml-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
