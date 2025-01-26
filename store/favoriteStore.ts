import { create } from 'zustand'
import { Rating } from '@prisma/client'

import { updateRecipeToFavorite, findUserFavoriteRecipes } from '../src/app/actions/users'

interface UserFavoriteRecipeState {
  items: Rating[],
  updateFavorites: (recipeId: string) => void
  getFavorites: () => void
}

const useFavoriteStore = create<UserFavoriteRecipeState>((set, get) => ({
    items: [],
    updateFavorites: (recipeId: string) => {
        const ratingList = get().items;        
        const ratingExisted: Rating = ratingList.find((rating) => rating.recipeId == recipeId)
        if (ratingExisted) {
            // Remove rating from user.ratings
            updateRecipeToFavorite(recipeId, false).then((data) => {
                ratingList.filter(rating => rating.recipeId == recipeId)
                set({items: [...ratingList,]})
            })
        } else {
            // Add rating in user.ratings
            updateRecipeToFavorite(recipeId, true).then((data) => {
                set({items: [...ratingList, data]})
            })
        }
        
    },
    getFavorites: () => {
        findUserFavoriteRecipes().then((data) => {
            set({items: [...data]})
        })
    },
}))

export default useFavoriteStore