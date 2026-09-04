// App.jsx
//
// REACT CONCEPT — what App.jsx does:
// App is the root component of the whole application. main.jsx renders
// <App /> once into the page's #root element, and everything the user
// ever sees is produced by App and the components it renders. Its job
// here is layout (Navbar always on top, Footer always on bottom) and
// picking which page component fills the middle.
//
// REACT CONCEPT — useState instead of a router:
// There is no react-router here. Instead, `page` is a piece of state
// that holds the name of the page to show ("home", "impacts", or
// "recommendation"). Every "link" on the site is really a button that
// calls setPage with a new name. React re-renders with the new page,
// but the browser's address bar never changes — the whole site is one
// URL.
import { useState } from "react";
import { Footer, Navbar } from "./components";
import Home from "./pages/Home";
import Impacts from "./pages/Impacts";
import Recommendation from "./pages/Recommendation";

const PAGES = {
  home: Home,
  impacts: Impacts,
  recommendation: Recommendation,
};

function App() {
  const [page, setPage] = useState("home");

  // Look up which page component to render from the PAGES map above.
  const CurrentPage = PAGES[page];

  return (
    <>
      <Navbar page={page} onNavigate={setPage} />

      <main>
        <CurrentPage onNavigate={setPage} />
      </main>

      <Footer onNavigate={setPage} />
    </>
  );
}

export default App;
