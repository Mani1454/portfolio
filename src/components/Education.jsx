import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education, achievements } from '../data/portfolio'
import { SectionHeader } from './About'
import { FiAward, FiBook } from 'react-icons/fi'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" className="section-padding bg-navy-950">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeader
          label="Education & Achievements"
          title="Academic Background"
          subtitle="Building on a strong CS foundation with real-world AI engineering experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" ref={ref}>
          {/* ── Education column ──────────────────── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FiBook className="text-cyan-400" size={18} />
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -25 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.15 }}
                  className="bg-navy-800 rounded-2xl p-5 border border-slate-700/50 card-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiBook className="text-cyan-400" size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-100 text-sm leading-tight mb-1">{edu.degree}</h4>
                      <p className="text-cyan-400/80 text-xs font-medium mb-1">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-slate-500 text-xs font-mono">{edu.period}</span>
                        <span className="text-violet-400 text-xs font-semibold">{edu.detail}</span>
                      </div>
                      {edu.coursework.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {edu.coursework.map((c) => (
                            <span key={c} className="text-xs px-2 py-0.5 rounded-md bg-navy-700 text-slate-400 border border-slate-600/40">
                              {c}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Achievements column ───────────────── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FiAward className="text-violet-400" size={18} />
              <h3 className="text-sm font-semibold text-violet-400 uppercase tracking-widest">Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, x: 25 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="flex items-center gap-4 bg-navy-800 rounded-2xl p-4 sm:p-5 border border-slate-700/50 card-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 text-lg">
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm">{ach.title}</h4>
                    <p className="text-violet-400 text-xs font-medium">{ach.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
