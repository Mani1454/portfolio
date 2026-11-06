import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { projects, experience, links, capabilities } from "./data/portfolio";
import ProjectVisual from "./components/portfolio/ProjectVisual";
import ProjectDialog from "./components/portfolio/ProjectDialog";
import Icon from "./components/portfolio/Icon";

const selectedWork = [projects[1], projects[0], projects[2], projects[3]];
const navigation = [
  ["work", "Work"],
  ["about", "About"],
  ["contact", "Contact"],
];

function useMotion(paused) {
  const lenis = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function setup() {
      lenis.current?.destroy();
      lenis.current = preference.matches
        ? null
        : new Lenis({
            autoRaf: true,
            lerp: 0.085,
            smoothWheel: true,
            syncTouch: false,
            anchors: { offset: -28 },
            prevent: (node) => node.tagName === "DIALOG",
          });
    }
    setup();
    preference.addEventListener("change", setup);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    return () => {
      lenis.current?.destroy();
      preference.removeEventListener("change", setup);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (paused) lenis.current?.stop();
    else lenis.current?.start();
  }, [paused]);
}

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  return <span>{time} IST</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(0);
  const copyTimer = useRef();
  const menuButton = useRef();
  useMotion(Boolean(selected));

  useEffect(() => () => clearTimeout(copyTimer.current), []);
  useEffect(() => {
    if (!menuOpen) return;
    function close(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
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
      <header className="site-header wrap">
        <a
          className="brand"
          href="#home"
          aria-label="Manish Kumar, home"
          onClick={() => setMenuOpen(false)}
        >
          mk<span>.</span>
        </a>

        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <nav
          id="site-navigation"
          className={`navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map(([id, label], index) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              <span>{label}</span>
              <sup>0{index + 1}</sup>
            </a>
          ))}
        </nav>
      </header>
      <main id="main">
        <section className="hero wrap" id="home" aria-labelledby="hero-heading">
          <div className="hero-kicker">
            <span>AI ENGINEER & DEVELOPER</span>
            <span>BASED IN INDIA ↗</span>
          </div>
          <h1 id="hero-heading" className="hero-name">
            <span>
              Manish Kumar<span className="blue-dot">.</span>
            </span>
          </h1>
          <div className="hero-bottom">
            <div className="portrait-note">
              <div className="portrait-print">
                <img
                  src={`${import.meta.env.BASE_URL}assets/profile-photo.jpg`}
                  alt="Manish Kumar"
                  width="200"
                  height="230"
                  fetchPriority="high"
                />
                <span>THE PERSON BEHIND THE CODE</span>
              </div>
              <span className="handwritten">Hey, that’s me!</span>
              <svg
                className="sketch-arrow"
                width="60"
                height="55"
                viewBox="0 0 60 55"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M55 45C18 54 5 30 18 8m-14 9L18 5l5 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="hero-description">
              <p>
                I build voice apps
                <br />
                and <em>AI agents.</em>
              </p>
              <span>
                Practice English with a talking tutor or trace how an
                infrastructure agent proposes a fix for an incident.
              </span>
              <a
                className="resume-link"
                href={`${import.meta.env.BASE_URL}assets/Manish_Kumar_Resume.pdf`}
                download="Manish_Kumar_Resume.pdf"
              >
                Download résumé (PDF)
              </a>
            </div>
            <div className="hero-side">
              <p>
                <span className="status-dot" /> OPEN TO OPPORTUNITIES
              </p>
              <a
                className="round-link"
                href="#work"
                aria-label="Explore selected work"
              >
                <Icon name="arrow-down-right" />
              </a>
              <span className="scroll-note">A FEW THINGS I’VE BUILT ↓</span>
            </div>
          </div>
        </section>

        <section
          className="work-section wrap"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="section-rule" data-reveal>
            <h2 id="work-heading">Selected work</h2>
            <span>2026</span>
            <span>(04)</span>
          </div>
          <div className="work-grid">
            {selectedWork.map((project, index) => (
              <article
                className={`project-card card-${project.visual}`}
                key={project.id}
                data-reveal
              >
                <button
                  className={`project-cover cover-${project.visual}`}
                  onClick={() => setSelected(project)}
                  aria-label={`Read ${project.title} case study`}
                >
                  <ProjectVisual type={project.visual} />
                  <span className="view-project">
                    View project <Icon name="arrow-up-right" />
                  </span>
                </button>
                <div className="project-info">
                  <div>
                    <span className="project-kind">{project.discipline}</span>
                    <h3>
                      <button onClick={() => setSelected(project)}>
                        {project.title}
                      </button>
                    </h3>
                  </div>
                  <span className="project-number">0{index + 1}</span>
                </div>
                <p className="project-description">{project.summary}</p>
              </article>
            ))}
          </div>
          <a
            className="underlined-link all-work"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            There’s more on GitHub <Icon name="arrow-up-right" />
          </a>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="wrap">
            <div className="section-rule" data-reveal>
              <span>A BIT ABOUT ME</span>
              <span>(02)</span>
            </div>
            <div className="about-intro" data-reveal>
              <span className="about-asterisk" aria-hidden="true">
                ✳
              </span>
              <h2 id="about-heading">
                About <em>Manish.</em>
              </h2>
            </div>
            <div className="about-columns" data-reveal>
              <p className="about-label">
                Software engineer
                <br />
                Based in India
              </p>
              <div className="about-copy">
                <p>
                  I studied computer science at the Rajiv Gandhi Institute of
                  Petroleum Technology. At Accenture, I work on what happens
                  after someone files an IT ticket: how it gets categorized,
                  who should handle it, and when it needs escalating.
                </p>
                <p>
                  Two of my projects explore when software should hand control
                  back to a person. In Speak with Sway, a learner can interrupt
                  the tutor mid-sentence. In my infrastructure lab, an operator
                  can inspect a proposed fix before the agent carries it out.
                </p>
              </div>
            </div>
            <div className="capability-list">
              {capabilities.map((capability, index) => (
                <div
                  className={`capability ${expanded === index ? "is-expanded" : ""}`}
                  key={capability.title}
                  data-reveal
                >
                  <h3>
                    <button
                      aria-expanded={expanded === index}
                      aria-controls={`capability-${index}`}
                      onClick={() =>
                        setExpanded(expanded === index ? -1 : index)
                      }
                    >
                      <span className="capability-number">0{index + 1}</span>
                      <span>{capability.title}</span>
                      <span className="expand-icon" aria-hidden="true">
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    className="capability-panel"
                    id={`capability-${index}`}
                    inert={expanded !== index ? "" : undefined}
                    aria-hidden={expanded !== index}
                  >
                    <div>
                      <p>{capability.description}</p>
                      <div className="tag-list">
                        {capability.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="experience-section" data-reveal>
              <h3>The journey so far</h3>
              <div className="experience-list">
                {experience.map((job) => (
                  <div className="experience-row" key={job.role}>
                    <div>
                      <h4>{job.role}</h4>
                      <p>{job.company}</p>
                    </div>
                    <span>{job.date}</span>
                  </div>
                ))}
                <div className="experience-row">
                  <div>
                    <h4>B.Tech. in Computer Science & Engineering</h4>
                    <p>Rajiv Gandhi Institute of Petroleum Technology</p>
                  </div>
                  <span>2022 — 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="contact-section wrap"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="section-rule" data-reveal>
            <span>HAVE SOMETHING IN MIND?</span>
            <span>(03)</span>
          </div>
          <div className="contact-heading-row" data-reveal>
            <h2 id="contact-heading">
              Let’s make
              <br />
              <em>something good.</em>
            </h2>
            <a
              className="contact-orb"
              href={`mailto:${links.email}`}
              aria-label="Email Manish Kumar"
            >
              <Icon name="arrow-up-right" />
              <span>SAY HELLO</span>
            </a>
          </div>
          <div className="contact-bottom" data-reveal>
            <p>
              A role, a collaboration, or a good conversation.
              <br />
              My inbox is open.
            </p>
            <div className="email-actions">
              <a href={`mailto:${links.email}`} className="email-link">
                {links.email}
              </a>
              <button
                className="copy-button"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                <Icon name={copied ? "check" : "copy"} />
                <span aria-live="polite">{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a href="#home" className="footer-credit" aria-label="Back to top">
          © {new Date().getFullYear()} Manish Kumar <Icon name="arrow-up" />
        </a>
        <span className="local-time">
          INDIA <LocalTime />
        </span>
        <div className="footer-socials">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub <Icon name="arrow-up-right" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Icon name="arrow-up-right" />
          </a>
        </div>
      </footer>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
