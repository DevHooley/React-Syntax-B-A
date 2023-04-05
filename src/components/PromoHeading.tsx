const classes =
  "text-center bg-red-200 w-64 mt-4 shadow-lg border-2 border-red-800 mx-auto rounded p-2 text-2xl text-red-800";

function PromoHeading(props: any) {
  return (
    <div className="flex">
      <h1 className={classes}>{props.heading}</h1>
      <h2 className={classes}>{props.callToAction}</h2>
    </div>
  );
}

export default PromoHeading;
