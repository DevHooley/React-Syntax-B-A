import MealsProvider from "../Providers/MealsProvider";
import MealsList from "./MealsList";
import Counter from "./Counter";

function HealthyEating() {
  return (
    <div className="h-64 bg-slate text-red-500">
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default HealthyEating;
