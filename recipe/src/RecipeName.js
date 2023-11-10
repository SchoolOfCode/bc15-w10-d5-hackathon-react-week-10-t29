export default function RecipeName({ recipelist, deleteRecipe }) {
  
//  function handleDelete(e) {
//   e.preventDefault()
//  }
  
  return (
    <div className="individualRecipe">
      <p>{recipelist.name}</p>
      <button onClick={() => deleteRecipe(recipelist.id)}>X</button>

    </div>
  );
}
