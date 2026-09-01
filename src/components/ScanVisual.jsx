// ScanVisual.jsx
//
// This is the site's signature visual: a stack of resume documents with
// a scanning beam highlighting one line and a match-score badge popping
// out. It's a purely decorative component (no props needed) built from
// plain CSS — no external image files — so it stays crisp at any screen
// size.
//
// Because it's decorative, we mark the wrapper aria-hidden="true" so
// screen readers skip straight past it to the real hero copy.
import "./ScanVisual.css";

function ScanVisual() {
  return (
    <div className="scan-visual" aria-hidden="true">
      <div className="scan-visual__stack">
        <div className="scan-visual__card scan-visual__card--back"></div>
        <div className="scan-visual__card scan-visual__card--mid"></div>

        <div className="scan-visual__card scan-visual__card--front">
          <div className="scan-visual__avatar"></div>
          <div className="scan-visual__line scan-visual__line--title"></div>
          <div className="scan-visual__line"></div>
          <div className="scan-visual__line"></div>
          <div className="scan-visual__line scan-visual__line--short"></div>
          <div className="scan-visual__line"></div>
          <div className="scan-visual__line scan-visual__line--short"></div>
          <div className="scan-visual__beam"></div>
        </div>
      </div>

      <div className="scan-visual__badge">
        <span className="scan-visual__badge-value">92%</span>
        <span className="scan-visual__badge-label">match score</span>
      </div>
    </div>
  );
}

export default ScanVisual;
