import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "5d8421d079444fada256ff904d9477c1";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image}></img>
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕰️{food.readyInMinutes} Minutes</strong>
          </span>

          <span>
            <b> {food.vegetarian ? "🥕 Veg" : "🥩Non-Veg"}</b>
          </span>

          <span>
            👨‍👩‍👧‍👦 Serves <b> {food.servings} </b> People
          </span>
          <span>{food.vegan ? "🐮 Vegan" : ""}</span>
        </div>
        <div>
          <span>💲 {(food.pricePerServing / 100).toFixed(2)} Per Serving</span>
        </div>{" "}
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {" "}
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
