import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function NeuralScene() {
  const mount = useRef();
  const controls = useRef({
    paused: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  });
  const [paused, setPaused] = useState(controls.current.paused);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const host = mount.current;
    let disposed = false;
    let cleanup;
    import("./neuralRenderer")
      .then(({ createNeuralRenderer }) => {
        if (disposed) return;
        cleanup = createNeuralRenderer(host, controls);
        if (cleanup) setReady(true);
      })
      .catch(() => {
        /* Keep the CSS sculpture visible without WebGL. */
      });
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      controls.current.paused = preference.matches;
      setPaused(preference.matches);
    };
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  return (
    <div className="neural-scene">
      <div
        ref={mount}
        className={`neural-canvas ${ready ? "is-ready" : ""}`}
        role="img"
        aria-label="An interactive copper neural knot surrounded by orbital paths and particles"
      />
      <div
        className={`neural-fallback ${ready ? "is-hidden" : ""}`}
        aria-hidden="true"
      >
        <i />
        <i />
        <i />
      </div>
      <div className="scene-controls">
        <span>
          <i className={paused ? "" : "is-live"} />{" "}
          {ready ? "REAL-TIME 3D" : "NEURAL STUDY"}
        </span>
        {ready ? (
          <button
            onClick={() => {
              controls.current.paused = !paused;
              setPaused(!paused);
            }}
            aria-label={paused ? "Play 3D animation" : "Pause 3D animation"}
            aria-pressed={paused}
          >
            <Icon name={paused ? "play" : "pause"} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
