import { RECIPE_LIST_RECIEVED, SINGLE_RECIPE_RECIVED } from "./recipe.actions";

const initialState = {
  recipeList: [],
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_LIST_RECIEVED: {
      return {
        ...state,
        recipeList: action.payload.recipeList,
      };
    }
    case SINGLE_RECIPE_RECIVED: {
      return {
        ...state,
        currentRecipe: action.payload.curentRecipe,
      };
    }

    default:
      return state;
  }
};
