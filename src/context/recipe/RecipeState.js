import React, { useReducer } from "react";
import RecipeContext from "./recipeContext";
import RecipeReducer from "./recipeReducer";
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

const RecipeState = props => {
  const initialState = {
    recipes: [
      {
        Id: 1,
        Name: "Omlette",
        Instructions: "Beg gf to make it ",
        Image:
          "https://www.seriouseats.com/2019/02/20190122-souffle-omelet-vicky-wasik-15.jpg"
      },
      {
        Id: 2,
        Name: "Coffee",
        Instructions: "Act like a spoiled brat and order from Starbucks",
        Image:
          "https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
      }
    ],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  // Search

  // const searchUsers = async text => {
  //   setLoading();

  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  //   );

  //   dispatch({
  //     type: SEARCH_RECIPES,
  //     payload: res.data.items
  //   });
  // };
  // const getUser = async username => {
  //   setLoading();

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
  //   );

  //   dispatch({
  //     type: GET_RECIPE,
  //     payload: res.data
  //   });
  // };
  // const getUserRepos = async username => {
  //   //this.setState({ loading: true });
  //   setLoading();
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  //   );

  //   dispatch({
  //     type: GET_REPOS,
  //     payload: res.data
  //   });
  // };
  // const CLEAR_RECIPES = () => dispatch({ type: CLEAR_RECIPES });

  const getRecipes = async => {
    //this.setState({ loading: true });
    //  setLoading();
    // const res = await axios.get(
    //   `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    // );

    dispatch({
      type: GET_RECIPES
    });
  };
  console.log(state.recipes);
  // const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <RecipeContext.Provider
      value={{
        //   users: state.users,
        //   user: state.user,
        //   repos: state.repos,
        //   loading: state.loading,
        //   searchUsers,
        //   getUser,
        //   getUserRepos
        recipes: state.recipes,
        getRecipes
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
export default RecipeState;
