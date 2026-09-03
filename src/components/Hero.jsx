import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Ambient grid background ─────────────────────── */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Radial glow blobs ───────────────────────────── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* ── Left: text content ──────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-slow" />
              Available for opportunities
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto', animation: 'gradient-x 4s ease infinite' }}>
                {personal.name.split(' ')[0]}
              </span>
              <br />
              <span className="text-slate-100">{personal.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-cyan-300/80 font-medium mb-2"
            >
              {personal.title}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {personal.tagline}
            </motion.p>

            {/* ── CTA buttons ─────────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-400 hover:to-cyan-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3 rounded-xl font-semibold border border-slate-600 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200 active:scale-95"
              >
                Contact Me
              </a>
              <a
                href={personal.resumeUrl}
                download="Manish_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-violet-500/40 text-violet-300 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-200 transition-all duration-200 active:scale-95"
              >
                <FiDownload size={15} />
                Resume
              </a>
            </motion.div>

            {/* ── Social icons ────────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: personal.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-700 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: profile photo ─────────────────── */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0"
          >
            {/* Outer ring glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-cyan-500/20 blur-xl" />

            {/* Spinning dashed border */}
            <div
              className="absolute -inset-3 rounded-full border-2 border-dashed border-cyan-500/20"
              style={{ animation: 'spin 20s linear infinite' }}
            />

            {/* Photo container */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-navy-800 ring-2 ring-cyan-500/30 shadow-2xl">
              <img
                src="/assets/profile-photo.jpg"
                alt="Manish Kumar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Fallback gradient avatar */}
              <div
                className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-cyan-500/30 via-navy-800 to-violet-500/30 text-6xl font-bold text-slate-300"
                style={{ display: 'none' }}
              >
                MK
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-4 bg-navy-800 border border-cyan-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-cyan-400 shadow-lg backdrop-blur"
            >
              🤖 Agentic AI
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-2 -left-2 sm:-top-3 sm:-left-4 bg-navy-800 border border-violet-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-violet-400 shadow-lg backdrop-blur"
            >
              ⚡ Real-Time Voice
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Scroll cue ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
        >
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
