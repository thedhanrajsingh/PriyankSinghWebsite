
import React, { useEffect, useRef } from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { IMAGES } from '../constants';

export const ConsultationPage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      {/* ── Hero ── */}
      <section className="pt-12 pb-16 md:pt-24 md:pb-28 px-4 md:px-6 lg:px-8 overflow-hidden relative">
        {/* Background glow orbs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] glow-pulse"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <div className="space-y-8 scroll-reveal-left">
            <span className="inline-flex items-center px-4 py-1.5 glass-card-strong text-primary font-semibold text-xs uppercase tracking-widest rounded-full shimmer cursor-default">
              <span className="material-icons-round text-sm mr-2">business_center</span>
              Consultation for Business Owners
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-tight">
              Maximize Your Business With <span className="text-gradient-primary animated-underline active">Smart</span> Automation Systems
            </h1>
            <p className="text-base md:text-lg text-slate-800 dark:text-slate-200 max-w-xl leading-relaxed">
              Stop drowning in manual tasks. I build custom AI-driven workflows that recapture your time and scale your operations without adding headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold cursor-pointer hover:brightness-110 premium-shadow-primary hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center">
                Book a Strategy Call
                <span className="material-icons-round ml-2">calendar_today</span>
              </button>
            </div>

            {/* Client avatars */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[IMAGES.clientAvatar1, IMAGES.clientAvatar2, IMAGES.clientAvatar3].map((src, i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-2 border-background-light dark:border-background-dark bg-slate-200 overflow-hidden premium-shadow">
                    <img alt={`Trusted client ${i + 1}`} className="w-full h-full object-cover" src={src} />
                  </div>
                ))}
                <div className="w-11 h-11 rounded-full border-2 border-background-light dark:border-background-dark bg-primary flex items-center justify-center text-white text-xs font-bold">
                  50+
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Trusted by 50+ Business Owners</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative scroll-reveal-right">
            <div className="relative glass-card p-3 md:p-4 rounded-[2rem] premium-shadow-lg">
              <img
                alt="Priyank Singh consulting with a business owner"
                className="rounded-[1.5rem] w-full aspect-[4/5] object-cover"
                src={IMAGES.priyankConsultation}
              />
              {/* Floating efficiency badge */}
              <div className="absolute -left-6 bottom-16 glass-card-strong p-5 rounded-2xl premium-shadow-lg max-w-[200px] hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-icons-round text-green-500 text-lg">trending_up</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Efficiency Boost</span>
                </div>
                <div className="text-3xl font-display text-primary stat-glow">+42%</div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-primary h-full rounded-full w-[85%] shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#1E1E1E] border-y border-blue-100 dark:border-white/5 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 scroll-reveal">
            <p className="font-mono text-sm text-primary uppercase tracking-widest">Common Problems</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Is your growth hitting a <span className="text-gradient-primary">manual ceiling?</span>
            </h2>
            <p className="text-base text-slate-800 max-w-2xl mx-auto leading-relaxed">
              Scaling shouldn't mean working more hours. If you're facing these, you're ready for automation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 scroll-reveal-stagger">
            {[
              { icon: 'edit_note', title: 'Manual Data Entry', desc: "Your team spends hours moving data between apps instead of high-value tasks." },
              { icon: 'leak_remove', title: 'Lead Leakage', desc: "Follow-ups are missed and prospects go cold because there's no systematic nurture track." },
              { icon: 'blur_off', title: 'Internal Ops Chaos', desc: "Onboarding clients or employees feels like starting from scratch every single time." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-background-light dark:bg-background-dark rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-300 group card-hover">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                  <span className="material-icons-round text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-display text-2xl mb-4">{item.title}</h3>
                <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 scroll-reveal">
          <div className="space-y-4">
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs font-mono">How I Help You</span>
            <h2 className="font-display text-4xl md:text-5xl">Solutions Tailored for <br /><span className="text-gradient-primary">Your Infrastructure</span></h2>
          </div>
          <p className="text-base text-slate-800 max-w-sm leading-relaxed">Bespoke automation systems designed to fit your unique business logic, not the other way around.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 scroll-reveal-stagger">
          {/* Workflow Setup */}
          <div className="bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-white/5 rounded-3xl p-8 flex flex-col premium-shadow card-hover">
            <div className="mb-8">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-icons-round text-2xl">account_tree</span>
              </div>
              <h3 className="font-display text-3xl mb-4">Workflow Setup</h3>
              <p className="text-base text-slate-800 mb-6 leading-relaxed">Connecting your stack (Zapier/Make) to ensure information flows flawlessly between systems.</p>
              <ul className="space-y-3">
                {['Inter-app synchronization', 'Error handling & notification', 'Automated report generation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="material-icons-round text-primary text-lg">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto border-t border-slate-100 dark:border-white/5 pt-6">
              <a className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer animated-underline" href="#">
                Learn more <span className="material-icons-round">arrow_right_alt</span>
              </a>
            </div>
          </div>

          {/* CRM Automation — HIGHLIGHTED */}
          <div className="bg-primary text-white rounded-3xl p-8 flex flex-col premium-shadow-primary relative overflow-hidden card-hover">
            <div className="absolute -right-8 -top-8 opacity-10">
              <span className="material-icons-round text-[140px]">smart_toy</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>
            <div className="mb-8 relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-icons-round text-2xl">groups</span>
              </div>
              <h3 className="font-display text-3xl mb-4">CRM Automation</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">Transforming your CRM from a static database into a revenue-generating engine.</p>
              <ul className="space-y-3">
                {['Lead scoring & distribution', 'Automated follow-up sequences', 'Pipeline velocity tracking'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="material-icons-round text-white text-lg">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto border-t border-white/20 pt-6 relative z-10">
              <a className="text-white font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer" href="#">
                Learn more <span className="material-icons-round">arrow_right_alt</span>
              </a>
            </div>
          </div>

          {/* Internal Ops */}
          <div className="bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-white/5 rounded-3xl p-8 flex flex-col premium-shadow card-hover">
            <div className="mb-8">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-icons-round text-2xl">settings_suggest</span>
              </div>
              <h3 className="font-display text-3xl mb-4">Internal Ops</h3>
              <p className="text-base text-slate-800 mb-6 leading-relaxed">Standardizing the "back office" so you can scale without the typical growing pains.</p>
              <ul className="space-y-3">
                {['Automated client onboarding', 'Team task auto-assignment', 'Inventory/Resource management'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="material-icons-round text-primary text-lg">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto border-t border-slate-100 dark:border-white/5 pt-6">
              <a className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer animated-underline" href="#">
                Learn more <span className="material-icons-round">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Data-Driven Success ── */}
      <section className="py-12 md:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 dark:bg-black rounded-[2rem] p-10 md:p-20 relative text-white overflow-hidden noise-overlay">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] glow-pulse"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-10 scroll-reveal-left">
                <div>
                  <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Numbers That Speak</p>
                  <h2 className="font-display text-4xl md:text-5xl leading-tight">
                    Data-Driven Success <br /><span className="text-gradient-primary">In Real Time.</span>
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-8 scroll-reveal-stagger">
                  {[
                    { value: '+40%', label: 'Productivity' },
                    { value: '2.5k', label: 'Hours Saved/Yr' },
                    { value: 'Zero', label: 'Lead Leakage' },
                    { value: '120+', label: 'Workflows Built' },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-5xl font-display text-primary stat-glow">{stat.value}</div>
                      <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="scroll-reveal-right">
                <div className="bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-lg">
                  <div className="flex text-primary mb-4">
                    {[1, 2, 3, 4, 5].map(s => (
                      <span key={s} className="material-icons-round text-lg">star</span>
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                    "Priyank didn't just automate our emails; he rebuilt our entire lead-to-delivery pipeline. We've scaled 3x without hiring a single admin person."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold">JM</div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Julian Marcus</div>
                      <div className="text-xs text-slate-500 dark:text-slate-200 uppercase tracking-wider">CEO, SaaS Dynamics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="py-12 md:py-24 px-4 md:px-6 lg:px-8 bg-white dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4 scroll-reveal">
            <p className="font-mono text-xs text-primary uppercase tracking-widest">Your Journey</p>
            <h2 className="font-display text-4xl md:text-5xl">The Roadmap to <span className="text-gradient-primary">Freedom</span></h2>
            <p className="text-base text-slate-800 max-w-md mx-auto leading-relaxed">A structured approach to reclaiming your time.</p>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0"></div>
            <div className="grid md:grid-cols-4 gap-12 relative z-10 scroll-reveal-stagger">
              {[
                { step: '01', title: 'Discovery', desc: 'Deep dive into your current tech stack and pain points.', icon: 'search' },
                { step: '02', title: 'Audit', desc: 'Identifying automation bottlenecks and low-hanging fruit.', icon: 'analytics' },
                { step: '03', title: 'Build', desc: 'Custom development of your automation systems.', icon: 'build' },
                { step: '04', title: 'Optimize', desc: 'Testing, training, and ongoing performance refinement.', icon: 'rocket_launch' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-6 group cursor-default">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center relative premium-shadow-primary group-hover:scale-110 transition-transform duration-300">
                    <span className="material-icons-round text-2xl">{item.icon}</span>
                    <span className="absolute -top-2 -right-2 bg-white dark:bg-slate-900 text-primary text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-primary">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl mb-2">{item.title}</h4>
                    <p className="text-base text-slate-800 px-4 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto scroll-reveal-scale">
          <div className="bg-gradient-to-br from-primary to-cta p-[3px] rounded-[2rem] premium-shadow-primary">
            <div className="bg-background-light dark:bg-background-dark rounded-[calc(2rem-3px)] p-8 md:p-14 text-center space-y-8">
              <p className="font-mono text-xs text-primary uppercase tracking-widest">Start Today</p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight">
                Ready to build your <br /><span className="text-gradient-primary">Self-Operating Business?</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left glass-card p-6 rounded-2xl">
                {[
                  { icon: 'alarm', text: '45-Min Strategy Session' },
                  { icon: 'account_tree', text: 'Automation Blueprint' },
                  { icon: 'data_usage', text: 'ROI Forecast' },
                  { icon: 'quiz', text: 'Full Q&A Session' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    <span className="material-icons-round text-primary">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <button className="w-full bg-primary text-white px-8 py-5 rounded-xl font-bold text-lg cursor-pointer hover:brightness-110 premium-shadow-primary hover:scale-[1.02] transition-all duration-300">
                  Schedule Your Strategy Call
                </button>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
                  <span className="material-icons-round text-red-500 text-sm">schedule</span>
                  Limited Availability: Only 3 Spots left for next month
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── FAQ ── */}
      <section className="py-12 md:py-24 px-4 md:px-6 lg:px-8 bg-white dark:bg-[#1E1E1E]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center scroll-reveal">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Need Answers?</p>
            <h2 className="font-display text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4 scroll-reveal">
            {[
              {
                q: 'How long does an automation build take?',
                a: "Most core automation projects take between 4-8 weeks depending on complexity. We start with the highest ROI tasks first so you see impact within the first 14 days.",
                open: true
              },
              {
                q: 'Do I need to change my current software?',
                a: "Not necessarily. My goal is to build around your existing stack. If a specific tool is fundamentally broken for automation, I'll suggest a better alternative, but the final choice is always yours.",
                open: false
              },
              {
                q: 'What if something breaks?',
                a: "All builds include a 30-day monitoring period and I provide you with \"fail-safe\" alerts so you're never left in the dark if an API or app has an outage.",
                open: false
              },
              {
                q: 'What does the ROI typically look like?',
                a: "Clients typically see a 3-5x return within the first quarter. The combination of time savings, error reduction, and increased throughput compounds over time.",
                open: false
              }
            ].map((faq, i) => (
              <details key={i} className="group border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 cursor-pointer" open={faq.open || undefined}>
                <summary className="flex justify-between items-center list-none font-display text-xl p-6">
                  {faq.q}
                  <span className="material-icons-round group-open:rotate-180 transition-transform duration-300 text-primary">expand_more</span>
                </summary>
                <div className="text-base text-slate-800 dark:text-slate-200 leading-relaxed pb-6 px-6">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
