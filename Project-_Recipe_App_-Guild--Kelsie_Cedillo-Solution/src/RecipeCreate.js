import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
                placeholder="Photo URL"
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
                rows="3"
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
                placeholder="Preparation"
                rows="3"
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
