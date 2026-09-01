// Icon.jsx
//
// A small hand-drawn icon set (plain inline SVG, no external library).
// Each icon is a tiny function that returns a <svg>. Icon itself is a
// single reusable component that picks which one to render based on
// a `name` prop — this is the same "one component, many outputs"
// pattern as SectionCard, just applied to graphics instead of cards.
const paths = {
  rank: (
    <>
      <path d="M4 19V13" />
      <path d="M10 19V8" />
      <path d="M16 19V4" />
      <path d="M20 19H4" />
    </>
  ),
  match: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.5l2.4 2.4L16 9.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7.5" width="17" height="11.5" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3.5 12.5h17" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M8 7.3L10.3 15.7M16 7.3L13.7 15.7M8.4 6H15.6" />
    </>
  ),
  speed: (
    <>
      <path d="M12 21a9 9 0 1 0-9-9" />
      <path d="M12 12l4.5-4.5" />
      <path d="M3 12h2M12 3v2" />
    </>
  ),
  workload: (
    <>
      <path d="M6 9h12l-1 10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19.5L6 9z" />
      <path d="M9 9V6.5A3 3 0 0 1 12 3.5a3 3 0 0 1 3 3V9" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M7 21h10" />
      <path d="M4 7l4-1.5L12 7M20 7l-4-1.5L12 7" />
      <path d="M4 7l-2 5a3 3 0 0 0 6 0l-2-5zM20 7l-2 5a3 3 0 0 0 6 0l-2-5z" />
    </>
  ),
  consistency: (
    <>
      <path d="M4 12a8 8 0 0 1 14-5.2M20 12a8 8 0 0 1-14 5.2" />
      <path d="M18 4v3.2h-3.2M6 20v-3.2h3.2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.6L19.5 10l-5.7 1.4L12 17l-1.8-5.6L4.5 10l5.7-1.4L12 3z" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14z" />
      <path d="M5 19c2-4 5-7 9-9" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M9.5 15c.3 1 1.2 1.5 2.5 1.5s2.5-.7 2.5-1.8c0-2.4-5-1.4-5-3.8 0-1.1 1.2-1.9 2.5-1.9s2.2.5 2.5 1.4" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 3L5 13.5h5.5L11 21l8-11h-5.5L13 3z" />
    </>
  ),
  warning: (
    <>
      <path d="M12 4.5l9 15.5H3l9-15.5z" />
      <path d="M12 10.5v4M12 17.5h.01" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5l7.5 3v5.2c0 5-3.2 8.3-7.5 9.8-4.3-1.5-7.5-4.8-7.5-9.8V6.5l7.5-3z" />
      <path d="M8.7 12.3l2.2 2.2 4.3-4.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M15.5 14.2c2.4.2 4 2 4 4.8" />
    </>
  ),
  gavel: (
    <>
      <path d="M13.5 6.5l4 4M10.2 9.8l4 4M3.5 20.5l6-6M9 8l4-4 3 3-4 4-3-3z" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.3 15.3L20.5 20.5" />
    </>
  ),
};

function Icon({ name, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}

export default Icon;
