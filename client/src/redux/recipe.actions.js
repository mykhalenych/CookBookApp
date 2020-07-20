import * as recipesGateway from "../gateway/gateway";

export const RECIPE_LIST_RECIEVED = "RECIPE_LIST_RECIEVED";
export const SINGLE_RECIPE_RECIVED = "SINGLE_RECIPE_RECIVED";

export const recipeListRecieved = (recipeList) => {
  return {
    type: RECIPE_LIST_RECIEVED,
    payload: {
      recipeList,
    },
  };
};
export const singleRecipeRecived = (curentRecipe) => {
  return {
    type: SINGLE_RECIPE_RECIVED,
    payload: {
      curentRecipe,
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
export const getReicepeListById = (id) => {
  return function (dispatch) {
    recipesGateway
      .fetchRecipeListById(id)
      .then((curentRecipe) => dispatch(singleRecipeRecived(curentRecipe)));
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

export const editHistory = (recipeId) => {
  return function (dispatch, getState) {
    const history = getState();
    const historyVersion = history.recipe.currentRecipe;
    const updatedRecipe = {
      historyVersion,
      createAt: new Date().toISOString(),
    };

    recipesGateway
      .updateRecipe(recipeId, updatedRecipe)
      .then(() => dispatch(getRecipeList()));
  };
};
