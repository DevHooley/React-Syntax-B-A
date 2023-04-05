import React from "react";

function Stateful() {
  const [greet, setGreet] = React.useState("Hello World");

  return (
    <div>
      <h1>A state value: {greet}</h1>
    </div>
  );
}

export default Stateful;
 