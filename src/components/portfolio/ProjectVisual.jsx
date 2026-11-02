// Original editorial illustrations, not screenshots or live project telemetry.
const waveHeights = [
  12, 22, 36, 19, 48, 65, 32, 54, 88, 112, 70, 46, 91, 128, 103, 54, 76, 112,
  145, 118, 69, 36, 55, 78, 44, 24, 38, 17, 28, 12,
];
export default function ProjectVisual({ type }) {
  if (type === "voice")
    return (
      <div className="visual visual-voice" aria-hidden="true">
        <div className="voice-wordmark">
          sway<span>speak</span>
          <span className="voice-flower">✳</span>
        </div>
        <span className="visual-small voice-subtitle">
          A LITTLE PRACTICE. A LOT MORE CONFIDENCE.
        </span>
        <div className="conversation">
          <div className="speech speech-one">
            Let’s talk about your day.<span>↗</span>
          </div>
          <div className="speech speech-two">Okay, where do I start?</div>
        </div>
        <div className="sound-wave">
          {waveHeights.map((height, i) => (
            <i key={i} style={{ height: `${height}px`, "--bar": i }} />
          ))}
        </div>
        <span className="voice-listening">
          <i /> YOUR VOICE, FINDING ITS FLOW.
        </span>
      </div>
    );
  if (type === "council")
    return (
      <div className="visual visual-infra" aria-hidden="true">
        <div className="infra-brand">
          <span>
            infra<span className="infra-star">✳</span>
          </span>
          <span>
            AN EXTRA PAIR
            <br />
            OF EYES.
          </span>
        </div>
        <div className="infra-window">
          <div className="window-top">
            <span>
              <i />
              <i />
              <i />
            </span>
            <span>INCIDENT WORKSPACE</span>
            <b>↗</b>
          </div>
          <div className="infra-window-body">
            <div className="infra-alert">
              <span className="infra-alert-dot" />
              <span>Something needs a closer look.</span>
              <b>01</b>
            </div>
            <div className="infra-step">
              <span>01</span>
              <div>
                <b>Find the context</b>
                <small>Retrieve relevant runbooks</small>
              </div>
              <i>✓</i>
            </div>
            <div className="infra-step">
              <span>02</span>
              <div>
                <b>Make a plan</b>
                <small>Propose a clear next step</small>
              </div>
              <i>✓</i>
            </div>
            <div className="infra-approval">
              <span>03</span>
              <div>
                <b>You have the final say.</b>
                <small>Waiting for human approval</small>
              </div>
              <span>↗</span>
            </div>
          </div>
        </div>
        <div className="infra-footnote">
          <span>OBSERVE → UNDERSTAND → ACT</span>
          <span>WITH YOU IN CONTROL.</span>
        </div>
      </div>
    );
  if (type === "trends")
    return (
      <div className="visual visual-sea" aria-hidden="true">
        <div className="sea-header">
          <span>FIELD NOTES / 003</span>
          <span>MARITIME INTELLIGENCE</span>
        </div>
        <div className="sea-title">
          A sea of data.
          <br />
          <em>A clearer picture.</em>
        </div>
        <svg className="sea-map" viewBox="0 0 600 400" fill="none">
          <g stroke="currentColor" strokeWidth="0.8" opacity=".25">
            <path d="M-40 300C120 50 200 380 370 170S600 100 660 20M-40 320C130 70 210 400 380 190S610 120 670 40M-40 340C140 90 220 420 390 210S620 140 680 60M-40 360C150 110 230 440 400 230S630 160 690 80M-40 380C160 130 240 460 410 250S640 180 700 100M-40 400C170 150 250 480 420 270S650 200 710 120M-40 420C180 170 260 500 430 290S660 220 720 140M-40 440C190 190 270 520 440 310S670 240 730 160M-40 460C200 210 280 540 450 330S680 260 740 180" />
          </g>
          <path
            className="vessel-path"
            d="M65 280 146 244 210 255 267 192 326 208 380 155 435 128 493 154 540 99"
            stroke="#eaf3dd"
            strokeWidth="2"
            strokeDasharray="5 7"
          />
          <g fill="#eaf3dd">
            <circle cx="65" cy="280" r="4" />
            <circle cx="267" cy="192" r="5" />
            <circle cx="435" cy="128" r="5" />
          </g>
          <circle cx="493" cy="154" r="24" fill="#edee9e" fillOpacity=".15" />
          <circle cx="493" cy="154" r="7" fill="#edee9e" />
          <path d="m493 154 32 48h52" stroke="#edee9e" />
          <text
            x="507"
            y="220"
            fill="#edee9e"
            fontSize="10"
            fontFamily="monospace"
          >
            LOOK CLOSER
          </text>
        </svg>
        <div className="map-coordinate">AIS / MOVEMENT / PATTERNS</div>
      </div>
    );
  return (
    <div className="visual visual-kirana" aria-hidden="true">
      <div className="kirana-wordmark">
        <span>अपना</span>
        <strong>kirana.</strong>
      </div>
      <p className="kirana-tagline">
        Your neighbourhood.
        <br />A little more connected.
      </p>
      <div className="shopping-receipt">
        <div className="receipt-top">
          APNA KIRANA<span>YOUR LOCAL STORE, ONLINE</span>
        </div>
        <div className="receipt-line">
          <span>Fresh essentials</span>
          <span>✓</span>
        </div>
        <div className="receipt-line">
          <span>Order from anywhere</span>
          <span>✓</span>
        </div>
        <div className="receipt-line">
          <span>Pay with UPI</span>
          <span>✓</span>
        </div>
        <div className="receipt-total">
          <span>Made for your everyday.</span>
          <span>♡</span>
        </div>
        <div className="receipt-barcode" />
        <span className="receipt-thanks">THANK YOU. SEE YOU AGAIN!</span>
      </div>
      <div className="kirana-sticker">
        <span>
          LOCAL
          <br />
          FEELS
          <br />
          <b>GOOD.</b>
        </span>
      </div>
    </div>
  );
}
