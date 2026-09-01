// CaseFile.jsx
//
// A styled callout used on the Recommendation page to set real-world
// examples (laws, regulatory concerns) visually apart from the body
// copy around them — like a citation or exhibit in a report.
//
// `children` lets the calling page pass in a chunk of JSX (here, a
// paragraph or two of explanation) to render inside the callout,
// rather than this component needing a `text` prop for every possible
// shape of content.
import "./CaseFile.css";

function CaseFile({ label, title, children }) {
  return (
    <div className="case-file">
      <span className="case-file__label">{label}</span>
      <h3 className="case-file__title">{title}</h3>
      <div className="case-file__body">{children}</div>
    </div>
  );
}

export default CaseFile;
