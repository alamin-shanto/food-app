import styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={
              `https://api.spoonacular.com/cdn/ingredients_100*100` + item.image
            }
          ></img>{" "}
          {/* <img
              src={`https://api.spoonacular.com/recipes/${foodId}/ingredientWidget.png`}
            ></img> */}
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount}
            {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
