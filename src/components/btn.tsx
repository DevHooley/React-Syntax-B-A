const btn =
  "w-32 border-2 border-sky-500 bg-sky-200 rounded-md hover:text-white hover:bg-sky-600 hover:border-sky-800 active:bg-sky-200 active:text-black active:border-sky-500";

function Btn() {
  const clickHandler = () => console.log("clicked");
  return (
    <button className={btn} onClick={clickHandler}>
      Click me
    </button>
  );
}

export default Btn;
