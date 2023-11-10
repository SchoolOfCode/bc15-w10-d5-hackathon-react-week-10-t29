import Form from "./Form.js";
import Ingredients from "./Ingredients.js";
import Method from "./Method.js";

export default function Main({ recipelist, showRecipe }) {
  return (
    <section>
      <p>{showRecipe.ingredients}</p>
      <p>{showRecipe.instructions}</p>
      {/* {(showRecipe) => (
        <Ingredients
          key={showRecipe.id}
          recipelist={recipelist}
          showRecipe={showRecipe}
        />
      )} */}
    </section>
  );
}
