import { create } from 'zustand'
import { findRecipes, findRecipeById } from '../src/app/actions/recipes'
import { Recipe } from '@prisma/client'

export type Comment = {
    id?:            string
    comment:       string
    userId:        string
    recipeId:      string
    recipe:    Recipe 
}
interface RecipeState {
    recipe: Partial<Recipe>
    recipes: Recipe[]
    getRecipe: (recipeId: string) => void
    deleteRecipe: (recipeId: string) => void
    getRecipes: () => void
}

const useRecipeStore = create<RecipeState>()((set, get) => ({
    recipe: {},
    recipes: [],
    getRecipe: (recipeId: string) => {
        findRecipeById(recipeId).then((data) => {
            set({recipe: {...data}})
        })
    },
    deleteRecipe: (recipeId: string) => {
        const recipes = get().recipes.filter((recipe) => recipe.id != recipeId)
        set({recipes: [...recipes]})
    },
    getRecipes: () => {
        findRecipes().then((data) => {
            set({recipes: [...data]})
        })
    },
}))


export default useRecipeStore