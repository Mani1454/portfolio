import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personal } from '../data/portfolio'
import { SectionHeader } from './About'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="section-padding bg-navy-900">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeader
          label="Get In Touch"
          title="Let's Work Together"
          subtitle="Whether it's an exciting AI project, a collaboration, or just a hello — my inbox is open."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* ── Main contact card ─────────────────────── */}
          <div className="bg-navy-800 rounded-3xl p-8 sm:p-10 border border-slate-700/50 card-glow text-center mb-8">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 border border-cyan-500/20 flex items-center justify-center text-2xl mx-auto mb-6">
              👋
            </div>

            <h3 className="text-2xl font-bold text-slate-100 mb-1">{personal.name}</h3>
            <p className="text-cyan-400 font-medium text-sm mb-6">{personal.title}</p>

            {/* ── Contact rows ─────────────────────────── */}
            <div className="flex flex-col items-center gap-3 mb-6">
              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-cyan-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                <FiMail size={16} />
                {personal.email}
              </a>

              {/* Phone */}
              <a
                href={`tel:${personal.phone.replace(/[-\s]/g, '')}`}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-slate-600 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-500/5 font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                <FiPhone size={15} />
                {personal.phone}
              </a>
            </div>

            {/* ── Download Resume ───────────────────────── */}
            <a
              href={personal.resumeUrl}
              download="Manish_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-2xl border-2 border-violet-500/50 text-violet-300 font-semibold text-sm hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-200 transition-all duration-200 hover:scale-105 active:scale-95 mb-6"
            >
              <FiDownload size={16} />
              Download Resume
            </a>

            {/* Location */}
            <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-8">
              <FiMapPin size={12} />
              <span>India · Open to Remote & Relocation</span>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-700/60 mb-8" />

            {/* Social links */}
            <div className="flex justify-center gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white text-sm font-medium transition-all duration-200 hover:bg-slate-700/30"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-sky-600/40 text-sky-400 hover:border-sky-500 hover:bg-sky-500/10 text-sm font-medium transition-all duration-200"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── Availability note ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Currently available for new opportunities
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Footer bar ──────────────────────────────── */}
      <div className="mt-16 pt-8 border-t border-slate-800">
        <div className="container-max max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} {personal.name}. Built with React + Tailwind.</p>
          <p className="flex items-center gap-1">
            Designed & developed with{' '}
            <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </section>
  )
}
