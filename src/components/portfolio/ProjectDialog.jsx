import { useEffect, useRef } from "react";
import Icon from "./Icon";

export default function ProjectDialog({ project, onClose }) {
  const dialog = useRef();

  function containKeyboardFocus(event) {
    if (event.key !== "Tab") return;
    const focusable = dialog.current.querySelectorAll(
      'button, a[href], [tabindex="0"]',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  useEffect(() => {
    if (!project) return;
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [project]);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="case-title"
      onCancel={onClose}
      onKeyDown={containKeyboardFocus}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project ? (
        <div className="dialog-content">
          <button
            autoFocus
            className="dialog-close"
            onClick={onClose}
            aria-label="Close case study"
          >
            <Icon name="close" />
          </button>
          <p className="eyebrow">
            CASE STUDY / {project.index} <span>{project.year}</span>
          </p>
          <h2 id="case-title">{project.title}</h2>
          <p className="dialog-summary">{project.summary}</p>
          <div className="tag-list">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="case-flow" aria-label="System architecture">
            {project.flow.map((step, index) => (
              <span key={step}>
                <small>0{index + 1}</small>
                {step}
              </span>
            ))}
          </div>
          <div className="case-section">
            <h3>The problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className="case-section">
            <h3>The approach</h3>
            <p>{project.approach}</p>
          </div>
          <div className="case-section">
            <h3>Engineering decisions</h3>
            <ul>
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>
          <div className="case-section">
            <h3>The result</h3>
            <p>{project.result}</p>
          </div>
          <div className="dialog-actions">
            <a
              className="button button-primary"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              Explore the source <Icon name="arrow-up-right" />
            </a>
            {project.demo ? (
              <a
                className="button button-outline"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Open live demo <Icon name="arrow-up-right" />
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
