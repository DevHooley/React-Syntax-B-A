import CalendarApp from "../CalendarApp/CalendarApp";
import ModeToggler from "./ModeToggler";
import HelloWorld from "./HelloWorld";
import LittleLemon from "./LittleLemon";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Stateless from "./Stateless";

const Card = "grid grid-cols-2 p-4 shadow-lg shadow-gray-300 rounded-md";

function HomePage() {
  return (
    <div>
      <h1 className="">Welcome to my site</h1>
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
