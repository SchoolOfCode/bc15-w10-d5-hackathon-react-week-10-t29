import Ingredients from "./Ingredients";

export default function RecipeName({
  recipelist,
  deleteRecipe,
  displayRecipe,
}) {
  //  function handleDelete(e) {
  //   e.preventDefault()
  //  }

  return (
    <div className="individualRecipe">
      <p onClick={() => displayRecipe(recipelist.id)}>{recipelist.name}</p>
      <button onClick={() => deleteRecipe(recipelist.id)}>X</button>
    </div>
  );
}
