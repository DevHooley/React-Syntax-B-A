import React from "react";
import Park from "../../assets/Images/central-park.jpg";

function ParkApp() {
  const randomImageUrl =
    "https://images.adsttc.com/media/images/5bc8/ad3b/f197/cc6b/2200/03c9/slideshow/06_Alternative-Central-Park-6.jpg?1539878195";
  return (
    <>
      <h1>Task: add three images with some styling</h1>
      <div className="grid grid-cols-2">
        <img
          className="h-[200px] mx-auto border-2 border-blue-400"
          src={Park}
          alt="Photo of central park"
        />
        {/* only works in loading from Node.js */}
        {/* <img
        className="h-[200px] mx-auto"
        src={require("../../../public/images/central-park copy.jpg")}
        alt="Photo of central park"
      /> */}
        <img
          className="h-[200px] mx-auto border-2 border-blue-400"
          src={randomImageUrl}
          alt="An image of central park"
        />
      </div>
    </>
  );
}

export default ParkApp;
