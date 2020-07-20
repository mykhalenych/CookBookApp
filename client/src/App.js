import React, { useEffect } from "react";
import Header from "./components/Header";
import * as actions from "./redux/recipe.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Recipe from "./components/Recipe";
import SingleRecipe from "./components/SingleRecipe";
import { fetchRecipes } from "./redux2/actions";
import {setUserAuth} from './redux2/actions'

const App = ({ createRecipe, setUserAuth, token }) => {
  // useEffect(() => {
  //   fetchRecipes();
  //   console.log(recipes)
  // }, []);
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("cookBookUserData"));
    if (userData && userData.token) {
      setUserAuth({
        login: userData.login,
        id: userData.userId,
        isAuthenticated: true,
        token: userData.token,
      });
    }
  }, [token, setUserAuth]);
  return (
    <div className="App">
      <Header onCreate={createRecipe} />
      <main>
        <Switch>
          <Route path="/recipes" exact component={Recipe} /> 
          <Route path="/recipes/:id" component={SingleRecipe} exact />
        </Switch>
        {/* <Switch>
          {routes.map((route) => (
            <Route exact={route.exact} key={route.toString()} path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch> */}
      </main>
    </div>
  );
};

// App.propTypes = {
//   createRecipe: PropTypes.func,
// };
// const mapDispatch = {
//   createRecipe: actions.createRecipe,
//   fetchRecipes: fetchRecipes,
// };
// function mapState(state) {
//   return {
//     recipes: state.recipe.recipes,
//   };
// }

// export default connect(mapState, mapDispatch)(App);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
  };
}

export default connect(mapStateToProps, { setUserAuth })(App);
