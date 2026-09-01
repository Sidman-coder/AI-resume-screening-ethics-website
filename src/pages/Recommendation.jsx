// Recommendation.jsx
//
// This page focuses on a single ethical concern (transparency) rather
// than covering many topics shallowly. Structurally it's the same idea
// as the other two pages — a HeroBanner, a few <section> blocks, and
// small reusable pieces (CaseFile) — which is the benefit of having
// built those components once: every new page is mostly assembly.
import CaseFile from "../components/CaseFile";
import HeroBanner from "../components/HeroBanner";
import "./Recommendation.css";

const RECOMMENDATIONS = [
  {
    title: "Inform applicants when AI is being used",
    description: "Every candidate should be told, before or at the point of application, that an automated system will be involved in reviewing their resume.",
  },
  {
    title: "Provide explanations for decisions",
    description: "When a candidate is screened out, they should be able to learn, in plain language, what factors the system weighed most heavily.",
  },
  {
    title: "Require regular bias audits",
    description: "Screening tools should be tested on a recurring schedule for disparities in outcomes across gender, race, age, and disability status.",
  },
  {
    title: "Maintain human oversight",
    description: "A person should review borderline and rejected cases, not just approve whatever the model outputs by default.",
  },
  {
    title: "Allow applicants to request review",
    description: "Candidates should have a clear, accessible way to ask a human to re-examine an automated decision they believe was unfair.",
  },
];

function Recommendation() {
  return (
    <>
      <HeroBanner
        eyebrow="Recommendation"
        title="Lack of Transparency in Resume-Screening AI"
        subtitle="The technology is powerful and widely used — but most applicants have no idea it's making decisions about them, or why."
      />

      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">The Concern</span>
          <h2>What transparency means here</h2>
          <p>
            In hiring, transparency means an applicant can find out that an
            automated system evaluated their resume, understand in general
            terms how it made its decision, and see what factors mattered
            most to the outcome. It doesn't require exposing proprietary
            source code — it means the process isn't a complete black box
            to the person it affects most.
          </p>
          <p>
            Today, that's rarely the case. Most job seekers don't know
            whether a human or an algorithm rejected their application, and
            even when they suspect AI was involved, employers are under no
            general obligation to explain how the tool reached its
            conclusion.
          </p>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container narrow">
          <span className="eyebrow">Why It Matters</span>
          <h2>Why applicants should know how AI affects them</h2>
          <p>
            A resume-screening decision can end a candidate's chance at a
            job before a human ever sees their application. When that
            decision is invisible, applicants can't tell whether they were
            treated fairly, can't correct a factual error the system might
            have misread, and can't hold anyone accountable if the outcome
            was the result of a flawed or biased model.
          </p>
          <p>
            Transparency doesn't just protect individual candidates — it's
            also what allows bias to be discovered in the first place.
            Without visibility into how a system makes decisions, patterns
            of unfair filtering can run unnoticed for years.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Real-World Example</span>
            <h2>This is already a live policy question</h2>
            <p>Regulators and lawmakers have started to respond, though rules still vary widely by location.</p>
          </div>
          <div className="case-file-grid">
            <CaseFile label="Local Law" title="NYC's AI hiring transparency law">
              <p>
                New York City's Local Law 144 requires employers using
                automated employment decision tools to notify candidates,
                publish an independent bias audit of the tool, and disclose
                the data it relies on — one of the first laws in the country
                to directly regulate AI hiring transparency.
              </p>
            </CaseFile>
            <CaseFile label="Federal Guidance" title="EEOC concerns about algorithmic hiring">
              <p>
                The U.S. Equal Employment Opportunity Commission has warned
                that AI hiring tools can produce outcomes that violate
                existing anti-discrimination law, even unintentionally, and
                has urged employers to audit these systems for disparate
                impact on protected groups.
              </p>
            </CaseFile>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Recommendations</span>
            <h2>What responsible use should look like</h2>
            <p>Five concrete steps employers and developers can take to close the transparency gap.</p>
          </div>

          <ol className="rec-list">
            {RECOMMENDATIONS.map((rec, index) => (
              <li className="rec-list__item" key={rec.title}>
                <span className="rec-list__num">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{rec.title}</h3>
                  <p>{rec.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section conclusion">
        <div className="container narrow">
          <span className="eyebrow eyebrow--on-dark">Conclusion</span>
          <blockquote className="conclusion__quote">
            "AI should assist hiring decisions rather than completely
            replace human judgment."
          </blockquote>
          <p className="conclusion__body">
            Resume-screening AI is genuinely useful — it helps employers
            manage volume and helps qualified candidates get noticed faster.
            But a resume is a small, imperfect snapshot of a person, and no
            algorithm should have the final word on someone's career
            opportunity without a human able to see, question, and override
            its decision.
          </p>
        </div>
      </section>
    </>
  );
}

export default Recommendation;
