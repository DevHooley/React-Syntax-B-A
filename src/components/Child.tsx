import React from "react";

const time = "text-slate-700 text-center mx-auto bg-red-300 w-32 rounded-md border border-slate-700 mt-2 p-1";

function Child(props: any) {
  return (
    <div>
      <h1 className={time}>{props.message}</h1>
    </div>
  );
}

export default Child;
