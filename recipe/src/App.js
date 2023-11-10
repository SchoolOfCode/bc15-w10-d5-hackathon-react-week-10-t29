import logo from "./logo.svg";
import "./App.css";
import AddButton from "./AddButton.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import MenuBar from "./MenuBar.js";
import { useState } from "react";

import defaultRecipes from "./recipes.json";

function App() {
  //sets an initial state and an ability to change the state
  const [recipelist, setRecipelist] = useState(defaultRecipes);
  //console.log(recipelist);

  function deleteRecipe(idToDelete){
    console.log(idToDelete)
    const updatedRecipes = recipelist.filter((recipelist) => 
      recipelist.id !== idToDelete
      
    );
    console.log(updatedRecipes);
    setRecipelist(updatedRecipes)
  }

  return (
    <>
      <Header />
      <MenuBar recipelist={recipelist} deleteRecipe={deleteRecipe} />
      <Main />
      <AddButton />
      <Footer />
    </>
  );
}

export default App;
