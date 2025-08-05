import { useEffect, useState } from "react";
import { getRecipe } from "../api/recipe";
import type { Recipe } from "../types/Recipe";
import {SearchBar} from "../components/SearchBar";
import {Menu} from "../components/menu";
import {RecipeReviewCard} from "../components/RecipeReviewCard";
import {Text} from "../components/text";
import Reload from "../components/Reload";


export function RecipePage() {
  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const [cargando, setCargando] = useState(true);
  const [searchFoot, setSearchFoot] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  const handleSearch = (search : string) => {
    setSearchFoot(search);
    const filtered = recipe.filter(u => u.name.toLowerCase().includes(searchFoot.toLowerCase()) ||
    u.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchFoot.toLowerCase())));
    
    setFilteredRecipes(filtered);
    console.log(filtered);
  };

  useEffect(() => {
    getRecipe()
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return (
    <div className="bg-[#ff892f] min-h-[1000px] flex justify-center items-center">
      <Reload></Reload>
    </div>
  );
 
  return (
    <div className="bg-[#ff892f] min-h-[1000px]">
    
      <Text content={"¿Que cocinamos hoy?"}></Text>
      <div className="p-2">
        <SearchBar onSearch={handleSearch}></SearchBar>
      </div>
        {searchFoot ? (
          filteredRecipes.map((u , index) => (
            <RecipeReviewCard key={index} recipe={u}></RecipeReviewCard>
          ))
        ) : (
          recipe.map((u , index) => (
            <RecipeReviewCard  key={index} recipe={u}></RecipeReviewCard>
          )))
        }

        <Menu></Menu>
    </div>
  );
}
