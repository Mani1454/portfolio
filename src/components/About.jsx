import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personal } from '../data/portfolio'

function SectionHeader({ label, title, subtitle }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-3">{title}</h2>
      {subtitle && <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">{subtitle}</p>}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
    </motion.div>
  )
}

export { SectionHeader }

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    { value: '2+', label: 'Years Building AI' },
    { value: '2', label: 'Production Projects' },
    { value: '2', label: 'Hackathon Wins' },
    { value: '<500ms', label: 'Voice Latency' },
  ]

  return (
    <section id="about" className="section-padding bg-navy-950">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeader
          label="About Me"
          title="Building AI That Ships"
          subtitle={null}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Bio text ───────────────────────────── */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-5">
              {personal.summary}
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              I'm drawn to the intersection of AI research and production engineering — where ideas become systems
              that users can actually touch. Whether it's shaving milliseconds off a voice pipeline or designing
              a self-healing agent that knows when to ask for human approval, I care deeply about{' '}
              <span className="text-cyan-400 font-medium">reliability, speed, and intent</span>.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Agentic Systems', 'Real-Time Voice AI', 'Enterprise Automation', 'Backend Engineering'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-navy-700 text-cyan-300 border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Stats grid ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-navy-800 rounded-2xl p-6 text-center border border-slate-700/50 card-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
