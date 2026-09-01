// HeroBanner.jsx
//
// REACT CONCEPT — props:
// "Props" (short for properties) are how a parent component passes
// data down into a child component — similar to how an HTML element
// takes attributes (<img src="..." alt="..." />). Here, Home.jsx,
// Impacts.jsx, and Recommendation.jsx each render <HeroBanner> with
// different `eyebrow`, `title`, and `subtitle` values, so this ONE
// component can render three different-looking banners without its
// code being copy-pasted three times.
//
// `size`, `visual`, and `children` are also props — `visual` lets a
// caller drop in a custom graphic (like the ScanVisual on the home
// page), and `children` captures whatever JSX is nested between the
// opening and closing <HeroBanner> tags (typically call-to-action
// buttons), the same way children work inside a plain HTML element.
import "./HeroBanner.css";

function HeroBanner({ eyebrow, title, subtitle, visual, size = "compact", children }) {
  return (
    <section className={`hero hero--${size}`}>
      <div className="container hero__inner">
        <div className="hero__copy">
          {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}
          <h1 className="hero__title">{title}</h1>
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          {children && <div className="hero__actions">{children}</div>}
        </div>

        {visual && <div className="hero__visual">{visual}</div>}
      </div>
    </section>
  );
}

export default HeroBanner;
