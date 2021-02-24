import "./NewRecipe.html";
import { Recipes } from "../../api/api.js";

Template.NewRecipe.helpers({
  getRecipesCollection() {
    return Recipes;
  },
});
