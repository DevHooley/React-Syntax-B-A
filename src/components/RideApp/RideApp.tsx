import { useReducer } from "react";

const Btn =
  "w-32 border border-sky-600 rounded-md  text-white bg-sky-200 p-1  m-2";
const Wallet = "text-2xl mx-auto";
const Card = "text-center mx-auto ";
 
const reducer = (state: any, action: any) => {
  if (action.type === "ride") return { money: state.money + 10 };
  if (action.type === "fuel") return { money: state.money - 50 };
  return new Error();
};

function RideApp() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={Card}>
      <h1 className={Wallet}>Wallet: {state.money}</h1>
      <div>
        <button className={Btn} onClick={() => dispatch({ type: "ride" })}>
          A new customer
        </button>
        <button className={Btn} onClick={() => dispatch({ type: "fuel" })}>
          Refill the tank!
        </button>
      </div>
    </div>
  );
}

export default RideApp;
