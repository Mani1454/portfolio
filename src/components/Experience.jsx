import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '../data/portfolio'
import { SectionHeader } from './About'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="section-padding bg-navy-900">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          subtitle="Focused on AI architecture, enterprise automation, and intelligent backend systems."
        />

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-[26px] top-1.5 w-5 h-5 rounded-full bg-navy-800 border-2 border-cyan-500 shadow-lg shadow-cyan-500/30 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className="bg-navy-800 rounded-2xl p-6 sm:p-7 border border-slate-700/50 card-glow transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100">{exp.role}</h3>
                      <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-slate-400 font-mono">{exp.period}</span>
                      <div className="mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                          exp.type === 'Full-Time'
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                            : 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-navy-700 text-slate-300 border border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
