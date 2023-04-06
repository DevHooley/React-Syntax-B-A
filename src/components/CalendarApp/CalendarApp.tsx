import React from "react";

const App = "text-center bg-slate-300 mx-auto w-64 capitalize rounded-lg p-1 border border-slate-500 outline outline-slate-400 mt-2";

function CalendarApp() {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  if (day.toLowerCase() === "monday") {
    dayMessage = `happy ${day}`;
  } else if (day.toLowerCase() === "tuesday") {
    dayMessage = `${day}, four days to go`;
  } else if (day.toLowerCase() === "wednesday") {
    dayMessage = `${day}, half way there`;
  } else if (day.toLowerCase() === "thursday") {
    dayMessage = `${day}, start planning the weekend;`;
  } else if (day.toLowerCase() === "friday") {
    dayMessage = `woo - hoo, the weekend is coming!`;
  } else {
    dayMessage = "stay calm and keep having fun";
  }
  return (
    <div className={App}>
      <h1>{dayMessage}</h1>
      {morning ? <h2>Have you had breakfast yet?</h2> : ""}
    </div>
  );
}

export default CalendarApp;
