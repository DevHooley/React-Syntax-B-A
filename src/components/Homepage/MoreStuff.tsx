import React from "react";
import CalendarApp from "../CalendarApp/CalendarApp";
import ModeToggler from "./ModeToggler";
import HelloWorld from "./HelloWorld";
import LittleLemon from "./LittleLemon";

function MoreStuff() {
  return (
    <div>
      <CalendarApp />
      <ModeToggler />
      <HelloWorld />
      <LittleLemon />
    </div>
  );
}

export default MoreStuff;
