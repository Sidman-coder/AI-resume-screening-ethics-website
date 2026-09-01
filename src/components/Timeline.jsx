// Timeline.jsx
//
// Renders a vertical history timeline from an array of data. Notice the
// component itself contains no hardcoded history facts — Home.jsx owns
// that content and passes it in through the `items` prop. This keeps
// content and presentation separate: editing the history copy never
// requires touching this file, and this file could render a completely
// different timeline if another page passed different `items`.
import "./Timeline.css";

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {/* .map() turns each item of data into one piece of JSX. The `key`
          prop isn't visible on screen — React uses it internally to
          track which list item is which across re-renders, which is
          why every list rendered with .map() needs a unique key. */}
      {items.map((item) => (
        <li className="timeline__item" key={item.year}>
          <div className="timeline__marker">
            <span className="timeline__dot"></span>
          </div>
          <div className="timeline__content">
            <span className="timeline__year">{item.year}</span>
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__description">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
