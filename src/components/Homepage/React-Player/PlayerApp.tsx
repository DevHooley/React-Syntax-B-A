import React from "react";
import ReactPlayer from "react-player";

function PlayerApp() {
  const vidUrl = "https://www.youtube.com/watch?v=bvmibwafGXc";
  return (
    <div>
      <h1>React Player example</h1>
      <div>
        <ReactPlayer url={vidUrl} playing={false} volume={0.5} />
      </div>
    </div>
  );
}

export default PlayerApp;
