import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects, personal } from '../data/portfolio'
import { SectionHeader } from './About'
import { FiExternalLink, FiGithub, FiZap } from 'react-icons/fi'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isCyan = project.accent === 'cyan'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-navy-800 rounded-2xl border border-slate-700/50 card-glow overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Top accent bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${
          isCyan ? 'from-cyan-500 to-cyan-400' : 'from-violet-500 to-violet-400'
        }`}
      />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Icon + title */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              isCyan ? 'bg-cyan-500/15 text-cyan-400' : 'bg-violet-500/15 text-violet-400'
            }`}
          >
            <FiZap size={18} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 leading-tight">{project.title}</h3>
            <p className={`text-sm font-medium ${isCyan ? 'text-cyan-400' : 'text-violet-400'}`}>
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Bullet highlights */}
        <ul className="space-y-2 mb-6 flex-1">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-xs text-slate-300 leading-relaxed">
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  isCyan ? 'bg-cyan-500' : 'bg-violet-500'
                }`}
              />
              {b}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2.5 py-1 rounded-md font-medium border ${
                isCyan
                  ? 'bg-cyan-500/8 text-cyan-300 border-cyan-500/20'
                  : 'bg-violet-500/8 text-violet-300 border-violet-500/20'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isCyan
                ? 'bg-cyan-500 text-white hover:bg-cyan-400 shadow-lg shadow-cyan-500/20'
                : 'bg-violet-500 text-white hover:bg-violet-400 shadow-lg shadow-violet-500/20'
            }`}
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-all duration-200"
          >
            <FiGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-navy-950">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeader
          label="Featured Work"
          title="Projects"
          subtitle="Production-ready AI systems — from sub-500ms voice pipelines to self-healing infrastructure agents."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          More projects on{' '}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            GitHub →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
