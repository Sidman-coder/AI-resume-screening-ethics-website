// Home.jsx
//
// REACT CONCEPT — functional components:
// A functional component is just a JavaScript function that returns
// JSX (markup that looks like HTML). React renders whatever that
// function returns. Home() takes no props because App.jsx renders it
// directly on the "/" route with nothing to pass in — compare that to
// HeroBanner or SectionCard below, which receive different data every
// time they're used.
import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import ScanVisual from "../components/ScanVisual";
import SectionCard from "../components/SectionCard";
import Timeline from "../components/Timeline";
import "./Home.css";

// Plain JS data, kept outside the component so it isn't recreated on
// every render. Passing this into <Timeline items={HISTORY} /> below
// is what lets Timeline stay a "dumb", reusable rendering component.
const HISTORY = [
  {
    year: "1990s–2000s",
    title: "Early applicant tracking systems",
    description:
      "The first Applicant Tracking Systems (ATS) let large employers store resumes digitally and filter them with simple keyword searches — the first step away from a human reading every application by hand.",
  },
  {
    year: "2010s",
    title: "Growth of machine learning hiring tools",
    description:
      "As machine learning matured, vendors began layering statistical models on top of ATS platforms, scoring resumes on predicted job fit rather than just matching exact keywords.",
  },
  {
    year: "Late 2010s–2020s",
    title: "Modern AI resume screening",
    description:
      "Natural language processing made it possible to read a resume more like a person would — understanding job titles, skills, and experience in context instead of scanning for isolated terms.",
  },
  {
    year: "Today",
    title: "Adopted by major organizations",
    description:
      "A large share of large employers now use some form of AI-assisted screening to manage high application volumes, making it one of the most widely deployed hiring technologies in the world.",
  },
];

const APPLICATIONS = [
  {
    icon: "rank",
    title: "Resume ranking",
    description:
      "Applications are automatically scored and ordered, so recruiters can review the most relevant candidates first instead of an unsorted pile.",
  },
  {
    icon: "match",
    title: "Candidate matching",
    description:
      "Skills, experience, and job requirements are compared to surface candidates whose background most closely fits an open role.",
  },
  {
    icon: "briefcase",
    title: "Talent acquisition",
    description:
      "Recruiting teams use screening data to guide sourcing strategy — spotting skill gaps and shaping which roles to prioritize filling.",
  },
  {
    icon: "network",
    title: "Large-scale recruiting",
    description:
      "For roles that draw thousands of applicants, AI screening makes it possible to review every submission instead of only a small sample.",
  },
];

const BENEFITS = [
  {
    icon: "speed",
    title: "Faster hiring",
    description:
      "Automated first-pass review shortens the time between an application being submitted and a candidate hearing back.",
  },
  {
    icon: "workload",
    title: "Reduced workload",
    description:
      "Recruiters spend less time on manual sorting and more time on interviews, relationship-building, and judgment calls that need a human.",
  },
  {
    icon: "network",
    title: "Scalability",
    description:
      "The same process that reviews a hundred applications can review a hundred thousand, without hiring proportionally more recruiters.",
  },
  {
    icon: "consistency",
    title: "Consistency",
    description:
      "Every resume can be evaluated against the same criteria, reducing the variation that comes from different reviewers on different days.",
  },
];

function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroBanner
        eyebrow="Computing Innovation"
        title="Resume-Screening AI"
        subtitle="How Artificial Intelligence is Transforming Hiring"
        size="large"
        visual={<ScanVisual />}
      >
        {/* These buttons are the `children` HeroBanner receives — see the
            comment in HeroBanner.jsx for how that prop works. Link, from
            react-router-dom, renders an <a> tag but navigates without a
            full page reload. */}
        <Link to="/impacts" className="btn btn-primary">
          Explore Impacts
        </Link>
        <Link to="/recommendation" className="btn btn-ghost">
          Read the Recommendation
        </Link>
      </HeroBanner>

      {/* 2. What is Resume-Screening AI? */}
      <section className="section" id="what-is">
        <div className="container what-is">
          <div className="what-is__copy">
            <span className="eyebrow">Definition</span>
            <h2>What is Resume-Screening AI?</h2>
            <p>
              Resume-screening AI is software that uses machine learning and
              natural language processing to automatically read, evaluate,
              and rank job applications. Instead of a recruiter opening each
              resume individually, the system parses every submission and
              produces a ranked shortlist for a human to review.
            </p>
            <p>
              Companies adopt it primarily to manage volume. A single
              corporate job posting can attract thousands of applicants
              within days, far more than any recruiting team could read
              individually. Screening software lets employers respond to
              every applicant while keeping the hiring pipeline moving,
              which is why it has become standard infrastructure at large
              and mid-sized organizations alike.
            </p>
          </div>

          <div className="what-is__steps" aria-label="How resume-screening AI works">
            <span className="what-is__steps-label">How it works</span>
            <ol className="how-it-works">
              <li>
                <span className="how-it-works__num">01</span>
                <div>
                  <h4>Parse the resume</h4>
                  <p>The system extracts text, structure, and keywords from each uploaded resume.</p>
                </div>
              </li>
              <li>
                <span className="how-it-works__num">02</span>
                <div>
                  <h4>Compare to the role</h4>
                  <p>Skills and experience are matched against the job description's requirements.</p>
                </div>
              </li>
              <li>
                <span className="how-it-works__num">03</span>
                <div>
                  <h4>Score and rank</h4>
                  <p>Each candidate receives a fit score, and the ranked list goes to a recruiter.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 3. History Timeline */}
      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">History</span>
            <h2>From filing cabinets to machine learning</h2>
            <p>Resume screening has been automated in stages, each one handling more of the process than the last.</p>
          </div>
          <Timeline items={HISTORY} />
        </div>
      </section>

      {/* 4. Applications */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Applications</span>
            <h2>Where it's used</h2>
            <p>The same underlying technology powers several distinct parts of the hiring process.</p>
          </div>
          {/* .map() turns the APPLICATIONS array into an array of JSX
              elements — one <SectionCard> per object. This is the
              standard React pattern for rendering a list. */}
          <div className="card-grid">
            {APPLICATIONS.map((app) => (
              <SectionCard key={app.title} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Benefits</span>
            <h2>Why organizations rely on it</h2>
            <p>Done well, automated screening changes the economics of hiring at scale.</p>
          </div>
          <div className="card-grid">
            {BENEFITS.map((benefit) => (
              <SectionCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
