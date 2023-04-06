import React from "react";

const classes = "bg-black text-white w-64 mx-auto";

function ModeToggler() {
  let darkModeOn = true;
  const darkMode = <h1 className={classes}>Dark Mode is On</h1>;
  const LightMode = <h1 className={classes}>light Mode is On</h1>;
  const Card = "text-center p-4";
  const btn = "w-32 bg-sky-200 border-2 border-sky-500 rounded-md";

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn == true) {
      ("Dark mode is on");
    } else {
      ("Light mode is on");
    }
  }

  return (
    <div className={Card}>
      {darkModeOn ? darkMode : LightMode}
      <button className={btn} onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default ModeToggler;
