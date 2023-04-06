import PromoHeading from "./PromoHeading";

const data = {
  heading: "99% off all items!",
  callToAction: "Everything must go!",
};

function Promo() {
  return (
    <>
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
    </>
  );
}

export default Promo;
