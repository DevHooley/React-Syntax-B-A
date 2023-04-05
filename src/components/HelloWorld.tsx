import Logo from "./Logo";
import Btn from "./btn";

const container = "text-center";
const helloworld = "text-center text-2xl  capitalize p-2 font-semibold";

function HelloWorld() {
  return (
    <div className={container}>
      <h1 className={helloworld}>hello world!</h1>
      <Logo />
      <Btn />
    </div>
  );
}

export default HelloWorld;
