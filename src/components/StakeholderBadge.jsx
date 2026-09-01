// StakeholderBadge.jsx
//
// A small presentational component styled like an ID badge — a nod to
// the HR/hiring subject matter. Takes simple props (role + description)
// so the Impacts page can render five of these from a plain array.
import "./StakeholderBadge.css";

function StakeholderBadge({ role, description }) {
  return (
    <div className="badge">
      <div className="badge__strip"></div>
      <div className="badge__hole" aria-hidden="true"></div>
      <span className="badge__role">{role}</span>
      <p className="badge__description">{description}</p>
    </div>
  );
}

export default StakeholderBadge;
