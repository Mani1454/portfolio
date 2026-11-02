export default function ProjectVisual({ type }) {
  if (type === "council")
    return (
      <div className="visual visual-council" aria-hidden="true">
        <div className="visual-grid" />
        <div className="council-caption">INFRA / AGENT OPERATIONS</div>
        <svg className="council-connections" viewBox="0 0 600 350">
          <defs>
            <linearGradient id="council-line">
              <stop stopColor="#ff763f" stopOpacity=".2" />
              <stop offset="1" stopColor="#ff763f" />
            </linearGradient>
          </defs>
          <path
            d="M120 100C120 180 300 110 300 220M300 100V220M480 100C480 180 300 110 300 220"
            fill="none"
            stroke="url(#council-line)"
          />
          <path d="M300 245v70" stroke="#ff763f" strokeDasharray="3 5" />
        </svg>
        <div className="agent-row">
          <div>
            <span>01</span>
            <i>⌘</i>
            <strong>Diagnoser</strong>
          </div>
          <div>
            <span>02</span>
            <i>✳</i>
            <strong>Planner</strong>
          </div>
          <div>
            <span>03</span>
            <i>◈</i>
            <strong>Operator</strong>
          </div>
        </div>
        <div className="council-core">
          a<span>i</span>
          <i>2</i>
        </div>
        <div className="council-result">
          <span /> RETRIEVE. PLAN. APPROVE.
        </div>
      </div>
    );
  if (type === "voice")
    return (
      <div className="visual visual-voice" aria-hidden="true">
        <div className="voice-rings">
          <i />
          <i />
          <i />
        </div>
        <div className="voice-top">
          <span className="status-dot" /> SWAYSPEAK <span>VOICE INTERFACE</span>
        </div>
        <div className="waveform">
          {Array.from({ length: 53 }, (_, i) => (
            <i
              key={i}
              style={{
                "--bar-height": `${12 + Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.23)) * 100}%`,
                "--bar-delay": `${i * 0.055}s`,
              }}
            />
          ))}
        </div>
        <div className="voice-bottom">
          <span>LISTEN.</span>
          <span>LEARN.</span>
          <span>SPEAK.</span>
        </div>
      </div>
    );
  if (type === "trends")
    return (
      <div className="visual visual-trends visual-maritime" aria-hidden="true">
        <div className="trend-header">
          <span>AIS / VESSEL INTELLIGENCE</span>
          <span>GEOSPATIAL ML ↗</span>
        </div>
        <svg className="maritime-map" viewBox="0 0 600 360">
          <defs>
            <pattern
              id="map-grid"
              width="35"
              height="35"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M35 0H0V35"
                fill="none"
                stroke="#a7bf9115"
                strokeWidth=".7"
              />
            </pattern>
          </defs>
          <rect width="600" height="360" fill="url(#map-grid)" />
          <path
            d="M0 60 60 82 95 70 127 118 113 155 160 177 139 200 170 251 120 290 131 360H0Z"
            fill="#9cae7b16"
            stroke="#9cae7b35"
          />
          <path
            d="M600 0H470l-20 40 25 32-45 25 35 41-5 42 57 25 83-12Z"
            fill="#9cae7b16"
            stroke="#9cae7b35"
          />
          <path
            d="m175 282 55-50 20-42 47-39 48-35 55-23"
            fill="none"
            stroke="#b3ca91"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="m190 290 45-35 27-44 43-18 35 25 37-37-17-52 49-48"
            fill="none"
            stroke="#eaa977"
            strokeWidth="1.5"
          />
          <circle
            cx="340"
            cy="218"
            r="24"
            fill="#eaa9770a"
            stroke="#eaa97750"
          />
          <circle cx="340" cy="218" r="5" fill="#eaa977" />
          <circle cx="175" cy="282" r="3" fill="#b3ca91" />
          <circle cx="400" cy="93" r="3" fill="#b3ca91" />
          <path d="m370 217 35 0 10 13h88" fill="none" stroke="#eaa97766" />
          <text
            x="420"
            y="222"
            fill="#e6bc96"
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="1"
          >
            ANOMALY FLAG
          </text>
          <text
            x="223"
            y="134"
            fill="#abc194"
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="1"
          >
            EXPECTED ROUTE
          </text>
        </svg>
        <span className="visual-note">ILLUSTRATIVE VESSEL TRAJECTORIES</span>
      </div>
    );
  return (
    <div className="visual visual-commerce" aria-hidden="true">
      <div className="commerce-caption">APNA KIRANA / LOCAL COMMERCE</div>
      <div className="commerce-phone">
        <div className="phone-island" />
        <div className="phone-store">
          apna<span>kirana.</span>
        </div>
        <p>
          Your neighbourhood,
          <br />
          <strong>delivered.</strong>
        </p>
        <div className="grocery-items">
          <span>
            ◒<small>Fresh produce</small>
          </span>
          <span>
            ◫<small>Daily essentials</small>
          </span>
        </div>
        <div className="phone-cart">
          Your basket <b>3 items ↗</b>
        </div>
      </div>
      <div className="commerce-counter">
        <div className="counter-title">
          <span className="status-dot" /> STORE COUNTER <span>LIVE</span>
        </div>
        <div className="counter-order">
          New order received <b>↗</b>
        </div>
        <div className="counter-item">
          <span>Order status</span>
          <strong>Preparing</strong>
        </div>
        <div className="counter-item">
          <span>Payment method</span>
          <strong>UPI</strong>
        </div>
        <div className="counter-sync">
          <span /> Customer & counter in sync
        </div>
      </div>
      <span className="commerce-study">INTERFACE STUDY</span>
    </div>
  );
}
