import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Stateless from "./Stateless";
import Work from "../../assets/Images/work.jpg";

const Card = "grid grid-cols-2 p-4 shadow-lg shadow-gray-300 rounded-md";
const work = "h-100 mx-auto shadow-lg";

function HomePage() {
  return (
    <div>
      <h1 className="">Welcome to my site</h1>
      <img src={Work} alt="it ain't much, but its honest work" />
      <div className="h-auto w-auto p-10">
        <Header name="Anna" color="purple" />
        <div className={Card}>
          <Main greet="Howdy" />
          <Sidebar greet="Hi" />
        </div>
      </div>
      <Stateless />
    </div>
  );
}

export default HomePage;
