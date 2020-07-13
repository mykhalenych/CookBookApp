import React from "react";
import Recipe from "./components/Recipe";
import SingleRecipe from "./components/SingleRecipe";

const routes = [
  {
    path: "/:id",
    component: <SingleRecipe />,
    exact: true,
  },
  {
    path: "/",
    component: <Recipe />,
    exact: true,
  },
];

export default routes;
