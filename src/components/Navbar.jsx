import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, personal } from '../data/portfolio'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-cyan-500/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        {/* Wordmark */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="text-sm font-semibold tracking-[0.15em] uppercase text-slate-400 hover:text-cyan-400 transition-colors duration-200"
        >
          MK
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            </li>
          ))}
          <li className="ml-4">
            <a
              href={`mailto:${personal.email}`}
              className="px-4 py-1.5 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-md border-b border-cyan-500/10 overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left py-2.5 text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
