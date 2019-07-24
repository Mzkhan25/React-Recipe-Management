import {
  SEARCH_RECIPES,
  GET_RECIPE,
  GET_RECIPES,
  CLEAR_RECIPES,
  ADD_RECIPES,
  ADD_INGREDIENTS,
  GET_INGREDIENTS,
  GET_RECIPE_INGREDIENTS
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: state.recipes
      };

    default:
      return state;
  }
};
