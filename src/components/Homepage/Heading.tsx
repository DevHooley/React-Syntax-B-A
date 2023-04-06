import React from "react";

function Heading(props: any) {
  return (
    <div className="p-2 ">
      <h3 className="shadow-lg text-6xl text-yellow-300 bg-red-300 font-semibold border-2 border-red-500  rounded-md capitalize mx-auto w-4/6 text-center pb-2">
        {props.message}
      </h3>
    </div>
  );
}

export default Heading;
 