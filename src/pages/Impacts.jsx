// Impacts.jsx
//
// Same pattern as Home.jsx: plain JS arrays hold the content, and JSX
// below maps over them. Splitting "data" from "markup" like this is
// what makes it easy to add a fifth cultural impact later without
// touching any layout code.
import HeroBanner from "../components/HeroBanner";
import SectionCard from "../components/SectionCard";
import StakeholderBadge from "../components/StakeholderBadge";
import "./Impacts.css";

const CULTURAL = [
  {
    icon: "spark",
    tone: "positive",
    meta: "Cultural",
    title: "Faster job matching",
    description: "Candidates can be connected to roles that fit their background in days rather than weeks, shortening the path between applying and hearing back.",
  },
  {
    icon: "users",
    tone: "positive",
    meta: "Cultural",
    title: "Increased access to opportunities",
    description: "Automated screening can surface qualified candidates who lack traditional networks or referrals, giving them a more even shot at being seen.",
  },
  {
    icon: "warning",
    tone: "negative",
    meta: "Cultural",
    title: "Potential bias",
    description: "Models trained on historical hiring data can absorb and repeat past patterns of discrimination, disadvantaging candidates by gender, race, age, or background.",
  },
  {
    icon: "eye",
    tone: "negative",
    meta: "Cultural",
    title: "Reduced human interaction",
    description: "Early-stage screening removes a human touchpoint from the process, which can make applying feel impersonal and leave candidates without direct feedback.",
  },
];

const ECONOMIC = [
  {
    icon: "coin",
    tone: "positive",
    meta: "Economic",
    title: "Reduced hiring costs",
    description: "Automating the first review pass cuts the recruiter-hours needed per open role, lowering the overall cost of filling a position.",
  },
  {
    icon: "bolt",
    tone: "positive",
    meta: "Economic",
    title: "Increased efficiency",
    description: "High-volume roles that once took weeks to shortlist can be narrowed down in a fraction of the time, speeding up the entire hiring funnel.",
  },
  {
    icon: "warning",
    tone: "negative",
    meta: "Economic",
    title: "Wrong candidate filtering",
    description: "Overly rigid keyword matching can filter out strong candidates whose resumes are phrased differently than the model expects, costing companies good hires.",
  },
  {
    icon: "briefcase",
    tone: "negative",
    meta: "Economic",
    title: "Cost of AI systems",
    description: "Licensing, integrating, and maintaining screening software is a real ongoing expense, particularly for smaller employers.",
  },
];

const ENVIRONMENTAL = [
  {
    icon: "leaf",
    tone: "positive",
    meta: "Environmental",
    title: "Less paper use",
    description: "Digital applications and automated review replace printed resumes, application packets, and physical filing systems.",
  },
  {
    icon: "network",
    tone: "positive",
    meta: "Environmental",
    title: "Reduced physical recruiting",
    description: "Fewer in-person job fairs and paper-based processes are needed when sourcing and initial review happen digitally.",
  },
  {
    icon: "bolt",
    tone: "negative",
    meta: "Environmental",
    title: "Energy use from AI systems",
    description: "Training and running large models depends on data centers that consume significant electricity and water for cooling.",
  },
];

const STAKEHOLDERS = [
  { role: "Applicants", description: "Job seekers whose resumes are read, scored, and ranked by the system." },
  { role: "Employers", description: "Organizations that adopt the technology to manage hiring at scale." },
  { role: "Recruiters", description: "The people who act on the system's rankings when deciding who to interview." },
  { role: "HR Departments", description: "Teams responsible for choosing, configuring, and overseeing screening tools." },
  { role: "AI Developers", description: "Engineers and companies who build and maintain the underlying models." },
];

function ImpactSection({ eyebrow, title, description, items }) {
  return (
    <div className="impact-block">
      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
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
        eyebrow="Impacts"
        title="Weighing the impact"
        subtitle="Every technology that changes hiring at scale changes life for the people inside that system. Here's how resume-screening AI affects culture, economics, and the environment — both for better and for worse."
      />

      <section className="section">
        <div className="container impacts-stack">
          <ImpactSection
            eyebrow="Cultural Impacts"
            title="How it changes the hiring experience"
            description="AI screening reshapes the relationship between applicants and employers, for both good and ill."
            items={CULTURAL}
          />
          <ImpactSection
            eyebrow="Economic Impacts"
            title="How it changes the cost of hiring"
            description="Automated screening shifts costs around rather than eliminating them entirely."
            items={ECONOMIC}
          />
          <ImpactSection
            eyebrow="Environmental Impacts"
            title="How it changes resource use"
            description="Less paper on one side of the ledger, more computing power on the other."
            items={ENVIRONMENTAL}
          />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Summary</span>
            <h2>Who are the stakeholders?</h2>
            <p>Resume-screening AI touches more than just the person applying — everyone below has a stake in how it's built and used.</p>
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
