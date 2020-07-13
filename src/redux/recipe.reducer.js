import { RECIPE_LIST_RECIEVED } from "./recipe.actions";

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
    default:
      return state;
  }
};
