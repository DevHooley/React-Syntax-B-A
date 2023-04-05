const [meals, setMeals] = useState(todaysMeals);

export const MealsList = () => {
  const todayMeals = [
    { name: "Baked beans", calories: 200, id: 12345 },
    { name: "Grilled Veggies", calories: 88, id: 23456 },
    { name: "Soup", calories: 100, id: 34567 },
  ];
};

export default MealsList;
