import { useEffect, useRef, useState } from "react";
import { projects, experience, links, capabilities } from "./data/portfolio";
import NeuralScene from "./components/portfolio/NeuralScene";
import ProjectVisual from "./components/portfolio/ProjectVisual";
import ProjectDialog from "./components/portfolio/ProjectDialog";
import Icon from "./components/portfolio/Icon";

const navigation = [
  ["work", "Selected work"],
  ["expertise", "Expertise"],
  ["about", "About"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const copyTimer = useRef();
  const visibleProjects =
    filter === "All work"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -45% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      clearTimeout(copyTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.querySelector(".menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Manish Kumar, home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">
            m<span>k</span>
            <i />
          </span>
          <span className="brand-name">
            MANISH
            <br />
            KUMAR
          </span>
        </a>
        <nav
          className={`navigation ${menuOpen ? "is-open" : ""}`}
          id="site-navigation"
          aria-label="Main navigation"
        >
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "is-active" : ""}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <Icon name="arrow-up-right" />
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" /> AVAILABLE FOR AI ENGINEERING ROLES
            </div>
            <h1 id="hero-heading">
              Engineering
              <br />
              <em>intelligence.</em>
            </h1>
            <div className="hero-intro">
              <span className="intro-line" />
              <p>
                I’m Manish, an AI engineer turning complex
                <br className="desktop-break" /> ideas into systems that{" "}
                <strong>think, speak, and act.</strong>
              </p>
            </div>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                Explore my work <Icon name="arrow-down-right" />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                <Icon name="github" /> GitHub <Icon name="arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <NeuralScene />
            <div className="art-coordinate top-coordinate">
              <span>FIG. 01</span> INTELLIGENCE, IN MOTION
            </div>
            <div className="art-coordinate bottom-coordinate">
              <span className="tiny-cross">+</span> GENERATE · EVALUATE · REFINE
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#work" className="scroll-cue">
              <span className="scroll-track">
                <i />
              </span>{" "}
              SCROLL TO DISCOVER
            </a>
            <span className="hero-specialties">
              AGENTIC AI <i /> VOICE SYSTEMS <i /> APPLIED ML
            </span>
            <span className="edition">PORTFOLIO / 2026</span>
          </div>
        </section>
        <div className="focus-strip" aria-label="Areas of focus">
          <span>FROM EXPERIMENT TO EXPERIENCE</span>
          <div>
            Multi-agent systems <span>✳</span> Real-time voice AI <span>✳</span>{" "}
            Retrieval & tool use <span>✳</span> Applied machine learning
          </div>
          <Icon name="asterisk" />
        </div>
        <section
          className="section work-section"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-number">01 /</span> SELECTED WORK
              </p>
              <h2 id="work-heading">
                Built to solve.
                <br />
                <span>Designed to matter.</span>
              </h2>
            </div>
            <p className="section-description">
              A few explorations in making AI useful.
              <br />
              Real problems, thoughtful systems, open code.
            </p>
          </div>
          <div className="work-toolbar">
            <div
              className="filter-list"
              role="group"
              aria-label="Filter projects"
            >
              {["All work", "Agents & LLMs", "ML & systems"].map((item) => (
                <button
                  key={item}
                  className={`filter ${filter === item ? "is-selected" : ""}`}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                  {item === "All work" ? <sup>04</sup> : null}
                </button>
              ))}
            </div>
            <span className="project-count" aria-live="polite">
              {String(visibleProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article
                className={`project-card project-${project.visual}`}
                key={project.id}
              >
                <button
                  className="project-cover"
                  onClick={() => setSelected(project)}
                  aria-label={`Read ${project.title} case study`}
                >
                  <ProjectVisual type={project.visual} />
                  <span className="project-index">/ {project.index}</span>
                  <span className="project-cover-label">{project.label}</span>
                  <span className="project-open">
                    <Icon name="arrow-up-right" />
                  </span>
                </button>
                <div className="project-meta">
                  <span>{project.discipline}</span>
                  <span>{project.year}</span>
                </div>
                <div className="project-title-row">
                  <h3>
                    <button onClick={() => setSelected(project)}>
                      {project.title}
                    </button>
                  </h3>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} source code on GitHub`}
                  >
                    <Icon name="github" />
                  </a>
                </div>
                <p className="project-summary">{project.summary}</p>
                <div className="tag-list">
                  {project.stack.slice(0, 4).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <a
            className="all-projects"
            href={links.github + "?tab=repositories"}
            target="_blank"
            rel="noreferrer"
          >
            <span>THERE’S MORE IN THE REPOSITORIES</span>
            <span>
              Explore all projects <Icon name="arrow-up-right" />
            </span>
          </a>
        </section>
        <section
          className="expertise-section"
          id="expertise"
          aria-labelledby="expertise-heading"
        >
          <div className="section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="section-number">02 /</span> THE TOOLKIT
                </p>
                <h2 id="expertise-heading">Beyond the prompt.</h2>
              </div>
              <p className="section-description">
                Models are one part of the system.
                <br />I care about everything around them.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <article className="capability" key={capability.title}>
                  <div className="capability-top">
                    <Icon name={capability.icon} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <div className="capability-tags">
                    {capability.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="principles">
              <span className="eyebrow">HOW I APPROACH THE WORK</span>
              <p>
                Start with the problem.<span> Make the system observable.</span>{" "}
                Keep the human in the loop.
              </p>
            </div>
          </div>
        </section>
        <section
          className="section about-section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="about-intro">
            <div>
              <p className="eyebrow">
                <span className="section-number">03 /</span> THE PERSON BEHIND
                THE CODE
              </p>
              <h2 id="about-heading">
                Curiosity is
                <br />
                the <em>constant.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m Manish Kumar, a software engineer focused on AI and systems,
                with a Computer Science & Engineering background from RGIPT. I
                build at the intersection of machine learning, software
                engineering, and useful human experiences.
              </p>
              <p>
                From conversational voice agents to infrastructure automation, I
                care about the details that make AI useful: grounded reasoning,
                fast feedback, reliable services, and human oversight.
              </p>
              <a
                href={links.linkedin}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                More about me on LinkedIn <Icon name="arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="experience-layout">
            <div className="experience-caption">
              <span className="eyebrow">EXPERIENCE</span>
              <p>
                Learning by
                <br />
                <span>building.</span>
              </p>
            </div>
            <div className="experience-list">
              {experience.map((job) => (
                <article className="experience-item" key={job.company}>
                  <div className="experience-header">
                    <div>
                      <h3>{job.role}</h3>
                      <span className="company">{job.company}</span>
                    </div>
                    <span className="experience-date">{job.date}</span>
                  </div>
                  <p>{job.description}</p>
                  <div className="tag-list">
                    {job.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
              <article className="education-item">
                <Icon name="education" />
                <div>
                  <h3>B.Tech · Computer Science & Engineering</h3>
                  <p>Rajiv Gandhi Institute of Petroleum Technology</p>
                </div>
                <span>2022 — 2026</span>
              </article>
            </div>
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="contact-orbit" aria-hidden="true" />
          <div className="section contact-inner">
            <p className="eyebrow">
              <span className="status-dot" /> OPEN TO THE NEXT CHALLENGE
            </p>
            <h2 id="contact-heading">
              Let’s build
              <br />
              something <em>intelligent.</em>
              <span className="contact-asterisk" aria-hidden="true">
                ✳
              </span>
            </h2>
            <div className="contact-bottom">
              <p>
                Hiring for an AI engineering role?
                <br />
                Have an interesting problem? Let’s talk.
              </p>
              <div className="email-actions">
                <a href={`mailto:${links.email}`} className="email-link">
                  {links.email} <Icon name="arrow-up-right" />
                </a>
                <button
                  className="copy-email"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  <Icon name={copied ? "check" : "copy"} />
                </button>
                <span className="copy-status" role="status">
                  {copied ? "Email copied" : ""}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a href="#home" className="footer-name">
          Manish Kumar <span>© {new Date().getFullYear()}</span>
        </a>
        <div>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub <Icon name="arrow-up-right" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Icon name="arrow-up-right" />
          </a>
          <a href="#home">
            Back to top <Icon name="arrow-up" />
          </a>
        </div>
      </footer>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export default App;
