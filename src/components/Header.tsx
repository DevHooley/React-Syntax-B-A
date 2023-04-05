import Promo from "./Promo";

const header = "text-center text-2xl  capitalize text-lg p-2 font-semibold";
function Header(props: any) {
  console.log(props);
  return (
    <>
    <Promo />
    <h2 className={header}>
      "hello there indeed, {props.name},{props.color}"
    </h2>
    </>
  );
}

export default Header;
