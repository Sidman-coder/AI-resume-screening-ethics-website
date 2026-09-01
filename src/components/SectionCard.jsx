// SectionCard.jsx
//
// REACT CONCEPT — reusable, prop-driven components:
// Instead of writing separate "ApplicationCard", "BenefitCard", and
// "ImpactCard" components that are all 90% identical HTML, we write
// ONE card component and let its *props* change what it shows. Every
// page in this project — Home's Applications/Benefits grids and the
// Impacts page's positive/negative cards — renders the same
// <SectionCard /> with different data passed in.
//
// `tone` is a good example of a prop that changes both the CSS class
// (via template-literal string building) and a bit of the JSX output
// (the little "+ Opportunity" / "– Concern" tag only appears when the
// card represents a pro or a con).
import Icon from "./Icon";
import "./SectionCard.css";

function SectionCard({ icon, title, description, tone = "neutral", meta }) {
  return (
    <article className={`card card--${tone}`}>
      {icon && (
        <div className="card__icon">
          <Icon name={icon} />
        </div>
      )}

      {meta && <span className="card__meta">{meta}</span>}

      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>

      {tone === "positive" && <span className="card__tag card__tag--positive">+ Opportunity</span>}
      {tone === "negative" && <span className="card__tag card__tag--negative">– Concern</span>}
    </article>
  );
}

export default SectionCard;
