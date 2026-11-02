const paths = {
  "arrow-up-right": <path d="M5 19 19 5M5 5h14v14" />,
  "arrow-down-right": <path d="m5 5 14 14M5 19h14V5" />,
  "arrow-up": <path d="M12 20V4m-7 7 7-7 7 7" />,
  github: (
    <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4c0-1 .1-1.5-.5-2.1 3.3-.4 6.8-1.6 6.8-7.3 0-1.6-.6-2.9-1.5-3.9.2-.4.7-1.9-.1-3.8 0 0-1.3-.4-4.1 1.5a14 14 0 0 0-7.5 0C5.3.4 4 1 4 1c-.8 1.9-.3 3.4-.1 3.8A5.6 5.6 0 0 0 2.4 9c0 5.7 3.5 6.5 6.8 6.9-.5.5-.7 1.2-.7 2.1v3.3" />
  ),
  nodes: (
    <>
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="18" r="3" />
      <circle cx="19" cy="18" r="3" />
      <path d="m10.5 8-4 7m7-7 4 7M8 18h8" />
    </>
  ),
  wave: <path d="M2 10v4m4-8v12m4-16v20m4-17v14m4-11v8m4-6v4" />,
  layers: (
    <>
      <path d="m12 2 10 6-10 6L2 8l10-6Z" />
      <path d="m2 12 10 6 10-6M2 16l10 6 10-6" />
    </>
  ),
  education: <path d="m2 9 10-6 10 6-10 6L2 9Zm4 3v6c4 3 8 3 12 0v-6M22 9v9" />,
  asterisk: <path d="M12 1v22M2.5 6.5l19 11M2.5 17.5l19-11" />,
  copy: (
    <>
      <rect x="8" y="8" width="12" height="13" rx="2" />
      <path d="M16 8V3H3v13h5" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  close: <path d="m5 5 14 14M5 19 19 5" />,
  menu: <path d="M3 7h18M3 17h18" />,
  pause: <path d="M8 5v14M16 5v14" />,
  play: <path d="m8 5 11 7-11 7V5Z" />,
};
export default function Icon({ name, ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths["arrow-up-right"]}
    </svg>
  );
}
