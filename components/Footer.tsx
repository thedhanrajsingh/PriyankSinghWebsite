
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-20 relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <a className="font-display text-4xl font-medium cursor-pointer hover:opacity-80 transition-opacity" href="#/">
              Priyank Singh<span className="text-primary">.</span>
            </a>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Building the infrastructure for the next generation of scalable businesses. Stay updated with my weekly automation teardowns.
            </p>
            <form className="flex max-w-sm group" onSubmit={(e) => e.preventDefault()}>
              <input
                className="bg-white/10 border border-white/10 rounded-l-xl w-full px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 text-white placeholder-slate-500 transition-all duration-200"
                placeholder="Enter your email"
                type="email"
              />
              <button className="bg-primary px-6 py-3.5 rounded-r-xl font-bold hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 text-sm whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Quick Links</h5>
            <ul className="space-y-4 text-slate-400">
              {[
                { label: 'About Me', link: '#/' },
                { label: 'System Audits', link: '#/consultation' },
              ].map((item, i) => (
                <li key={i}>
                  <a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center cursor-pointer" href={item.link}>
                    <span className="material-icons-round text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Socials</h5>
            <ul className="space-y-4 text-slate-400">
              {[
                { icon: 'link', label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyanksinghofficial/' },
                { icon: 'play_circle', label: 'YouTube', href: 'https://www.youtube.com/channel/UCO4EKwP2xiwyaHwxNfqRYiQ' },
                { icon: 'photo_camera', label: 'Instagram', href: 'https://www.instagram.com/priyanksinghofficial' },
              ].map((item, i) => (
                <li key={i}>
                  <a className="hover:text-white transition-all duration-200 inline-flex items-center cursor-pointer group" href={item.href} target="_blank" rel="noopener noreferrer">
                    <span className="material-icons-round text-sm mr-2 group-hover:text-primary transition-colors duration-200">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-slate-500 text-xs gap-4">
          <p>© 2025 Priyank Singh. All rights reserved.</p>
          <div className="flex space-x-6 uppercase tracking-wider">
            <a className="hover:text-white transition-colors duration-200 cursor-pointer" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors duration-200 cursor-pointer" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
