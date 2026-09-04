// Home.jsx
//
// REACT CONCEPT — functional components:
// A functional component is just a JavaScript function that returns
// JSX (markup that looks like HTML). React renders whatever that
// function returns. Home() receives `onNavigate` from App.jsx, which
// it uses so its two buttons can switch the page without a router.
import { HeroBanner, SectionCard, Timeline } from "../components";
// REACT CONCEPT — importing an image:
// Vite (the build tool this project uses) lets a JS file `import` an
// image file directly. The bundler turns that import into a URL string
// pointing at the built image, which is why `resumeScanImage` below can
// be dropped straight into an <img src={...}> tag.
import resumeScanImage from "../assets/resume-scan.svg";

// Plain JS data, kept outside the component so it isn't recreated on
// every render. Passing this into <Timeline items={HISTORY} /> below
// is what lets Timeline stay a "dumb", reusable rendering component.
const HISTORY = [
  {
    year: "1990s–2000s",
    title: "Early applicant tracking systems",
    description:
      "The first Applicant Tracking Systems (ATS) let large employers store resumes digitally and filter them with simple keyword searches, the first step away from a human reading every application by hand.",
  },
  {
    year: "2010s–2020s",
    title: "Machine learning and NLP screening",
    description:
      "Statistical models and natural language processing let systems score resumes on predicted job fit and read them more like a person would, instead of just matching keywords.",
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
    title: "Resume ranking",
    description:
      "Applications are automatically scored and ordered, so recruiters can review the most relevant candidates first instead of an unsorted pile.",
  },
  {
    title: "Candidate matching",
    description:
      "Skills, experience, and job requirements are compared to surface candidates whose background most closely fits an open role.",
  },
  {
    title: "Talent acquisition",
    description:
      "Recruiting teams use screening data to guide sourcing strategy, spotting skill gaps and shaping which roles to prioritize filling.",
  },
];

const BENEFITS = [
  {
    title: "Faster hiring",
    description:
      "Automated first-pass review shortens the time between an application being submitted and a candidate hearing back.",
  },
  {
    title: "Reduced workload",
    description:
      "Recruiters spend less time on manual sorting and more time on interviews, relationship-building, and judgment calls that need a human.",
  },
  {
    title: "Scalability",
    description:
      "The same process that reviews a hundred applications can review a hundred thousand, without hiring proportionally more recruiters.",
  },
];

function Home({ onNavigate }) {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroBanner
        title="Resume-Screening AI"
        subtitle="How Artificial Intelligence is Transforming Hiring"
      >
        {/* These buttons are the `children` HeroBanner receives — see the
            comment in HeroBanner.jsx for how that prop works. Calling
            onNavigate changes which page App.jsx renders. */}
        <button type="button" className="btn btn-primary" onClick={() => onNavigate("impacts")}>
          Explore Impacts
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onNavigate("recommendation")}
        >
          Read the Recommendation
        </button>
      </HeroBanner>

      {/* 2. What is Resume-Screening AI? */}
      <section className="section" id="what-is">
        <div className="container what-is">
          <img
            src={resumeScanImage}
            alt="A resume document with a magnifying glass and a checkmark, representing an AI system reviewing an application"
            className="what-is__image"
          />
          <div className="what-is__copy">
            <h2>What is Resume-Screening AI?</h2>
            <p>
              Resume-screening AI is software that uses machine learning and
              natural language processing to automatically read, evaluate,
              and rank job applications. Instead of a recruiter opening each
              resume individually, the system parses every submission and
              produces a ranked shortlist for a human to review.
            </p>
            <p>
              Companies adopt it primarily to manage volume: a single
              posting can draw thousands of applicants within days, far
              more than any recruiting team could read individually.
            </p>
          </div>

          <div className="what-is__steps" aria-label="How resume-screening AI works">
            <h3>How it works</h3>
            <ol className="how-it-works">
              <li>
                <span className="how-it-works__num">1.</span>
                <div>
                  <h4>Parse the resume</h4>
                  <p>The system extracts text, structure, and keywords from each uploaded resume.</p>
                </div>
              </li>
              <li>
                <span className="how-it-works__num">2.</span>
                <div>
                  <h4>Compare to the role</h4>
                  <p>Skills and experience are matched against the job description's requirements.</p>
                </div>
              </li>
              <li>
                <span className="how-it-works__num">3.</span>
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
