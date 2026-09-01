// Footer.jsx
//
// REACT CONCEPT — reusable components:
// This component is imported once into App.jsx and rendered on every
// page (see App.jsx below). Writing it once here, instead of pasting
// the same markup into Home.jsx, Impacts.jsx, and Recommendation.jsx,
// means a footer update — a new link, a corrected year — only has to
// happen in one place. That's the core benefit of breaking a UI into
// components: each piece of markup has exactly one source of truth.
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  // A plain JS expression, not a prop — computed once each render.
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__about">
          <span className="footer__brand">Resume-Screening AI</span>
          <p>
            An independent informational project exploring how artificial
            intelligence is reshaping hiring — and what responsible use of
            that technology should look like.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <span className="footer__nav-heading">Site</span>
          <Link to="/">Home</Link>
          <Link to="/impacts">Impacts</Link>
          <Link to="/recommendation">Recommendation</Link>
        </nav>

        <div className="footer__meta">
          <span className="footer__nav-heading">About this project</span>
          <p>
            Built to explain a real computing innovation in plain language,
            for general readers — not engineers.
          </p>
        </div>
      </div>

      <div className="container">
        <p className="footer__legal">
          © {year} Resume-Screening AI Project. Built for educational
          purposes with React &amp; React Router.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
