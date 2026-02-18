
import React, { useEffect, useRef } from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from '../components/Button';
import { StatBadge } from '../components/StatBadge';
import { Accordion } from '../components/Accordion';
import { IMAGES, LOGO_IMAGES, TOOL_ICONS } from '../constants';

export const HomePage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-stagger').forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero Section ── */}
      <header className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] glow-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <div className="space-y-8 scroll-reveal-left">
            {/* Animated badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card-strong text-primary text-xs font-mono uppercase tracking-widest shimmer cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Systems Architect &amp; Educator</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              Automate Your Business &amp; Build Skills <span className="text-gradient-primary">That Pay</span>
            </h1>

            <p className="text-base md:text-lg text-slate-800 dark:text-slate-200 max-w-lg leading-relaxed">
              Helping high-growth founders reclaim 20+ hours a week through intelligent systems, while mentoring the next generation of automation specialists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-center cursor-pointer hover:brightness-110 premium-shadow-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                href="#/consultation"
              >
                Scale My Business
                <span className="material-icons-round ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
              <button
                className="glass-card border border-black/10 dark:border-white/10 px-8 py-4 rounded-xl font-bold text-center cursor-pointer hover:bg-white/90 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                onClick={() => document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Academy
              </button>
            </div>
          </div>

          {/* Hero image with floating stats */}
          <div className="relative scroll-reveal-right">
            <div className="relative rounded-[2rem] overflow-hidden premium-shadow-lg">
              <img
                alt="Priyank Singh — Automation Consultant & Systems Architect"
                className="w-full aspect-[4/5] object-cover"
                src={IMAGES.priyank}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Floating stat: Active Automations - hidden on mobile, shown on md+ */}
              <div className="absolute bottom-8 left-6 glass-card-strong rounded-2xl p-4 premium-shadow-lg animate-bounce-slow hidden md:flex">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                    <span className="material-icons-round">settings_input_component</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Active Automations</p>
                    <p className="text-xl font-bold stat-glow">200+ Workflows</p>
                  </div>
                </div>
              </div>

              {/* Floating stat: Rating - hidden on mobile, shown on md+ */}
              <div className="absolute top-10 right-6 glass-card-strong rounded-2xl p-3 premium-shadow-lg flex-col items-center space-y-1 animate-float hidden md:flex">
                <p className="text-primary font-bold text-2xl tracking-tighter stat-glow">4.9/5</p>
                <div className="flex text-primary">
                  {[1, 2, 3, 4, 5].map(s => (
                    <span key={s} className="material-icons-round text-sm">star</span>
                  ))}
                </div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">Student Rating</p>
              </div>
            </div>

            {/* Mobile-only stat badges shown below the image */}
            <div className="flex gap-3 mt-4 md:hidden">
              <div className="flex-1 glass-card-strong rounded-xl p-3 premium-shadow flex items-center space-x-3">
                <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <span className="material-icons-round text-lg">settings_input_component</span>
                </div>
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">Active Automations</p>
                  <p className="text-base font-bold stat-glow">200+ Workflows</p>
                </div>
              </div>
              <div className="glass-card-strong rounded-xl p-3 premium-shadow flex flex-col items-center justify-center space-y-0.5">
                <p className="text-primary font-bold text-xl tracking-tighter stat-glow">4.9/5</p>
                <div className="flex text-primary">
                  {[1, 2, 3, 4, 5].map(s => (
                    <span key={s} className="material-icons-round text-xs">star</span>
                  ))}
                </div>
                <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Trusted By Bar ── */}
      <section className="bg-accent-brown py-12 relative noise-overlay overflow-hidden">
        <div className="relative z-10">
          <p className="text-center text-white/50 font-mono text-xs uppercase tracking-[0.3em] mb-10">
            Trusted by founders at
          </p>
          {/* Marquee container */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-accent-brown to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-accent-brown to-transparent z-10"></div>
            {/* Scrolling track */}
            <div className="flex animate-marquee">
              {/* First set */}
              <div className="flex items-center gap-16 md:gap-24 shrink-0 px-8">
                <span className="text-white text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
                  <span className="text-amber-400">⚡</span> Zapier
                </span>
                <span className="text-white text-2xl md:text-3xl font-bold whitespace-nowrap">
                  Linked<span className="text-blue-300">in</span>
                </span>
                <span className="text-white text-2xl md:text-3xl font-display whitespace-nowrap">
                  Notion
                </span>
                <span className="text-white text-2xl md:text-3xl font-mono font-bold whitespace-nowrap">
                  GitHub
                </span>
                <span className="text-white text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
                  Airtable
                </span>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-16 md:gap-24 shrink-0 px-8">
                <span className="text-white text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
                  <span className="text-amber-400">⚡</span> Zapier
                </span>
                <span className="text-white text-2xl md:text-3xl font-bold whitespace-nowrap">
                  Linked<span className="text-blue-300">in</span>
                </span>
                <span className="text-white text-2xl md:text-3xl font-display whitespace-nowrap">
                  Notion
                </span>
                <span className="text-white text-2xl md:text-3xl font-mono font-bold whitespace-nowrap">
                  GitHub
                </span>
                <span className="text-white text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
                  Airtable
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Path Selection ── */}
      <SectionWrapper className="bg-[#EBE7E1] dark:bg-[#1E1E1E]" id="work">
        <div className="text-center mb-16 space-y-4 scroll-reveal">
          <p className="font-mono text-sm text-primary uppercase tracking-widest">How Can I Help?</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight">
            Your Path to Success <span className="text-gradient-primary">Starts Here</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal-stagger">
          {/* Business Owner Card */}
          <div className="bg-white dark:bg-[#1a2332] p-10 rounded-[2rem] border border-black/5 dark:border-white/5 flex flex-col h-full card-hover group">
            {/* Business Owners Illustration */}
            <div className="mb-8 rounded-2xl overflow-hidden bg-[#E8E0F0] dark:bg-[#2A2235] aspect-[4/4] sm:aspect-video relative p-6 flex items-end justify-center">
              {/* Top tabs */}
              <div className="absolute top-4 left-6 right-6 flex gap-2">
                <div className="px-4 py-2 border border-slate-400/40 rounded-md text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-white/10">Research &amp; Data</div>
                <div className="px-4 py-2 border border-slate-400/40 rounded-md text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-white/10">Innovation Hub</div>
                <div className="px-4 py-2 border border-slate-400/40 rounded-md text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-white/10 hidden sm:block">Market Expansion</div>
              </div>

              {/* Workflow card */}
              <div className="relative flex items-end gap-4 w-full mt-8">
                <div className="bg-white dark:bg-[#15202e] rounded-xl shadow-lg p-4 w-3/5 space-y-2.5">
                  {[
                    { text: 'Streamlined Marketing Efforts', type: 'toggle' },
                    { text: 'Optimized Online Presence', type: 'check' },
                    { text: 'Exponential Business Growth', type: 'toggle' },
                    { text: 'Tailored Audience Strategy', type: 'check' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-50 dark:bg-[#1e2d3d] rounded-lg px-3 py-2">
                      <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300">{item.text}</span>
                      {item.type === 'toggle' ? (
                        <div className="w-8 h-4 bg-primary rounded-full relative flex-shrink-0">
                          <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      ) : (
                        <span className="material-icons-round text-primary text-sm flex-shrink-0">check</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Connection node */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] h-6 bg-slate-400/50"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-primary/50 bg-white dark:bg-[#15202e] flex items-center justify-center">
                    <span className="text-primary text-lg font-bold leading-none">+</span>
                  </div>
                  <div className="w-[2px] h-6 bg-slate-400/50"></div>
                  <div className="border border-slate-700 dark:border-slate-400 px-2 py-1 text-[9px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-[#15202e] whitespace-nowrap">Business Owners</div>
                  {/* Cursor */}
                  <svg className="w-5 h-5 text-primary mt-1" viewBox="0 0 24 24" fill="currentColor"><path d="M4 0l16 12.279-6.951 1.17L19.39 24 15.456 24l-5.18-9.564L4 18.479z" /></svg>
                </div>
              </div>
            </div>
            <h3 className="font-display text-4xl mb-4 font-bold">I'm a Business Owner</h3>
            <p className="text-base text-slate-800 dark:text-slate-200 mb-8 leading-relaxed">
              You're ready to scale but stuck in the weeds. I'll audit your workflows, design a custom automation ecosystem, and free up your team for creative work.
            </p>
            <div className="mt-auto">
              <a
                className="inline-flex items-center justify-center w-full bg-primary text-white py-4 rounded-xl font-bold cursor-pointer hover:brightness-110 premium-shadow-primary transition-all duration-300"
                href="#/consultation"
              >
                Hire Me for Consulting
                <span className="material-icons-round ml-2 text-lg">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Freelancer Card */}
          <div className="bg-white dark:bg-[#1a2332] p-10 rounded-[2rem] border border-black/5 dark:border-white/5 flex flex-col h-full card-hover group">
            {/* Freelancers Illustration */}
            <div className="mb-8 rounded-2xl overflow-hidden bg-[#FFF8E1] dark:bg-[#2A2518] aspect-[4/4] sm:aspect-video relative p-6 flex items-center justify-center">
              {/* Title */}
              <div className="absolute top-5 left-0 right-0 text-center">
                <span className="font-display text-xl font-bold text-slate-800 dark:text-slate-200">Freelance Flow</span>
              </div>

              <div className="relative flex items-center gap-4 w-full mt-4">
                {/* Window card */}
                <div className="bg-white dark:bg-[#15202e] rounded-xl shadow-lg border border-slate-200 dark:border-zinc-700 w-3/5 overflow-hidden">
                  {/* Window title bar */}
                  <div className="flex items-center justify-end px-3 py-1.5 border-b border-slate-100 dark:border-zinc-700">
                    <div className="flex gap-1.5 text-slate-400 text-[10px]">
                      <span>—</span><span>□</span><span>×</span>
                    </div>
                  </div>
                  <div className="p-3 space-y-2">
                    {[
                      { text: 'Attract Clients', sub: 'Build Portfolio, Network' },
                      { text: 'Negotiate Confidently', sub: 'Set Rates, Value work' },
                      { text: 'Become Sought-After', sub: 'Deliver Excellence, Referrals' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-50 dark:bg-[#1e2d3d] rounded-lg px-3 py-2.5 border border-slate-100 dark:border-zinc-600">
                        <div>
                          <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">{item.text}</p>
                          <p className="text-[9px] text-slate-500">{item.sub}</p>
                        </div>
                        <span className="material-icons-round text-primary text-sm flex-shrink-0">check</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection node */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] h-6 bg-slate-400/50"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-violet-400/50 bg-white dark:bg-[#15202e] flex items-center justify-center">
                    <span className="text-violet-500 text-lg font-bold leading-none">+</span>
                  </div>
                  <div className="w-[2px] h-6 bg-slate-400/50"></div>
                  <div className="border border-slate-700 dark:border-slate-400 px-2 py-1 text-[9px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-[#15202e] whitespace-nowrap">Freelancers !</div>
                  {/* Cursor */}
                  <svg className="w-5 h-5 text-primary mt-1" viewBox="0 0 24 24" fill="currentColor"><path d="M4 0l16 12.279-6.951 1.17L19.39 24 15.456 24l-5.18-9.564L4 18.479z" /></svg>
                </div>
              </div>
            </div>
            <h3 className="font-display text-4xl mb-4 font-bold">I'm a Freelancer</h3>
            <p className="text-base text-slate-800 dark:text-slate-200 mb-4 leading-relaxed">
              Build and launch your own AI Automation Agency in 8 weeks — with real workflows, real clients, and real systems.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-8">
              <span className="material-icons-round text-sm">schedule</span>
              Next cohort starts soon · Limited seats
            </div>
            <div className="mt-auto">
              <button
                className="inline-flex items-center justify-center w-full border-2 border-primary text-primary py-4 rounded-xl font-bold cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Next Cohort
                <span className="material-icons-round ml-2 text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── About Section ── */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image side */}
          <div className="order-2 lg:order-1 relative scroll-reveal-left">
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-accent-green relative noise-overlay">
              <img
                alt="Priyank teaching automation to students worldwide"
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                src={IMAGES.priyankTeaching}
              />
              {/* Desktop-only floating badges */}
              <div className="absolute top-10 left-10 space-y-4 z-10 hidden md:block">
                <div className="glass-card-strong p-4 rounded-2xl premium-shadow-lg inline-block animate-float">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Global Reach</p>
                  <p className="text-2xl font-bold stat-glow">12+ Countries</p>
                </div>
              </div>
              <div className="absolute bottom-10 right-10 z-10 hidden md:block">
                <div className="bg-primary text-white p-6 rounded-2xl premium-shadow-primary transition-transform duration-500 cursor-default animate-float-delayed">
                  <p className="text-4xl font-display font-bold">10k+ hours</p>
                  <p className="text-xs uppercase font-mono mt-1 opacity-80 tracking-wider">Of Systems Architecture</p>
                </div>
              </div>
            </div>
            {/* Mobile-only badges below the image */}
            <div className="flex gap-3 mt-4 md:hidden">
              <div className="flex-1 glass-card-strong rounded-xl p-3 premium-shadow">
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Global Reach</p>
                <p className="text-lg font-bold stat-glow">12+ Countries</p>
              </div>
              <div className="flex-1 bg-primary text-white rounded-xl p-3 premium-shadow-primary">
                <p className="text-2xl font-display font-bold">10k+ hours</p>
                <p className="text-[9px] uppercase font-mono opacity-80 tracking-wider">Systems Architecture</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2 space-y-8 scroll-reveal-right">
            <p className="font-mono text-sm text-primary uppercase tracking-widest">The Person Behind the Systems</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-none">
              I'm Priyank Singh, and I help businesses <span className="text-gradient-primary">run on autopilot</span>.
            </h2>
            <div className="space-y-4 text-base text-slate-800 dark:text-slate-200 leading-relaxed">
              <p>I didn't come from a coding background — I was a performance marketer. Running campaigns, managing funnels, and drowning in repetitive manual work every single day. That's when I discovered no-code automation, and everything changed.</p>
              <p>Since 2025, I've been helping businesses replace their messy, manual processes with clean, automated workflows using tools like n8n. I also work closely with founders on high-level AI and automation strategies — showing them exactly where to plug in automation to save time, cut costs, and scale without burning out their teams.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 scroll-reveal-stagger">
              <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 card-hover">
                <h4 className="font-bold text-3xl stat-glow">50+</h4>
                <p className="text-sm text-slate-500 mt-1">Clients Served</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 card-hover">
                <h4 className="font-bold text-3xl stat-glow">45k+</h4>
                <p className="text-sm text-slate-500 mt-1">Hours Saved</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Academy Section ── */}
      <section className="py-24 bg-accent-green dark:bg-[#1E1E1E] rounded-[3rem] mx-4 md:mx-6 my-12 relative noise-overlay overflow-hidden" id="academy">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

          {/* Hero Block */}
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 scroll-reveal-scale">
            <p className="font-mono text-sm text-primary uppercase tracking-widest">Live 8-Week Cohort</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight">The Automation Academy</h2>
            <p className="text-base text-slate-800 dark:text-slate-300 leading-relaxed">
              Build and launch your own AI Automation Agency in 8 weeks — with real workflows, real clients, and real systems.
            </p>
            <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto">
              This live cohort is designed for freelancers, operators, and builders who want to turn automation skills into a consistent income stream. By the end, you won't just "know automation" — you'll have a working service business.
            </p>
          </div>

          {/* Mockup Image with floating tool icons */}
          <div className="relative max-w-5xl mx-auto mb-20 scroll-reveal-scale">
            <div className="glass-card p-3 md:p-4 rounded-[2rem] premium-shadow-lg">
              <img
                alt="Freelance 101 Academy — The Largest Freelancing Community of India"
                className="rounded-[1.5rem] w-full shadow-lg"
                src={IMAGES.dashboardPreview}
              />
              {/* Floating tool icons */}
              <div className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 flex flex-col space-y-4 hidden md:flex">
                {[
                  { img: TOOL_ICONS.zapier, alt: 'Zapier automation tool', delay: '0s' },
                  { img: TOOL_ICONS.notion, alt: 'Notion workspace tool', delay: '0.4s' },
                  { img: TOOL_ICONS.airtable, alt: 'Airtable database tool', delay: '0.8s' },
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 bg-white dark:bg-[#15202e] rounded-2xl premium-shadow-lg flex items-center justify-center p-3 animate-bounce-slow hover:scale-110 transition-transform duration-300 cursor-pointer"
                    style={{ animationDelay: tool.delay }}
                  >
                    <img alt={tool.alt} className="w-full h-full object-contain" src={tool.img} />
                  </div>
                ))}
              </div>

              {/* Right side floating badge */}
              <div className="absolute -right-6 md:-right-10 top-1/3 flex flex-col space-y-4 hidden lg:flex">
                <div className="glass-card-strong p-3 rounded-2xl premium-shadow-lg animate-float text-center">
                  <p className="text-2xl font-bold text-primary stat-glow">1200+</p>
                  <p className="text-[9px] font-mono uppercase tracking-wider text-slate-500">Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── What You'll Learn — 8-Week Curriculum ── */}
          <div className="mb-20">
            <div className="text-center mb-12 scroll-reveal">
              <p className="font-mono text-sm text-primary uppercase tracking-widest mb-4">What You'll Learn &amp; Build</p>
              <h3 className="font-display text-4xl md:text-5xl font-bold">8 Weeks to a Working Agency</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-reveal-stagger">
              {[
                {
                  week: '1',
                  icon: 'hub',
                  title: 'Automation Foundations with n8n',
                  items: ['Automation logic & workflow design', 'Setting up n8n environments', 'Working with triggers, nodes, and APIs', 'Building end-to-end workflows', 'Debugging and optimisation basics']
                },
                {
                  week: '2',
                  icon: 'rocket_launch',
                  title: 'Becoming Freelance & Client Ready',
                  items: ['High-demand automation use-cases', 'Designing service packages', 'Pricing your automation services', 'Creating client proposals', 'Setting up onboarding systems']
                },
                {
                  week: '3',
                  icon: 'campaign',
                  title: 'Client Acquisition & Marketing',
                  items: ['LinkedIn, WhatsApp & cold outreach', 'Automated outreach systems', 'Lead qualification frameworks', 'CRM & follow-up workflows', 'Building authority and positioning']
                },
                {
                  week: '4',
                  icon: 'payments',
                  title: 'High-Ticket Sales & Closing',
                  items: ['Discovery call frameworks', 'Understanding client pain points', 'Presenting automation ROI', 'Objection handling scripts', 'Closing premium deals confidently']
                },
                {
                  week: '5–8',
                  icon: 'trending_up',
                  title: 'Implementation, Scale & Support',
                  items: ['Delivering projects professionally', 'Managing multiple clients', 'Reusable templates & systems', 'Recurring revenue models', 'Scaling your agency operations']
                },
              ].map((week, i) => (
                <div
                  key={i}
                  className={`bg-white dark:bg-[#1a2332] p-8 rounded-2xl border border-black/5 dark:border-white/5 card-hover group ${i === 4 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-icons-round text-primary group-hover:text-white text-2xl transition-colors duration-300">{week.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">Week {week.week}</p>
                      <h4 className="font-display text-2xl mb-4">{week.title}</h4>
                      <ul className="space-y-2">
                        {week.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                            <span className="material-icons-round text-primary text-sm flex-shrink-0">check_circle</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── What's Included ── */}
          <div className="mb-20">
            <div className="text-center mb-12 scroll-reveal">
              <p className="font-mono text-sm text-primary uppercase tracking-widest mb-4">Everything You Need</p>
              <h3 className="font-display text-4xl md:text-5xl font-bold">What's Included</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-stagger">
              {[
                { icon: 'videocam', title: 'Live Training Sessions', desc: 'Weekly live calls with hands-on walkthroughs, Q&A, and real-time problem solving.' },
                { icon: 'description', title: 'Workflow Templates', desc: 'Copy-paste ready n8n workflows for the most common automation use-cases.' },
                { icon: 'business_center', title: 'Client System Frameworks', desc: 'Proposal templates, onboarding checklists, and delivery SOPs to look professional from day one.' },
                { icon: 'menu_book', title: 'Sales Playbooks', desc: 'Proven scripts for discovery calls, objection handling, and closing high-ticket deals.' },
                { icon: 'groups', title: 'Community Access', desc: 'Join a private group of 1,200+ automation builders to share wins, ask questions, and find collaborators.' },
                { icon: 'support_agent', title: 'Ongoing Support', desc: "Post-cohort access to resources, templates, and community. You're never on your own." },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-[#1a2332] p-6 rounded-2xl border border-black/5 dark:border-white/5 card-hover group">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <span className="material-icons-round text-primary group-hover:text-white text-xl transition-colors duration-300">{item.icon}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Who This Is For ── */}
          <div className="mb-20">
            <div className="text-center mb-12 scroll-reveal">
              <p className="font-mono text-sm text-primary uppercase tracking-widest mb-4">Is This For You?</p>
              <h3 className="font-display text-4xl md:text-5xl font-bold">Built for Builders Like You</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto scroll-reveal-stagger">
              {[
                { title: 'Freelancers', desc: 'Wanting higher-paying clients and a clear path to premium automation services.' },
                { title: 'Tech Professionals', desc: 'Exploring AI-powered services as a side income or career shift.' },
                { title: 'Consultants & Operators', desc: 'Looking to add automation as a high-value skill to their offering.' },
                { title: 'Aspiring Agency Owners', desc: "Serious about building a real automation business — not just learning theory." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white dark:bg-[#1a2332] p-6 rounded-2xl border border-black/5 dark:border-white/5 card-hover">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-icons-round text-primary text-lg">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA Block ── */}
          <div className="max-w-3xl mx-auto scroll-reveal-scale">
            <div className="bg-gradient-to-br from-primary to-cta p-[3px] rounded-[2rem] premium-shadow-primary">
              <div className="bg-background-light dark:bg-background-dark rounded-[calc(2rem-3px)] p-8 md:p-14 text-center space-y-6">
                <p className="font-mono text-xs text-primary uppercase tracking-widest">Start Building Your Agency</p>
                <h3 className="font-display text-3xl md:text-5xl leading-tight">
                  Stop Learning. <span className="text-gradient-primary">Start Earning.</span>
                </h3>
                <p className="text-base text-slate-800 dark:text-slate-200 max-w-xl mx-auto leading-relaxed">
                  Join 1,200+ students who've gone from zero to running their own automation agencies. 8 weeks. Real skills. Real clients. Real revenue.
                </p>
                <a
                  className="inline-flex items-center px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 premium-shadow-primary"
                  href="#"
                >
                  Claim Your Spot in the Next Cohort
                  <span className="material-icons-round ml-3">school</span>
                </a>
                <p className="text-xs text-slate-500">Limited seats per cohort · Live sessions · Lifetime community access</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ Section ── */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <p className="font-mono text-sm text-primary uppercase tracking-widest mb-4">Got Questions?</p>
            <h2 className="font-display text-5xl font-bold">Curious? Questions Answered.</h2>
          </div>
          <div className="scroll-reveal">
            <Accordion items={[
              {
                question: "How long does a typical automation project take?",
                answer: "Most of my custom consulting engagements last between 4 to 8 weeks. This allows us to map out your current friction points, design the new systems, and rigorously test them before hand-off."
              },
              {
                question: "Do I need to know how to code for the Academy?",
                answer: "No coding experience required! We focus on \"No-Code\" and \"Low-Code\" tools like Zapier and Make. If you can use a spreadsheet, you can build powerful automations."
              },
              {
                question: "What if my business tools are obscure?",
                answer: "If an app has an API, we can automate it. We've worked with everything from niche real estate CRMs to custom-built proprietary software."
              },
              {
                question: "What's the ROI on automation consulting?",
                answer: "On average, clients reclaim 20+ hours per week and see a 40%+ increase in operational efficiency within the first 60 days. Most see full ROI within the first quarter."
              },
              {
                question: "Do I need prior automation experience for the cohort?",
                answer: "Not at all. Week 1 covers automation foundations from scratch — including n8n setup, workflow logic, triggers, and APIs. The program is designed to take you from zero to running your own agency in 8 weeks."
              },
              {
                question: "What tools will I learn in the cohort?",
                answer: "The primary tool is n8n for building automation workflows. You'll also learn CRM setup, client outreach systems, lead qualification frameworks, and how to integrate APIs — everything you need to deliver real automation services to clients."
              }
            ]} />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
