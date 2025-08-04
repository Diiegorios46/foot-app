import type { Recipe } from "../types/Recipe";

export async function getRecipe(): Promise<Recipe[]> {
    const res = await fetch ("https://688fd108944bf437b59425eb.mockapi.io/api/comidas/receta");
    if(!res.ok) throw new Error("Error al obtener la receta");
    return await res.json();
}