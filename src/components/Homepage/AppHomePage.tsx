import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import { Routes, Route, Link } from "react-router-dom";

const Nav = "grid grid-cols-2 bg-red-300 text-2xl text-white";
const Header = "";

function AppHomePage() {
  return (
    <div className={Header}>
      <nav className={Nav}>
        <Link to="/" className="nav-Item">
          Home Page
        </Link>
        <Link to="/about-me" className="nav-Item">
          About Me
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default AppHomePage;
