import React from "react";
import cat from "../../assets/Images/cat.jpeg";

const Cat = "h-32 mx-auto border-2 border-yellow-200 rounded-md ";

function Cats() {
  return (
    <div>
      <img src={cat} className={Cat} alt="A picture of a cat" />
    </div>
  );
}

export default Cats;
