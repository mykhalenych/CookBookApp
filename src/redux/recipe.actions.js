import * as recipesGateway from "../gateway/gateway";

export const RECIPE_LIST_RECIEVED = "RECIPE_LIST_RECIEVED";

export const recipeListRecieved = (recipeList) => {
  return {
    type: RECIPE_LIST_RECIEVED,
    payload: {
      recipeList,
    },
  };
};

export const getRecipeList = () => {
  return function (dispatch) {
    recipesGateway
      .fetchRecipeList()
      .then((recipeList) => dispatch(recipeListRecieved(recipeList)));
  };
};

export const updateRecipe = (recipeId, editRecipe) => {
  return function (dispatch) {
    recipesGateway
      .updateRecipe(recipeId, editRecipe)
      .then(() => dispatch(getRecipeList()));
  };
};

export const deleteRecipe = (recipeId) => {
  return function (dispatch) {
    recipesGateway.deleteRecipe(recipeId).then(() => dispatch(getRecipeList()));
  };
};

export const createRecipe = (title, description, image) => {
  return function (dispatch) {
    const newrecipe = {
      title,
      description,
      image,
      createAt: new Date().toISOString(),
    };
    recipesGateway
      .createRecipe(newrecipe)
      .then(() => dispatch(getRecipeList()));
  };
};
