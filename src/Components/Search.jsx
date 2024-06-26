import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5d8421d079444fada256ff904d9477c1";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  //   syntax of a useEffect hook
  useEffect(() => {
    // function demo() {
    //   console.log("demo function excuted");
    // }
    // demo();
    async function fetchFood() {
      if (query == "") return;
      const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
