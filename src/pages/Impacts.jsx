// Impacts.jsx
//
// Same pattern as Home.jsx: plain JS arrays hold the content, and JSX
// below maps over them. Splitting "data" from "markup" like this is
// what makes it easy to add another cultural impact later without
// touching any layout code.
import { HeroBanner, SectionCard, StakeholderBadge } from "../components";

const CULTURAL = [
  {
    title: "Faster job matching",
    description: "Candidates can be connected to roles that fit their background in days rather than weeks, shortening the path between applying and hearing back.",
  },
  {
    title: "Increased access to opportunities",
    description: "Automated screening can surface qualified candidates who lack traditional networks or referrals, giving them a more even shot at being seen.",
  },
  {
    title: "Potential bias",
    description: "Models trained on historical hiring data can absorb and repeat past patterns of discrimination, disadvantaging candidates by gender, race, age, or background.",
  },
];

const ECONOMIC = [
  {
    title: "Reduced hiring costs",
    description: "Automating the first review pass cuts the recruiter-hours needed per open role, lowering the overall cost of filling a position.",
  },
  {
    title: "Increased efficiency",
    description: "High-volume roles that once took weeks to shortlist can be narrowed down in a fraction of the time, speeding up the entire hiring funnel.",
  },
  {
    title: "Wrong candidate filtering",
    description: "Overly rigid keyword matching can filter out strong candidates whose resumes are phrased differently than the model expects, costing companies good hires.",
  },
];

const ENVIRONMENTAL = [
  {
    title: "Less paper use",
    description: "Digital applications and automated review replace printed resumes, application packets, and physical filing systems.",
  },
  {
    title: "Reduced physical recruiting",
    description: "Fewer in-person job fairs and paper-based processes are needed when sourcing and initial review happen digitally.",
  },
  {
    title: "Energy use from AI systems",
    description: "Training and running large models depends on data centers that consume significant electricity and water for cooling.",
  },
];

const STAKEHOLDERS = [
  { role: "Applicants", description: "Job seekers whose resumes are read, scored, and ranked by the system." },
  { role: "Employers", description: "Organizations that adopt the technology to manage hiring at scale." },
  { role: "Recruiters", description: "The people who act on the system's rankings when deciding who to interview." },
  { role: "HR Departments", description: "Teams responsible for choosing, configuring, and overseeing screening tools." },
];

function ImpactSection({ title, description, items }) {
  return (
    <div className="impact-block">
      <div className="section-heading">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <SectionCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

function Impacts() {
  return (
    <>
      <HeroBanner
        title="Weighing the impact"
        subtitle="How resume-screening AI affects culture, economics, and the environment, for better and for worse."
      />

      <section className="section">
        <div className="container impacts-stack">
          <ImpactSection
            title="How it changes the hiring experience"
            description="AI screening reshapes the relationship between applicants and employers, for both good and ill."
            items={CULTURAL}
          />
          <ImpactSection
            title="How it changes the cost of hiring"
            description="Automated screening shifts costs around rather than eliminating them entirely."
            items={ECONOMIC}
          />
          <ImpactSection
            title="How it changes resource use"
            description="Less paper on one side of the ledger, more computing power on the other."
            items={ENVIRONMENTAL}
          />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <h2>Who are the stakeholders?</h2>
            <p>Resume-screening AI touches more than just the person applying. Everyone below has a stake in how it's built and used.</p>
          </div>
          <div className="card-grid card-grid--badges">
            {STAKEHOLDERS.map((s) => (
              <StakeholderBadge key={s.role} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Impacts;
