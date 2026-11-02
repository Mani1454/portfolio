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
    index: "01",
    title: "Autonomous Infrastructure Agent",
    visual: "council",
    label: "OBSERVE. REASON. ACT. WITH OVERSIGHT.",
    discipline: "MULTI-AGENT SYSTEMS · RAG",
    year: "2026",
    category: "Agents & LLMs",
    summary:
      "A self-healing infrastructure lab that grounds agent decisions in runbooks and puts a human approval gate before remediation.",
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
    id: "swayspeak",
    index: "02",
    title: "SwaySpeak",
    visual: "voice",
    label: "A MORE NATURAL WAY TO LEARN.",
    discipline: "REAL-TIME VOICE AI",
    year: "2026",
    category: "Agents & LLMs",
    summary:
      "An English conversation coach that listens, offers spoken feedback, and answers naturally—with interruption handling throughout.",
    stack: [
      "FastAPI",
      "WebSockets",
      "Deepgram",
      "Groq",
      "AudioWorklet",
      "Docker",
    ],
    repo: "https://github.com/Mani1454/swayspeak",
    demo: "https://swayspeak.onrender.com/",
    problem:
      "Speaking practice needs room for natural pauses, useful feedback, and the freedom to interrupt. Sequential audio and model calls make conversations feel slow and rigid.",
    approach:
      "Stream microphone audio over WebSockets to a FastAPI backend, transcribe with Deepgram, generate structured coaching responses through Groq, and stream speech back to the browser alongside visual coaching cards.",
    decisions: [
      "Use AudioWorklet for browser audio capture and playback.",
      "Resample microphone audio to the transcription service’s expected sample rate.",
      "Coordinate cancellation across speech generation and playback when the learner interrupts.",
    ],
    result:
      "A deployed voice-coaching application with spoken corrections, direct answers, visual coach cards, and a modular streaming backend. The source documents Docker and local development workflows.",
    flow: [
      "Microphone",
      "Streaming STT",
      "LLM coaching",
      "Streaming TTS",
      "Audio & cards",
    ],
  },
  {
    id: "ais-anomaly",
    index: "03",
    title: "Signals in the open sea",
    visual: "trends",
    label: "MAKING UNUSUAL MOVEMENT VISIBLE.",
    discipline: "GEOSPATIAL ML · ANOMALY DETECTION",
    year: "2026",
    category: "ML & systems",
    summary:
      "An end-to-end AIS data pipeline that detects unusual vessel behavior and turns model outputs into interactive geospatial insights.",
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
      "An Android and web commerce project with customer browsing, cart and checkout, a store counter, live status updates, and a split-screen demonstration. It shows the full-stack engineering behind the AI work.",
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
      "Connecting model reasoning to runbooks, tools, and controlled workflows, with clear approval and audit boundaries.",
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
      "Building the streaming services and audio interfaces that make conversations with AI feel natural and responsive.",
    tags: [
      "Python · FastAPI",
      "WebSockets",
      "Deepgram · Groq",
      "AudioWorklet",
      "Async · Multithreading",
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
    role: "AI & Automation Engineer",
    company: "Enterprise AI Division",
    date: "AUG 2026 — PRESENT",
    description:
      "Build AI-driven automation for enterprise IT operations, including ticket triage, workflow routing, and AI/ML integrations. Focus on reliable backend components and maintainable operational workflows.",
    tags: ["Agentic AI", "Enterprise automation", "Backend engineering"],
  },
  {
    role: "AI Intern",
    company: "HumanizeIQ",
    date: "JUN — JUL 2026",
    description:
      "Integrated Gemini-powered features into Secure Chat, including brainstorming and diagramming. Refined prompts for summaries and user intent, and added permission-aware backend controls around AI requests.",
    tags: ["Gemini API", "Prompt engineering", "Secure backend"],
  },
];
