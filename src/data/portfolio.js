// Verified against Mani1454/portfolio and the linked project repositories.
// Keep public-facing claims and links here so future updates stay in one place.
export const links = {
  email: "manishkumarmaurya8873@gmail.com",
  github: "https://github.com/Mani1454",
  linkedin: "https://www.linkedin.com/in/manish-kumar-22cs3037/",
};

export const projects = [
  {
    id: "infrastructure-agent",
    index: "02",
    title: "Autonomous Infrastructure Agent",
    visual: "council",
    label: "OBSERVE. REASON. ACT. WITH OVERSIGHT.",
    discipline: "MULTI-AGENT SYSTEMS · RAG",
    year: "2026",
    category: "Agents & LLMs",
    summary:
      "An operations lab where an agent looks up incident runbooks and proposes a fix. An operator can review the plan, approve a simulated action, and inspect the audit log.",
    stack: [
      "Python",
      "ChromaDB",
      "Azure OpenAI",
      "Streamlit",
      "psutil",
      "Plotly",
    ],
    repo: "https://github.com/Mani1454/autonomous-infra-agent",
    demo: "https://autonomous-infra-agent.streamlit.app/",
    problem:
      "Infrastructure alerts need context before they become safe actions. A useful operations agent must connect telemetry to relevant runbooks, explain its plan, and make execution inspectable.",
    approach:
      "A Diagnoser agent retrieves incident context from ChromaDB and produces a diagnostic report. A Planner turns it into structured remediation tool calls. In the default human-in-the-loop mode, execution waits for operator approval, then records actions and checks system health.",
    decisions: [
      "Ground diagnosis in a searchable incident and runbook knowledge base.",
      "Separate diagnosis, planning, approval, and execution into explicit stages.",
      "Provide mock infrastructure tools and an offline engine for repeatable, credential-free demonstrations.",
    ],
    result:
      "A Streamlit mission-control application with telemetry, incident simulation, retrieval, multi-agent planning, an approval workflow, and audit logging. Infrastructure remediation tools are simulated in the demo.",
    flow: [
      "Telemetry",
      "RAG diagnosis",
      "Tool plan",
      "Human approval",
      "Action & audit",
    ],
  },
  {
    id: "speak-with-sway",
    index: "01",
    title: "Speak with Sway",
    visual: "voice",
    discipline: "VOICE AI · LIVE AVATAR",
    year: "2026",
    summary:
      "Practice spoken English with a tutor whose face moves as it replies. Sway suggests more natural phrasing, asks follow-up questions, and lets you interrupt.",
    stack: ["FastAPI", "WebSockets", "Deepgram", "Groq", "OpenSpline", "AudioWorklet"],
    repo: "https://github.com/Mani1454/speak-with-sway",
    demo: "https://speak-with-sway.onrender.com/",
    problem:
      "A learner needs time to finish a thought and a way to take the floor again. Gaps in the audio or a face that keeps talking after an interruption break the rhythm.",
    approach:
      "FastAPI streams microphone audio to Deepgram for transcription. Groq generates a reply, Deepgram synthesizes the voice, and OpenSpline animates the tutor’s face from that audio.",
    decisions: [
      "Connect the face when the page opens. Ask for microphone access when the learner starts a conversation.",
      "Keep a small buffer of ordered audio packets so the renderer can keep playing while the next packets arrive.",
      "On interruption, stop playback and cancel the current reply while keeping the conversation history.",
    ],
    result:
      "The tutor runs in a browser on Render. Learners can speak or type, and voice chat is available if the avatar service is busy. The current deployment serves one conversation at a time.",
    flow: ["Microphone", "Transcription", "Coaching reply", "Speech synthesis", "Avatar playback"],
  },
  {
    id: "ais-anomaly",
    index: "03",
    title: "Vessel Anomaly Detection",
    visual: "trends",
    label: "MAKING UNUSUAL MOVEMENT VISIBLE.",
    discipline: "GEOSPATIAL ML · ANOMALY DETECTION",
    year: "2026",
    category: "ML & systems",
    summary:
      "Flag unusual vessel movements in AIS position reports and inspect them on a map. The pipeline keeps the original coordinates separate from the scaled inputs used by the models.",
    stack: ["Python", "Scikit-learn", "PostGIS", "Folium", "Pandas"],
    repo: "https://github.com/Mani1454/ais-vessel-anomaly-detection",
    problem:
      "Raw vessel positions do not explain suspicious movement or identity inconsistencies. Geospatial data also needs careful handling so model transformations do not corrupt map coordinates.",
    approach:
      "Validate and clean AIS records, engineer movement and identity features, combine unsupervised anomaly detectors, and compare supervised vessel classifiers. Store spatial results in PostGIS and inspect them on Folium maps.",
    decisions: [
      "Combine Isolation Forest, Local Outlier Factor, and an autoencoder in an anomaly ensemble.",
      "Keep model feature scaling separate from geographic coordinates used for storage and mapping.",
      "Use a modular batch pipeline with explicit data, feature, and model stages.",
    ],
    result:
      "A demonstration pipeline with anomaly detection, vessel-type classification, spatial storage, and interactive maps. The project documents its small demonstration dataset and future evaluation improvements.",
    flow: [
      "AIS records",
      "Validation",
      "Feature pipeline",
      "Model ensemble",
      "PostGIS & maps",
    ],
  },
  {
    id: "apna-kirana",
    index: "04",
    title: "Apna Kirana",
    visual: "model",
    label: "LOCAL COMMERCE. CONNECTED.",
    discipline: "FULL-STACK · REAL-TIME SYSTEMS",
    year: "2026",
    category: "ML & systems",
    summary:
      "A customer app and store-counter experience that connects local retailers with direct ordering, UPI checkout, and live order updates.",
    stack: [
      "React Native",
      "Expo",
      "Firestore",
      "JavaScript",
      "Web Speech API",
    ],
    repo: "https://github.com/Mani1454/Online_shop",
    demo: "https://apna-kirana-admin.vercel.app/live_demo.html",
    problem:
      "Local retailers need an ordering experience that connects customers, payments, and store operations without depending on an aggregator’s storefront.",
    approach:
      "Build a React Native customer application and a web point-of-sale interface, synchronize order state through Firestore, and use UPI intents for checkout. A browser-based Hindi soundbox announces incoming orders.",
    decisions: [
      "Share order state across customer and shopkeeper experiences with real-time subscriptions.",
      "Use native UPI deep links with a prefilled merchant and order total.",
      "Provide a side-by-side browser demo to make the full journey easy to explore.",
    ],
    result:
      "An Android and web commerce project with customer browsing, cart and checkout, a store counter, live status updates, and a split-screen demonstration. The demo shows an order moving from the customer’s basket to the store counter.",
    flow: [
      "Customer app",
      "Order & UPI",
      "Cloud sync",
      "Store counter",
      "Status update",
    ],
  },
];

export const capabilities = [
  {
    icon: "nodes",
    title: "Agents & grounded reasoning",
    description:
      "I connect agents to searchable runbooks and record the actions an operator approves.",
    tags: [
      "Multi-agent orchestration",
      "RAG · ChromaDB",
      "Azure OpenAI · Gemini",
      "Structured tool calls",
      "Human-in-the-loop",
    ],
  },
  {
    icon: "wave",
    title: "Real-time AI experiences",
    description:
      "I connect speech recognition, synthesis, and avatar playback so a learner can speak, listen, and interrupt.",
    tags: [
      "Python · FastAPI",
      "WebSockets",
      "Deepgram · Groq",
      "OpenSpline",
      "AudioWorklet",
    ],
  },
  {
    icon: "layers",
    title: "Systems that support the AI",
    description:
      "Bringing data pipelines, APIs, and product interfaces together so the model becomes part of a working system.",
    tags: [
      "Scikit-learn · Pandas",
      "SQL · PostGIS",
      "React · React Native",
      "Docker · Linux · Git",
      "REST APIs",
    ],
  },
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    date: "AUG 2026 — PRESENT",
  },
  {
    role: "Software Developer Intern",
    company: "Accenture",
    date: "DEC 2025 — MAY 2026",
  },
];
