// Navbar.jsx
//
// REACT CONCEPT — React Router:
// A normal <a href="/impacts"> would make the browser throw away the
// whole page and re-request it from the server. React Router's <Link>
// (and <NavLink>) intercept that click and swap components in place
// instead, which is what makes a React app feel like a fast, seamless
// "single-page application" instead of a stack of separate web pages.
//
// <NavLink> is a special version of <Link> that already knows which
// route is currently active. Instead of us tracking "which page am I
// on?" in state, NavLink hands that function a boolean (`isActive`)
// and we use it to decide whether to add a highlighting CSS class.
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// Centralizing the link list as data (rather than hand-writing three
// near-identical <NavLink> tags) means adding a new page later is a
// one-line change here instead of an edit to the JSX markup below.
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/impacts", label: "Impacts" },
  { to: "/recommendation", label: "Recommendation" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link
          to="/"
          className="navbar__brand"
        >
          <span className="navbar__brand-mark" aria-hidden="true"></span>
          <span className="navbar__brand-text">Resume-Screening AI</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                {/* NavLink's className can take a function so we can style
                    the *currently active* page differently — this is how
                    "highlight the current page" is implemented. */}
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    isActive ? "navbar__link navbar__link--active" : "navbar__link"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
