import logo from "./logo.svg";
import "./App.css";
import Form from "./Form.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import MenuBar from "./MenuBar.js";
import { useState } from "react";

import defaultRecipes from "./recipes.json";

function App() {
  //sets an initial state and an ability to change the state
  const [recipelist, setRecipelist] = useState(defaultRecipes);
  const [showRecipe, setShowRecipe] = useState("");
  // const [ingredientsPage, setIngredientsPage] = useState("ingredients");

  //console.log(recipelist);

  function deleteRecipe(idToDelete) {
    console.log(idToDelete);
    const updatedRecipes = recipelist.filter(
      (recipelist) => recipelist.id !== idToDelete
    );
    console.log(updatedRecipes);
    setRecipelist(updatedRecipes);
  }

  function displayRecipe(idToShow) {
    console.log(idToShow);
    const recipeToDisplay = recipelist.filter(
      (recipelist) => recipelist.id === idToShow
    );
    console.log(recipeToDisplay);
    setShowRecipe(recipeToDisplay[0]);
  }

  function createNewRecipe(newRecipe) {
    setRecipelist((previousrecipelist) => [...previousrecipelist, newRecipe])
  }

  return (
    <>
      <Header />
      <MenuBar
        recipelist={recipelist}
        deleteRecipe={deleteRecipe}
        displayRecipe={displayRecipe}
      />
      <Main recipelist={recipelist} showRecipe={showRecipe} />
      <Form createNewRecipe={createNewRecipe} />
      <Footer />
    </>
  );
}

export default App;
