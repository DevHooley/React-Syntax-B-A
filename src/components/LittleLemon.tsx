import React from "react";
import Heading from "./Heading";
const btn =
  "shadow-lg text-2xl text-yellow-300 bg-red-300  font-semibold border-2 border-red-500 rounded-md capitalize mx-auto w-2/6 text-center pl-1 pr-1";

function LittleLemon() {
  const [word, setWord] = React.useState("eat");

  function handleClick() {
    setWord("Drink");
  }

  return (
    <div className="grid grid-cols-1">
      <Heading message={word + " at little Lemon"} />
      <button className={btn} onClick={handleClick}>
        Click here
      </button>
    </div>
  );
}

export default LittleLemon;
