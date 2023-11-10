import { useState } from "react";


export default function Form({createNewRecipe}) {
  const [id, setId] = useState(6);
  const [newIngredients, setNewIngredients] = useState("");
  const [newInstructions, setNewInstructions] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newName, setNewName] = useState("");

  function handleIngredients(e) {
    setNewIngredients(e.target.value)
  }

    function handleInstructions(e) {
    setNewInstructions(e.target.value)
  }

  function handleCategory(e) {
    setNewCategory(e.target.value)
  }

function handleName(e) {
    setNewName(e.target.value)
  }


  function handleClickAdd(e) {
    e.preventDefault()
    const newRecipe = {
      id: id,
      name:newName,
   category:newCategory,
  ingredients:newIngredients,
  instructions:newInstructions,
    }
    
    createNewRecipe(newRecipe)
    setNewCategory("")
    setNewIngredients("")
    setNewInstructions("")
    setNewName("")

setId((prevId) => prevId + 1);
  }
  

  return (
  <div>
      <form onSubmit={handleClickAdd}>
        <label for ="Name">Name:</label>
        <input type="text" value={newName} onChange={handleName} />
      <label for ="Ingredients">Ingredients:</label>
        <input type="text" value={newIngredients} onChange={handleIngredients} />
      <label for ="Instructions">Instructions:</label>
        <input type="text" value={newInstructions} onChange={handleInstructions} />
        <label for ="Category">Category:</label>
        <input type="text" value={newCategory} onChange={handleCategory} />
        <button type="submit">Add</button>
  </form>
  </div >
    );
}

//
//