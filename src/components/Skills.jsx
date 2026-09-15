import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'
import { SectionHeader } from './About'

const categoryColors = {
  'Languages': { bg: 'bg-sky-500/10', text: 'text-sky-300', border: 'border-sky-500/20', header: 'text-sky-400' },
  'AI & LLMs': { bg: 'bg-cyan-500/10', text: 'text-cyan-300', border: 'border-cyan-500/20', header: 'text-cyan-400' },
  'AI / LLMs': { bg: 'bg-cyan-500/10', text: 'text-cyan-300', border: 'border-cyan-500/20', header: 'text-cyan-400' },
  'Frameworks & Backend': { bg: 'bg-violet-500/10', text: 'text-violet-300', border: 'border-violet-500/20', header: 'text-violet-400' },
  'Mobile & Frontend': { bg: 'bg-rose-500/10', text: 'text-rose-300', border: 'border-rose-500/20', header: 'text-rose-400' },
  'Libraries & APIs': { bg: 'bg-emerald-500/10', text: 'text-emerald-300', border: 'border-emerald-500/20', header: 'text-emerald-400' },
  'DevOps & Tools': { bg: 'bg-amber-500/10', text: 'text-amber-300', border: 'border-amber-500/20', header: 'text-amber-400' },
}

function SkillCard({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const colors = categoryColors[skill.category] || categoryColors['Languages']

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="bg-navy-800 rounded-2xl p-5 sm:p-6 border border-slate-700/50 card-glow transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl">{skill.icon}</span>
        <h3 className={`font-bold text-sm tracking-wide uppercase ${colors.header}`}>
          {skill.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border} transition-all duration-200 hover:scale-105 cursor-default`}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-navy-900">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeader
          label="Technical Skills"
          title="Skills Matrix"
          subtitle="Languages, AI/LLM tools, backend frameworks, and DevOps stack."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
