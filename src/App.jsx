// App.jsx
//
// REACT CONCEPT — what App.jsx does:
// App is the root component of the whole application. main.jsx renders
// <App /> once into the page's #root element, and everything the user
// ever sees is produced by App and the components it renders. Its job
// here is layout (Navbar always on top, Footer always on bottom) and
// routing (which page component fills the middle).
//
// REACT CONCEPT — React Router:
// A traditional multi-page website has one HTML file per URL, and the
// browser reloads the whole page on every navigation. React Router
// instead keeps a single page loaded and swaps which component is
// rendered based on the current URL — <BrowserRouter> reads the
// browser's address bar, <Routes> looks at that address, and each
// <Route> says "if the URL matches this `path`, render this
// `element`". That's what makes navigating between Home, Impacts, and
// Recommendation instant instead of triggering a full page reload.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Impacts from "./pages/Impacts";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar and Footer sit outside <Routes>, so they render on every
          page no matter which route is active — only the content in
          between changes as the user navigates. */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
