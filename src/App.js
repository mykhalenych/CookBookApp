import React from "react";
import Header from "./components/Header";
import * as actions from "./redux/recipe.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const App = ({ createRecipe }) => {
  return (
    <div className="App">
      <Header onCreate={createRecipe} />
      <main>
        <Switch>
          {routes.map((route) => (
            <Route exact={route.exact} key={route.toString()} path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </main>
    </div>
  );
};

App.propTypes = {
  createRecipe: PropTypes.func,
};
const mapDispatch = {
  createRecipe: actions.createRecipe,
};

export default connect(null, mapDispatch)(App);
