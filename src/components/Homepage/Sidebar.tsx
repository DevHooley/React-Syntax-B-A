const sidebar = "rounded-r-md bg-pink-300 font-semibold w-auto p-2 text-center";
function Sidebar(props: any) {
  return <h2 className={sidebar}>{props.greet}, from Sidebar</h2>;
}
export default Sidebar;
