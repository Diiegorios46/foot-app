import type { Recipe } from "../types/Recipe";

interface Props {
  recipe: Recipe;
}

export function RecipeItem({ recipe }: Props) {
  return (
    <li>
      <strong>{recipe.name}</strong> - {recipe.description}
    </li>
  );
}
