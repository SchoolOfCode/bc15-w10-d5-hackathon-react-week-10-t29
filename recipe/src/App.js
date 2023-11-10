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
  return (
    <>
      <Header />
      <MenuBar />
      <Main />
      <AddButton />
      <Footer />
    </>
  );
}

export default App;
