import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import MoreStuff from "./MoreStuff";
import { Routes, Route, Link } from "react-router-dom";

const Nav = "grid grid-cols-3 gap-6 bg-red-300 text-2xl text-white p-2";
const Header = "";
const navItem = "bg-red-500 mx-auto w-32 text-center rounded-md hover:bg-white hover:text-red-500 active:bg-red-100 active:text-red-500"


function AppHomePage() {
  return (
    <div className={Header}>
      <nav className={Nav}>
        <Link to="/" className={navItem}>
          Home Page
        </Link>
        <Link to="/more-stuff" className={navItem}>
          More stuff
        </Link>
        <Link to="/about-me" className={navItem}>
          About Me
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/more-stuff" element={<MoreStuff />}></Route>
      </Routes>
    </div>
  );
}

export default AppHomePage;
