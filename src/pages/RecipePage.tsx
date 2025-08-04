import { useEffect, useState } from "react";
import { getRecipe } from "../api/recipe";
import type { Recipe } from "../types/Recipe";
// import { RecipeItem } from "../components/RecipeItem";
import {SearchBar} from "../components/SearchBar";
import {Menu} from "../components/menu";
import {RecipeReviewCard} from "../components/RecipeReviewCard";
import { Description } from "@mui/icons-material";


export function RecipePage() {
  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const [cargando, setCargando] = useState(true);

  const handleSearch = (query: string) => {
    console.log("Buscando:", query);
  };

  useEffect(() => {
    getRecipe()
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <div className="bg-[#ff892f] h-screen">
      <h1 className="text-white text-2xl p-4 pt-10">Que vamos a cocinar hoy?</h1>
      <div className="p-2">
        <SearchBar onSearch={handleSearch}></SearchBar>
      </div>
        {recipe.map((u) => (
          <RecipeReviewCard  key={u.id}  recipe={u}></RecipeReviewCard>
        ))}
        <Menu></Menu>
    </div>
  );
}
