import React, { useContext, Fragment } from "react";
import RecipeContext from "../../context/recipe/recipeContext";
import RecipeViewModel from "../recipeViewModel/index";
const Recipes = () => {
  const recipeContext = useContext(RecipeContext);
  const { recipes } = recipeContext;
  return (
    <Fragment>
      <div style={userStyle}>
        {recipes.map(recipe => (
          <RecipeViewModel key={recipe.Id} recipe={recipe} />
        ))}
      </div>
    </Fragment>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
  //width: "18rem"
};

export default Recipes;
