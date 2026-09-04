// components.jsx
//
// Every reusable UI piece the site's three pages are built from lives
// in this one file. They're small, "dumb" components — each one takes
// data in through props and returns JSX, with no state of its own.
// Splitting a UI into components like this means the actual page files
// (see src/pages/) mostly just assemble these pieces with real content,
// instead of repeating the same markup on every page.

// ---------------------------------------------------------------------
// SectionCard — one card component reused for every "grid of cards"
// section on the site (applications, benefits, impacts).
// ---------------------------------------------------------------------
export function SectionCard({ title, description }) {
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </article>
  );
}

// ---------------------------------------------------------------------
// StakeholderBadge — a small box used on the Impacts page to list who
// is affected by the technology.
// ---------------------------------------------------------------------
export function StakeholderBadge({ role, description }) {
  return (
    <div className="badge">
      <span className="badge__role">{role}</span>
      <p className="badge__description">{description}</p>
    </div>
  );
}

// ---------------------------------------------------------------------
// CaseFile — a box for citing a real law or policy, used on the
// Recommendation page. `children` lets the caller pass in a paragraph
// (or more) of JSX rather than a single `text` prop.
// ---------------------------------------------------------------------
export function CaseFile({ label, title, children }) {
  return (
    <div className="case-file">
      <span className="case-file__label">{label}</span>
      <h3 className="case-file__title">{title}</h3>
      <div className="case-file__body">{children}</div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Timeline — renders a list of dated events from an `items` array. The
// component holds no content itself; Home.jsx owns the history data
// and passes it in, keeping content and presentation separate.
// ---------------------------------------------------------------------
export function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li className="timeline__item" key={item.year}>
          <span className="timeline__year">{item.year}</span>
          <h3 className="timeline__title">{item.title}</h3>
          <p className="timeline__description">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

// ---------------------------------------------------------------------
// HeroBanner — the header block at the top of every page. `children`
// captures whatever buttons are nested between the opening/closing
// <HeroBanner> tags.
// ---------------------------------------------------------------------
export function HeroBanner({ title, subtitle, children }) {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {children && <div className="hero__actions">{children}</div>}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------
// Navbar — the site header, shown on every page. `page` is the name of
// the page currently on screen, and `onNavigate` is the function to
// call (with a page name) when a link is clicked. Since there is no
// router, these are plain <button> elements rather than <a> tags.
// ---------------------------------------------------------------------
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "impacts", label: "Impacts" },
  { id: "recommendation", label: "Recommendation" },
];

export function Navbar({ page, onNavigate }) {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <button type="button" className="navbar__brand" onClick={() => onNavigate("home")}>
          Resume-Screening AI
        </button>

        <nav aria-label="Primary">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={
                    page === link.id ? "navbar__link navbar__link--active" : "navbar__link"
                  }
                  onClick={() => onNavigate(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------
// Footer — rendered once in App.jsx, shown on every page. Written once
// here instead of pasted into each page file, so a footer edit only
// ever needs to happen in one place.
// ---------------------------------------------------------------------
export function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          An independent informational project exploring how artificial
          intelligence is reshaping hiring, and what responsible use of
          that technology should look like.
        </p>

        <nav className="footer__nav" aria-label="Footer">
          <button type="button" onClick={() => onNavigate("home")}>
            Home
          </button>
          <button type="button" onClick={() => onNavigate("impacts")}>
            Impacts
          </button>
          <button type="button" onClick={() => onNavigate("recommendation")}>
            Recommendation
          </button>
        </nav>
      </div>

      <div className="container">
        <p className="footer__legal">
          © {year} Resume-Screening AI Project. Built for educational purposes with React.
        </p>
      </div>
    </footer>
  );
}
