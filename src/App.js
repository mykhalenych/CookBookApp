import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Recipe from "./components/Recipe";
import { recipeListSelector } from "./redux/recipe.selectors";
import * as actions from "./redux/recipe.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const App = ({
  recipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeList,
}) => {
  useEffect(() => {
    getRecipeList();
  }, []);

  return (
    <div className="App">
      <Header onCreate={createRecipe} />
      <main>
        <Main />
        <Recipe recipe={recipe} onEdit={updateRecipe} onDelete={deleteRecipe} />
      </main>
    </div>
  );
};

App.propTypes = {
  getRecipeList: PropTypes.func.isRequired,
  recipe: PropTypes.array,
  createRecipe: PropTypes.func,
  deleteRecipe: PropTypes.func,
  updateRecipe: PropTypes.func,
};
const mapDispatch = {
  getRecipeList: actions.getRecipeList,
  updateRecipe: actions.updateRecipe,
  deleteRecipe: actions.deleteRecipe,
  createRecipe: actions.createRecipe,
};
const mapState = (state) => {
  return {
    recipe: recipeListSelector(state),
  };
};
export default connect(mapState, mapDispatch)(App);
