import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipe";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("egg");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "154874fb";
  const APP_KEY = "4a3334396a463801066185075025e137";

  useEffect(() => {
  getrecipes();
  });
  
     const onInputChange = e => {
      setSerach(e.target.value);
    };
    console.log(search);
  const getrecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onSearchClick = () => {
    getrecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
