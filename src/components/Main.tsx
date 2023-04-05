const main = "rounded-l-md bg-yellow-300 font-semibold w-auto p-2 text-center";

function Main(props: any) {
  return (
    <>
      <h2 className={main}>{props.greet} , from Main</h2>
    </>
  );
}
export default Main;
