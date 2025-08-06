import { useEffect, useState } from "react";
import { getRecipe } from "../api/recipe";
import type { Recipe } from "../types/Recipe";
import {SearchBar} from "../components/SearchBar";
import {Menu} from "../components/menu";
import {Text} from "../components/text";
import {RecipeReviewCard} from "../components/RecipeReviewCard";
import Reload from "../components/Reload";
import { Alert } from "@mui/material";

  
export function RecipePage() {
  const [recipes, setRecipe] = useState<Recipe[]>([]);
  const [cargando, setCargando] = useState(true);
  const [searchFoot, setSearchFoot] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const filtered = recipes.filter(u => u.name.toLowerCase().includes(searchFoot.toLowerCase()) ||
                                  u.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchFoot.toLowerCase())));
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<number>(0);

  useEffect(() => {
    getRecipe()
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err))
      .finally(() => setCargando(false));
  }, []);

  const handleSearch = (search : string) => {
    setSearchFoot(search);
    
    setFilteredRecipes(filtered);
    console.log(filtered);
  };

  const showHTMLRecipe = searchFoot ?  filteredRecipes :  recipes;

  if (cargando) return (
    <div className="bg-[#ff892f] min-h-[1000px] flex justify-center items-center">
      <Reload/>
    </div>
  );

  

  if(opcionSeleccionada === 1){
    return (
      <div className="bg-[#ff892f] h-auto min-h-[1100px] pb-15">

        <Text content={"¿Que cocinamos hoy?"}></Text>
        <div className="p-2">
          <SearchBar onSearch={handleSearch}></SearchBar>
        </div>

        {favoriteRecipes.map((recipe , index) => (
          <RecipeReviewCard key={index} recipe={recipe} setFavoriteRecipes={setFavoriteRecipes} />
        ))}

        <Menu opcionSeleccionada={opcionSeleccionada} setOpcionSeleccionada={setOpcionSeleccionada}/>

      </div>
    )
  }

  return (
    <div className="bg-[#ff892f] h-auto min-h-[1100px] pb-15">
    
      <Text content={"¿Que cocinamos hoy?"}></Text>
      <div className="p-2">
        <SearchBar onSearch={handleSearch}></SearchBar>
      </div>

      {(filtered.length === 0 ? (
        <div className="m-3">
            <Alert severity="warning" variant="filled">
              No se encontró ningún plato en la base de datos con ese nombre.
            </Alert>
        </div>

      ) : (

        <div className="grid justify-center">
          {showHTMLRecipe.map((recipe , index) => (
            <RecipeReviewCard key={index} recipe={recipe} setFavoriteRecipes={setFavoriteRecipes} />
          ))}
        </div>

      ))}
      
      <Menu opcionSeleccionada={opcionSeleccionada} setOpcionSeleccionada={setOpcionSeleccionada}/>

    </div>
  );
}
