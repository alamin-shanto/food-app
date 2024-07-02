import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "5d8421d079444fada256ff904d9477c1";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image}></img>
      </div>
      <span>
        <strong>🕰️{food.readyInMinutes} Minutes</strong>
      </span>
      <br></br>
      <span>
        {" "}
        <b> {food.vegetarian ? "🥕 Veg" : "🥩Non-Veg"}</b>
      </span>
      <br></br>
      <span>
        👨‍👩‍👧‍👦 <b>Serves {food.servings} </b> People
      </span>
      <span></span>

      <h1>
        {" "}
        {/* Food Details {foodId}
        {food.title}
        <img src={food.image}></img> */}
      </h1>
    </div>
  );
}
