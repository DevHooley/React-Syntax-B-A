import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import HelloWorld from "./components/HelloWorld";
import ModeToggler from "./components/ModeToggler";
import Promo from "./components/Promo";
import Parent from "./components/Parent";
import Stateless from "./components/Stateless";
import LittleLemon from "./components/LittleLemon";
import RideApp from "./components/RideApp/RideApp";
import HealthyEating from "./components/HealthyEating";
import AppHomePage from "./components/Homepage/AppHomePage";
import CalendarApp from "./components/CalendarApp/CalendarApp";

const Card = "grid grid-cols-2 p-4 shadow-lg shadow-gray-300 rounded-md";

function App() {
  return (
    <>
      <AppHomePage />
      <Promo />
      <Parent />
      {/* <HealthyEating /> */}
      <CalendarApp />
      <ModeToggler />
      <RideApp />
      <HelloWorld />
      <LittleLemon />
      <div className="h-auto w-auto p-10">
        <Header name="Anna" color="purple" />
        <div className={Card}>
          <Main greet="Howdy" />
          <Sidebar greet="Hi" />
        </div>
      </div>
      <Stateless />
    </>
  );
}

export default App;
