const baseUrl = `https://5eca820038df9600165117b6.mockapi.io/mock`;

export const createRecipe = (recipeData) => {
  try {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(recipeData),
    });
  } catch {
    throw new Error("Faild to create recipe");
  }
};

export const fetchRecipeList = () => {
  return fetch(baseUrl)
    .then((res) => {
      try {
        return res.json();
      } catch {
        throw new Error("Faild to get recipes");
      }
    })
    .then((recipesList) => recipesList);
};

export const updateRecipe = (recipeId, recipeData) => {
  try {
    return fetch(`${baseUrl}/${recipeId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(recipeData),
    });
  } catch {
    throw new Error("Faild to create recipe");
  }
};

export const deleteRecipe = (id) => {
  try {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
  } catch {
    throw new Error("Faild to create recipe");
  }
};

