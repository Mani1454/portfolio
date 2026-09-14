// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit links, descriptions, and social URLs here.
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: 'Manish Kumar',
  title: 'AI & LLM Engineer',
  tagline: 'Building Agentic AI · Real-Time Voice Systems · Enterprise Automation',
  email: 'manishkumarmaurya8873@gmail.com',
  phone: '+91-8873679268',
  linkedin: 'https://www.linkedin.com/in/manish-kumar-22cs3037/',
  github: 'https://github.com/Mani1454',
  resumeUrl: '/assets/Manish_Kumar_Resume.pdf',
  summary:
    'Software engineer passionate about building intelligent, production-ready systems. ' +
    'I specialize in AI/LLM applications, agentic workflows, and real-time voice interfaces — ' +
    'shipping systems that are fast, reliable, and meaningfully automated. ' +
    'From sub-500ms voice pipelines to self-healing infrastructure agents, I focus on AI that actually works in production.',
}

export const skills = [
  {
    category: 'Languages',
    icon: '{ }',
    items: ['Python', 'C/C++', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'AI / LLMs',
    icon: '🧠',
    items: [
      'Google Gemini API',
      'Gemini 2.5 Flash',
      'Groq LLM',
      'Agentic AI',
      'Prompt Engineering',
      'Streaming LLMs',
      'Deepgram STT/TTS',
    ],
  },
  {
    category: 'Frameworks & Backend',
    icon: '⚙️',
    items: [
      'FastAPI',
      'Streamlit',
      'Uvicorn',
      'WebSockets',
      'REST APIs',
      'Async Programming',
      'Multithreading',
      'Starlette',
    ],
  },
  {
    category: 'Libraries & APIs',
    icon: '📦',
    items: [
      'google-genai',
      'psutil',
      'Pandas',
      'NumPy',
      'Plotly',
      'Web Audio API',
      'AudioWorklet',
      'Canvas API',
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠',
    items: ['Docker', 'Render', 'Streamlit Cloud', 'Git', 'GitHub', 'Linux'],
  },
]

export const experiences = [
  {
    role: 'AI & Automation Engineer',
    company: 'Enterprise AI Division',
    period: 'Aug 2026 – Present',
    type: 'Full-Time',
    bullets: [
      'Architect and deploy AI-driven automation for enterprise IT operations, streamlining ticket workflows and reducing repetitive manual effort at scale.',
      'Integrate AI/ML capabilities with IT service-management systems to improve ticket triage, workflow routing, and operational productivity.',
      'Build scalable, production-ready automation components with a focus on reliability, performance, and maintainability.',
    ],
    tags: ['Agentic AI', 'Enterprise Automation', 'Backend Engineering', 'AI/ML Integration'],
  },
  {
    role: 'AI Intern',
    company: 'HumanizeIQ',
    period: 'Jun 2026 – Jul 2026',
    type: 'Internship',
    bullets: [
      'Integrated Gemini-powered AI features into Secure Chat, enabling real-time conversation, brainstorming, diagramming, and creative assistant workflows.',
      'Engineered prompt strategies for summarization and intent understanding, improving response relevance across AI-assisted chat workflows.',
      'Hardened AI request flows with permission-aware backend controls to protect sensitive user data in secure enterprise chat contexts.',
    ],
    tags: ['Gemini API', 'Prompt Engineering', 'FastAPI', 'Secure Backend'],
  },
]

export const projects = [
  {
    title: 'AuraSpeak',
    subtitle: 'Real-Time AI Voice Assistant',
    description:
      'A production-grade real-time AI voice assistant achieving sub-500ms end-to-end response latency. ' +
      'Features a concurrent speech pipeline for transcription, LLM inference, and TTS playback with intelligent interruption handling for natural turn-taking.',
    bullets: [
      'Sub-500ms end-to-end latency via concurrent transcription + LLM + TTS pipeline',
      'Browser-based voice UI using Web Audio API, AudioWorklet & Canvas visualizations',
      'Multithreaded interruption handling for natural conversational turn-taking',
      'Containerized with Docker and deployed on Render',
    ],
    tags: ['Python', 'FastAPI', 'WebSockets', 'Deepgram STT/TTS', 'Groq LLM', 'Web Audio API', 'Docker', 'Render'],
    liveUrl: 'https://auraspeak.onrender.com/',
    githubUrl: 'https://github.com/Mani1454/auraspeak',
    accent: 'cyan',
  },
  {
    title: 'Autonomous Infrastructure Agent',
    subtitle: 'Self-Healing IT Operations',
    description:
      'An AI-powered self-healing infrastructure agent that autonomously detects CPU/RAM anomalies, ' +
      'performs root-cause analysis, and executes remediation — with a Human-in-the-Loop approval mechanism for controlled AI actions.',
    bullets: [
      'Detects CPU/RAM anomalies with AI-driven root-cause analysis via Gemini 2.5 Flash',
      'Human-in-the-Loop engine: manual-approval and autonomous remediation modes',
      'Real-time Plotly telemetry dashboards with append-only audit logging',
      'Interactive Demo Mode on Streamlit Community Cloud — credential-free',
    ],
    tags: ['Python', 'Streamlit', 'Gemini 2.5 Flash', 'psutil', 'Plotly', 'Agentic AI', 'Docker'],
    liveUrl: 'https://autonomous-infra-agent.streamlit.app/',
    githubUrl: 'https://github.com/Mani1454/autonomous-infra-agent',
    accent: 'violet',
  },
  {
    title: 'Apna Kirana',
    subtitle: 'Hyperlocal Commerce & Store Management Engine',
    description:
      'A full-stack hyperlocal ordering and store management system built from the ground up — ' +
      'enabling local Indian retail businesses to run their own direct delivery channel without paying 15–30% commission to aggregators like Blinkit or Zepto.',
    bullets: [
      'Dual-sided ecosystem: React Native customer app (Android APK + web) + real-time web POS for store counter',
      'Hindi Voice Soundbox announces new orders aloud; order status syncs to customer app in under 1 second',
      'UPI deep-link checkout — auto-fills GPay/PhonePe/Paytm with merchant ID and exact total',
      'Side-by-side live demo (split screen) showing customer and shopkeeper views simultaneously',
    ],
    tags: ['React Native', 'Expo', 'JavaScript', 'Vercel', 'UPI Payments', 'Real-Time Sync', 'Web POS'],
    liveUrl: 'https://apna-kirana-admin.vercel.app/live_demo.html',
    githubUrl: 'https://github.com/Mani1454/Online_shop',
    accent: 'emerald',
  },
]

export const education = [
  {
    degree: 'B.Tech. in Computer Science & Engineering',
    institution: 'Rajiv Gandhi Institute of Petroleum Technology',
    period: '2022 – 2026',
    detail: 'CPI: 7.69',
    coursework: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Deep Learning',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'Dr. I.S.N.R.K.P.L.D. Kisan College, Sitamarhi',
    period: '2019 – 2021',
    detail: 'Score: 80.8%',
    coursework: [],
  },
  {
    degree: 'Matriculation (Class X)',
    institution: 'Simultala Awasiya Vidyalaya',
    period: '2018 – 2019',
    detail: '94.2% · Bihar Board State Rank 13',
    coursework: [],
  },
]

export const achievements = [
  { icon: '🏆', title: 'IIT Mandi Hackathon', detail: 'Winner' },
  { icon: '🥈', title: 'IIT Bombay Hackathon', detail: 'Grand Finalist' },
  { icon: '🎯', title: 'JEE Advanced', detail: 'Top 2% nationally' },
  { icon: '🏅', title: 'Bihar Board Matriculation', detail: 'State Rank 13' },
  { icon: '📜', title: 'NTSE Stage 1', detail: 'Qualified' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
