import { useEffect, useState } from "react";
import { getRecipe } from "../api/recipe";
import type { Recipe } from "../types/Recipe";
import {SearchBar} from "../components/SearchBar";
import {Menu} from "../components/Menu";
import {Text} from "../components/Text";
import {RecipeReviewCard} from "../components/RecipeReviewCard";
import Reload from "../components/Reload";


export function RecipePage() {
  const [recipes, setRecipe] = useState<Recipe[]>([]);
  const [cargando, setCargando] = useState(true);
  const [searchFoot, setSearchFoot] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  
  useEffect(() => {
    getRecipe()
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err))
      .finally(() => setCargando(false));
  }, []);
  
  const handleSearch = (search : string) => {
    setSearchFoot(search);
    const filtered = recipes.filter(u => u.name.toLowerCase().includes(searchFoot.toLowerCase()) ||
    u.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchFoot.toLowerCase())));
    
    setFilteredRecipes(filtered);
    console.log(filtered);
  };

  const showHTMLRecipe = searchFoot ?  filteredRecipes :  recipes;


  if (cargando) return (
    <div className="bg-[#ff892f] min-h-[1000px] flex justify-center items-center">
      <Reload/>
    </div>
  );
 
  return (
    <div className="bg-[#ff892f] min-h-[1000px]">
    
      <Text content={"¿Que cocinamos hoy?"}></Text>
      <div className="p-2">
        <SearchBar onSearch={handleSearch}></SearchBar>
      </div>

      {showHTMLRecipe.map((recipe) => (
        <RecipeReviewCard key={recipe.id} recipe={recipe} />
      ))}

      <Menu/>

    </div>
  );
}
